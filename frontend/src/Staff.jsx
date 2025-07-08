// Staff.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Staff = ({ setRole }) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div
        style={{ border: "1px solid black" }}
        onClick={() => navigate("/pendingOrders")}
      >
        <h2>PENDING ORDERS</h2>
        <p>CLICK HERE TO ACCEPT PENDING ORDERS</p>
      </div>
      <div
        style={{ border: "1px solid black" }}
        onClick={() => {
          setRole("staff");
          navigate("/inventory");
        }}
      >
        <h2>CHANGE INVENTORY</h2>
        <p>CLICK HERE TO ADD OR REMOVE ITEMS</p>
      </div>
      <div
        style={{ border: "1px solid black" }}
        onClick={() => navigate("/pendingApprovals")}
      >
        <h2>PENDING APPROVALS</h2>
        <p>CLICK HERE TO APPROVE ITEMS FROM VENDORS</p>
      </div>
    </div>
  );
};

export default Staff;
