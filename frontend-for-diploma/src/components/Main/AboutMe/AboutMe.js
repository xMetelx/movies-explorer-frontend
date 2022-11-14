import React from "react";
import './AboutMe.css';
import studentPhoto from '../../../images/pic__COLOR_pic_Vitaly.svg'

const AboutMe = () => {
  return (
    <section className="student" id="about-me">
      <h2 className="student__header landing-header">Студент</h2>
      <div className="student__description">
        <div className="student__info">
          <h4 className="student__title title">Виталий</h4>
          <p className="student__about">Фронтенд-разработчик, 30 лет</p>
          <p className="student__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href="https://github.com/" target='_blank' className="student__link">Github</a>
        </div>
        <img src={studentPhoto} alt="Фото" className="student__photo" />
      </div>
    </section>
  )
}

export default AboutMe;
