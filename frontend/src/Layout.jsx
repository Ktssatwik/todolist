// src/Layout.jsx
import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Header />
    {/* <Welcome /> */} 
    <Outlet />
  </>
);

export default Layout;
