import React from "react";
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <>
    <div className="search-form__checkbox">
      <label className="search-form__checkbox-input">
        <input type="checkbox" className="search-form__clicker" />
        <span className="search-form__style"></span>
      </label>
      <p className="search-form__text">Короткометражки</p>

    </div>

    </>

  )
}

export default FilterCheckbox;