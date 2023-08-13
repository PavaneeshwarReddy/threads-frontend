import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Styles/allThreadsScreen.css"
function HomeScreen() {
  return (
    <div className="allthreads">
      <Navbar className="navbar" />

      {/*outlet means the element that is provided at create elements from router are displayed in this screen */}
      <Outlet className="content"/>
    </div>
  );
}

export default HomeScreen;
