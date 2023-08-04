import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TopicListPage = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Fetch list of topics from the backend API
    axios
      .get("http://localhost:5000/topics")
      .then((response) => {
        setTopics(response.data);
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  return (
    <div>
      <h2>Topic List</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link to={`/topics/${topic.id}`}>{topic.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicListPage;
