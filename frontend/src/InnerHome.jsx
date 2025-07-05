// src/InnerHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./InnerHome.css";

const InnerHome = () => {
  const navigate = useNavigate();

  return (  // ✅ added return
    <div className="inner-home">
      <h2 className="dashboard-title">Welcome to your Dashboard</h2>
      <div className="cards-container">
        <div className="card" onClick={() => navigate("/toDoList")}>
          <h3>📝 To-Do List</h3>
          <p>Manage and track your tasks effortlessly.</p>
        </div>
        <div className="card" onClick={() => navigate("/calculator")}>
          <h3>🔢 Calculator</h3>
          <p>Perform quick and accurate calculations.</p>
        </div>
        <div className="card" onClick={() => navigate("/stopWatch")}>
          <h3>⏱️ Stopwatch</h3>
          <p>Track time with precision.</p>
        </div>
        <div className="card" onClick={() => navigate("/chessGame")}>
          <h3>♟️ Chess</h3>
          <p>Challenge yourself with a game of chess.</p>
        </div>
        <div className="card" onClick={() => navigate("/dictionary")}>
          <h3>📖 Dictionary </h3>
          <p>Search Any Words For Its Meaning</p>
        </div>
        <div className="card" onClick={() => navigate("/translator")}>
          <h3>📖 Translator </h3>
          <p>Hola Hello Bonjour హలో नमस्ते</p>
        </div>
        <div className="card" onClick={() => navigate("/scanCode")}>
          <h3>⛶ QR CODE </h3>
          <p>Scan The Qr Code Please</p>
        </div>
        <div className="card" onClick={() => navigate("/Welcome")}>
          <h3>Welcome</h3>
          <p>welcome to the Website !!!</p>
        </div>
      </div>
    </div>
  );
};

export default InnerHome;
// This component serves as a dashboard for the user after they log in.