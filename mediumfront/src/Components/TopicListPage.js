import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TopicListPage = () => {
  const [posts, setPosts] = useState([
    // {
    //     title: "post1",
    //     user: "user1",
    //     date: "1st",
    //     likes: "l1",
    //     comments: "c1",
    //     id: "1",
    //     topic: "t1",
    //     image: "i1",
    //     text: "tx1",
    // }, {
    //     title: "post2",
    //     user: "user2",
    //     date: "2nd",
    //     likes: "l2",
    //     comments: "c2",
    //     id: "2",
    //     topic: "t2",
    //     image: "i2",
    //     text: "tx2",
    // }, {
    //     title: "post3",
    //     user: "user3",
    //     date: "3rd",
    //     likes: "l3",
    //     comments: "c3",
    //     id: "3",
    //     topic: "t3",
    //     image: "i3",
    //     text: "tx3",
    // }
  ]);
  // const [filteredPosts, setFilteredPosts] = useState([]);
  const getAllPostsData = async () => {
    const mockURL = `https://c131894a-7f04-47db-919b-a75f0fc73a55.mock.pstmn.io`;
    const res = await fetch(`${mockURL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("data");
    console.log(data);
    if (
      res.status === 404
      // || !data
    ) {
      console.log("Error 404: while getting data in home ");
    } else {
      console.log("data");
      setPosts(data);
    }
  };
  useEffect(() => {
    console.log("loaded");
    getAllPostsData();
  }, []);

  return (
    <div className="component-container">
      <Link className="addPost-link" to={`/addPost`}>
        <h2>Add New Post</h2>
      </Link>
      {posts.map((post, key) => (
        <div className="posts-container" key={post.id}>
          <PostCard key={key} {...post}></PostCard>
          {/* <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon /> {post.likes}
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <ChatBubbleIcon />{post.comments}
                </IconButton>
            </CardActions> */}
        </div>
      ))}
    </div>
  );
};

export default TopicListPage;
