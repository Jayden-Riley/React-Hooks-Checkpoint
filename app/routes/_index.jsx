// app/routes/index.jsx
import React, { useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MovieList from "../components/Movielist";

import Filter from "../components/Filter";

// loader function to fetch the data
export let loader = async () => {
  return json({
    movies: [
      {
        title: "House Of The dragons",
        genre: "action,drama",
        time: "130 mins",
        posterURL:
          "https://i.pinimg.com/736x/24/4c/cb/244ccbd34860722171b8d86e0eb7bf4d.jpg",
        rating: 9.0,
      },
      {
        title: "Red Wing",
        genre: "action",
        time: "105 mins",
        posterURL:
          "https://i.pinimg.com/736x/41/16/23/411623d2d0aa686c307d25ebdaa4d262.jpg",
        rating: 8.7,
      },
      {
        title: "Venom",
        genre: "action",
        time: "150 mins",
        posterURL:
          "https://i.pinimg.com/736x/fb/ee/9c/fbee9c46339622f61b9f09ded526d8b8.jpg",
        rating: 8.2,
      },
      {
        title: "Mortal Kombat 11",
        genre: "action,thriller",
        time: "90 mins",
        posterURL:
          "https://i.pinimg.com/236x/c8/82/33/c88233c0d08499e11adb2fc2fcaab588.jpg",
        rating: 9.5,
      },
      {
        title: "The Legend Of Kora",
        genre: "action,drama",
        time: "110 mins",
        posterURL:
          "https://i.pinimg.com/736x/41/c1/aa/41c1aac9acf0f28b993c77ef852ee46b.jpg",
        rating: 9.0,
      },
      {
        title: "Forza Horizon",
        genre: "action",
        time: "120 mins",
        posterURL:
          "https://i.pinimg.com/736x/e3/ae/64/e3ae646419678185f56ec44022b38779.jpg",
        rating: 8.0,
      },
    ],
  });
};

// React component for rendering the movie app
let Index = () => {
  let { movies } = useLoaderData();
  let [filter, setFilter] = useState({ title: "", rating: "" });

  // Filter the movies based on the filter state
  let filteredMovies = movies.filter((movie) => {
    return (
      (filter.title
        ? movie.title.toLowerCase().includes(filter.title.toLowerCase())
        : true) &&
      (filter.rating ? movie.rating >= parseFloat(filter.rating) : true)
    );
  });

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center mt-5">Movie App</h1>
      <Filter setFilter={setFilter} className="border border-red-700" />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Index;
