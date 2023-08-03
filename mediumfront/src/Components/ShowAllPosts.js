import React, { useState } from "react";
import PostItem from "./PostItem";
import FilterSearch from "./FiterSearch";
import AddPost from "./AddPost";
import EditPost from "./EditPost";

const ShowAllPosts = () => {
  // Sample data for posts (you can fetch this from an API or database in a real use case)
  const initialPosts = [
    {
      id: 1,
      title: "Post 1",
      author: "John Doe",
      date: "2023-08-03",
      likes: 10,
      comments: 5,
      topic: "Technology",
      text: "This is the content of post 1...",
    },
    {
      id: 2,
      title: "Post 2",
      author: "Jane Smith",
      date: "2023-08-02",
      likes: 20,
      comments: 8,
      topic: "Travel",
      text: "This is the content of post 2...",
    },
    // Add more posts here
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [filterBy, setFilterBy] = useState(""); // 'author', 'date', 'likes', 'comments'
  const [searchInput, setSearchInput] = useState("");
  const [editingPost, setEditingPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
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
  const filteredPosts = posts.filter((post) => {
    if (filterBy === "" && searchInput) {
      return post.title.toLowerCase().includes(searchInput.toLowerCase());
    } else if (filterBy === "author" && searchInput) {
      return post.author.toLowerCase().includes(searchInput.toLowerCase());
    } else if (filterBy === "date" && searchInput) {
      return post.date.includes(searchInput);
    } else if (filterBy === "likes" && searchInput) {
      return post.likes.toString().includes(searchInput);
    } else if (filterBy === "comments" && searchInput) {
      return post.comments.toString().includes(searchInput);
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
      prevPosts.map((post) =>
        post.id === updatedPost.id ? { ...post, ...updatedPost } : post
      )
    );
    handleCloseEditForm();
  };
  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div>
      {/* <h1>Show All Posts</h1> */}
      {/* Add New Post Form
      <AddPost onAddPost={handleAddPost} /> */}
      {/* Edit Post Form */}
      {isEditing && (
        <EditPost
          post={editingPost}
          onUpdatePost={handleUpdatePost}
          onCloseEditForm={handleCloseEditForm}
        />
      )}
      {/* Filter and Search */}
      <FilterSearch handleFilter={handleFilter} handleSearch={handleSearch} />
      {/* Display filtered posts */}
      {filteredPosts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onDeletePost={() => handleDeletePost(post.id)}
          onEditPost={handleEditPost}
        />
      ))}
      {/* Edit Post Form */}
      {isEditing && (
        <EditPost
          post={editingPost}
          onUpdatePost={handleUpdatePost}
          onCloseEditForm={handleCloseEditForm}
        />
      )}
    </div>
  );
};

export default ShowAllPosts;
