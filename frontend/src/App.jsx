import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Auth pages
import Login from "./Login";
import Register from "./Register";

// Main pages
import Home from "./Home";              // ✅ You forgot to import this
import InnerHome from "./InnerHome";
import Layout from "./Layout";
import Welcome from "./Welcome";
import User from "./User";
import Admin from "./Admin";

// Tools / features
import ToDoList from "./ToDoList";
import Calculator from "./Calculator";
import StopWatch from "./StopWatch";
import ChessGame from "./ChessGame";
import Dictionary from "./Dictionary";
import Translator from "./Translator";
import ScanCode from "./ScanCode";

function App() {
  return (
    <Router basename="/p4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Layout />}>
          <Route path="/innerHome" element={<InnerHome />} />
          <Route path="/toDoList" element={<ToDoList />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/stopWatch" element={<StopWatch />} />
          <Route path="/chessGame" element={<ChessGame />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/scanCode" element={<ScanCode />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
