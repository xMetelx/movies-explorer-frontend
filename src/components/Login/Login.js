import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import './Login.css';
import Logo from '../../images/logo.svg';

const Login = () => {
  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
        <form onSubmit={handleSubmit(onSubmit)} className="login__form">
          <label className="login__name">
            E-mail
            <input placeholder="pochta" type="email" className="login__input"
              {...register('email', {
                required: "Что-то пошло не так...",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                  message: "Введите адрес почты",
                },
              })} 
            />
          </label>
          <span className="login__error">
            {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
          </span>

          <label className="login__name">
            Пароль
            <input type="password" className="login__input"
              {...register('password', {
                required: "Что-то пошло не так...",
                minLength: {
                  value: 8,
                  message: "Слишком короткий"
                }
              })} 
            />
          </label>
          <span className="login__error">
            {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
          </span>
          <button type="submit" disabled={!isValid} className="login__button">Войти</button>
          {/* <Link to="/movies" className="login__button">Войти</Link> */}
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
