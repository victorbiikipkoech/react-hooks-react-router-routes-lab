import React from 'react';
import { movies } from '../path-to-your-data-file';

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies ? (
        movies.map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <p>Time: {movie.time}</p>
            <ul>
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No movie data available.</p>
      )}
    </div>
  );
}

export default Movies;

