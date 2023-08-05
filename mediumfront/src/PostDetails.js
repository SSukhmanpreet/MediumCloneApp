import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from './PostCard';

const PostDetails = ({ posts }) => {
    const { id } = useParams();
    console.log("id");
    console.log(id);

    const [currentPost, setCurrentPost] = useState(
        // {} ||
        posts.find(x => x.id === id));
    console.log(posts.find(x => x.id === id));
    console.log(currentPost);
    const randomData = [];
    for (var i = 0; i < posts.length; i++) {
        randomData[i] = posts[i];
    }
    const [arrProd, setArrProd] = useState(
        randomData.sort(() => 0.5 - Math.random())
    );

    const getPostData = async () => {
        //uncomment if you have set the api
        // const mockURL = ``;
        // const res = await fetch(`https://7c5df6d5-e40e-40f9-bdd2-4e8319aa7075.mock.pstmn.io/posts/?${id}`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });

        // // console.log(await res.json());
        // const data = await res.json();

        // if (res.status === 404 || !data) {
        //     console.log("Error while getting data in post details");
        // } else {
        //     console.log("data");
        //     console.log(data);
        //     setCurrentPost(data);
        //     const randomData = [];
        //     for (var i = 0; i < data.length; i++) {
        //         randomData[i] = data[i];
        //     }
        //     setArrProd(randomData.sort(() => 0.5 - Math.random()))

        // }
    };

    useEffect(() => {
        getPostData();
        //uncomment if you have set the api
        // if (localStorage.getItem('token') === "undefined") {
        //     alert("Please Sign In to continue");
        //     window.location.href = '/userLogin';
        // }
        // else {
        //     const givingToken = localStorage.getItem('token');
        //     console.log("givingToken");
        //     console.log(givingToken);
        //     const response = await fetch(`/auth`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             token: givingToken,
        //         })
        //     })
        //     const data = await response.json()
        //     // console.log(data.message)
        //     if (response.status !== 200) {
        //         alert(data.message)
        //         window.location.href = '/userLogin'
        //     }
        // }
    }, []);
    return (
        <div className='component-container'>
            <div className='posts-container' key={currentPost.id}>
                <h1 className='postHeading'>{currentPost.title}</h1>
                <p className='postuser'>user: {currentPost.user}</p>
                <p className='postDate'>Date: {currentPost.date}</p>
                <img className='postimage' src={'/'+ currentPost.image} alt="image here"></img>
                <p className='postText'>Text: {currentPost.text}</p>
                <p className='postTopic'>Topic: {currentPost.topic+" "}</p>
                <p className='postTopic'>Reading Time: {currentPost.reading_time_mins + " mins"}</p>
                <br />
                <button className='postLike-button'>Likes: {currentPost.likes}</button>
                <button className='postComments-button'>Comments: {currentPost.comments}</button>
            </div >
            <hr />
            <div>
                <h2>Similar Posts:</h2>
                {arrProd.slice(0, 4).map((post, key) => (
                    <div className='posts-container' key={post.id}>
                        <PostCard key={key} {...post}></PostCard>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostDetails;