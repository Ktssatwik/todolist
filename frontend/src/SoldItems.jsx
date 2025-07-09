import React from "react";
import "./SoldItems.css"; // new CSS file

const SoldItems = ({ soldItems }) => {
  return (
    <div className="sold-container">
      <h1 className="sold-heading">Sold Items</h1>
      {soldItems.length === 0 ? (
        <p className="sold-empty">No items sold yet.</p>
      ) : (
        <ul className="sold-list">
          {soldItems.map((item, index) => (
            <li key={index} className="sold-card">
              <strong className="sold-item-name">{item.name}</strong>
              <div className="sold-info">
                <span className="sold-price">{item.price} Rs.</span> &bull; 
                <span className="sold-type"> {item.type}</span> &bull; 
                <span className="sold-qty">{item.quantity} pcs</span>
              </div>
              {item.description && (
                <div className="sold-description">{item.description}</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SoldItems;
