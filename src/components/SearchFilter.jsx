import React from "react";

function SearchFilter({ onSearch, onFilter, onSort }) {
  return (
    <div className="search-filter">
      <input placeholder="Search..." onChange={(e) => onSearch(e.target.value)} />
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All Departments</option>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
      </select>
      <button onClick={() => onSort("lastName")}>Sort by Last Name</button>
    </div>
  );
}

export default SearchFilter;
