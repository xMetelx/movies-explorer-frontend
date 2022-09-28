import React from "react";
import './Profile.css';
import Header from "../Header/Header";

const Profile = () => {
  return (
    <>
      <Header />
      <main className="content">
        <section className="profile">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form action="" className="profile__description">
            <div className="profile__data">
              <span className="profile__name">Имя</span>
              <input readOnly type="text" placeholder="Виталий" value="" className="profile__meaning" />
            </div>
            <div className="profile__data"> 
              <span className="profile__name">E-mail</span>
              <input readOnly type="email" placeholder="pochta@yandex.ru" value="" className="profile__meaning" />
            </div>
            <button type="submit" className="profile__button-edit">Редактировать</button>
          </form>
                  
          <button type="submit" className="profile__link-cancel">Выйти из аккаунта</button>
        </section>
      </main>  
    </>
  )
}

export default Profile;