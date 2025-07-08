// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Auth pages
import Login from "./Login";
import Register from "./Register";

// Main pages
import Home from "./Home";
import InnerHome from "./InnerHome";
import Layout from "./Layout";
import Welcome from "./Welcome";
import User from "./User";
import Admin from "./Admin";
import Staff from "./Staff";
import Vendor from "./Vendor";

// Tools / features
import ToDoList from "./ToDoList";
import Calculator from "./Calculator";
import StopWatch from "./StopWatch";
import ChessGame from "./ChessGame";
import Dictionary from "./Dictionary";
import Translator from "./Translator";
import ScanCode from "./ScanCode";

// inner features
import PendingOrders from "./PendingOrders";
import Inventory from "./Inventory";
import PendingApprovals from "./PendingApprovals";
import SellToStore from "./SellToStore";
import Cart from "./Cart";
import PreviousOrders from "./PreviousOrders";

function App() {
  // State to track items sent by vendors and approved items
  const [pendingItems, setPendingItems] = useState([]);
  const [inventoryItems, setInventoryItems] = useState([]);
  
  // NEW: role to decide which buttons to show in Inventory
  const [role, setRole] = useState("user"); // "user" or "staff"

  // Add item from vendor to pending list
  const addPendingItem = (item) => {
    setPendingItems(prev => [...prev, { id: Date.now(), ...item }]);
  };

  // Approve: remove from pending, add to inventory
  const approveItem = (itemId) => {
    const itemToApprove = pendingItems.find(item => item.id === itemId);
    if (!itemToApprove) return;
    setPendingItems(prev => prev.filter(item => item.id !== itemId));
    setInventoryItems(prev => [...prev, itemToApprove]);
  };

  // Decline: remove from pending only
  const declineItem = (itemId) => {
    setPendingItems(prev => prev.filter(item => item.id !== itemId));
  };

  // NEW: actions for Inventory
  const addToCart = (itemId) => {
    console.log(`Add item ${itemId} to cart`);
    alert (`Item ${itemId} added to cart!`);
    // add your add-to-cart logic here
  };

  const deleteItem = (itemId) => {
    console.log(`Delete item ${itemId}`);
    alert(`Item ${itemId} deleted from inventory!`);
    setInventoryItems(prev => prev.filter(item => item.id !== itemId));
  };

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
          
          {/* Pass setRole so User and Staff can set role before going to /inventory */}
          <Route path="/user" element={<User setRole={setRole} />} />
          <Route path="/staff" element={<Staff setRole={setRole} />} />
          
          <Route path="/admin" element={<Admin />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/previousOrders" element={<PreviousOrders />} />

          {/* pages connected to store logic */}
          <Route
            path="/pendingOrders"
            element={<PendingOrders />}
          />
          <Route
            path="/inventory"
            element={
              <Inventory
                inventoryItems={inventoryItems}
                role={role}
                onAddToCart={addToCart}
                onDeleteItem={deleteItem}
              />
            }
          />
          <Route
            path="/pendingApprovals"
            element={
              <PendingApprovals
                pendingItems={pendingItems}
                approveItem={approveItem}
                declineItem={declineItem}
              />
            }
          />
          <Route
            path="/sellToStore"
            element={<SellToStore addPendingItem={addPendingItem} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
