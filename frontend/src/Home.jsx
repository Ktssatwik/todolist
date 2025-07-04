// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import todoImage from "./assets/todolist.jpg";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="home-container">
      <div className="home-left">
        <img src={todoImage} alt="To-do list" className="todo-image" />
      </div>

      <div className="home-right">
        <div className="content-card">
          <h1 className="heading">Welcome to <span className="brand">TaskHub+</span></h1>
          <p className="quote">"Balance your tasks, sharpen your mind, and enjoy the journey."</p>

          <div className="button-group">
            <button className="btn login-btn" onClick={goToLogin}>Login</button>
            <button className="btn register-btn" onClick={goToRegister}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
