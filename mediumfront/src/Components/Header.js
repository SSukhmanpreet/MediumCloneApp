import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const isLoggedIn = !!localStorage.getItem("token");
  const handleLogout = () => {
    // Clear the JWT token from local storage
    localStorage.removeItem("token");
    // Reload the page to reflect the changes
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
        {isLoggedIn && (
          <div className="logout-link">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
