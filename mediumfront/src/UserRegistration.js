import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/register", user).then((response) => {
      // Handle successful registration (optional)
      console.log("User registered successfully!");
    }).catch((error) => {
      // Handle registration error (optional)
      console.error("Error registering user:", error);
    });
    console.log('User registration data:', user);
    // You can add further logic here to submit user data to the backend.
    // For this example, we are simply printing the user data to the console.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default UserRegistration;
