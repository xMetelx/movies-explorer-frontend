import React, { useState } from "react";
import './SearchForm.css';
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesApi from "../../../utils/MoviesApi";

const SearchForm = ({isInputFilled, keyword, setMovies, setIsPreloader, filterMovies}) => {
  const [isError, setIsError] = useState(false);
  const [isShort, setIsShort] = useState(localStorage.getItem('isShort') ? JSON.parse(localStorage.getItem('isShort')) : false);
  const [isSearched, setIsSearched] = useState(keyword.length > 0);
  const [isServerError, setIsServerError] = useState(false);

  const handleChangeInput = (evt) => {
    isInputFilled(evt.target.value);
    setIsError(false);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    setIsPreloader(true);
      if (!keyword) {
        setIsError(true);
        setIsPreloader(false)
      } else {
        localStorage.setItem('isShort', JSON.stringify(isShort));
        localStorage.setItem('keyword', JSON.stringify(keyword));

        if (!localStorage.getItem('movies')) {
          MoviesApi.getMovies()
          .then((data) => {
            localStorage.setItem('movies', JSON.stringify(data.filter(movie => movie.image)));
            setMovies(filterMovies(keyword, data, isShort));
            localStorage.setItem('isMovies', JSON.stringify(data));
            setIsSearched(true);
          })
          .catch((err) => {
            console.log(err);
            setIsServerError(true);
          })
          .finally(() => setIsPreloader(false))
        } else {
            const result = JSON.parse(localStorage.getItem('movies'));
            setMovies(filterMovies(keyword, result, isShort));
            setIsSearched(true);
            setIsPreloader(false);
        }
      }
  }

  return (
    <section className="search">
      <form noValidate onSubmit={onSubmit} name="search-form" className="search-form">
        <div className="search-form__logo"></div>
        <div className="search-form__input-decoration">
          <label className="search-form__label">
            <input required id="search-input" type="text" placeholder="Фильм" className="search-form__input" onChange={handleChangeInput} value={keyword}
            />
          </label>
          <p className={isError ? "search-form__error" : "search-form__error_hide"}>Нужно ввести ключевое слово</p>
          <p className={isServerError ? "search-form__error" : "search-form__error_hide"}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
        </div>
        <button type="submit" className="search-form__button" ></button>
        <div className="search-form__decoration-line"></div>
      </form>

      <FilterCheckbox isShort={isShort} isSearched={isSearched} setIsShort={setIsShort} setMovies={setMovies} filterMovies={filterMovies} keyword={keyword} />
    </section>
  )
}

export default SearchForm;
