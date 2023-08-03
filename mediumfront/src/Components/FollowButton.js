import React, { useState } from "react";

const FollowButton = ({ authorId, isFollowing, onFollowToggle }) => {
  const [isFollowingAuthor, setIsFollowingAuthor] = useState(isFollowing);

  const handleFollowToggle = () => {
    setIsFollowingAuthor((prevState) => !prevState);
    onFollowToggle(authorId, !isFollowingAuthor);
  };

  return (
    <button onClick={handleFollowToggle}>
      {isFollowingAuthor ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
