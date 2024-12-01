// app/components/MovieCard.jsx
import React from "react";

const MovieCard = ({ title, posterURL, rating, genre, time }) => {
  return (
    <div className="movie-card border-transparent w-[340px] shadow-lg shadow-black  rounded-md">
      <img
        src={posterURL}
        alt={title}
        className="h-[500px]  rounded-md w-full"
      />
      <div className="p-4">
        <h2 className="text-xl text-orange-600 font-semibold mt-7">{title}</h2>
        <div className="flex gap-3 mt-1">
          <p className="text-sm text-gray-400">{time}</p>
          <p className="flex gap-3 text-sm text-gray-400">
            <span>|</span> <span>{genre}</span>
          </p>
        </div>
        <p className="mt-3">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
