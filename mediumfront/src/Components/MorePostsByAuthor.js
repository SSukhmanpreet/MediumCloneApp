import React, { useState, useEffect } from "react";
import axios from "axios";

const MorePostsByAuthor = ({ authorId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts by the similar author from the backend API
    axios
      .get(`/api/posts/by-author/${authorId}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts by author:", error);
      });
  }, [authorId]);

  return (
    <div>
      <h2>More Posts by Similar Author</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.text}</p>
          <p>Likes: {post.likes}</p>
          <p>Comments: {post.comments}</p>
          {/* You can include other post details here */}
        </div>
      ))}
      {/* Add a link or button to view the author's profile */}
      <a href={`/author/${authorId}`}>View Author Profile</a>
    </div>
  );
};

export default MorePostsByAuthor;
