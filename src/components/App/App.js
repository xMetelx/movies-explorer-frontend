import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import PopupMenu from '../PopupMenu/PopupMenu';
import CurrenUserContext from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Navigate = useNavigate();
  
  function handleMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function onRegister () {
    Navigate("/signup")
  }

  function onLogin () {
    Navigate("/signin")
  }

  return (
    <CurrenUserContext.Provider value={currentUser} >
      <div className="page">
        <Routes>
          <Route 
            exact path="/" 
            element={ <Main onMenu={handleMenu} /> } 
          />

          <Route 
            path="/signup"
            element={ <Register onRegister={onRegister} /> } 
          />

          <Route 
            path="/signin"
            element={ <Login onLogin={onLogin} /> }
          />

          <Route 
            path="/movies" 
            element={ <Movies /> } 
          />

          <Route 
            path="/saved-movies" 
            element={<SavedMovies />} 
            onMenu={handleMenu} 
          />

          <Route 
            path="/profile" 
            element={<Profile />} 
            onMenu={handleMenu} 
          />

          <Route 
            path="*" 
            element={<NotFound />} 
          />

        </Routes>

        <PopupMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </CurrenUserContext.Provider>
  );
}

export default App;
