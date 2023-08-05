import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  console.log(isLoggedIn);
  const handleLogout = () => {
    // Clear the JWT token from local storage
    localStorage.removeItem("token");
    // Reload the page to reflect the changes
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="Header-container">
      <div className="header-items-left">
        <div className="logo-img">
          <Link to="/">Blog Website </Link>
        </div>
      </div>

      <div className="header-items-right">
        <div className="userProfile">
          <Link to="/userProfile">User Profile</Link>
        </div>

        <div className="login-link">
          <Link to="/allposts">All Posts</Link>
        </div>
        {!isLoggedIn && (
          <div className="login-link">
            <Link to="/login">Login</Link>
          </div>
        )}
        {!isLoggedIn && (
          <div className="register-link">
            <Link to="/register">Register</Link>
          </div>
        )}
        <div className="add-post">
          <Link to="/add">Add Post</Link>
        </div>
        {isLoggedIn && (
          <>
            <div className="logout-link">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
