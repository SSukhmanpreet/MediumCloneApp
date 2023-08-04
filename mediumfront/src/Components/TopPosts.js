import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const TopPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the backend API
    axios.get("/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);
  // Define weights for each metric
  const weightLikes = 1;
  const weightComments = 2;
  const weightViews = 0.5;
  const weightTime = 0.1;
  // Calculate the total score and rank the posts
  const rankedPosts = posts.map((post) => {
    const totalScore =
      weightLikes * post.likes +
      weightComments * post.comments +
      weightViews * post.views +
      weightTime * (new Date() - new Date(post.time));
    return { ...post, totalScore };
  });

  rankedPosts.sort((a, b) => b.totalScore - a.totalScore);
  return (
    <div>
      <h2>Top Posts</h2>
      <ul>
        {rankedPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>Likes: {post.likes}</p>
            <p>Comments: {post.comments}</p>
            <p>Views: {post.views}</p>
            <p>Time: {post.time}</p>
            <p>Total Score: {post.totalScore}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopPosts;
