import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { purple } from "@mui/material/colors";
import { Link, useParams } from "react-router-dom";
import { CardActions } from "@mui/material";
const PostDetails = ({ posts }) => {
  const imageUrl =
    "https://fastly.picsum.photos/id/365/200/200.jpg?hmac=1d3GDxGN6ctXX3y8q4PA_hKu6fLOCEGbgeKZKJ8K8U8";
  const { id } = useParams();
  console.log("id");
  console.log(id);
  const [currentPost, setCurrentPost] = useState(
    // {} ||
    posts.find((x) => x.id === id)
  );
  console.log(currentPost);
  const wordsPerMinute = 200;
  const content = currentPost.text;
  const calculateReadingTime = (content) => {
    const wordCount = content.trim().split(/\s+/).length; // Count words in the content
    const readingTime = Math.ceil(wordCount / wordsPerMinute); // Calculate reading time in minutes
    return readingTime;
  };

  const readingTime = calculateReadingTime(content);

  const getPostData = async () => {
    const res = await fetch(`/posts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.status === 404 || !data) {
      // console.log("Error while getting data in post details");
    } else {
      // setPostData(data);
      console.log("data");
      console.log(data);
      setCurrentPost(data);
    }
  };

  useEffect(async () => {
    await getPostData();
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
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <Card sx={{ maxWidth: 800, margin: "20px 10px" }}>
          <CardMedia
            component="img"
            height="300"
            image={imageUrl}
            alt="Post Image"
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {currentPost.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              User: {currentPost.author}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Date: {currentPost.date}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {currentPost.text}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Topic: {currentPost.topic}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Reading Time: {readingTime} minute{readingTime !== 1 && "s"}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Button variant="contained" color="secondary">
              Likes: {currentPost.likes}
            </Button>
            <Button variant="contained" color="secondary">
              Comments: {currentPost.comments}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PostDetails;
