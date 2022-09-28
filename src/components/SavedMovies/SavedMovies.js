import React from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";

const SavedMovies = () => {
  return (
    <>
      <Header />
      <main className="content">
        <SearchForm />
        <section className="movies">
          <MoviesCardList />
        </section>
        <section className="adding">
          <button className="adding__button">Ещё</button>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;