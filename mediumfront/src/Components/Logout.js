import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Logout = () => {
  const { logout } = useAuth();
  const Navigate = useNavigate();

  const handleLogout = () => {
    // Call the logout function from the AuthContext
    logout();
    // Redirect the user to the login page or any other public route
    Navigate("/login");
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
