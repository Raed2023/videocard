
import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import Search from './components/Search';
import { moviesdata } from './data';

function App() {
  const [movies,setMovies]=useState(moviesdata);
  const [searchValue,setSearchValue]=useState("");
  const [searchRating,setSearchRating]=useState(0);

  const handleadd=(newMovie) => setMovies([...movies,newMovie ])
  const  handlerating=(rate)=>setSearchRating(rate);
  const handleSearch=(e) =>setSearchValue (e.target.value);
  const handleDelete = (id) =>{ const delArr = [...movies].filter((film)=> film.id !== id); setMovies(delArr);}
  const handleEdit =(Editedmovie)=>setMovies (movies.map(el=>el.id===Editedmovie.id?{...el,...Editedmovie}:el))
    
  
    

  
  return (
    <div className="App">
    <Search  searchValue={searchValue} handleRating={handlerating} searchRating={searchRating} handleSearch={handleSearch}  />
    <MovieList handleDelete={handleDelete} movie={movies.filter((movie)=>movie.name.toLowerCase().includes(searchValue.toLowerCase().trim())&& searchRating<movie.rating)}  handleEdit={handleEdit}/>
    <AddMovie  handleadd={handleadd}  />
    
    
    </div>
  );
  }

export default App;
