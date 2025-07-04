import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import "./Login.css";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      setErrorMessage("⚠️ Please fill in both username and password.");
      return;
    }

    // ✅ Frontend only: directly navigate to innerHome
    navigate("/innerHome");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  const togglePassword = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <div className="input-wrapper">
            <FaUser className="icon" />
            <input type="text" name="username" id="username" placeholder="Enter your username" />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <FaLock className="icon" />
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <span onClick={togglePassword} className="toggle-password">
              {passwordVisible ? <FaEyeSl ash /> : <FaEye />}
            </span>
          </div>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button onClick={handleLogin} className="btn login-btn">Login</button>
        <button onClick={goToRegister} className="btn register-btn">Create Account</button>

        <div className="social-divider">or login with</div>

        <div className="social-buttons">
          <button className="social-btn google"><FaGoogle className="social-icon" /> Google</button>
          <button className="social-btn facebook"><FaFacebookF className="social-icon" /> Facebook</button>
          <button className="social-btn github"><FaGithub className="social-icon" /> GitHub</button>
        </div>
      </div>
    </div>
  );
}

export default Login;


// <div className="x">
//   <>FaGoogle</>
//   <p>google</p>
// </div>

// // in css 

// .x{
//   display : flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// }