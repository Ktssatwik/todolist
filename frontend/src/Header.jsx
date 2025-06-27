import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const goToContact = () => {
    alert("📧 Contact us at: support@todoapp.com");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">📝 To-Do App</div>
      <div className="navbar-links">
        <button onClick={goToContact} className="nav-button">Contact</button>
        <button onClick={handleLogout} className="nav-button logout">Logout</button>
      </div>
    </nav>
  );
}

export default Header;
