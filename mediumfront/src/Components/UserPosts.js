import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";

const UserPosts = ({ isNo }) => {
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //     // Fetch posts data from your backend API or any other data source
  //     axios.get('https://api.example.com/posts')
  //         .then(response => {
  //             setPosts(response.data);
  //         })
  //         .catch(error => console.error(error));
  // }, []);

  const getAllPostsData = async () => {
    const mockURL = `https://52e49f36-7a43-4897-8fc0-b87cb414e40b.mock.pstmn.io`;
    const res = await fetch(`${mockURL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("data");
    console.log(data);
    if (res.status === 404) {
      console.log("error in getting users post");
    } else {
      console.log("data");
      setPosts(data);
    }
  };
  useEffect(() => {
    console.log("loaded");
    getAllPostsData();
  }, []);

  const handleDeletePost = async (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    console.log(updatedPosts);
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
  const getAllPosts = async () => {
    const mockURL = `https://52e49f36-7a43-4897-8fc0-b87cb414e40b.mock.pstmn.io`;
    const res = await fetch(`${mockURL}/posts/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 404) {
      console.log("Error 404");
    } else {
      setPosts(data);
    }
  };
  useEffect(() => {
    console.log(posts);
    getAllPosts();
  }, []);
  return (
    <div className="component-container">
      {isNo && (
        <Link className="addPost-link" to={`/addPost`}>
          <h2>Add New Post</h2>
        </Link>
      )}
      {/* Display Filtered Posts */}
      {posts?.map((post, key) => (
        <div className="posts-container" key={post.id}>
          <PostItem key={post.id} post={post} />
          <Link to={`editPost`}>
            <button className="postEdit-button  ">Edit</button>
          </Link>
          <button
            className="postDelete-button"
            onClick={() => handleDeletePost(post.id)}
          >
            Delete
          </button>
          <hr />
        </div>
      ))}
      {/* {posts.map(post => (

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
                        <button className='postEdit-button'>Edit</button>
                    </Link>
                    <button className='postDelete-button' onClick={() => handleDeletePost(post.id)}>Delete</button>
                    <hr />
                </div>
            </div>
        ))} */}
    </div>
  );
};

export default UserPosts;
