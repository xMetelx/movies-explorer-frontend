import React, { useState, useEffect } from "react";
import { DESKTOP_MOVIES_AMOUNT, MOBILE_MOVIES_AMOUNT, MOBILE_WIDTH } from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({movieSaved, deleteMovie}) => {
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

  return (
    <ul className="movies__list">
      {movieSaved.slice(0, showedMovies).map((movie) => (
        <MoviesCard key={movie.id} savedMovie={movie} saved ={getSavedMoviesList(movie)} deleteMovie={deleteMovie} />
      ))}
    </ul>  
  )
}

export default MoviesCardList;