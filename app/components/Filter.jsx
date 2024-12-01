// app/components/Filter.jsx
import React, { useState } from "react";

let Filter = ({ setFilter }) => {
  let [title, setTitle] = useState("");
  let [rating, setRating] = useState("");

  let handleFilterChange = () => {
    setFilter({ title, rating });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleFilterChange}>Apply Filter</button>
    </div>
  );
};

export default Filter;
