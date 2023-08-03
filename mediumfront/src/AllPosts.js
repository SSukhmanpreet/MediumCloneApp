import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';

const AllPosts = () => {
    const [posts, setPosts] = useState([{
        title: "post1",
        author: "author1",
        date: "1st",
        likes: "l1",
        comments: "c1",
        id: "1",
        topic: "t1",
        featuredImage: "i1",
        text: "tx1",
    }, {
        title: "post2",
        author: "author2",
        date: "2nd",
        likes: "l2",
        comments: "c2",
        id: "2",
        topic: "t2",
        featuredImage: "i2",
        text: "tx2",
    }, {
        title: "post3",
        author: "author3",
        date: "3rd",
        likes: "l3",
        comments: "c3",
        id: "3",
        topic: "t3",
        featuredImage: "i3",
        text: "tx3",
    }]);
    // const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        // Fetch posts data from your backend API or any other data source
        axios.get('https://api.example.com/posts')
            .then(response => {
                setPosts(response.data);
                // setFilteredPosts(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='component-container'>
            <Link className='addPost-link' to={`/addPost`}>
                <h2>Add New Post</h2>
            </Link>
            {/* Display Filtered Posts */}
            {posts.map(post => (
                <div className='posts-container' key={post.id}>
                    <Link>
                        <h2 className='postHeading'>{post.title}</h2>
                        <p className='postAuthor'>Author: {post.author}</p>
                        <p className='postDate'>Date: {post.date}</p>
                        <p className='postText'>Text: {post.text}</p>
                        <p className='postTopic'>Topic: {post.topic}</p>
                        <img className='postFeaturedImage' src='' alt={post.featuredImage}></img>
                        <button className='postLike-button'>Likes: {post.likes}</button>
                        <button className='postComments-button'>Comments: {post.comments}</button>
                        <hr />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AllPosts;