import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import headerLogo from '../../images/logo.svg';

import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

const Main = () => {

  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo-link">
        <img src={headerLogo} alt="Лого" className="header__logo" />
        </Link>
        <Link to="/signup" className="header__link">Регистрация</Link>
        <Link to="/signin" className="header__button">Войти</Link>
      </header>
      <main className="content">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
      </main>
    </>
  )
}

export default Main;