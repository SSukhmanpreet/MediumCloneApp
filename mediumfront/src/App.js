import React, { useEffect, useState } from "react";
import ShowAllPosts from "./Components/ShowAllPosts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import "./App.css";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";
import TopPosts from "./Components/TopPosts";
import Header from "./Components/Header";
import AddPost from "./Components/AddPost";
import axios from "axios";
import PostDetails from "./Components/PostDetails";
import AuthorProfile from "./Components/AuthorProfile";
import PostLater from "./Components/PostLater";
import EditPost from "./Components/EditPost";
import UserPosts from "./Components/UserPosts";
import Homepage from "./Components/Homepage";
import SavedPosts from "./Components/PostLater";
import EditProfile from "./Components/EditProfile";
import Footer from "./Components/Footer";

function App() {
  const [posts, setPosts] = useState([]);

  // const sampleUser = {
  //   username: "sample-user-name",
  //   email: "sample-user-email",
  //   first_name: "sample-user-first_name",
  //   last_name: "sample-user-last_name",
  //   bio: "sample-user-bio",
  //   profile_image: "sample-user-profile_image",
  //   followers: "sample-user-followers",
  //   following: "sample-user-following",
  //   interested_topics: "sample-user-interested_topics",
  //   followedUsers: [
  //     {
  //       userName: "user1",
  //     },
  //     {
  //       userName: "user2",
  //     },
  //     {
  //       userName: "user3",
  //     },
  //   ],
  // };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const sampleUser = {
    username: "sample-user-name",
    email: "sample-user-email",
    first_name: "sample-user-first_name",
    last_name: "sample-user-last_name",
    bio: "sample-user-bio",
    profile_image: "sample-user-profile_image",
    followers: "sample-user-followers",
    following: "sample-user-following",
    interested_topics: "sample-user-interested_topics",
    posts: [
      {
        id: "1",
        title: "Post 1",
        author: "John Doe",
        date: "2023-08-03",
        likes: "10",
        comments: "5",
        topic: "Technol",
        text: "This is the content of post 1...",
        image:
          "https://fastly.picsum.photos/id/365/200/200.jpg?hmac=1d3GDxGN6ctXX3y8q4PA_hKu6fLOCEGbgeKZKJ8K8U8",
      },
      {
        id: "2",
        title: "Post 2",
        author: "Jane Smith",
        date: "2023-08-02",
        likes: "20",
        comments: "8",
        topic: "Travel",
        text: "This is the content of post 2...",
        image:
          "https://fastly.picsum.photos/id/365/200/200.jpg?hmac=1d3GDxGN6ctXX3y8q4PA_hKu6fLOCEGbgeKZKJ8K8U8",
      },
    ],
    followedUsers: [
      {
        userName: "user1",
        authorId: "user1",
      },
      {
        userName: "user2",
        authorId: "user2",
      },
      {
        userName: "user3",
        authorId: "user3",
      },
    ],
    author: [
      {
        authorId: "user1",
      },
      {
        authorId: "user2",
      },
      {
        authorId: "user3",
      },
    ],
  };
  const [user, setUser] = useState(sampleUser);

  const handleLogin = (userData) => {
    // You can add login logic here.
    // For this example, we'll assume successful login and store user data in the state.
    // const sampleUser = {
    //   username: userData.username,
    //   email: userData.email,
    //   posts: [
    //     { id: 1, title: "Post 1", likes: 10, comments: 5 },
    //     { id: 2, title: "Post 2", likes: 20, comments: 8 },
    //     { id: 3, title: "Post 3", likes: 5, comments: 2 },
    //   ],
    // };
    setUser(sampleUser);
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    // You can add logout logic here.
    // For this example, we'll simply reset the state.
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Header posts={posts} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/allposts" element={<ShowAllPosts />} />
          <Route exact path="/add" element={<AddPost />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          <Route
            path="/posts/:id"
            element={<PostDetails posts={sampleUser.posts} />}
          />
          <Route path="/userPosts" element={<UserPosts />} />
          <Route path="/userProfile/editPost" element={<EditPost />} />
          <Route
            exact
            path="/userProfile"
            element={<UserProfile user={user} />}
          />
          <Route
            exact
            path="/author/:id"
            element={<AuthorProfile author={sampleUser.author.author} />}
          />
          <Route path="/editProfile" element={<EditProfile user={user} />} />
          <Route path="profile/saveLater" element={<PostLater />} />
          <Route />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
