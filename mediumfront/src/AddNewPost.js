import React, { useState } from 'react';
import axios from 'axios';

const AddNewPost = () => {
    const [newPost, setNewPost] = useState({
        title: "",
        topic: "",
        image: "",
        text: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target);
        console.log(name + " " + value);
        setNewPost({ ...newPost, [name]: value });
    };

    //adding data to database
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!newPost.image || newPost.image == null) {
        //     alert('Please select an image of your product');
        //     return;
        // }

        if (!newPost.title || !newPost.text || !newPost.topic) {
            alert('Please input all details about the product');
            return;
        }
        console.log(newPost);
        const formData = new FormData();
        formData.append("newPost", newPost);
        console.log(formData);
        // axios.post(`/posts`, formData)
        //     .then(() => {
        //         alert('Post Added to Database')
        //         window.location.href = '/'
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         alert("Error");
        //     })
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
                    <label>Topic:</label>
                    <input type="text" name="topic" value={newPost.topic} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="text" name="image" value={newPost.image} onChange={handleInputChange} />
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

export default AddNewPost;
