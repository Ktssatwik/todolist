import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./Login";
import Registor from "./Registor";
import ToDoList from "./ToDoList";
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registor" element={<Registor/>}/>
          <Route path="/toDoList" element={<ToDoList/>}/>
      </Routes>
    </Router>
  );
}
export default App;