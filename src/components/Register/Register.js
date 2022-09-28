import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import './Register.css';
import Logo from "../../images/logo.svg";

const Register = () => {
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
        <section className="registration">
          <h1 className="registration__title">Добро пожаловать!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="registration__form">

            <label className="registration__name">
              Имя
              <input placeholder="Виталий" type="text" className="registration__input"
                {...register('name', {
                  required: "Введите имя",
                  },
                )} 
              />
            </label>
            <span className="registration__error">
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </span>

            <label className="registration__name">
              E-mail
              <input placeholder="pochta" type="email" className="registration__input"
                {...register('email', {
                  required: "Что-то пошло не так...",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message: "Введите адрес почты",
                  },
                })} 
              />
            </label>
            <span className="registration__error">
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </span>

            <label className="registration__name">
              Пароль
              <input type="password" className="registration__input"
                {...register('password', {
                  required: "Что-то пошло не так...",
                  minLength: {
                    value: 8,
                    message: "Слишком короткий"
                  }
                })} 
              />
            </label>
            <span className="registration__error">
              {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
            </span>

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
