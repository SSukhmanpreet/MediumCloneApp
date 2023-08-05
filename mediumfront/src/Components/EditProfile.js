import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Avatar,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const UserStatsContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

const UserProfileContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const UserProfileForm = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > div": {
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

const EditProfile = ({ user }) => {
  const [userData, setUserData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  const handleUsernameChange = (event) => {
    setUserData({ ...userData, username: event.target.value });
  };

  const handleEmailChange = (event) => {
    setUserData({ ...userData, email: event.target.value });
  };

  const handleSave = () => {
    // Save the edited user data here (you can call an API to save the changes)
    // For this example, we'll just log the edited data to the console
    console.log("Edited User Data:", userData);
    setIsEditing(false);
  };

  return (
    <UserProfileContainer>
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
      </UserStatsContainer>
      <UserProfileForm>
        {/* Display user details */}
        <div>
          <Avatar
            sx={{ bgcolor: "#3f51b5", width: 80, height: 80 }}
            aria-label="avatar"
          >
            {userData.username.charAt(0).toUpperCase()}
          </Avatar>
        </div>
        <div>
          {isEditing ? (
            <TextField
              id="username"
              label="Username"
              value={userData.username}
              onChange={handleUsernameChange}
            />
          ) : (
            <Typography variant="h5">
              Username: <span>{userData.username}</span>
            </Typography>
          )}
        </div>
        <div>
          {isEditing ? (
            <TextField
              id="email"
              label="Email"
              value={userData.email}
              onChange={handleEmailChange}
            />
          ) : (
            <Typography variant="h5">
              Email: <span>{userData.email}</span>
            </Typography>
          )}
        </div>
        {/* Add other profile fields here */}
        {isEditing ? (
          <>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsEditing(true)}
          >
            Save
          </Button>
        )}
      </UserProfileForm>
    </UserProfileContainer>
  );
};

export default EditProfile;
