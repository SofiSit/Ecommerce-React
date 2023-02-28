import React from "react";

const Search = ({ handleFilter, filter }) => {
  return (
    <div className="searchContainer">
      <input
        className="inputSearch"
        value={filter}
        type="text"
        name="filter"
        placeholder="Search..."
        onChange={handleFilter}
      ></input>
    </div>
  );
};

export default Search;
