const express = require("express");
const router = express.Router();
const db = require("../db");

// Register route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
    console.log("Response Body", req.body)
    
//   try {
//     const [existing] = await db.query("SELECT * FROM users WHERE username = ?", [username]);

//     if (existing.length > 0) {
//       return res.status(400).json({ success: false, message: "Username already exists" });
//     }

//     await db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [
//       username,
//       email,
//       password,
//     ]);

//     res.json({ success: true, message: "User registered successfully" });
//   } catch (err) {
//     console.error("Register Error:", err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }

db.query("SELECT * FROM users WHERE username = ?", [username], (err, result) => {
  if (err) {
    console.error("Register Error Username already exists:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }

  if (result.length > 0) {
    return res.status(400).json({ success: false, message: "Username already exists" });
  }

  db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password], (err2) => {
    if (err2) {
      console.error("Insert Error:", err2);
      return res.status(500).json({ success: false, message: "Server error" });
    }

    res.json({ success: true, message: "User registered successfully" });
  });
});

});

// Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
console.log("requested data", req.body);
console.log(username, password)


  try {
    console.log("hllo")
    const [users] = await db.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    console.log("users", users)
    if (users.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid username or password" });
    }
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }

});

module.exports = router;