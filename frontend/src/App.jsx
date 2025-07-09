// App.jsx
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
import SoldItems from "./SoldItems";

// NEW
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";

function App() {
  const [pendingItems, setPendingItems] = useState([]);
  const [inventoryItems, setInventoryItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [previousOrders, setPreviousOrders] = useState([]);
  const [soldItems, setSoldItems] = useState([]);
  const [role, setRole] = useState("user");

  const addPendingItem = (item) => {
    setPendingItems((prev) => [...prev, { id: Date.now(), ...item }]);
  };
  const approveItem = (itemId) => {
    const item = pendingItems.find((i) => i.id === itemId);
    if (!item) return;
    setPendingItems((prev) => prev.filter((i) => i.id !== itemId));
    setInventoryItems((prev) => [...prev, item]);
    setSoldItems((prev) => [...prev, item]);
  };
  const declineItem = (itemId) => {
    setPendingItems((prev) => prev.filter((i) => i.id !== itemId));
  };
  const addToCart = (itemId) => {
    const item = inventoryItems.find((i) => i.id === itemId);
    if (item) setCartItems((prev) => [...prev, item]);
  };
  const deleteItem = (itemId) => {
    setInventoryItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  return (
    <Router basename="/p4">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<GuestRoute><Home /></GuestRoute>} />
<Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
<Route path="/register" element={<GuestRoute><Register /></GuestRoute>} />


        {/* Protected routes */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/innerHome" element={<InnerHome />} />
          <Route path="/toDoList" element={<ToDoList />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/stopWatch" element={<StopWatch />} />
          <Route path="/chessGame" element={<ChessGame />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/scanCode" element={<ScanCode />} />
          <Route path="/user" element={<User setRole={setRole} />} />
          <Route path="/staff" element={<Staff setRole={setRole} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                setPreviousOrders={setPreviousOrders}
              />
            }
          />
          <Route
            path="/previousOrders"
            element={
              <PreviousOrders
                previousOrders={previousOrders}
                setPreviousOrders={setPreviousOrders}
              />
            }
          />
          <Route path="/pendingOrders" element={<PendingOrders />} />
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
          <Route
            path="/soldItems"
            element={
              <SoldItems
                soldItems={soldItems}
                setSoldItems={setSoldItems}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
