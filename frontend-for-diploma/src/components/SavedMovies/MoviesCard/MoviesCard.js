import React from "react";
import './MoviesCard.css';

const MoviesCard = (props) => {

  const calcTime = (duration) => {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    if (hours === 0) {
        return `${minutes} м`;
    } else {
        return `${hours} ч ${minutes} м`;
    }
  };

  const isSaved = props.saved;

  function handleDeleteMovie () {
    if(isSaved) {
      props.deleteMovie(props.savedMovie)
      localStorage.removeItem(props.savedMovie);
    }
  }
  
  return (
    <li className="movies__item">
      <div className="movies__description">
        <div className="movies__text">
          <h2 className="movies__title">{props.savedMovie.nameRU}</h2>
          <p className="movies__duration">{calcTime(props.savedMovie.duration)}</p>
        </div>
        <button type="button" className="movies__delete-button" onClick={handleDeleteMovie}></button>
      </div>
      <div className="movies__screen">
        <img src={props.savedMovie.image} alt="Фото" className="movies__img" />
      </div>
    </li>
  )
}

export default MoviesCard;
