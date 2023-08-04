import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserProfile = ({ user }) => {
    const [userData, setUserData] = useState(user);
    const [userPosts, setUserPosts] = useState(user.posts);
    const [followedUsers, setFollowedUsers] = useState(user.followedUsers);
    // useEffect(async () => {
    //     if (localStorage.getItem('token') === "undefined") {
    //         alert("Please Sign In to continue");
    //         window.location.href = '/userlogin';
    //     }
    //     else {
    //         const givingToken = localStorage.getItem('token');
    //         // console.log(givingToken)
    //         const response = await fetch(`/auth`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 token: givingToken,
    //             })
    //         })
    //         const data = await response.json()
    //         console.log(data.message);
    //         if (response.status !== 200) {
    //             alert(data.message);
    //             window.location.href = '/userlogin';
    //         }
    //         else {
    //             const res = await fetch(`/users/profile`, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     token: givingToken,
    //                 })
    //             })
    //             // console.log("after fetch profile")

    //             const data = await res.json();
    //             console.log("data got");
    //             console.log(data);

    //             if (data) {
    //                 setUserData(data);
    //                 setUserPosts(data.posts);
    //                 setFollowedUsers(data.followedUsers);
    //             } else {
    //                 // console.log("no data found");
    //                 alert('Please sign in again');
    //                 window.location.href = '/userlogin';
    //             }
    //         }
    //     }
    // }, [])
    // const handleFollowUser = (userId) => {

    //     setUser((prevUser) => ({
    //         ...prevUser,
    //         followedUsers: [...prevUser.followedUsers, userId],
    //     }));
    // };

    return (
        <div>
            <h2>User Profile</h2>
            {/* Display user details */}
            <div>
                <p>Username: {userData.username}</p>
                <p>Email: {userData.email}</p>
                <p>First Name: {userData.first_name}</p>
                <p>Last Name: {userData.last_name}</p>
                <p>Bio: {userData.bio}</p>
                <p>Profile Image: {userData.profile_image}</p>
                <p>Followers: {userData.followers}</p>
                <p>Following: {userData.following}</p>
                <p>Interested Topics: {userData.interested_topics}</p>
            </div>
            <hr />
            <div>
                <button>Follow User</button>
            </div>
            <h2>My Posts</h2>

            {userPosts.length === 0 ? (
                <p>No posts found.</p>
            ) : (
                userPosts.map((post) => (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.text}</p>
                    </div>
                ))
            )}
            <hr />
            <h2>Followed Users</h2>
            {followedUsers.length === 0 ? (
                <p>No users followed.</p>
            ) : (
                <ul>
                    {
                        followedUsers.map((user, index) => (
                            <li key={index}>
                                <p>User Name: {user.userName}</p>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    );
};

export default UserProfile;