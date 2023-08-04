import React, { useState, useEffect } from "react";
import axios from "axios";

const RecommendedPosts = ({ userPreferences }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the backend API
    axios.get("/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  // Define weights for each metric based on user preferences
  const weightLikes = 2;
  const weightComments = 3;
  const weightViews = 1;

  // Calculate the total score based on user preferences
  const calculateScore = (post) => {
    const totalScore =
      weightLikes * (userPreferences.likes.includes(post.id) ? 1 : 0) +
      weightComments * (userPreferences.comments.includes(post.id) ? 1 : 0) +
      weightViews * (userPreferences.views.includes(post.id) ? 1 : 0);
    return totalScore;
  };

  // Calculate the score for each post and rank them
  const rankedPosts = posts.map((post) => {
    const totalScore = calculateScore(post);
    return { ...post, totalScore };
  });

  rankedPosts.sort((a, b) => b.totalScore - a.totalScore);

  return (
    <div>
      <h2>Recommended Posts</h2>
      <ul>
        {rankedPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>Likes: {post.likes}</p>
            <p>Comments: {post.comments}</p>
            <p>Views: {post.views}</p>
            <p>Total Score: {post.totalScore}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedPosts;
