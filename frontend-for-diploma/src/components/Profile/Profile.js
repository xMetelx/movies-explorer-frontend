import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import { useFormWithValidation } from "../useFormWithValidation/useFormWithValidation";

const Profile = ({onSignOut, editForm, loggedIn, isChanged, isProfileError }) => {
  const { values, errors, isValid, handleChange } = useFormWithValidation();
  const user = JSON.parse(localStorage.getItem('currentUser'));

  function onSubmit (evt) {
    evt.preventDefault();
    editForm({
      name: values.name,
      email: values.email
    });
    localStorage.setItem('currentUser', JSON.stringify(values));
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="content">
        <section className="profile">
          <h1 className="profile__title">Привет, {user.name}!</h1>
          <form onSubmit={onSubmit} className="profile__description">
            <div className="profile__data">
              <label className="profile__name"> 
                Имя
                <input onChange={handleChange} type="text" required name="name" minLength="2" maxLength="40" placeholder={user.name} value={values.name || ""} className="profile__input" />
              </label>
              <span className="profile__error">{errors.name}</span>
            </div>

            <div className="profile__data"> 
              <label className="profile__name">
                E-mail
                <input onChange={handleChange} required name="email" minLength="6" maxLength="40"  type="email" placeholder={user.email} pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" value={values.email || ""} className="profile__input" />
              </label>
              <span className="profile__error">{errors.email}</span>
            </div>
            <p className={isChanged ? "profile__change-success" : "profile__change-success_hide"}>Ваши данные успешно изменены</p>
            <p className={isProfileError ? "profile__change-not-success" : "profile__change-not-success_hide"}>При обновлении профиля произошла ошибка</p>
            <button type="submit" disabled={!isValid} className="profile__button-edit">Редактировать</button>
          </form>
          <button type="submit" className="profile__link-cancel" onClick={onSignOut}>Выйти из аккаунта</button>
        </section>
      </main>  
    </>
  )
}

export default Profile;
