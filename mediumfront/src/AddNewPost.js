import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Button } from '@mui/material';

const AddNewPost = () => {
    const [newPost, setNewPost] = useState({
        title: "",
        topic: "",
        image: "",
        text: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
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
        const mockURL = `https://c131894a-7f04-47db-919b-a75f0fc73a55.mock.pstmn.io`;
        const response = await fetch(`${mockURL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            body: JSON.stringify(newPost),
        });
        console.log("after fetch");
        const data = await response.json()
        console.log("data");
        console.log(data);
        if (response.status === 404 || !data) {
            console.log("error while pushing data to database");
            alert(data);
        } else {
            alert("Created Post Successfully!");
            window.location.href = '/';
        }
    };

    return (
        <>
            <h2>Add New Post</h2>
            <form>
                <div>
                    <TextField sx={{ margin: "20px 10px", width: "500px" }} required id="fullWidth" label="Title" variant="outlined" type="text" name="title" value={newPost.title} onChange={handleInputChange} />
                    <TextField sx={{ margin: "20px 10px", width: "500px" }} required id="fullWidth" label="Topic" variant="outlined" type="text" name="topic" value={newPost.topic} onChange={handleInputChange} />
                </div>
                <div>
                    <TextField sx={{ margin: "20px 10px", width: "500px" }} required id="fullWidth" label="Image" variant="outlined" type="text" name="image" value={newPost.image} onChange={handleInputChange} />
                    <TextareaAutosize sx={{ margin: "20px 10px", width: "500px" }} maxRows={5} placeholder='Blog Body' minRows={3} required name="text" value={newPost.text} onChange={handleInputChange} id="fullWidth" label="Blog Body" variant="outlined" />
                </div>
                <Button onClick={handleSubmit} variant="contained">Add Post</Button>
            </form>
        </>
    );
};

export default AddNewPost;
