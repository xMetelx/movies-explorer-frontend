import React from "react";
import './SearchForm.css';
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <section className="search">
      <form name="search-form" className="search-form">
        <div className="search-form__logo"></div>
        <input required id="search-input" type="text" placeholder="Фильм" className="search-form__input" />
        <button type="button" className="search-form__button"></button>
        <div className="search-form__decoration-line"></div>
      </form>

      <FilterCheckbox />
    </section>
  )
}

export default SearchForm;