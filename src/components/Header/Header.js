import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'
import PopupMenu from '../PopupMenu/PopupMenu';
import headerLogo from '../../images/logo.svg';

const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <header className="header-main">
      <Link to="/" className="header-main__logo-link">
        <img src={headerLogo} alt="Лого" className="header-main__logo" />
      </Link>
      <button className="header__burger-menu" onClick={() => setMenuActive(true)}></button>
      <Link to="/movies" className="header-main__link">Фильмы</Link>
      <Link to="/saved-movies" className="header-main__link">Сохранённые фильмы</Link>
      <Link to="/profile" className="header-main__button">Аккаунт</Link>
      <PopupMenu active={isMenuActive} setActive={setMenuActive} />
    </header>
  )
}

export default Header;