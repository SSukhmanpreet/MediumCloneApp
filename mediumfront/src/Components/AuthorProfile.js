import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AuthorProfile = ({ match }) => {
  const { id } = useParams();
  const [authorId, setAuthorId] = useState(id);
  const [authorData, setAuthorData] = useState({
    username: "",
    // Add other author profile fields here
  });

  const [authorPosts, setAuthorPosts] = useState([]);

  // useEffect(() => {
  //   // Fetch author details from the backend using the author ID from the URL params

  //   axios
  //     .get(`/api/user/${authorId}/profile`)
  //     .then((response) => {
  //       // Set author data
  //       setAuthorData(response.data.author);
  //       // Set author posts
  //       setAuthorPosts(response.data.posts);
  //     })
  //     .catch((error) => {
  //       // Handle error (e.g., invalid author ID, failed request, etc.)
  //       console.error("Error fetching author data:", error);
  //     });
  // }, [match.params.authorId]);

  return (
    <div>
      <h2>Author Profile: {authorData.username}</h2>

      {/* Display author profile details */}
      <div>
        <p>Username: {authorData.username}</p>
        {/* Add other author profile fields here */}
      </div>

      {/* Display author-specific posts */}
      <div>
        <h3>Author Posts</h3>
        {authorPosts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.text}</p>
            <p>Likes: {post.likes}</p>
            <p>Comments: {post.comments}</p>
            <p>Views: {post.views}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorProfile;
