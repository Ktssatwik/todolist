import React from "react";

const Inventory = ({ inventoryItems }) => {
  return (
    <div>
      <h1>Inventory</h1>
      {inventoryItems.length === 0 ? (
        <p>No items in inventory yet.</p>
      ) : (
        <ul>
          {inventoryItems.map(item => (
            <li key={item.id}>
              <strong>{item.name}</strong> — Type: {item.type}, Price: {item.price}
              {item.description && <div>Description: {item.description}</div>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inventory;
