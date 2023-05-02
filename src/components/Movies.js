import React from "react";
import { movies } from "../data";

const Movies = () => {
  const movieItems = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const genreItems = [];
    for (let j = 0; j < movie.genres.length; j++) {
      const genre = movie.genres[j];
      genreItems.push(<li key={genre}>{genre}</li>);
    }
    movieItems.push(
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <p>Runtime: {movie.time} min.</p>
        <ul>{genreItems}</ul>
      </div>
    );
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {movieItems}
    </div>
  );
};

export default Movies;
