import React, { useState } from 'react';
import './ToDoList.css';
import AddTask from './AddTask';

function ToDoList() {
  const [tasks, setTasks] = useState([
    {
      title: 'EAT BREAKFAST',
      description: 'Have oats and a smoothie.',
      deadline: new Date().setHours(23, 59, 59, 999),
    },
    {
      title: 'TAKE A SHOWER',
      description: '',
      deadline: new Date().setHours(23, 59, 59, 999),
    },
    {
      title: 'WALK THE DOG',
      description: 'Around the park.',
      deadline: new Date().setHours(23, 59, 59, 999),
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  function addTask(newTask) {
    setTasks(prev => [...prev, newTask]);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="main">
      <div className="to-do-list">
        <h1 className="toDoH1">TO DO LIST</h1>

        <div className="input-container">
          <button className="add-button" onClick={() => setShowAddTask(true)}>
            + Add Task
          </button>
        </div>

        <ol className="task-list">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`task-item ${index === tasks.length - 1 ? 'task-pop' : ''}`}
            >
              <div className="task-info">
                <strong className="task-title">{task.title}</strong>
                {task.description && <p className="task-desc">{task.description}</p>}
              </div>

              <div className="task-buttons">
                <button className="view-button" onClick={() => setSelectedTask(task)}>
                  👁️
                </button>
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  🚫
                </button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>
                  👆
                </button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>
                  👇
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {showAddTask && (
        <AddTask onAdd={addTask} onClose={() => setShowAddTask(false)} />
      )}

      {selectedTask && (
        <div className="view-task-overlay" onClick={() => setSelectedTask(null)}>
          <div className="view-task-modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedTask.title}</h2>

            <div className="view-task-details">
              <p><strong>Description:</strong></p>
              <p>{selectedTask.description || "No description"}</p>

              <p><strong>Deadline:</strong></p>
              <p>{new Date(selectedTask.deadline).toLocaleString()}</p>
            </div>

            <button className="close-btn" onClick={() => setSelectedTask(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToDoList;
