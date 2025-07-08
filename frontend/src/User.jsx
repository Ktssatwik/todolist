// User.js
import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ setRole }) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div
        style={{ border: "1px solid black" }}
        onClick={() => {
          setRole("user");
          navigate("/inventory");
        }}
      >
        <h2>BUY ITEMS</h2>
        <p>CLICK HERE TO GO TO INVENTORY</p>
      </div>
      <div style={{ border: "1px solid black" }} onClick={() => navigate("/cart")}>
        <h2>VIEW CART</h2>
        <p>CLICK HERE TO VIEW CART </p>
      </div>
      <div style={{ border: "1px solid black" }} onClick={() => navigate("/previousOrders")}>
        <h2>PREVIOUS ORDERS</h2>
        <p>CLICK HERE TO VIEW PREVIOUS ORDERS</p>
      </div>
    </div>
  );
};

export default User;
