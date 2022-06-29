import React from "react";
import MovieItem from "./MovieItem";
import "./MoviesList.css";

const MoviesList = ({ items }) => {
  return (
    <ul className="movies-list">
      {items.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          imageUrl={movie.imageUrl}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
