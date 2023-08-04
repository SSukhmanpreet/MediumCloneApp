import './App.css';
import AllPosts from './AllPosts';
import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';
import UserProfile from './UserProfile';
import { useState } from 'react';
import React from 'react';
import AddNewPost from './AddNewPost';
import UserPostsList from './UserPostsList';
import HomePage from './HomePage';
import EditPost from './EditPost';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDetails from './PostDetails';
import UsersList from './UsersLIst';

const MainPage = () => {
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
                title: "post1",
                user: "user1",
                date: "1st",
                likes: "l1",
                comments: "c1",
                id: "1",
                topic: "t1",
                image: "i1",
                text: "tx1",
            }, {
                title: "post2",
                user: "user2",
                date: "2nd",
                likes: "l2",
                comments: "c2",
                id: "2",
                topic: "t2",
                image: "i2",
                text: "tx2",
            }, {
                title: "post3",
                user: "user3",
                date: "3rd",
                likes: "l3",
                comments: "c3",
                id: "3",
                topic: "t3",
                image: "i3",
                text: "tx3",
            }
        ],
        followedUsers: [{
            userName: "user1",
        }, {
            userName: "user2",
        }, {
            userName: "user3",
        },]
    };
    const [user, setUser] = useState(sampleUser);
    const handleLogin = (userData) => {
        // You can add login logic here.
        // For this example, we'll assume successful login and store user data in the state.
        // const sampleUser = {
        //   username: userData.username,
        //   email: userData.email,
        //   posts: [
        //     { id: 1, title: 'Post 1', likes: 10, comments: 5 },
        //     { id: 2, title: 'Post 2', likes: 20, comments: 8 },
        //     { id: 3, title: 'Post 3', likes: 5, comments: 2 },
        //   ],
        // };
        setUser(sampleUser);
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        // You can add logout logic here.
        // For this example, we'll simply reset the state.
        setUser(null);
        setIsLoggedIn(false);
    };
    return (
        <Router>
            <div className='mainPage'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/allPosts' element={<AllPosts />} />
                    <Route path='/addPost' element={<AddNewPost />} />
                    <Route path='/userRegistration' element={<UserRegistration />} />
                    <Route path='/userLogin' element={<UserLogin onLogin={handleLogin} />} />
                    <Route path='/userProfile' element={<UserProfile user={user} />} />
                    <Route path='/userPosts' element={<UserPostsList />} />
                    <Route path='/userPosts/editPost/:id' element={<EditPost posts={sampleUser.posts} />} />
                    <Route path='/allPosts/:id' element={<PostDetails posts={sampleUser.posts} />} />
                    <Route path='/allUsers' element={<UsersList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default MainPage;
