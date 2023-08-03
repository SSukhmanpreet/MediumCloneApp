import React from "react";
import { useState } from "react";
const AddPost = ({ onAddPost }) => {
  const [newPost, setNewPost] = useState({
    title: "",
    topic: "",
    featuredImage: "",
    text: "",
    dateTime: "",
    author: "",
  });

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPost(newPost);
    // Clear the form fields after submission
    setNewPost({
      title: "",
      topic: "",
      featuredImage: "",
      text: "",
      dateTime: "",
      author: "",
    });
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="topic">Topic:</label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={newPost.topic}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="featuredImage">Featured Image:</label>
          <input
            type="text"
            id="featuredImage"
            name="featuredImage"
            value={newPost.featuredImage}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            name="text"
            value={newPost.text}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dateTime">Date-time when it was published:</label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={newPost.dateTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newPost.author}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add New Post</button>
      </form>
    </div>
  );
};

export default AddPost;