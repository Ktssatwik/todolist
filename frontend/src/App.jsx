import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ToDoList from "./ToDoList";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/toDoList"
          element={
            <div>
              <Header />
              <ToDoList />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
