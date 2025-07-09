import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartItems, setCartItems, setPreviousOrders }) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    if (cartItems.length === 0) {
      alert("CART IS EMPTY PLEASE ADD ITEMS FROM INVENTORY");
      return;
    }
    setPreviousOrders(prev => [...prev, cartItems]);
    setCartItems([]);
    alert("ORDER PLACED SUCCESSFULLY!");
    navigate("/previousOrders");
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty">No items in the cart. Please add from inventory.</p>
      ) : (
        <div>
          <p className="cart-subheading">Items in the cart:</p>
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-card">
                <strong className="item-name">{item.name}</strong>
                <div className="item-info">
                  Type: {item.type}<br />
                  Price: {item.price} Rs.<br />
                  Quantity: {item.quantity}
                </div>
                {item.description && (
                  <div className="item-description">Description: {item.description}</div>
                )}
              </li>
            ))}
          </ul>
          <div className="order-button-container">
            <button className="order-btn" onClick={handleOrder}>ORDER NOW</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
