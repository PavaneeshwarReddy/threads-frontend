import React from "react";
import "../Styles/navbar.css";
import createIcon from "../Assets/Navbar/create.png";
import activityIcon from "../Assets/Navbar/activity.png";
import homeIcon from "../Assets/Navbar/home.png";
import profileIcon from "../Assets/Navbar/profile.png";
import searchIcon from "../Assets/Navbar/search.png";
import threadLogo from "../Assets/LoginScreen/icon.png";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <div className="nav-item">
          <img src={threadLogo} alt="can't load" />
          <div>Threads</div>
        </div>
        <div className="nav-item">
          <img src={homeIcon} alt="can't load" />
          <div>Home</div>
        </div>
        <div className="nav-item">
          <img src={searchIcon} alt="can't load" />
          <div>Search</div>
        </div>
        <div className="nav-item">
          <img src={createIcon} alt="can't load" />
          <div>Create</div>
        </div>
        <div className="nav-item">
          <img src={activityIcon} alt="can't load" />
          <div>Activity</div>
        </div>
        <div className="nav-item">
          <img src={profileIcon} alt="can't load" />
          <div>Profile</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
