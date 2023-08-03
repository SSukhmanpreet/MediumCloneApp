import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditPostForm from './EditPostForm';
import { Link } from 'react-router-dom';

const UserPostsList = () => {
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

    const [editingPostId, setEditingPostId] = useState(null);

    useEffect(() => {
        // Fetch posts data from your backend API or any other data source
        axios.get('https://api.example.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleEditPost = (postId) => {
        setEditingPostId(postId);
    };
    const handleSaveEdit = (editedPost) => {
        // In a real application, you would make a PUT request to the backend API
        // to update the post in the database.
        // For this example, we will just update the post in the frontend state.
        const updatedPosts = posts.map(post => (post.id === editedPost.id ? editedPost : post));
        setPosts(updatedPosts);
        setEditingPostId(null);
    };

    const handleCancelEdit = () => {
        setEditingPostId(null);
    };
    const handleDeletePost = (postId) => {
        // In a real application, you would make a DELETE request to the backend API
        // to delete the post from the database.
        // For this example, we will just remove the post from the frontend state.
        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);
    };
    return (
        <div className='component-container'>
            <Link className='addPost-link' to={`/addPost`}>
                <h2>Add New Post</h2>
            </Link>
            {/* Display Filtered Posts */}
            {posts.map(post => (
                <div className='posts-container' key={post.id}>
                    {editingPostId === post.id ? (
                        <>
                            <h2 className='editpost-heading'>Edit Post</h2>
                            <EditPostForm post={post} onSave={handleSaveEdit} />
                            <button className='cancelEdit-button' onClick={handleCancelEdit}>Cancel</button>
                        </>
                    ) : (
                        <Link>
                            <h2 className='postHeading'>{post.title}</h2>
                            <p className='postAuthor'>Author: {post.author}</p>
                            <p className='postDate'>Date: {post.date}</p>
                            <p className='postText'>Text: {post.text}</p>
                            <p className='postTopic'>Topic: {post.topic}</p>
                            <img className='postFeaturedImage' src='' alt={post.featuredImage}></img>
                            <button className='postLike-button'>Likes: {post.likes}</button>
                            <button className='postComments-button'>Comments: {post.comments}</button>
                            <button className='postEdit-button' onClick={() => handleEditPost(post.id)}>Edit</button>
                            <button className='postDelete-button' onClick={() => handleDeletePost(post.id)}>Delete</button>
                            <hr />
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
};

export default UserPostsList;