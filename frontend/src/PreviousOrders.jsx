import React from "react";
import "./PreviousOrders.css";

const PreviousOrders = ({ previousOrders }) => {
  return (
    <div className="orders-container">
      <h1 className="orders-heading">Previous Orders</h1>
      {previousOrders.length === 0 ? (
        <p className="orders-empty">No previous orders.</p>
      ) : (
        <div className="orders-list">
          {previousOrders.map((order, index) => (
            <div key={index} className="order-card">
              <h3 className="order-title">Order #{index + 1}</h3>
              <ul className="order-items">
                {order.map((item) => (
                  <li key={item.id} className="order-item">
                    <strong className="item-name">{item.name}</strong>
                    <div className="item-info">
                      Type: {item.type}<br />
                      Price: {item.price} Rs.<br />
                      Quantity: {item.quantity}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PreviousOrders;
