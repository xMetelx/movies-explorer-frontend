import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({movieSaved, deleteMovie}) => {
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

  return (
    <ul className="movies__list">
      {movieSaved.slice(0, showedMovies).map((movie) => (
        <MoviesCard key={movie.id} savedMovie={movie} saved ={getSavedMoviesList(movie)} deleteMovie={deleteMovie} />
      ))}
    </ul>  
  )
}

export default MoviesCardList;