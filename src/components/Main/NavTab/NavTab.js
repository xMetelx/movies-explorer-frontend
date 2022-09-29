import React from "react";
import './NavTab.css';

// !Вставить ссылки на разделы страницы

const NavTab = () => {
  return (
    <section className="navigation">
        <nav className="navigation__list">
          <ul className="navigation__items">
            <li className="navigation__item">
              <a href="#about-project" className="navigation__link">О проекте</a>
            </li>
            <li className="navigation__item">
              <a href="#techs" className="navigation__link">Технологии</a>
            </li>
            <li className="navigation__item">
              <a href="#about-me" className="navigation__link">Студент</a>
            </li>
          </ul>
        </nav>
      </section>
  )
}

export default NavTab;