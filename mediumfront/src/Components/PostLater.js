import React, { useEffect, useState } from "react";
import axios from "axios";

const SavedPosts = () => {
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/user/saved_posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSavedPosts(response.data.savedPosts);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  return (
    <div>
      <h2>Saved Posts</h2>
      {savedPosts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.text}</p>
          <p>Likes: {post.likes}</p>
          <p>Comments: {post.comments}</p>
          <p>Views: {post.views}</p>
        </div>
      ))}
    </div>
  );
};

export default SavedPosts;
