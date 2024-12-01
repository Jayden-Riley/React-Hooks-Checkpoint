// app/components/MovieList.jsx
import React from "react";
import MovieCard from "./Moviecard";

let MovieList = ({ movies }) => {
  return (
    <div className=" grid grid-cols-3 px-9 py-10 gap-8">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          posterURL={movie.posterURL}
          rating={movie.rating}
          genre={movie.genre}
          time={movie.time}
        />
      ))}
    </div>
  );
};

export default MovieList;
