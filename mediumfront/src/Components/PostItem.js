import React from "react";

const PostItem = ({ post, onDeletePost, onEditPost }) => {
  return (
    <div
      key={post.id}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h2>{post.title}</h2>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
      <p>Likes: {post.likes}</p>
      <p>Comments: {post.comments}</p>
      <p>Topic: {post.topic}</p>
      <p>{post.text}</p>
      <button onClick={() => onEditPost(post)}>Edit</button>

      <button onClick={onDeletePost}>Delete</button>
    </div>
  );
};

export default PostItem;
