import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const AddPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    topic: "",
    featuredImage: "",
    text: "",
  });
  const navigate = useNavigate();

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const mockURL = `https://c131894a-7f04-47db-919b-a75f0fc73a55.mock.pstmn.io`;
    const response = await fetch(`${mockURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      body: JSON.stringify(newPost),
    });
    const data = await response.json();
    console.log(data);
    if (response.status === 404 || !data) {
      console.log("error in adding post");
      alert(data);
    } else {
      navigate("/posts");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Add New Post
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Topic"
            name="topic"
            value={newPost.topic}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Featured Image"
            name="featuredImage"
            value={newPost.featuredImage}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Text"
            name="text"
            value={newPost.text}
            onChange={handleChange}
            multiline
            rows={4}
            required
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Add New Post
          </Button>
        </StyledForm>
      </Box>
    </Container>
  );
};

export default AddPost;
