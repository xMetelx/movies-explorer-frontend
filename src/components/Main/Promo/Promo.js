
import React from 'react';
import './Promo.css';
// import promoLogo from '../../../images/pic__COLOR_landing-logo.svg';

const Promo = () => {
  return (
  <section className="promo">
    <h1 className="promo__title title">Учебный проект студента факультета Веб-разработки.</h1>
    <div className="promo__logo-container">
      {/* <img src={promoLogo} alt="Лого" className="promo__logo" /> */}
    </div>
  </section>
  )
}

export default Promo;