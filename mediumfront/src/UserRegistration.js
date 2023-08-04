import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
    const [user, setUser] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const registerUser = async (event) => {
        event.preventDefault();
        console.log("onsubmit");
        console.log(user);
        window.location.href = '/userLogin';
        // const response = await fetch(`/users`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     withCredentials: true,
        //     body: JSON.stringify(user),
        // });
        // console.log("after fetch")

        // const data = await response.json()

        // if (response.status === 404 || !data) {
        //     console.log("error while pushing data to database");
        //     alert(data);
        // } else {
        //     alert("Signed Up Successfully");
        //     window.location.href = '/userLogin';
        // }
    }
    return (
        <div><h1>User Registration</h1>
            <form>
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
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="first_name"
                        value={user.first_name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="last_name"
                        value={user.last_name}
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
                {/* <div>
                    <label>Confirm Password:</label>
                    <input
                        type="text"
                        name="ConfirmPassword"
                        value={user.ConfirmPassword}
                        onChange={handleInputChange}
                    />
                </div> */}
                <div className="signInButton">
                    {/* <Button type='submit' onClick={registerUser} variant="contained">SIGN UP NOW</Button> */}
                    <button type='submit' onClick={registerUser} value='SIGN UP NOW'>Register</button>
                </div>
                <button>Sign In Instead</button>
            </form>
        </div>
    );
};

export default UserRegistration;
