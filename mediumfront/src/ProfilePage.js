import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProfilePage = ({ user, setUser }) => {
    const [userData, setUserData] = useState({});
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        // Fetch user details and posts from the backend using the JWT token
        const token = localStorage.getItem("token");
        if (token) {
            axios
                .get("/api/user/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    // Set user data and posts
                    setUserData(response.data.user);
                    setUserPosts(response.data.posts);
                })
                .catch((error) => {
                    // Handle error (e.g., invalid token, failed request, etc.)
                    console.error("Error fetching user data:", error);
                });
        }
    }, []);
    const handleFollowAuthor = (authorId) => {
        // In a real application, you would update the user data on the backend to add the authorId to the followedAuthors array.
        // For this example, we will just update the frontend user data for demonstration purposes.

        setUser((prevUser) => ({
            ...prevUser,
            followedAuthors: [...prevUser.followedAuthors, authorId],
        }));
    };

    return (
        <div>
            <h2>User Profile</h2>
            {/* Display user details */}
            <div>
                <p>Username: {userData.username}</p>
                <p>Email: {userData.email}</p>
                {/* Display other user details */}
            </div>
            {/* Add other user profile information as needed */}
            <hr />
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
            <h2>Followed Authors</h2>
            {/* {followedAuthors.length === 0 ? (
        <p>No authors followed.</p>
      ) : (
        <ul>
          {followedAuthors.map((authorId) => (
            <li key={authorId}>
              <p>Author ID: {authorId}</p>
            </li>
          ))}
        </ul>
      )} */}
        </div>
    );
};

export default ProfilePage;