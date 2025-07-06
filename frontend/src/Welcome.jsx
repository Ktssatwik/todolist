import React from "react";
import { FaListUl, FaCalculator, FaStopwatch, FaChess, FaBook, FaLanguage, FaQrcode } from "react-icons/fa";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const [askAdminPassword, setAskAdminPassword] = React.useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = React.useState("");

  const handleAdminSubmit = () => {
    if (adminPasswordInput === "bablu1103") {
      navigate("/admin");
      setAskAdminPassword(false);
      setAdminPasswordInput("");
    } else {
      alert("Incorrect password! Access denied.");
    }
  };

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
          <p onClick={() => alert("UNDER MAINTANCE")}><span className="nav-icon"><FaLanguage /></span> translator</p>
        </div>
        <div className="welcome-nav-items">
          <p onClick={() => navigate("/scancode")}><span className="nav-icon"><FaQrcode /></span> scan code</p>
        </div>
      </nav>
      <main className="welcome-main">
        <div className="abstract-shape"></div>
        <h1 className="main-heading">WELCOME TO A-Z STORE</h1>
        <p className="main-tagline">Everything you need — beautifully brought together</p>
        <p className="main-slogan">✨ From Essentials to Extras. ✨</p>
        <div className="card-container">
          <div className="welcome-card" onClick={() => setAskAdminPassword(true)}>
            <h2>Admin</h2>
            <p>Manage products, track orders, and keep the store updated effortlessly.</p>
          </div>
          <div className="welcome-card" onClick={() => navigate("/staff")}>
            <h2>Staff</h2>
            <p>Select which products to be added into the cart.</p>
          </div>
          <div className="welcome-card" onClick={() => navigate("/vendor")}>
            <h2>Vendor</h2>
            <p>Sell products to the store.</p>
          </div>
          <div className="welcome-card" onClick={() => navigate("/user")}>
            <h2>User</h2>
            <p>Browse, add to cart, and place orders quickly and securely.</p>
          </div>
        </div>

        {askAdminPassword && (
          <div className="modal-overlay">
            <div className="admin-password-modal">
              <h3>Enter Admin Password</h3>
              <input
                type="password"
                placeholder="Password"
                value={adminPasswordInput}
                onChange={(e) => setAdminPasswordInput(e.target.value)}
              />
              <div className="admin-modal-buttons">
                <button onClick={handleAdminSubmit}>Submit</button>
                <button onClick={() => {
                  setAskAdminPassword(false);
                  setAdminPasswordInput("");
                }}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Welcome;
