import React from "react";
import './MoviesCard.css';
import MoviesPhoto from '../../../images/img-movies/pic__COLOR_pic_5.jpg'

const MoviesCard = () => {
  return (
    <li className="movies__item">
      <div className="movies__description">
        <div className="movies__text">
          <h2 className="movies__title">33 слова о дизайне</h2>
          <p className="movies__duration">1ч 42м</p>
        </div>
        <button type="button" className="movies__delete-button"></button>
      </div>
      <div className="movies__screen">
        <img src={MoviesPhoto} alt="Фото" className="movies__img" />
      </div>
    </li>
  )
}

export default MoviesCard;