import React, { useState } from "react";

import { Navigate, useParams } from "react-router-dom";

const EditPost = ({ post, onUpdatePost, onCloseEditForm }) => {
  const { id } = useParams();
  const [editedPost, setEditedPost] = useState({ ...post });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdatePost(editedPost);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleCancelEdit = () => {
    setEditedPost(null);
    window.location.href = `/userposts`;
  };
  const updatePostData = async (e) => {
    e.preventDefault();
    console.log(editedPost);
    window.location.href = `/userposts`;
    // const formData = new FormData();
    // formData.append("updatePost", editedPost);
    // axios.patch(`/posts/${id}`, formData)
    //     .then(() => {
    //         alert('Post Updated in Database')
    //         window.location.href = `/userposts`;
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
  };

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
  //         setEditedPost(data);
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
    <div>
      <h2>Edit Post</h2>
      <form className="edit-post-form">
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={editedPost.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Topic:</label>
          <input
            type="text"
            name="topic"
            value={editedPost.topic}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={editedPost.image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Text:</label>
          <textarea
            name="text"
            value={editedPost.text}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" onClick={updatePostData}>
          Save Changes
        </button>
        <button className="cancelEdit-button" onClick={handleCancelEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditPost;
