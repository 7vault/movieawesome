import React from "react";
import SearchIcon from "./search.svg";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="search">
      <input placeholder="Search for movies" onChange={onSearchChange} />
      <img src={SearchIcon} alt="search" onClick={() => {}}></img>
    </div>
  );
};

export default SearchBox;
