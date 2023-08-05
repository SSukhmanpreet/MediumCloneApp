import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  CircularProgress,
  Grid, // Add this import
} from "@mui/material";

import FollowButton from "./FollowButton";
import PostItem from "./PostItem";
import UserPosts from "./UserPosts";

const UserProfileContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const UserProfileForm = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(2),
  "& > div": {
    marginBottom: theme.spacing(2),
  },
  "& button": {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const UserStatsContainer = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(4),
  "& p": {
    marginBottom: theme.spacing(1),
  },
}));

const UserPostsContainer = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const OtherAuthorsContainer = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(4),
  "& > div": {
    marginBottom: theme.spacing(2),
    "& h4": {
      marginBottom: theme.spacing(1),
    },
    "& a": {
      textDecoration: "none",
      color: theme.palette.primary.main,
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
}));
const UserProfile = ({ user }) => {
  const [userData, setUserData] = useState(user);
  const [savedPosts, setSavedPosts] = useState([]);

  const [userPosts, setUserPosts] = useState(user.posts);
  const [otherAuthors, setOtherAuthors] = useState(user.followedUsers);
  const [author, setAuthor] = useState(user.author);
  console.log(user);
  // useEffect(async () => {
  //     if (localStorage.getItem('token') === "undefined") {
  //         alert("Please Sign In to continue");
  //         window.location.href = '/userlogin';
  //     }
  //     else {
  //         const givingToken = localStorage.getItem('token');
  //         // console.log(givingToken)
  //         const response = await fetch(`/auth`, {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({
  //                 token: givingToken,
  //             })
  //         })
  //         const data = await response.json()
  //         console.log(data.message);
  //         if (response.status !== 200) {
  //             alert(data.message);
  //             window.location.href = '/userlogin';
  //         }
  //         else {
  //             const res = await fetch(`/users/profile`, {
  //                 method: 'POST',
  //                 headers: {
  //                     'Content-Type': 'application/json',
  //                 },
  //                 body: JSON.stringify({
  //                     token: givingToken,
  //                 })
  //             })
  //             // console.log("after fetch profile")

  //             const data = await res.json();
  //             console.log("data got");
  //             console.log(data);

  //             if (data) {
  //                 setUserData(data);
  //                 setUserPosts(data.posts);
  //                 setFollowedUsers(data.followedUsers);
  //             } else {
  //                 // console.log("no data found");
  //                 alert('Please sign in again');
  //                 window.location.href = '/userlogin';
  //             }
  //         }
  //     }
  // }, [])
  // const handleFollowUser = (userId) => {

  //     setUser((prevUser) => ({
  //         ...prevUser,
  //         followedUsers: [...prevUser.followedUsers, userId],
  //     }));
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getUserData = async () => {
    const mockURL = `https://52e49f36-7a43-4897-8fc0-b87cb414e40b.mock.pstmn.io`;
    const res = await fetch(`${mockURL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 404) {
      console.log("Error 404:Home route");
    } else {
      await setUserData(data);
    }
  };
  useEffect(() => {
    console.log("loaded");
    getUserData();
  }, []);

  const handleFollowToggle = (authorId, isFollowing) => {
    // Send follow/unfollow request to the backend using the JWT token
    const token = localStorage.getItem("token");
    axios
      .post(
        `/api/user/${authorId}/follow`,
        { isFollowing },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle successful follow/unfollow (optional)
        console.log("Follow/unfollow successful!");
      })
      .catch((error) => {
        // Handle follow/unfollow error (optional)
        console.error("Error following/unfollowing author:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send updated user data to the backend
    const token = localStorage.getItem("token");
    axios
      .put("/api/user/profile", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle successful profile update (optional)
        console.log("Profile updated successfully!");
      })
      .catch((error) => {
        // Handle profile update error (optional)
        console.error("Error updating profile:", error);
      });
  };
  const handleSaveForLater = (postId, save) => {
    // Make an HTTP request to the backend to save/unsave the post
    // You'll need to implement this API endpoint on the backend
    axios
      .post("http://localhost:5000/save-for-later", { postId, save })
      .then((response) => {
        // Update the list of saved posts in the state
        setSavedPosts(response.data.savedPosts);
      })
      .catch((error) => {
        console.error("Error saving/unsaving post:", error);
      });
  };
  return (
    <>
      <Container maxWidth="md">
        <UserProfileContainer>
          {/* <Typography variant="h2">User Profile</Typography>
          <Link to={`/user/saveLater`}>View Profile</Link>

          <UserStatsContainer>
            <Typography variant="h3">User Stats</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="body1">
                  Total Likes: {userData.totalLikes}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1">
                  Total Comments: {userData.totalComments}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1">
                  Total Views: {userData.totalViews}
                </Typography>
              </Grid>
            </Grid>
          </UserStatsContainer> */}

          <UserProfileForm onSubmit={handleSubmit}>
            {/* Display user details */}
            {/* <div>
              <Typography variant="h5">
                Username: <span>{userData.username}</span>
              </Typography>
            </div>
            <div>
              <Typography variant="h5">
                Email: <span>{userData.email}</span>
              </Typography>
            </div> */}
            {/* Add other profile fields here */}
            <Link to="/editProfile">
              <Button type="submit" variant="contained" color="primary">
                Edit Profile
              </Button>
            </Link>{" "}
          </UserProfileForm>

          {/* Display user-specific posts with stats */}
          <UserPostsContainer>
            <Typography variant="h3">User Posts</Typography>
            {userPosts.map((post) => (
              <UserPosts isNo={false} />
            ))}
          </UserPostsContainer>

          {/* Display other authors */}
          <OtherAuthorsContainer>
            <Typography variant="h3">Other Authors</Typography>
            {otherAuthors.map((author) => (
              <div key={author.authorId}>
                <Typography variant="h4">{author.username}</Typography>
                <Link to={`/author/${author.authorId}`}>View Profile</Link>
                {/* Pass the necessary props to FollowButton */}
                <FollowButton
                  authorId={author.id}
                  isFollowing={author.isFollowing}
                  onFollowToggle={handleFollowToggle}
                />
              </div>
            ))}
          </OtherAuthorsContainer>
        </UserProfileContainer>
      </Container>
    </>
  );
};

export default UserProfile;
