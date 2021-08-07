import React from "react";
import '../styles/Searchbar.css';

const Searchbar = ({ handleSearch }) => {
  return (
    <div className="searchBar">
      <div className="searchBar__content">
        <p className="searchBar__title">Filter Colleagues</p>
        <input
          className="searchBar__input"
          onChange={handleSearch}
          type="search"
          name="staff-search"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Searchbar;
