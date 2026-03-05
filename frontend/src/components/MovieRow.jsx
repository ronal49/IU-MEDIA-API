import React from 'react';
import MovieCard from './MovieCard';

const MovieRow = ({ title, movies }) => {
  return (
    <div className="movie-row">
      <h2 className="premium-container">{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  );
};

export default MovieRow;
