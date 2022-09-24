import React from "react";
import './Movies.css';
import Header from "../Header/Header";
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

const Movies = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <section className="movies">
          <MoviesCardList />
      </section>
      <section className="adding">
          <button className="adding__button">Ещё</button>
      </section>
      <Footer />
    </>

  )

}

export default Movies;