import './App.css';
import AllPosts from './AllPosts';
import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';
import ProfilePage from './ProfilePage';
import { useState } from 'react';
import React from 'react';
import NewPostForm from './NewPostForm';
import UserPostsList from './UserPostsList';
import HomePage from './HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const handleLogin = (userData) => {
    // You can add login logic here.
    // For this example, we'll assume successful login and store user data in the state.
    const sampleUser = {
      username: userData.username,
      email: userData.email,
      posts: [
        { id: 1, title: 'Post 1', likes: 10, comments: 5 },
        { id: 2, title: 'Post 2', likes: 20, comments: 8 },
        { id: 3, title: 'Post 3', likes: 5, comments: 2 },
      ],
    };
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
      <div className='app'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/allPosts' element={<AllPosts />} />
          <Route path='/addPost' element={<NewPostForm />} />
          <Route path='/userRegistration' element={<UserRegistration />} />
          <Route path='/userLogin' element={<UserLogin onLogin={handleLogin} />} />
          <Route path='/userProfile' element={<ProfilePage user={user} setUser={setUser} />} />
          <Route path='/userPosts' element={<UserPostsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
