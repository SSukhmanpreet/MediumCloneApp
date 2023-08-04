import React, { useEffect, useState } from 'react';
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

    const loginUser = async (event) => {
        event.preventDefault()
        console.log("onsubmit")
        window.location.href = '/userProfile'
        // const response = await fetch(`/login`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     withCredentials: true,
        //     body: JSON.stringify(user),
        // })
        // const data = await response.json()
        // console.log(data.message)
        // if (response.status === 200) {
        //     localStorage.setItem('token', data.access_token)
        //     alert(data.message)
        //     window.location.href = '/userProfile'
        // } else {
        //     alert(data.message)
        // }
    };

    useEffect(async () => {
        console.log("LOADED");
        // if (localStorage.getItem('token')) {
        //     const givingToken = localStorage.getItem('token');
        //     console.log('token found')
        //     console.log(givingToken)
        //     const response = await fetch(`/auth`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             token: givingToken,
        //         })
        //     })
        //     if (response.status === 200) {
        //         window.location.href = '/userProfile'
        //     }
        // }
    }, [])

    return (
        <div>
            <h2>User Login</h2>
            <form>
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
                <div className='signInButton'>
                    <button type="submit" onClick={loginUser}>Login</button>
                </div>
            </form>
        </div>

    );
};

export default UserLogin;