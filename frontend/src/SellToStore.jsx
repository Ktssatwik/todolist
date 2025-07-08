import React, { useState } from "react";

const SellToStore = ({ addPendingItem }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");  
  const [price, setPrice] = useState(""); 
  const [quantity, setQuantity] = useState(1); 
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type || !price || !quantity) {
      alert("Please fill all required fields.");
      return;
    }

    // add item to pending list
    addPendingItem({ name, type, price,quantity, description });

    // clear form
    setName("");
    setType("");
    setPrice("");
    setQuantity(1); 
    setDescription("");

    alert("Item sent for approval!");
  };

  return (
    <div>
      <h1>Sell Item to Store</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter item name"
            required
          />
        </div>

        <div>
          <label>Item Type:</label>
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)} 
            required
          >
            <option value="" disabled>Select type</option>
            <option value="Food">Food</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Sports">Sports</option>
            <option value="Day to Day Essentials">Day to Day Essentials</option>
          </select>
        </div>

        <div>
          <label>Price:</label>
          <input 
            type="number" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            required
          />
        </div>

        <div>
          <label>Quantity</label>
          <input 
            type="number" 
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            min="1"
            required
          />
        </div>

        <div>
          <label>Description (optional):</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>

        <button type="submit">Submit Item for Approval</button>
      </form>
    </div>
  );
};

export default SellToStore;
