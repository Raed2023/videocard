import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movie,handleDelete,handleEdit}) => {
  return (
    <div className='movie-list'  >
      {movie.map((film)=>(
      <MovieCard handleDelete={handleDelete} filmz={film} handleEdit={handleEdit} />
      
    ))}
    
    
    
    </div>
  );
};

export default MovieList