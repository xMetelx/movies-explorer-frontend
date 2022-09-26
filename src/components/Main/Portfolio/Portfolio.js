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
          <a href="https://github.com/" target="_blank"className="student__portpolio-link">
            <img src={arrow} alt="ссылка" className="student__portfolio-arrow" />  
          </a> 
        </li>
        <li className="student__portfolio-item">
          <p className="student__portfolio-name">Адаптивный сайт</p>
          <a href="https://github.com/" target="_blank"className="student__portpolio-link">
            <img src={arrow} alt="ссылка" className="student__portfolio-arrow" />  
          </a> 
        </li>
        <li className="student__portfolio-item">
          <p className="student__portfolio-name">Одностраничное приложение</p>
          <a href="https://github.com/" target="_blank"className="student__portpolio-link">
            <img src={arrow} alt="ссылка" className="student__portfolio-arrow" />  
          </a> 
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;