import React from "react";
import { FaListUl, FaCalculator, FaStopwatch, FaChess, FaBook, FaLanguage, FaQrcode, FaShoppingCart, FaUserShield } from "react-icons/fa";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <nav className="welcome-nav">
        <div className="welcome-nav-items">
          <p onClick={() => navigate("/todolist")}><span className="nav-icon"><FaListUl /></span> todolist</p>
        </div>
        <div className="welcome-nav-items">
          <p onClick={() => navigate("/calculator")}><span className="nav-icon"><FaCalculator /></span> calculator</p>
        </div>
        <div className="welcome-nav-items">
          <p onClick={() => navigate("/stopWatch")}><span className="nav-icon"><FaStopwatch /></span> stopwatch</p>
        </div>
        <div className="welcome-nav-items">
          <p onClick={() => navigate("/chessGame")}><span className="nav-icon"><FaChess /></span> chess</p>
        </div>
        <div className="welcome-nav-items">
          <p onClick={() => navigate("/dictionary")}><span className="nav-icon"><FaBook /></span> dictionary</p>
        </div>
        <div className="welcome-nav-items">
          <p onClick={() => alert("UNDER MAINTENANCE")}><span className="nav-icon"><FaLanguage /></span> translator</p>
        </div>
        <div className="welcome-nav-items">
          <p onClick={() => navigate("/scancode")}><span className="nav-icon"><FaQrcode /></span> scan code</p>
        </div>
      </nav>

      <main className="welcome-main">
        <h1 className="main-heading">Welcome to Your Productivity Hub</h1>
        <p className="main-subheading">Daily tools and an eCommerce experience – all in one place</p>
        <div className="cards-grid">
          <div className="feature-card">
            <FaShoppingCart className="card-icon" />
            <h3>Shop & Order</h3>
            <p>Browse items and place your orders easily. Enjoy a smooth shopping experience!</p>
          </div>
          <div className="feature-card">
            <FaUserShield className="card-icon" />
            <h3>Admin Control</h3>
            <p>Admins can add, update, or remove items to keep your store fresh and up to date.</p>
          </div>
          <div className="feature-card">
            <FaListUl className="card-icon" />
            <h3>Daily Tools</h3>
            <p>Stay productive with your todo list, calculator, stopwatch, and more at your fingertips.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
