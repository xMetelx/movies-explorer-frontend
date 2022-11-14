import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

const MoviesCardList = ({movies, movieSaved, saveMovie, deleteMovie}) => {
  const [showedMovies, setShowedMovies] = useState(0);

  function getSavedMoviesList(movie) {
    return movieSaved.find(saved => saved.id === movie.id )
  }

  const showList = () => {
    if (window.innerWidth <= 1280 && window.innerWidth > 786) {
      return setShowedMovies(7)
    } else if (window.innerWidth > 481 && window.innerWidth <= 768) {
      return setShowedMovies(7)
    } else if (window.innerWidth > 320 && window.innerWidth <= 480) {
      return setShowedMovies(5)
    }
  }

  useEffect(() => {
    showList();
  }, [])

  const getMoreBtn = () => {
    if (window.innerWidth <= 1280) {
      return setShowedMovies(showedMovies + 7)
    } else if (window.innerWidth >= 481 && window.innerWidth <= 768) {
      return setShowedMovies(showedMovies + 7)
    } else if (window.innerWidth > 320) {
      return setShowedMovies(showedMovies + 5)
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
