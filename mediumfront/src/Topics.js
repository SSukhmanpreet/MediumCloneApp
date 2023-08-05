import { Chip } from "@mui/material";
import { useEffect, useState } from "react";

const AllTopics = () => {
    const [topics, setTopics] = useState([]);
    //function to fetch all posts
    const getAllPostsData = async () => {
        const mockURL = `https://7c5df6d5-e40e-40f9-bdd2-4e8319aa7075.mock.pstmn.io`;
        const res = await fetch(`${mockURL}/posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log("data");
        console.log(data);
        const topicsArray = data.reduce((topics, post) => {
            return topics.concat(post.topic);
        }, [])
        if (res.status === 404
            // || !data
        ) {
            console.log("Error 404: while getting data in home ");
        } else {
            setTopics(topicsArray);
        }
    };
    //useeffect to fetch all posts
    useEffect(() => {
        console.log("loaded");
        getAllPostsData();
    }, []);

    const handleTopicClick = () => {
        window.location.href = '/allposts';
    }
    return (
        <div style={{ display: "flex", backgroundColor:"", justifyContent:"start", overflow: "auto"}}>
            <h6 style={{margin: "auto 5px"}}>Hot Topics:</h6>
            {
                topics.map((topic, index) => (
                    <li key={index} style={{ display: "inline", margin: "0px 0px", display: "flex" }}>
                        <Chip style={{ margin: "10px 10px", flex: 1 }} label={topic} value={topic} component="a" onClick={handleTopicClick} clickable />
                    </li>
                ))
            }
        </div>
    )
}
export default AllTopics;