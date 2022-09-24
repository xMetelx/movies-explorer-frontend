import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {
  return (
    <ul className="movies__list">
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </ul>  
  )
}

export default MoviesCardList;