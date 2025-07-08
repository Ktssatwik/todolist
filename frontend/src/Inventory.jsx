// Inventory.js
import React from "react";

const Inventory = ({ inventoryItems, role, onAddToCart, onDeleteItem }) => {
  return (
    <div>
      <h1>Inventory</h1>
      {inventoryItems.length === 0 ? (
        <p>No items in inventory yet.</p>
      ) : (
        <ul>
          {inventoryItems.map(item => (
            <li key={item.id}>
              <strong>{item.name}</strong> — Type: {item.type}, Price: {item.price}, Quantity: {item.quantity}
              {item.description && <div>Description: {item.description}</div>}

              {role === "user" && (
                <button onClick={() => onAddToCart(item.id)}>Add to Cart</button>
              )}
              {role === "staff" && (
                <button onClick={() => onDeleteItem(item.id)}>Delete Item</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inventory;
