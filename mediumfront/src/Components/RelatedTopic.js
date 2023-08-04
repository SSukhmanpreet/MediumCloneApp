import React, { useState, useEffect } from "react";
import axios from "axios";

const RelatedTopicsPage = ({ match }) => {
  const [topic, setTopic] = useState(null);
  const [relatedTopics, setRelatedTopics] = useState([]);

  useEffect(() => {
    // Fetch the selected topic based on the URL parameter
    const topicId = match.params.id;
    axios
      .get(`/api/topics/${topicId}`)
      .then((response) => {
        setTopic(response.data);
        // Fetch related topics based on the selected topic
        axios
          .get(`/api/topics/related/${topicId}`)
          .then((response) => {
            setRelatedTopics(response.data);
          })
          .catch((error) => {
            console.error("Error fetching related topics:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching topic:", error);
      });
  }, [match.params.id]);

  return (
    <div>
      {topic && (
        <div>
          <h2>{topic.name}</h2>
          <p>{topic.description}</p>
        </div>
      )}
      <h3>Related Topics</h3>
      <ul>
        {relatedTopics.map((relatedTopic) => (
          <li key={relatedTopic.id}>{relatedTopic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedTopicsPage;
