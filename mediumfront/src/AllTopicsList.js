import React from 'react'
import { Chip } from "@mui/material";
import { useEffect, useState } from "react";

function AllTopicsList() {
    const [topics, setTopics] = useState([]);
    //function to fetch all posts
    const getAllPostsData = async () => {
        fetch(`http://127.0.0.1:3003/?page=1&books_per_page=100000`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log("in then");
                console.log(response);
                if (!response.ok) {
                    // console.log("response not ok");
                    // console.log(response);
                    throw new Error('Network response was not ok. Could not fetch data for that resource');
                }
                // console.log("response ok");
                // console.log(response);
                return response.json();
            })
            .then(data => {
                // const data = res.json();
                console.log("data");
                console.log(data);
                // console.log(data[1].number_of_comments);
                const topicsArray = data.reduce((topics, post) => {
                    return topics.concat(post.topic);
                }, [])
                // Create a Set to store distinct strings
                const uniqueTopicsSet = new Set(topicsArray);
                // Convert the Set back to an array using the spread operator
                const uniqueTopicsArray = [...uniqueTopicsSet];
                const sortedTopics = [...uniqueTopicsArray].sort();
                setTopics(sortedTopics);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };
    //useeffect to fetch all posts
    useEffect(() => {
        console.log("loaded");
        getAllPostsData();
    }, []);

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px ", backgroundColor: "", justifyContent: "start" }}>
            <h6 style={{ margin: "auto 5px" }}>All Topics:</h6>
            {
                topics.map((topic, index) => (
                    <li key={index} style={{  margin: "0px 0px", display: "flex", flexWrap: "wrap" }}>
                        <Chip style={{ margin: "10px 10px", padding: "30px", flex: 1 }} label={topic} value={topic} component="a"  />
                    </li>
                ))
            }
        </div>
    )
}

export default AllTopicsList
