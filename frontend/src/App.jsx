import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ToDoList from "./ToDoList";
import Home from "./Home";
import InnerHome from "./InnerHome";
import Layout from "./Layout";
import Calculator from "./Calculator";
import StopWatch from "./StopWatch";
import ChessGame from "./ChessGame";  
import Dictionary from "./Dictionary";
import Translator from "./Translator";
import ScanCode from "./ScanCode";

function App() {
  return (
    <Router>
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
          <Route path="/dictionary" element={<Dictionary/>}/>
          <Route path="/translator" element={<Translator/>}/>
          <Route path="/scanCode" element={<ScanCode />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
      