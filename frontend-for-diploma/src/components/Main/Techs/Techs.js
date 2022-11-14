import React from "react";
import './Techs.css';

const Techs = () => {
  return (
    <section className="technique" id="techs">
        <h2 className="technique__header landing-header">Технологии</h2>
        <h4 className="technique__title title">7 технологий</h4>
        <p className="technique__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="technique__list">
          <li className="technique__item">HTML</li>
          <li className="technique__item">CSS</li>
          <li className="technique__item">JS</li>
          <li className="technique__item">React</li>
          <li className="technique__item">Git</li>
          <li className="technique__item">Express.js</li>
          <li className="technique__item">mongoDB</li>
        </ul>
      </section>
  )
}

export default Techs;
