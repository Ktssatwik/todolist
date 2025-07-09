// Staff.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Staff.css";
import { FaClipboardList, FaBoxes, FaCheckCircle } from "react-icons/fa";

const Staff = ({ setRole }) => {
  const navigate = useNavigate();

  return (
    <div className="staff-container">
      <div className="staff-card" onClick={() => navigate("/pendingOrders")}>
        <FaClipboardList className="staff-icon" />
        <h2 className="staff-title">Pending Orders</h2>
        <p className="staff-description">Click here to accept pending orders</p>
      </div>
      <div
        className="staff-card"
        onClick={() => {
          setRole("staff");
          navigate("/inventory");
        }}
      >
        <FaBoxes className="staff-icon" />
        <h2 className="staff-title">Change Inventory</h2>
        <p className="staff-description">Click here to add or remove items</p>
      </div>
      <div
        className="staff-card"
        onClick={() => navigate("/pendingApprovals")}
      >
        <FaCheckCircle className="staff-icon" />
        <h2 className="staff-title">Pending Approvals</h2>
        <p className="staff-description">Click here to approve items from vendors</p>
      </div>
    </div>
  );
};

export default Staff;
