import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = ({ posts }) => {
    const { id } = useParams();
    console.log("id");
    console.log(id);
    const [currentPost, setCurrentPost] = useState(
        // {} ||
        posts.find(x => x.id === id));
    console.log(currentPost);

    // const getPostData = async () => {
    //     const res = await fetch(`/posts/${id}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });

    //     const data = await res.json();

    //     if (res.status === 404 || !data) {
    //         // console.log("Error while getting data in post details");
    //     } else {
    //         // setPostData(data);
    //         console.log("data");
    //         console.log(data);
    //         setCurrentPost(data);
    //     }
    // };

    // useEffect(async () => {
    //     // getPostData();
    //     // if (localStorage.getItem('token') === "undefined") {
    //     //     alert("Please Sign In to continue");
    //     //     window.location.href = '/userLogin';
    //     // }
    //     // else {
    //     //     const givingToken = localStorage.getItem('token');
    //     //     console.log("givingToken");
    //     //     console.log(givingToken);
    //     //     const response = await fetch(`/auth`, {
    //     //         method: 'POST',
    //     //         headers: {
    //     //             'Content-Type': 'application/json',
    //     //         },
    //     //         body: JSON.stringify({
    //     //             token: givingToken,
    //     //         })
    //     //     })
    //     //     const data = await response.json()
    //     //     // console.log(data.message)
    //     //     if (response.status !== 200) {
    //     //         alert(data.message)
    //     //         window.location.href = '/userLogin'
    //     //     }
    //     // }
    // }, []);
    return (
        <div className='component-container'>
            <div>
                <h1>Post Details</h1>
            </div>
            <div className='posts-container' key={currentPost.id}>
                <h2 className='postHeading'>{currentPost.title}</h2>
                <p className='postuser'>user: {currentPost.user}</p>
                <p className='postDate'>Date: {currentPost.date}</p>
                <p className='postText'>Text: {currentPost.text}</p>
                <p className='postTopic'>Topic: {currentPost.topic}</p>
                <img className='postimage' src='' alt={currentPost.image}></img>
                <br />
                <button className='postLike-button'>Likes: {currentPost.likes}</button>
                <button className='postComments-button'>Comments: {currentPost.comments}</button>
            </div >
            <hr />
        </div>
    )
}

export default PostDetails;