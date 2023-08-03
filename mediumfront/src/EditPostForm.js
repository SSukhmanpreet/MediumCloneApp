import React, { useState } from 'react';

const EditPostForm = ({ post, onSave }) => {
    const [editedPost, setEditedPost] = useState({ ...post });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedPost({ ...editedPost, [name]: value });
    };

    const handleSave = (event) => {
        event.preventDefault();
        onSave(editedPost);
    };

    return (
        <form className='edit-post-form' onSubmit={handleSave}>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={editedPost.title} onChange={handleInputChange} />
            </div>
            <div>
                <label>Topic:</label>
                <input type="text" name="topic" value={editedPost.topic} onChange={handleInputChange} />
            </div>
            <div>
                <label>Featured Image:</label>
                <input type="text" name="featuredImage" value={editedPost.featuredImage} onChange={handleInputChange} />
            </div>
            <div>
                <label>Text:</label>
                <textarea name="text" value={editedPost.text} onChange={handleInputChange} />
            </div>
            <div>
                <label>Date:</label>
                <input type="datetime-local" name="dateTime" value={editedPost.date} onChange={handleInputChange} />
            </div>
            <div>
                <label>Author:</label>
                <input type="text" name="author" value={editedPost.author} onChange={handleInputChange} />
            </div>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditPostForm;
