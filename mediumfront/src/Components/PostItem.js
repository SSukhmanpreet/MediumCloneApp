import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({
  post,
  onDeletePost,
  onEditPost,
  onSaveForLater,
  isSaved,
}) => {
  const wordsPerMinute = 200;
  console.log(post.text);
  const content = post.text;
  const calculateReadingTime = (content) => {
    const wordCount = content.trim().split(/\s+/).length; // Count words in the content
    const readingTime = Math.ceil(wordCount / wordsPerMinute); // Calculate reading time in minutes
    return readingTime;
  };
  const readingTime = calculateReadingTime(content);
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
      <p>
        <img src={post.img} />
      </p>
      <p>
        Reading Time: {readingTime} minute{readingTime !== 1 && "s"}
      </p>
      <Link to={`/posts/${post.id}`}>
        <button>More....</button>
      </Link>
      <button onClick={() => onEditPost(post)}>Edit</button>

      <button onClick={onDeletePost}>Delete</button>
      {isSaved ? (
        <button onClick={() => onSaveForLater(post.id, false)}>Unsave</button>
      ) : (
        <button onClick={() => onSaveForLater(post.id, true)}>Save</button>
      )}
    </div>
  );
};

export default PostItem;
