import React from "react";
import './Portfolio.css';
import arrow from '../../../images/text__COLOR_font-main_arrow.svg';


const Portfolio = () => {
  return (
    <section className="student__portfolio">
      <p className="student__portfolio-title">Портфолио</p>
      <ul className="student__portfolio-items">
        <li className="student__portfolio-item">
          <p className="student__portfolio-name">Статичный сайт</p>
          <img src={arrow} alt="ссылка" className="student__portfolio-arrow" />
        </li>
        <li className="student__portfolio-item">
          <p className="student__portfolio-name">Адаптивный сайт</p>
          <img src={arrow} alt="ссылка" className="student__portfolio-arrow" />
        </li>
        <li className="student__portfolio-item">
          <p className="student__portfolio-name">Одностраничное приложение</p>
          <img src={arrow} alt="ссылка" className="student__portfolio-arrow" />
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;