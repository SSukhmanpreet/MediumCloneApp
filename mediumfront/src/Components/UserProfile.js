import React, { useState, useEffect } from "react";
import axios from "axios";
import FollowButton from "./FollowButton";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    // Add other profile fields here
  });

  const [userPosts, setUserPosts] = useState([]);
  const [otherAuthors, setOtherAuthors] = useState([]);
  useEffect(() => {
    // Fetch user details from the backend using the JWT token
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // Set user data
          setUserData(response.data.user);
          // Set user posts
          setUserPosts(response.data.posts);
        })
        .catch((error) => {
          // Handle error (e.g., invalid token, failed request, etc.)
          console.error("Error fetching user data:", error);
        });
      axios
        .get("/api/user/other_authors", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // Set other authors data
          setOtherAuthors(response.data);
        })
        .catch((error) => {
          // Handle error (e.g., invalid token, failed request, etc.)
          console.error("Error fetching other authors data:", error);
        });
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFollowToggle = (authorId, isFollowing) => {
    // Send follow/unfollow request to the backend using the JWT token
    const token = localStorage.getItem("token");
    axios
      .post(
        `/api/user/${authorId}/follow`,
        { isFollowing },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle successful follow/unfollow (optional)
        console.log("Follow/unfollow successful!");
      })
      .catch((error) => {
        // Handle follow/unfollow error (optional)
        console.error("Error following/unfollowing author:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send updated user data to the backend
    const token = localStorage.getItem("token");
    axios
      .put("/api/user/profile", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle successful profile update (optional)
        console.log("Profile updated successfully!");
      })
      .catch((error) => {
        // Handle profile update error (optional)
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Display user details */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add other profile fields here */}
        <button type="submit">Save Profile</button>
      </form>

      {/* Display user stats */}
      <div>
        <h3>User Stats</h3>
        <p>Total Likes: {userData.totalLikes}</p>
        <p>Total Comments: {userData.totalComments}</p>
        <p>Total Views: {userData.totalViews}</p>
      </div>

      {/* Display user-specific posts with stats */}
      <div>
        <h3>User Posts</h3>
        {userPosts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.text}</p>
            <p>Likes: {post.likes}</p>
            <p>Comments: {post.comments}</p>
            <p>Views: {post.views}</p>
          </div>
        ))}
      </div>
      {/* Display other authors */}
      <div>
        <h3>Other Authors</h3>
        {otherAuthors.map((author) => (
          <div key={author.id}>
            <h4>{author.username}</h4>
            <Link to={`/author/${author.id}`}>View Profile</Link>
            {/* Pass the necessary props to FollowButton */}
            <FollowButton
              authorId={author.id}
              isFollowing={author.isFollowing}
              onFollowToggle={handleFollowToggle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
