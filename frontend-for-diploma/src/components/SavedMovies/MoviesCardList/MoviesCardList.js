import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({movieSaved, deleteMovie}) => {
  const [showedMovies, setShowedMovies] = useState(0);

  function getSavedMoviesList(movie) {
    return movieSaved.find(saved => saved.id === movie.id )
  }

  const showList = () => {
    if (window.innerWidth < 480) {
      return setShowedMovies(5)
    } else {
      return setShowedMovies(7)
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