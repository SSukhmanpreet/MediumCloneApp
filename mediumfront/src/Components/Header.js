import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header-container">
      <div className="header-items-left">
        <div className="logo-img">
          <Link to="/">Blog Website </Link>
        </div>
      </div>
      <div className="header-items-right">
        <div className="login-link">
          <a href="/login">Login</a>
        </div>
        <div className="register-link">
          <a href="/register">Register</a>
        </div>
        <div className="addPost-link">
          <a href="/add">Add Posts</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
