// Inventory.js
import React from "react";
import "./Inventory.css";

const Inventory = ({ inventoryItems, role, onAddToCart, onDeleteItem }) => {
  return (
    <div className="inventory-container">
      <h1 className="inventory-heading">Inventory</h1>
      {inventoryItems.length === 0 ? (
        <p className="inventory-empty">No items in inventory yet.</p>
      ) : (
        <ul className="inventory-list">
          {inventoryItems.map(item => (
            <li key={item.id} className="inventory-card">
              <div className="item-content">
                <strong className="item-name">{item.name}</strong>
                <div className="item-price">{item.price} Rs.</div>
                {item.description && (
                  <div className="item-tooltip">
                    {item.description}
                  </div>
                )}
              </div>
              {role === "user" && (
                <button className="inventory-btn add-btn" onClick={() => onAddToCart(item.id)}>Add to Cart</button>
              )}
              {role === "staff" && (
                <button className="inventory-btn delete-btn" onClick={() => onDeleteItem(item.id)}>Delete Item</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inventory;
