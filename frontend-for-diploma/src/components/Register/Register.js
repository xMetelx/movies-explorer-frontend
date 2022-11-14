import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Register.css';
import Logo from "../../images/logo.svg";
import { useFormWithValidation } from '../useFormWithValidation/useFormWithValidation';

const Register = ({onRegister, isRegisterError}) => {
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const onSubmit = (evt) => {
    evt.preventDefault();
    onRegister({name: values.name, email: values.email, password: values.password});
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
        <section className="registration">
          <h1 className="registration__title">Добро пожаловать!</h1>
          <form onSubmit={onSubmit} className="registration__form">

            <label className="registration__name">
              Имя
              <input onChange={handleChange} required name="name" id="name" minLength="2" maxLength="40" placeholder="Имя" type="text" className="registration__input" value={values.name || ""} />
            </label>
            <span className="registration__error">{errors.name}</span>

            <label className="registration__name">
              E-mail
              <input onChange={handleChange} required name="email" id="email" minLength="6" maxLength="40" placeholder="pochta@yandex.ru" type="email" className="registration__input" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" value={values.email || ""} />
            </label>
            <span className="registration__error">{errors.email}</span>

            <label className="registration__name">
              Пароль
              <input onChange={handleChange} required minLength="6" maxLength="30" name="password" type="password" id="password" className="registration__input" value={values.password} />
            </label>
            <span className="registration__error"> {errors.password}</span>

            <p className={isRegisterError ? "registration__unsuccessful" : "registration__unsuccessful_hide"}>При регистрации пользователя произошла ошибка</p>

            <button type="submit" disabled={!isValid} className="registration__button">Зарегистрироваться</button>
          </form>
          <p className="registration__text">Уже зарегистрированы?
            <Link to="/signin" className="registration__signin">Войти</Link>
          </p>

        </section>
      </main>
    </>
  )
}

export default Register;
