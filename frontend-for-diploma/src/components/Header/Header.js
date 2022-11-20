import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import './Header.css'
import PopupMenu from '../PopupMenu/PopupMenu';
import headerLogo from '../../images/logo.svg';

const Header = ({loggedIn}) => {
  const [isMenuActive, setMenuActive] = useState(false);
  const location = useLocation();

  return (
    <>
      {
        !loggedIn ?
        <header className="header">
          <Link to="/" className="header__logo-link">
          <img src={headerLogo} alt="Лого" className="header__logo" />
          </Link>
          <Link to="/signup" className="header__link">Регистрация</Link>
          <Link to="/signin" className="header__button">Войти</Link>
        </header>
        : 
        <header className={location.pathname === "/" ? "header" : "header-main"}>
          <Link to="/" className="header-main__logo-link">
            <img src={headerLogo} alt="Лого" className="header-main__logo" />
          </Link>
          <button className={location.pathname === "/" ? "header__burger-menu_loggedin" : "header__burger-menu"} onClick={() => setMenuActive(true)}></button>
          <NavLink to="/movies" className={location.pathname === "/" ? "header__link_loggedin" : "header-main__link"}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className={location.pathname === "/" ? "header__link_loggedin" : "header-main__link"}>Сохранённые фильмы</NavLink>
          <Link to="/profile" className={location.pathname === "/" ? "header-main__button_loggedin" : "header-main__button"}>Аккаунт</Link>
          <PopupMenu active={isMenuActive} setActive={setMenuActive} />
        </header>
      }
    </>
  )
}
export default Header;
