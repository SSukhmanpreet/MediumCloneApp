import { Button, Container, Paper, Stack, TextField, TextareaAutosize } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditPost = ({ posts }) => {
    const { id } = useParams();
    console.log("id");
    console.log(id);
    const [editedPost, setEditedPost] = useState(
        // {} ||
        posts.find(x => x.id === id));

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedPost({ ...editedPost, [name]: value });
    };

    const handleCancelEdit = () => {
        setEditedPost(null);
        window.location.href = `/userposts`;
    };

    //adding data to database
    const updatePostData = async (e) => {
        e.preventDefault();
        console.log(editedPost);
        window.location.href = `/userposts`;
        const mockURL = `https://7c5df6d5-e40e-40f9-bdd2-4e8319aa7075.mock.pstmn.io`;
        axios.patch(`${mockURL}/posts/?${id}`, editedPost)
            .then(() => {
                alert('Post Updated in Database')
                window.location.href = `/userposts`;
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const getPostData = async () => {
        const mockURL = ``;
        const res = await fetch(`https://7c5df6d5-e40e-40f9-bdd2-4e8319aa7075.mock.pstmn.io/posts/?${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        // console.log(await res.json());
        const data = await res.json();

        if (res.status === 404 || !data) {
            console.log("Error while getting data in post details");
        } else {
            // setPostData(data);
            setEditedPost(data[1]);
        }
    };

    useEffect(() => {
        getPostData();
        console.log("Loaded");
        // if (localStorage.getItem('token') === "undefined") {
        //     alert("Please Sign In to continue");
        //     window.location.href = '/userLogin';
        // }
        // else {
        //     const givingToken = localStorage.getItem('token');
        //     console.log("givingToken");
        //     console.log(givingToken);
        //     const response = await fetch(`/auth`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             token: givingToken,
        //         })
        //     })
        //     const data = await response.json()
        //     // console.log(data.message)
        //     if (response.status !== 200) {
        //         alert(data.message)
        //         window.location.href = '/userLogin'
        //     }
        // }
    }, []);

    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <h1>Edit Post</h1>
                    <form>
                        <div>
                            <TextField sx={{ margin: "20px 10px", width: "500px" }}
                                required
                                id="fullWidth"
                                label="Title"
                                variant="outlined"
                                type="text" name="title" value={editedPost.title} onChange={handleInputChange} />
                            <TextField sx={{ margin: "20px 10px", width: "500px" }}
                                required
                                id="fullWidth"
                                label="Topic"
                                variant="outlined"
                                type="text" name="topic" value={editedPost.topic + " "} onChange={handleInputChange} />
                        </div>
                        <div>
                            <TextField sx={{ margin: "20px 10px", width: "500px" }}
                                required
                                id="fullWidth"
                                label="Image"
                                variant="outlined"

                                type="text"
                                name="image"
                                value={editedPost.image}
                                onChange={handleInputChange} />
                            {/* <input type="file" name="image" onChange={onChangeFile} className='custom-file-input' />
                            <div className='uploadedImage' >
                                <img className='upldImg' id="blah" src="#" alt="YOUR UPLOADED IMAGE HERE" />
                            </div> */}
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="stretch"
                                spacing={2}
                                sx={{ margin: "20px 10px", width: "100%" }}
                            >
                                <TextareaAutosize maxRows={5} placeholder='Blog Body' minRows={3}
                                    required
                                    name="text"
                                    value={editedPost.text}
                                    onChange={handleInputChange}
                                    id="fullWidth"
                                    label="Blog
                                Body"
                                    variant="outlined" />
                            </Stack>
                        </div>
                        <Button sx={{ alignContent: "center" }} type="submit" onClick={updatePostData} variant="contained">Save Changes</Button>
                        <Button sx={{ alignContent: "center" }} className='cancelEdit-button' onClick={handleCancelEdit} variant="contained">Cancel</Button>
                    </form>

                </Paper>
            </Container>
        </>
    );
};

export default EditPost;
