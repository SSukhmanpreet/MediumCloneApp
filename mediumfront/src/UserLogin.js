import React, { useState } from 'react';
import axios from "axios";

const UserLogin = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/api/login", user).then((response) => {
            // Handle successful login (optional)
            console.log("User logged in successfully!");
            // Save the JWT token in local storage
            localStorage.setItem("token", response.data.token);
        }).catch((error) => {
            // Handle login error (optional)
            console.error("Error logging in:", error);
        });
        console.log('User login data:', user);
        // You can add further logic here to submit user data to the backend for authentication.
        // For this example, we are simply printing the user data to the console.
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
            </form>
        </div>

    );
};

export default UserLogin;