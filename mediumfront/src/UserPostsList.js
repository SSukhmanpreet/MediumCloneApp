import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditPostForm from './EditPost';
import { Link } from 'react-router-dom';

const UserPostsList = () => {
    const [posts, setPosts] = useState([{
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
    }]);
    // useEffect(() => {
    //     // Fetch posts data from your backend API or any other data source
    //     axios.get('https://api.example.com/posts')
    //         .then(response => {
    //             setPosts(response.data);
    //         })
    //         .catch(error => console.error(error));
    // }, []);

    // const getAllPostsData = async () => {
    //     const res = await fetch(`/posts`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });
    //     // const data = await res.json();
    //     console.log("data");
    //     // console.log(data);
    //     if (res.status === 404
    //         // || !data
    //     ) {
    //         console.log("Error 404: while getting data in home ");
    //     } else {
    //         console.log("data");
    //         // setPosts(data);
    //         // setResPerPage(data.resPerPage)
    //     }
    // };
    const handleDeletePost = async (postId) => {
        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);

        // const res2 = await fetch(`/posts${id}`, {
        //     method: "DELETE",
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });

        // const deleteData = await res2.json();

        // if (res2.status === 404 || !deleteData) {
        //     console.log("error 404: while deleting data in edit");
        // } else {
        //     alert("Product DELETED from the database");
        //     // getAllPostsData();
        // }
    };
    return (
        <div className='component-container'>
            <Link className='addPost-link' to={`/addPost`}>
                <h2>Add New Post</h2>
            </Link>
            {/* Display Filtered Posts */}
            {posts.map(post => (
                <div className='posts-container' key={post.id}>
                    <div>
                        <Link>
                            <h2 className='postHeading'>{post.title}</h2>
                            <p className='postuser'>user: {post.user}</p>
                            <p className='postDate'>Date: {post.date}</p>
                            <p className='postText'>Text: {post.text}</p>
                            <p className='postTopic'>Topic: {post.topic}</p>
                            <img className='postimage' src='' alt={post.image}></img>
                            <br />
                            <button className='postLike-button'>Likes: {post.likes}</button>
                            <button className='postComments-button'>Comments: {post.comments}</button>
                        </Link>
                        <Link to={`editPost/${post.id}`}>
                            {/* <Button color='warning' variant="contained">Edit</Button> */}
                            <button className='postEdit-button'>Edit</button>
                        </Link>
                        <button className='postDelete-button' onClick={() => handleDeletePost(post.id)}>Delete</button>
                        <hr />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserPostsList;