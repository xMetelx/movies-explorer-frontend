import React, { useContext, useState } from "react";
import './Profile.css';
import Header from "../Header/Header";
import { useFormWithValidation } from "../useFormWithValidation/useFormWithValidation";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Profile = ({onSignOut, editForm, loggedIn, isChanged, isProfileError }) => {
  const { values, errors, isValid, handleChange } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);
  const [isEditError, setIsEditError] = useState(false);
  const [isCheckChanges, setIsCheckChanges] = useState(false);


  function checkFilling () {
    if (values.name && currentUser.name !== values.name) {
      return true;
    } else if (values.email && currentUser.email !== values.email) {
      return true;
    } else {
      return false;
    }
  }

  function checkInputChanges (evt) {
    handleChange(evt);
    setIsCheckChanges(isValid || checkFilling());
  }

  function onSubmit (evt) {
    evt.preventDefault();
    if (checkFilling()) {
      console.log(123);
      editForm({
        name: values.name || currentUser.name,
        email: values.email || currentUser.email,
      });
      localStorage.setItem('currentUser', JSON.stringify(values));
    } else {
        setIsEditError(true);
    }
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="content">
        <section className="profile">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form onSubmit={onSubmit} className="profile__description">
            <div className="profile__data">
              <label className="profile__name"> 
                Имя
                <input onChange={checkInputChanges} type="text" name="name" minLength="2" maxLength="40" value={values.name || currentUser.name} className="profile__input" />
              </label>
              <span className="profile__error">{errors.name}</span>
            </div>

            <div className="profile__data"> 
              <label className="profile__name">
                E-mail
                <input onChange={checkInputChanges} name="email" minLength="6" maxLength="40"  type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" value={values.email || currentUser.email} className="profile__input" />
              </label>
              <span className="profile__error">{errors.email}</span>
            </div>
            <p className={isChanged ? "profile__change-success" : "profile__change-success_hide"}>Ваши данные успешно изменены</p>
            <p className={isProfileError ? "profile__change-not-success" : "profile__change-not-success_hide"}>При обновлении профиля произошла ошибка</p>
            <p className={isEditError ? "profile__change-not-success" : "profile__change-not-success_hide"}>Введите обновленные данные</p>
            <button type="submit" disabled={!isCheckChanges} className={isCheckChanges ? "profile__button-edit" : "profile__button-edit_disabled"}>Редактировать</button>
          </form>
          <button type="submit" className="profile__link-cancel" onClick={onSignOut}>Выйти из аккаунта</button>
        </section>
      </main>  
    </>
  )
}

export default Profile;
