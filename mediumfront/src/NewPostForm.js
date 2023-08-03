import React, { useState } from 'react';

const NewPostForm = () => {
    const [newPost, setNewPost] = useState({
        title: "",
        author: "",
        date: "",
        topic: "",
        featuredImage: "",
        text: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPost({ ...newPost, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <h2>Add New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={newPost.title} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" name="author" value={newPost.author} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Date and Time:</label>
                    <input type="datetime-local" name="dateTime" value={newPost.dateTime} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Topic:</label>
                    <input type="text" name="topic" value={newPost.topic} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Featured Image:</label>
                    <input type="text" name="featuredImage" value={newPost.featuredImage} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Text:</label>
                    <textarea name="text" value={newPost.text} onChange={handleInputChange} />
                </div>
                <button type="submit">Add Post</button>
            </form>
        </>
    );
};

export default NewPostForm;
