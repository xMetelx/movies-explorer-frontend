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
  function handleSaveMovie () {
    if(!isSaved) {
      props.saveMovie(props.movie)
    } else {
      props.deleteMovie(props.saved)
    }
  }

  const saveMovieButtonClassName = `movies__like-button ${isSaved ? 'movies__like-button_status_active' : ''}`

  return (
    <li className="movies__item">
      <div className="movies__description">
        <div className="movies__text">
          <h2 className="movies__title">{props.movie.nameRU}</h2>
          <p className="movies__duration">{calcTime(props.movie.duration)}</p>
        </div>
        <button type="button" className={saveMovieButtonClassName} onClick={handleSaveMovie}></button>
      </div>
      <a href={props.movie.trailerLink} className="movies__screen">
        <img src={`https://api.nomoreparties.co/${props.movie.image.url}`} alt="Фото" className="movies__img" />
      </a>
    </li>
  )
}

export default MoviesCard;
