import React from "react";
import { useNavigate } from "react-router-dom";

const Vendor = () => {
    const navigate = useNavigate();
  return (
    <div
      style={{ border: "1px solid black" }}
      onClick={() => navigate("/sellToStore")}
    >
      <h1>SELL ITEMS</h1>
      <p>CLick here to sell items to the store</p>
    </div>
  );
};
export default Vendor;
