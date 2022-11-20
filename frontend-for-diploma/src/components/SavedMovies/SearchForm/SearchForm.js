import React, { useState } from "react";
import './SearchForm.css';
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import { SHORT_MOVIE_DURATION } from "../../../utils/constants";


const SearchForm = ({isInputFilled, keyword, movieSaved, setMovieSaved, setIsPreloader, setIsFound}) => {
  const [isError, setIsError] = useState(false);
  const [isShort, setIsShort] = useState(localStorage.getItem('isShort') ? JSON.parse(localStorage.getItem('isShort')) : []);
  const [isSearched, setIsSearched] = useState(false);

  const handleChange = (evt) => {
    isInputFilled(evt.target.value);
    setIsError(false);
  }

  const filterMovies = (keyword, data, isShort) => {
    let filtered = data.filter((movie) => movie.nameRU.toLowerCase().includes(keyword.toLowerCase()))
      if(isShort) {
        filtered = filtered.filter((movie) => movie.duration < SHORT_MOVIE_DURATION);
      } 
      if (!filtered.length) {
        setIsFound(false);
      }
    return filtered;
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    setIsPreloader(true);
      if (!keyword) {
        setIsError(true);
        setIsSearched(true);
        setIsPreloader(false)
      } else {
        console.log(movieSaved);
          const result = JSON.parse(localStorage.getItem('movieSaved'));
          setMovieSaved(filterMovies(keyword, result, isShort));
          setIsSearched(true);
          setIsPreloader(false)
        }
  }
  
  return (
    <section className="search">
      <form noValidate onSubmit={onSubmit} name="search-form" className="search-form">
        <div className="search-form__logo"></div>
          <label className="search-form__label">
            <input required id="search-input" type="text" placeholder="Фильм" className="search-form__input" onChange={handleChange} />
          </label>
          <p className={isError ? "search-form__error" : "search-form__error_hide"}>Нужно ввести ключевое слово</p>
        
        <button type="submit" className="search-form__button"></button>
        <div className="search-form__decoration-line"></div>
      </form>

      <FilterCheckbox isShort={isShort} isSearched={isSearched} setIsShort={setIsShort} setMovies={setMovieSaved} filterMovies={filterMovies} keyword={keyword} />
    </section>
  )
}

export default SearchForm;
