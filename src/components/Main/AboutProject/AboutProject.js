import React from "react";
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about" id="about-project">
      <h2 className="about__header landing-header">О проекте</h2>
      <div className="about__description">
        <div className="about__description-card">
          <h3 className="about__description-title">Дипломный проект включал 5 этапов</h3>
          <p className="about__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about__description-card">
          <h3 className="about__description-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about__scale">
        <div className="about__scale-start">
          <p className="about__scale-text about__scale-text_bgcolor_green">1 неделя</p>
          <p className="about__scale-name">Back-end</p>
        </div>
        <div className="about__scale-finish">
          <p className="about__scale-text about__scale-text_bgcolor_grey">4 недели</p>
          <p className="about__scale-name">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;