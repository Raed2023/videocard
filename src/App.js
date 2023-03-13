import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import Trailers from "./components/Trailers";
import { moviesdata } from "./data";

function App() {
  const [movies, setMovies] = useState(moviesdata);
  const [searchValue, setSearchValue] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const handleadd = (newMovie) => setMovies([...movies, newMovie]);
  const handlerating = (rate) => setSearchRating(rate);
  const handleSearch = (e) => setSearchValue(e.target.value);
  const handleDelete = (id) => {
    const delArr = [...movies].filter((film) => film.id !== id);
    setMovies(delArr);
  };
  const handleEdit = (Editedmovie) =>
    setMovies(
      movies.map((el) =>
        el.id === Editedmovie.id ? { ...el, ...Editedmovie } : el
      )
    );

  return (
    <div className="App">
      <Search
        searchValue={searchValue}
        handleRating={handlerating}
        searchRating={searchRating}
        handleSearch={handleSearch}
      />
      <AddMovie handleadd={handleadd} />

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                handleDelete={handleDelete}
                movie={movies.filter(
                  (movie) =>
                    movie.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase().trim()) &&
                    searchRating < movie.rating
                )}
                handleEdit={handleEdit}
              />
            }
          />
          <Route
            path="/Trailers/:id"
            element={<Trailers list={moviesdata} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
