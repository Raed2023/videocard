
import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import Search from './components/Search';
import { moviesdata } from './data';

function App() {
  const [movies,setMovies]=useState(moviesdata);
  const handleadd=(newMovie) => setMovies([...movies,newMovie ])
  return (
    <div className="App">
    <Search/>
    <MovieList  movie={movies} />
    <AddMovie  handleadd={handleadd} />
    
    </div>
  );
}

export default App;
