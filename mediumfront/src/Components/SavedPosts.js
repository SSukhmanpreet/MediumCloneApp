import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";

const SavedPosts = ({ user }) => {
  // Fetch all posts from the API
  const [posts, setPosts] = useState([]);
  const [filterBy, setFilterBy] = useState(""); // 'author', 'date', 'likes', 'comments'
  const [searchInput, setSearchInput] = useState("");
  const [editingPost, setEditingPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const getAllPosts = async () => {
    const mockURL = `https://52e49f36-7a43-4897-8fc0-b87cb414e40b.mock.pstmn.io`;
    const res = await fetch(`${mockURL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 404) {
      console.log("Error 404:Home route");
    } else {
      setPosts(data);
    }
  };
  useEffect(() => {
    console.log("loaded");
    getAllPosts();
  }, []);

  // Function to handle filtering posts
  const handleFilter = (event) => {
    setFilterBy(event.target.value);
  };

  // Function to handle searching posts
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };
  // Function to handle adding a new post
  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        ...newPost,
        id: Date.now(),
      },
    ]);
  };

  // Filter and search the posts based on user input
  const filteredPosts = posts?.filter((post) => {
    if (filterBy === "title" && searchInput) {
      return post.title.toLowerCase()?.includes(searchInput.toLowerCase());
    } else if (filterBy === "author" && searchInput) {
      return post.author.toLowerCase()?.includes(searchInput.toLowerCase());
    } else if (filterBy === "date" && searchInput) {
      return post.created_at.includes(searchInput);
    } else if (filterBy === "likes" && searchInput) {
      return post.number_of_likes.toString()?.includes(searchInput);
    } else if (filterBy === "comments" && searchInput) {
      return post.number_of_comments.toString()?.includes(searchInput);
    }
    return true; // If no filter is applied or no search input, show all posts
  });

  // Function to handle editing form opening
  const handleEditPost = (post) => {
    setEditingPost(post);
    setIsEditing(true);
  };

  // Function to handle editing form closing
  const handleCloseEditForm = () => {
    setEditingPost(null);
    setIsEditing(false);
  };

  // Function to handle updating a post
  const handleUpdatePost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts?.map((post) =>
        post.id === updatedPost.id ? { ...post, ...updatedPost } : post
      )
    );
    handleCloseEditForm();
  };
  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts?.filter((post) => post.id !== postId));
  };

  return (
    <div>
      {/* <h1>Show All Posts</h1> */}
      {/* Add New Post Form
       <AddPost onAddPost={handleAddPost} /> */}
      {/* Edit Post Form */}
      <a href="/add">Add-Posts</a>
      {/* {isEditing && (
         <EditPost
           post={editingPost}
           onUpdatePost={handleUpdatePost}
           onCloseEditForm={handleCloseEditForm}
         />
       )} */}
      {/* Filter and Search */}
      <FilterSearch handleFilter={handleFilter} handleSearch={handleSearch} />
      {/* Display filtered posts */}
      {filteredPosts?.map((post) => (
        <>
          <PostItem
            key={post.id}
            post={post}
            onDeletePost={() => handleDeletePost(post.id)}
            onEditPost={handleEditPost}
            isEditing={isEditing}
          />
        </>
      ))}
    </div>
  );
};

export default SavedPosts;
