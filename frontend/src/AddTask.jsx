import React, { useState } from "react";
import "./AddTask.css";

function AddTask({ onAdd, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Default deadline: today at 23:59
  const defaultDeadline = new Date();
  defaultDeadline.setHours(23, 59, 0, 0);
  const defaultDeadlineStr = defaultDeadline.toISOString().slice(0, 16); // for datetime-local input

  const [deadline, setDeadline] = useState(defaultDeadlineStr);
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }
    if (!deadline) {
      setError("Deadline is required.");
      return;
    }

    onAdd({
      title: title.toUpperCase(),
      description,
      deadline,
    });

    setTitle("");
    setDescription("");
    setDeadline(defaultDeadlineStr);
    setError("");
    onClose();
  };

  return (
    <div className="add-task-overlay">
      <div className="add-task-form">
        <h2>Add New Task</h2>

        <input
          type="text"
          placeholder="Title (required)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="deadline-label">Deadline <span className="required">*</span></label>
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <div className="form-buttons">
          <button className="add-btn" onClick={handleAdd}>Add</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
