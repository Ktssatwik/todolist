import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  const [pendingUsers, setPendingUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  const fetchPendingUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/pendingUsers", {
        credentials: "include",
      });
      const data = await response.json();
      setPendingUsers(data);
    } catch (error) {
      console.error("Error fetching pending users:", error);
      alert("Failed to load pending users.");
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (userId, action) => {
    try {
      const url = `http://localhost:8000/api/auth/${action}User/${userId}`;
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
      });
      const data = await response.json();
      alert(data.message);
      fetchPendingUsers(); // Refresh list
    } catch (error) {
      console.error(`Error trying to ${action} user:`, error);
      alert("Action failed. Try again.");
    }
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      <p className="admin-description">Review and approve or reject newly registered users.</p>

      {loading ? (
        <p>Loading...</p>
      ) : pendingUsers.length === 0 ? (
        <p>No pending users.</p>
      ) : (
        pendingUsers.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-info">
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Requested Role:</strong> {user.role}</p>
            </div>
            <div className="action-buttons">
              <button
                className="approve-btn"
                onClick={() => handleAction(user.id, "approve")}
              >
                Approve
              </button>
              <button
                className="reject-btn"
                onClick={() => handleAction(user.id, "reject")}
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
