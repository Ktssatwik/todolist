import React from "react";

const PendingApprovals = ({ pendingItems, approveItem, declineItem }) => {
  return (
    <div>
      <h1>Pending Approvals</h1>
      {pendingItems.length === 0 ? (
        <p>No items waiting for approval.</p>
      ) : (
        <ul>
          {pendingItems.map(item => (
            <li key={item.id}>
              <strong>{item.name}</strong> — Type: {item.type}, Price: {item.price}
              {item.description && <div>Description: {item.description}</div>}
              <div>
                <button onClick={() => approveItem(item.id)}>✅ Accept</button>
                <button onClick={() => declineItem(item.id)}>❌ Decline</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PendingApprovals;
