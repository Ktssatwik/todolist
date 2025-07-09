// Vendor.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Vendor.css";
import { FaStore, FaHistory } from "react-icons/fa";

const Vendor = () => {
  const navigate = useNavigate();

  return (
    <div className="vendor-container">
      <div className="vendor-card" onClick={() => navigate("/sellToStore")}>
        <FaStore className="vendor-icon" />
        <h2 className="vendor-title">Sell Items</h2>
        <p className="vendor-description">Click here to sell items to the store</p>
      </div>
      <div className="vendor-card" onClick={() => navigate("/soldItems")}>
        <FaHistory className="vendor-icon" />
        <h2 className="vendor-title">Sold Items History</h2>
        <p className="vendor-description">Click here to see sold items history</p>
      </div>
    </div>
  );
};

export default Vendor;
