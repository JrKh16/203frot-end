import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Header } from "./components/header";
import { getAllMovies, createMovie, searchMovie } from "./service/MovieService";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieFormModal from "./components/MovieForm";

function App() {
  /* Modal */
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  const handleInsertClick = () => {
    handleToggleModal();
  };
  /* showMovie */
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [numberOfMovies, setNumberOfMovies] = useState(0);

  useEffect(() => {
    getAllMovies().then((movies) => {
      console.log(movies);
      setMovies(movies);
      setNumberOfMovies(movies.length);
    });
  }, []);

  const MovieInsert = (e) => {
    console.log(movie);
    createMovie(movie).then((response) => {
      console.log(response);
      getAllMovies().then((movies) => {
        console.log(movies);
        setMovies(movies);
        setNumberOfMovies(movies.length);
      });
      setNumberOfMovies(numberOfMovies + 1);
    });
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    searchMovie(e.target.value).then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };

  const onChangeForm = (e) => {
    if (e.target.id === "formTitle") {
      movie.title = e.target.value;
    } else if (e.target.id === "formGenre") {
      movie.genre = e.target.value;
    } else if (e.target.id === "formDirector") {
      movie.director = e.target.value;
    } else if (e.target.id === "formReleaseYear") {
      movie.releaseYear = e.target.value;
    } else if (e.target.id === "formImage") {
      movie.image = e.target.files[0];
    }
    setMovie(movie);
  };

  return (
    <div className="App">
      <Header
        onInsertClick={handleInsertClick}
        onSearch={handleSearch}
        numberOfMovies={numberOfMovies}
      />
      <MovieFormModal
        showModal={showModal}
        handleClose={handleToggleModal}
        onChangeForm={onChangeForm}
        createMovie={MovieInsert}
      />
      <div className="movies">
        {movies && Array.isArray(movies) ? (
          movies.map((moviee) => <MovieCard key={moviee.id} {...moviee} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
