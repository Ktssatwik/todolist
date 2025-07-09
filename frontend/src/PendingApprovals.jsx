import React from "react";
import "./PendingApprovals.css";

const PendingApprovals = ({ pendingItems, approveItem, declineItem }) => {
  return (
    <div className="approvals-container">
      <h1 className="approvals-heading">Pending Approvals</h1>
      {pendingItems.length === 0 ? (
        <p className="approvals-empty">No items waiting for approval.</p>
      ) : (
        <ul className="approvals-list">
          {pendingItems.map(item => (
            <li key={item.id} className="approvals-card">
              <strong className="item-name">{item.name}</strong>
              <div className="item-info">
                Type: {item.type} <br />
                Price: {item.price} Rs. <br />
                Quantity: {item.quantity}
              </div>
              {item.description && (
                <div className="item-description">Description: {item.description}</div>
              )}
              <div className="approvals-buttons">
                <button className="approvals-btn accept-btn" onClick={() => approveItem(item.id)}>
                  ✅ Accept
                </button>
                <button className="approvals-btn decline-btn" onClick={() => declineItem(item.id)}>
                  ❌ Decline
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PendingApprovals;
