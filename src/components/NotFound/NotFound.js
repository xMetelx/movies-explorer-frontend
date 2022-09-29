import React from "react";
import './NotFound.css';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
      <main className="content">
        <section className="not-found">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__text">Страница не найдена</p>
          <button onClick={() => navigate(-1)} className="not-found__link">Назад</button>
        </section>
      </main>
  )
}

export default NotFound;
