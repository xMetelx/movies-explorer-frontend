import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import { DESKTOP_MOVIES_AMOUNT, MOBILE_MOVIES_AMOUNT, MOBILE_WIDTH } from "../../../utils/constants";

const MoviesCardList = ({movies, movieSaved, saveMovie, deleteMovie}) => {
  const [showedMovies, setShowedMovies] = useState(0);

  function getSavedMoviesList(movie) {
    const findList = JSON.parse(localStorage.getItem('movieSaved'));
    return findList.find(saved => saved.id === movie.id )
  }

  const showList = () => {
    if (window.innerWidth < MOBILE_WIDTH) {
      return setShowedMovies(MOBILE_MOVIES_AMOUNT)
    } else {
      return setShowedMovies(DESKTOP_MOVIES_AMOUNT)
    }
  }

  useEffect(() => {
    showList();
  }, [])

  const getMoreBtn = () => {
    if (window.innerWidth < MOBILE_WIDTH) {
      return setShowedMovies(showedMovies + MOBILE_MOVIES_AMOUNT)
    } else {
      return setShowedMovies(showedMovies + DESKTOP_MOVIES_AMOUNT)
    } 
  }

  const addingBtnShowed = () => {
    if (movies.length <= showedMovies) {
      return true; // фильмы закончились
    } 
    return false;
  }

  return (
    <>
      <ul className="movies__list">
        {movies.slice(0, showedMovies).map((movie) => (
          <MoviesCard key={movie.id} movie={movie} saved ={getSavedMoviesList(movie)} saveMovie={saveMovie} deleteMovie={deleteMovie} />
        ))}
      </ul>
      <section className="adding">
        <button className={addingBtnShowed() ? "adding__button_status_hide" : "adding__button"} onClick={getMoreBtn}>Ещё</button>
      </section> 
    </>
  )
}

export default MoviesCardList;
