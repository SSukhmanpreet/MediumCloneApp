import React, { useState } from "react";

import { useParams } from "react-router-dom";

const EditPost = ({ post, onUpdatePost, onCloseEditForm }) => {
  const { id } = useParams();
  const [editedPost, setEditedPost] = useState({ ...post });

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdatePost(editedPost);
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedPost.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="topic">topic:</label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={editedPost.topic}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="text">text:</label>
          <input
            type="text"
            id="text"
            name="text"
            value={editedPost.text}
            onChange={handleChange}
          />
        </div>
        {/* Other form fields for editing the post */}
        <button type="submit">Update Post</button>
        <button type="button" onClick={onCloseEditForm}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditPost;
