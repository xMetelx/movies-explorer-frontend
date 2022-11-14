import React, { useState } from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";

const SavedMovies = ({movieSaved, setMovieSaved, deleteMovie, setIsPreloader, loggedIn}) => {
  const [isInputFilled, setIsInputFilled] = useState('');
  const [isFound, setIsFound] = useState(true);

  const handleKeyword = (value) => {
    setIsInputFilled(value);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="content">
      <p className={isFound ? "movie__status-notfound_hide" : "movie__status-notfound"}>Ничего не найдено</p>
        <SearchForm keyword={isInputFilled} isInputFilled={handleKeyword} setIsPreloader={setIsPreloader} setMovieSaved={setMovieSaved} movieSaved={movieSaved} setIsFound={setIsFound}/>
        <section className="movies">
          <MoviesCardList movieSaved={movieSaved} deleteMovie={deleteMovie}/>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
