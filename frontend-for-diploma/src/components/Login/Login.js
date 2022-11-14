import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import Logo from '../../images/logo.svg';
import { useFormWithValidation } from '../useFormWithValidation/useFormWithValidation';

const Login = ({onLogin, isLoginError, isTokenError}) => {
  const navigate = useNavigate();
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const onSubmit = (evt) => {
    evt.preventDefault();
    onLogin({
      email: values.email,
      password: values.password
    });
    navigate("/movies");
    resetForm();
  }

  return (
    <>
      <header className="header-sign">
        <Link to="/" className="header-sign__link">
          <img src={Logo} alt="Лого" className="header-sign__logo" />
        </Link>
      </header>

      <main className="content">
        <section className="login">
          <h1 className="login__title">Рады видеть!</h1>
          <form onSubmit={onSubmit} className="login__form">
            <label className="login__name">
              E-mail
              <input onChange={handleChange} required name="email" id="email" minLength="6" maxLength="40" placeholder="pochta@yandex.ru" type="email" className="login__input" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" value={values.email || ""} />
            </label>
            <span className="login__error">{errors.email}</span>

            <label className="login__name">
              Пароль
              <input onChange={handleChange} required minLength="6" maxLength="30" name="password" id="password" type="password" className="login__input" value={values.password} />
            </label>
            <span className="login__error">{errors.password}</span>

            <p className={isLoginError ? "login__unsuccessful" : "login__unsuccessful_hide"}>Вы ввели неправильный логин или пароль</p>
            <p className={isTokenError ? "login__unsuccessful" : "login__unsuccessful_hide"}>При авторизации произошла ошибка. Токен не передан или передан не в том формате.</p>

            <button type="submit" disabled={!isValid} className="login__button">Войти</button>
          </form>
          <p className="login__text">Ещё не зарегистрированы?
            <Link to="/signup" className="login__signin">Регистрация</Link>
          </p>
        </section>
      </main>
    </>
  )
}

export default Login;
