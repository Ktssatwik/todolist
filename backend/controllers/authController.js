// controllers/authController.js
const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'accesssecret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'refreshsecret';

// Helpers
const createAccessToken = (user) =>
  jwt.sign({ id: user.id, username: user.username, role: user.role }, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

const createRefreshToken = (user) =>
  jwt.sign({ id: user.id }, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
exports.register = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const existingUser = await db.User.findOne({
      where: {
        [db.Sequelize.Op.or]: [{ email }, { username }],
      },
    });

    // If user exists and was rejected, allow re-apply
    if (existingUser) {
      if (existingUser.status === "rejected") {
        const hashedPassword = await bcrypt.hash(password, 10);
        existingUser.password = hashedPassword;
        existingUser.role = role || "user";
        existingUser.status = "pending";
        await existingUser.save();

        return res
          .status(200)
          .json({ message: "Re-applied successfully. Awaiting admin approval." });
      }

      return res
        .status(400)
        .json({ message: "Username or email already exists." });
    }

    // Create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.User.create({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
      status: "pending",
    });

    res.status(201).json({ message: "User registered. Awaiting admin approval." });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.User.findOne({ where: { username } });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    if (user.status !== "approved") {
      return res.status(403).json({ message: "Your account is pending approval or has been rejected" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user);

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      sameSite: 'Strict',
      maxAge: 15 * 60 * 1000
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
      message: "Login successful",
      user: { id: user.id, username: user.username, role: user.role }
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.json({ message: "Logged out successfully" });
};

exports.refresh = (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.status(401).json({ message: "No refresh token" });

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid refresh token" });

    const newAccessToken = createAccessToken(user);
    res.cookie('accessToken', newAccessToken, {
      httpOnly: true,
      sameSite: 'Strict',
      maxAge: 15 * 60 * 1000
    });
    res.json({ message: "Access token refreshed" });
  });
};

// ========== ADMIN FUNCTIONS ==========

// Get all pending users (for admin)
// Get all pending users
exports.getPendingUsers = async (req, res) => {
  try {
    const pendingUsers = await db.User.findAll({
      where: { status: "pending" },
      attributes: ["id", "username", "email", "role", "status"]
    });
    res.json(pendingUsers);
  } catch (err) {
    console.error("Error fetching pending users:", err);
    res.status(500).json({ message: "Failed to load pending users" });
  }
};

// Approve user by id
exports.approveUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db.User.findByPk(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.status = "approved";
    await user.save();

    res.json({ message: "User approved successfully" });
  } catch (err) {
    console.error("Error approving user:", err);
    res.status(500).json({ message: "Failed to approve user" });
  }
};

// Reject user by id
exports.rejectUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deleted = await db.User.destroy({ where: { id: userId } });

    if (deleted) {
      res.json({ message: "User rejected and deleted successfully." });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (err) {
    console.error("Error rejecting user:", err);
    res.status(500).json({ message: "Server error." });
  }
};
