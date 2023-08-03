import React from "react";
import ShowAllPosts from "./Components/ShowAllPosts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";
import TopPosts from "./Components/TopPosts";
import Header from "./Components/Header";
import AddPost from "./Components/AddPost";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ShowAllPosts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/top-posts" element={<TopPosts />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/profile" element={<UserProfile />} />
          <Route exact path="/add" element={<AddPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
