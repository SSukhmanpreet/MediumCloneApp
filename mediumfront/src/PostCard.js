// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }










import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export default function PostCard(props) {

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
        <Box sx={{flex : 1}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.text.split(' ').slice(0, 35).join(' ')}...
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon /> {props.likes}
            </IconButton>
            <IconButton aria-label="add to favorites">
              <ChatBubbleIcon />{props.comments}
            </IconButton>
            {/* <Button size="small">Like: {props.likes}</Button> */}
            {/* <Button size="small">Comment: {props.comments}</Button> */}
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={`/no_image2.png`}
          alt="Live from space album cover"
        />
      </Box>
    </Card>
  );
}
