import React, { useState, useEffect } from "react";
import axios from "axios";

const TopPosts = () => {
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    // Fetch top posts from backend API
    axios
      .get("/api/posts/top")
      .then((response) => {
        setTopPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching top posts:", error);
      });
  }, []);

  return (
    <div>
      <h2>Top Posts</h2>
      <ul>
        {topPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>Likes: {post.likes}</p>
            <p>Comments: {post.comments}</p>
            <p>Views: {post.views}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopPosts;
