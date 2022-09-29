import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__data">
        <p className="footer__author">&copy; 2022</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a href="https://practicum.yandex.ru/" target='_blank' className="footer__link-item">Яндекс.Практикум</a>
          </li>
          <li className="footer__link">
            <a href="https://github.com/" target='_blank'  className="footer__link-item">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
