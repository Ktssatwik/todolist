import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaGithub
} from "react-icons/fa";
import "./Register.css";

function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();
    const role = document.getElementById("role").value;

    if (!username || !password || !email || !role) {
      setErrorMessage("⚠️ Please fill all the fields before registering.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        setErrorMessage("");
        navigate("/login");
      } else {
        setErrorMessage(data.message || "❌ Registration failed. Try again.");
      }
    } catch (error) {
      setErrorMessage("❌ Server error. Please try later.");
      console.error("Register error:", error);
    }
  };

  const togglePassword = () => setPasswordVisible((prev) => !prev);
  const goToLogin = () => navigate("/login");

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Create Account</h1>

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <div className="input-wrapper">
            <FaUser className="icon" />
            <input type="text" id="username" placeholder="Choose a username" />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <FaEnvelope className="icon" />
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <FaLock className="icon" />
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Create a password"
            />
            <span onClick={togglePassword} className="toggle-password">
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="role">Role</label>
          <div className="input-wrapper">
            <select id="role" className="role-select">
              <option value="">Select your role</option>
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
              <option value="staff">Staff</option>
            </select>
          </div>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button onClick={handleRegister} className="btn register-btn">Register</button>
        <button onClick={goToLogin} className="btn login-btn">Already have an account?</button>

        <div className="social-divider">or sign up with</div>
        <div className="social-buttons">
          <button className="social-btn google"><FaGoogle className="social-icon" /> Google</button>
          <button className="social-btn facebook"><FaFacebookF className="social-icon" /> Facebook</button>
          <button className="social-btn github"><FaGithub className="social-icon" /> GitHub</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
