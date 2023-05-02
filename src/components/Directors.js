import React from "react";
import { directors } from "../data";

function Directors() {
  const directorItems = directors.map((director) => {
    const movieItems = director.movies.map((movie) => (
      <li key={movie}>{movie}</li>
    ));

    return (
      <div key={director.name}>
        <h2>{director.name}</h2>
        <ul>{movieItems}</ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {directorItems}
    </div>
  );
}

export default Directors;
