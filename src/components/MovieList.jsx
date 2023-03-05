import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movie}) => {
  return (
    <div className='movie-list'  >
      {movie.map((film)=>(
      <MovieCard  filmz={film}  />
    ))}
    
    
    </div>
  );
};

export default MovieList