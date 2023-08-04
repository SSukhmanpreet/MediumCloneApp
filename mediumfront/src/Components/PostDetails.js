import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = ({ posts }) => {
  const { id } = useParams();
  console.log("id");
  console.log(id);
  const [currentPost, setCurrentPost] = useState(
    // {} ||
    posts.find((x) => x.id === id)
  );
  console.log(currentPost);
  const wordsPerMinute = 200;
  const content = currentPost.text;
  const calculateReadingTime = (content) => {
    const wordCount = content.trim().split(/\s+/).length; // Count words in the content
    const readingTime = Math.ceil(wordCount / wordsPerMinute); // Calculate reading time in minutes
    return readingTime;
  };
  const readingTime = calculateReadingTime(content);
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
    <div className="component-container">
      <div>
        <h1>Post Details</h1>
      </div>
      <div key={currentPost.id}>
        <h2>{currentPost.title}</h2>
        <p>user: {currentPost.author}</p>
        <p>Date: {currentPost.date}</p>
        <p>Text: {currentPost.text}</p>
        <p>Topic: {currentPost.comments}</p>
        <p>
          Reading Time: {readingTime} minute{readingTime !== 1 && "s"}
        </p>
        <img className="postimage" src="" alt={currentPost.img}></img>
        <br />
        <button className="postLike-button">Likes: {currentPost.likes}</button>
        <button className="postComments-button">
          Comments: {currentPost.comments}
        </button>
      </div>
      <hr />
    </div>
  );
};

export default PostDetails;
