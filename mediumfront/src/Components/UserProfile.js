import React, { useState, useEffect } from "react";
import axios from "axios";
import FollowButton from "./FollowButton";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";

const UserProfile = ({ user }) => {
  const [userData, setUserData] = useState(user);
  const [savedPosts, setSavedPosts] = useState([]);

  const [userPosts, setUserPosts] = useState(user.posts);
  const [otherAuthors, setOtherAuthors] = useState(user.followedUsers);
  const [author, setAuthor] = useState(user.author);
  console.log(user);
  // useEffect(() => {
  //   // Fetch user details from the backend using the JWT token
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     axios
  //       .get("/api/user/profile", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((response) => {
  //         // Set user data
  //         setUserData(response.data.user);
  //         // Set user posts
  //         setUserPosts(response.data.posts);
  //       })
  //       .catch((error) => {
  //         // Handle error (e.g., invalid token, failed request, etc.)
  //         console.error("Error fetching user data:", error);
  //       });
  //     axios
  //       .get("/api/user/other_authors", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((response) => {
  //         // Set other authors data
  //         setOtherAuthors(response.data);
  //       })
  //       .catch((error) => {
  //         // Handle error (e.g., invalid token, failed request, etc.)
  //         console.error("Error fetching other authors data:", error);
  //       });
  //   }
  // }, []);

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
  const handleSaveForLater = (postId, save) => {
    // Make an HTTP request to the backend to save/unsave the post
    // You'll need to implement this API endpoint on the backend
    axios
      .post("http://localhost:5000/save-for-later", { postId, save })
      .then((response) => {
        // Update the list of saved posts in the state
        setSavedPosts(response.data.savedPosts);
      })
      .catch((error) => {
        console.error("Error saving/unsaving post:", error);
      });
  };
  return (
    <>
      <div>
        <h2>User Profile</h2>
        <Link to={`/user/saveLater`}>View Profile</Link>
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
            <PostItem
              post={post}
              onSaveForLater={handleSaveForLater}
              isSaved={savedPosts.some((savedPost) => savedPost.id === post.id)}
            />
          ))}
        </div>
        {/* Display other authors */}
        <div>
          <h3>Other Authors</h3>
          {otherAuthors.map((author) => (
            <div key={author.authorId}>
              <h4>{author.username}</h4>
              <Link to={`/author/${author.authorId}`}>View Profile</Link>
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
    </>
  );
};

export default UserProfile;
