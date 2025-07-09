// User.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";
import { FaShoppingCart, FaBoxOpen, FaHistory } from "react-icons/fa";

const User = ({ setRole }) => {
  const navigate = useNavigate();

  return (
    <div className="user-container">
      <div
        className="user-card"
        onClick={() => {
          setRole("user");
          navigate("/inventory");
        }}
      >
        <FaBoxOpen className="user-icon" />
        <h2 className="user-title">Buy Items</h2>
        <p className="user-description">Click here to go to inventory</p>
      </div>
      <div className="user-card" onClick={() => navigate("/cart")}>
        <FaShoppingCart className="user-icon" />
        <h2 className="user-title">View Cart</h2>
        <p className="user-description">Click here to view your cart</p>
      </div>
      <div className="user-card" onClick={() => navigate("/previousOrders")}>
        <FaHistory className="user-icon" />
        <h2 className="user-title">Previous Orders</h2>
        <p className="user-description">Click here to view previous orders</p>
      </div>
    </div>
  );
};

export default User;
