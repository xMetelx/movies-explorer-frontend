import React from "react";
import './FilterCheckbox.css';

const FilterCheckbox = ({isShort, setIsShort, isSearched, setMovieSaved, filterMovies, keyword}) => {

  const handleChecked = () => {
    if (isSearched) {
      const result = JSON.parse(localStorage.getItem('movies'));
      setMovieSaved(filterMovies(keyword, result, !isShort));
    }
    localStorage.setItem('isShort', JSON.stringify(!isShort));
    setIsShort(!isShort);
  }

  return (
    <>
      <div className="search-form__checkbox">
        <label className="search-form__checkbox-input">
          <input type="checkbox" className="search-form__clicker" onChange={handleChecked} checked={isShort} />
          <span className="search-form__style"></span>
        </label>
        <p className="search-form__text">Короткометражки</p>
      </div>
    </>

  )
}

export default FilterCheckbox;