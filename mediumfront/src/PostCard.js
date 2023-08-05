import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export default function PostCard(props) {

  const handleLoginCheck = async () => {
    //please uncomment these if your api is set and functional

    // if (localStorage.getItem('token') === "undefined") {
    //   alert("Please Sign In to continue");
    //   window.location.href = '/userlogin';
    // }
    // else {
    //   const givingToken = localStorage.getItem('token');
    //   // console.log(givingToken)
    //   const response = await fetch(`/auth`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       token: givingToken,
    //     })
    //   })
    //   const data = await response.json();
    //   console.log(data.message);
    //   if (response.status !== 200) {
    //     console.log(data.message);
    //     window.location.href = '/userLogin';
    //   } else {
    //     console.log("user is logged in");
    //   }
    // }
    console.log("user is logged in");
  }
  return (
    <Card sx={{ maxWidth: 800, margin: "20px 10px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={props.author}
        subheader={props.created_at}
      />
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: 1 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.text.split(' ').slice(0, 35).join(' ')}...
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton onClick={handleLoginCheck} aria-label="add to favorites">
              <FavoriteIcon /> {props.number_of_likes}
            </IconButton>
            <IconButton onClick={handleLoginCheck} aria-label="add to favorites">
              <ChatBubbleIcon />{props.number_of_comments}
            </IconButton>
            {/* <Button size="small">Like: {props.likes}</Button> */}
            {/* <Button size="small">Comment: {props.comments}</Button> */}
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={`/${props.image}`}
          alt="Live from space album cover"
        />
      </Box>
    </Card>
  );
}
