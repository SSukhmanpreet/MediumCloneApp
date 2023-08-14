import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Button, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const AddNewPost = () => {
    const [title, setTitle] = useState('');
    const [topic, setTopic] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate();

    //adding data to database
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !text || !topic) {
            alert('Please input all details about the product');
            return;
        }

        const imageInput = document.getElementById('image_input');
        const file = imageInput.files[0];
        const formData = new FormData();
        formData.append('image', file);
        formData.append('title', title);
        formData.append('text', text);
        formData.append('topic', topic);

        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);

        fetch("http://127.0.0.1:3003/create", {
            method: "POST",
            headers: {
                'Authorization': localStorage.Authorization
            },
            body: formData
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log("data");
                console.log(data);
                setTitle('');
                setTopic('');
                setText('');
                alert("Post Added Successfully!")
            })
            .catch(error => {
                console.error('Error:');
                console.log(error);
                if (error == "Sign up or login") {
                    navigate('/userlogin');
                }
            });

    };
    useEffect(() => {
        if (localStorage.Authorization === null) {
            alert("Please Sign In to continue");
            window.location.href = '/userlogin';
        }
        else {
            const authorizationHeader = localStorage.Authorization;
            console.log(localStorage.Authorization);
            // const response = await fetch(`/auth`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         token: givingToken,
            //     })
            // })
            // const data = await response.json();
            // console.log(data.message);
            // if (response.status !== 200) {
            //     console.log(data.message);
            //     window.location.href = '/userLogin';
            // } else {
            //     setCurrentUser(data);
            // }
        }
    }, []);
    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <h1>Add Post</h1>
                    <form>
                        <div>
                            <TextField sx={{ margin: "20px 10px", width: "500px" }}
                                required
                                id="fullWidth"
                                label="Title"
                                variant="outlined"
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <TextField sx={{ margin: "20px 10px", width: "500px" }}
                                required
                                id="fullWidth"
                                label="Topic"
                                variant="outlined"
                                type="text"
                                name="topic"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="file" accept="image/*" id='image_input' placeholder="Enter the image url" name="image" />
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="stretch"
                                spacing={2}
                                sx={{ margin: "20px 10px", width: "100%" }}
                            >
                                <TextareaAutosize
                                    maxRows={5}
                                    placeholder='Text'
                                    minRows={3}
                                    required
                                    name="text"
                                    value={text}
                                    id="fullWidth"
                                    label="Blog Body"
                                    variant="outlined"
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </Stack>
                        </div>
                        <Button sx={{ alignContent: "center" }} onClick={handleSubmit} variant="contained">Add Post</Button>
                    </form>

                </Paper>
            </Container>
        </>
    );
};

export default AddNewPost;