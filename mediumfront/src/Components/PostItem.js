import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { purple, red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Grid from "@mui/material/Grid";

const PostItem = ({
  post,
  onDeletePost,
  onEditPost,
  onSaveForLater,
  isSaved,
  isEditing,
}) => {
  const wordsPerMinute = 200;
  const content = post.text;
  const calculateReadingTime = (content) => {
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };
  const imageUrl =
    "https://fastly.picsum.photos/id/365/200/200.jpg?hmac=1d3GDxGN6ctXX3y8q4PA_hKu6fLOCEGbgeKZKJ8K8U8";
  const readingTime = calculateReadingTime(content);
  useEffect(() => {
    console.log(post);
  });
  return (
    <Card sx={{ margin: "20px auto", border: "1px solid #ccc", width: 1000 }}>
      <Link to="/author/id">
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: purple[500],
                width: 40,
                height: 40,
                fontSize: 20,
              }}
              aria-label="author"
            >
              {post.author.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={post.author}
          subheader={post.created_at}
        />
      </Link>
      <CardMedia
        component="img"
        sx={{ height: 400, objectFit: "cover" }}
        image={imageUrl}
        title="Post Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.text.split(" ").slice(0, 35).join(" ")}...
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Reading Time: {readingTime} minute{readingTime !== 1 && "s"}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/posts/${post.id}`}>
          <Button variant="contained" color="secondary">
            Read More
          </Button>
        </Link>
        {isEditing && (
          <>
            <Link to={`editPost`}>
              <Button
                variant="contained"
                color="secondary"
                onClick={onEditPost}
              >
                Edit
              </Button>
            </Link>
            <Button variant="contained" color="error" onClick={onDeletePost}>
              Delete
            </Button>
          </>
        )}
        {isSaved ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onSaveForLater(post.id, false)}
          >
            Unsave
          </Button>
        ) : (
          <a href="/savedPost">
            <Button
              variant="contained"
              color="secondary"
              // onClick={() => onSaveForLater(post.id, true)}
            >
              Save
            </Button>
          </a>
        )}
      </CardActions>
      <CardActions>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon sx={{ marginRight: 1 }} />
              {post.number_of_likes}
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="add to favorites">
              <ChatBubbleIcon sx={{ marginRight: 1 }} />
              {post.number_of_comments}
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default PostItem;
