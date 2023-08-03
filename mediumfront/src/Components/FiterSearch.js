import React from "react";

const FilterSearch = ({ handleFilter, handleSearch }) => {
  return (
    <div>
      <label htmlFor="filter">Filter By:</label>
      <select id="filter" onChange={handleFilter}>
        <option value="">--Select--</option>
        <option value="author">Author</option>
        <option value="date">Date</option>
        <option value="likes">Number of Likes</option>
        <option value="comments">Number of Comments</option>
      </select>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
    </div>
  );
};

export default FilterSearch;
