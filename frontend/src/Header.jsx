import React, { useRef, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaCog } from "react-icons/fa";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [logout, setLogout] = useState(false);

  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setShowDropdown(false);
        // console.log("cd");
      }
      // setShowDropdown(false);
    };

    // setShowDropdown(false)/;
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  console.log("showDropdown", showDropdown);
  //console.log("clicked outside", dropDownRef.current, event.target);

  const handleToggleDropdown = () => {
    setShowDropdown(true);
  };
  const handleChangePWModal = () => {
    setChangePassword(true);
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <div
        className="navbar-brand"
        onClick={() => navigate("/innerHome")}
        style={{ cursor: "pointer" }}
      >
        🌱 TaskHub+
      </div>
      <div
        className="settings"
        onClick={handleToggleDropdown}
        ref={dropDownRef}
      >
        <FaCog className="settings-icon" />
        {showDropdown && (
          <div className="dropdown-menu">
            <div
              className="insideToggle"
              onClick={() => {
                alert("Please dial 9177578440 for anything.");
              }}
            >
              Contact
            </div>
            <div
              className="insideToggle"
              onClick={() => {
                setChangePassword(true);
              }}
              // onClick={handleChangePWModal}
            >
              Change Password
            </div>
            <div
              className="insideToggle"
              onClick={() => {
                setLogout(true);
                setShowDropdown(false);
              }}
            >
              Logout
            </div>
          </div>
        )}
        {logout && (
          <div className="modal-overlay">
            <div className="logout-modal">
              <h2 className="logout-heading">LOGOUT</h2>
              <p className="logout-message">Are you sure you want to logout?</p>
              <div className="logout-buttons">
                <button
                  className="logout-confirm-button"
                  onClick={() => {
                    // alert("You have been logged out successfully!");
                    setLogout(false);
                    setShowDropdown(false);
                    navigate("/login");
                  }}
                >
                  YES
                </button>
                <button
                  className="logout-cancel-button"
                  onClick={() => {
                    setLogout(false);
                    setShowDropdown(false);
                  }}
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        )}
        {changePassword && (
          <div className="modal-overlay">
            <div className="change-password">
              <h2 className="change-password-heading">CHANGE PASSWORD</h2>
              <div className="change-password-form">
                <div className="change-password-inputs">
                  <label
                    htmlFor="current-password"
                    className="change-password-labels"
                  >
                    CURRENT PASSWORD
                  </label>
                  <input
                    type="password"
                    id="current-password"
                    placeholder="Enter current password"
                    className="change-password-boxes"
                  />
                </div>
                <div className="change-password-inputs">
                  <label
                    htmlFor="new-password"
                    className="change-password-labels"
                  >
                    NEW PASSWORD
                  </label>
                  <input
                    type="password"
                    id="new-password"
                    placeholder="Enter new password"
                    className="change-password-boxes"
                  />
                </div>
                <div className="change-password-inputs">
                  <label
                    htmlFor="confirm-password"
                    className="change-password-labels"
                  >
                    CONFIRM PASSWORD
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm new password"
                    className="change-password-boxes"
                  />
                </div>
              </div>
              <div className="change-password-both-buttons">
                <button
                  className="change-password-button"
                  onClick={() => {
                    alert("Password changed successfully!");
                    setChangePassword(false);
                  }}
                >
                  SUBMIT
                </button>
                <button
                  className="change-password-cancel-button"
                  onClick={() => {
                    setChangePassword(false);
                  }}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
