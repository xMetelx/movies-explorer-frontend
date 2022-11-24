import React, { useState } from "react";
import './Movies.css';
import Header from "../Header/Header";
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

const Movies = ({movies, movieSaved, setMovies, setIsPreloader, saveMovie, deleteMovie, loggedIn}) => {
  const [isInputFilled, setIsInputFilled] = useState(localStorage.getItem('keyword') ? JSON.parse(localStorage.getItem('keyword')) : "");
  const [isFound, setIsFound] = useState(true);

  const handleKeyword = (value) => {
    setIsInputFilled(value);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="content">
        <p className={isFound ? "movie__status-notfound_hide" : "movie__status-notfound"}>Ничего не найдено</p>
        <SearchForm keyword={isInputFilled} isInputFilled={handleKeyword} setMovies={setMovies} setIsPreloader={setIsPreloader} setIsFound={setIsFound} />
        <section className="movies">
            <MoviesCardList movies={movies} saveMovie={saveMovie} deleteMovie={deleteMovie} movieSaved={movieSaved} setIsFound={setIsFound} />
        </section>
      </main>  
      <Footer />
    </>
  )
}

export default Movies;
