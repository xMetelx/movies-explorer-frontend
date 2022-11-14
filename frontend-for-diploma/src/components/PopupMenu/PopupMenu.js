import React from "react";
import {Link} from "react-router-dom";
import './PopupMenu.css';

const PopupMenu = ({active, setActive}) => {
  
  return (
    <>
      <section className={active ? "popup-menu popup-menu_opened" : "popup-menu popup-menu_closed"}>
        <button type="button" onClick={() => setActive(false)} className="popup-menu__close"></button>
        <nav className="popup-menu__navigation">
          <Link to='/' className="popup-menu__link">Главная</Link>
          <Link to='/movies' className="popup-menu__link">Фильмы</Link>
          <Link to='/saved-movies' className="popup-menu__link">Сохраненные фильмы</Link>
        </nav>
        <Link to='/profile' className="popup-menu__profile-link">Аккаунт</Link>
      </section>
      <div className={active ? "popup-menu__overlay popup-menu__overlay_opened" : "popup-menu popup-menu__overlay_closed"}></div>
    </>
  )
}

export default PopupMenu;
