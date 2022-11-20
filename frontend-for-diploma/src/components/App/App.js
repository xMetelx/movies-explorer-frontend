import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import auth from '../../utils/auth'
import mainApi from '../../utils/MainApi';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import PopupMenu from '../PopupMenu/PopupMenu';
import CurrenUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieSaved, setMovieSaved] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [isProfileError, setIsProfileError] = useState(false);
  const [isRegisterError, setIsRegisterError] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [isTokenError, setTokenError] = useState(false);
  
  function onRegister ({name, email, password}) {
    setIsPreloader(true);
    return auth
      .signUp({name, email, password})
      .then(() => {
        return auth.signIn({email, password})
        .then((data) => {
          localStorage.setItem('token', data.token);
          setLoggedIn(true);
          navigate("/movies");
          mainApi.getUserInfo(data.token)
            .then((user) => {
              localStorage.setItem('currentUser', JSON.stringify(user));
              setCurrentUser(user);
              getAllMovies();
            })
            .catch((err) => {
              console.log(err);
            })
        })
        .catch((err) => {
          console.log(err);
          setIsRegisterError(true);
        })
        .finally(() => {
          setIsPreloader(false);
        })
      })  
  }

  const onLogin = ({ email, password }) => {
    setIsPreloader(true);
    return auth
      .signIn({email, password})
      .then((data) => {
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        navigate("/movies");
        mainApi.getUserInfo(data.token)
          .then((user) => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            setCurrentUser(user);
            getAllMovies();
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
        setIsLoginError(true);
        setLoggedIn(false);
      })
      .finally(() => {
        setIsPreloader(false);
      })
  }

  const onSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isShort');
    localStorage.removeItem('movieSaved');
    localStorage.removeItem('movies');
    localStorage.removeItem('keyword');
    localStorage.removeItem('isMovies');
    setLoggedIn(false);
    navigate('/');
  }  

  useEffect (() => {
    const token = localStorage.getItem('token');
    if (token) {
      auth
        .checkToken(token)
          .then(() => {
            setLoggedIn(true);
            mainApi
              .getUserInfo(token)
              .then((user) => {
                setCurrentUser(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                getAllMovies();
              })
            navigate(location);
          })
          .catch(err => {
            console.log(err);
            setTokenError(true);
            localStorage.removeItem('token');
          });
    }
  }, [])
  
  function getAllMovies () {
    setIsPreloader(true);
    mainApi
      .getInitialMovies()
      .then((data) => {
        const movies = data.movies.map((movie) => {
          console.log(movie);
          return {
            nameRU: movie.nameRU,
            image: movie.image,
            trailerLink: movie.trailerLink,
            duration: movie.duration,
            id: movie.movieId,
            _id: movie._id,
          }
        })
          setMovieSaved(movies);
          localStorage.setItem('movieSaved', JSON.stringify(movies));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloader(false);
      })
  }
  
  function handleMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleMovieSaved(movie) {
    setIsPreloader(true);
    if (!movieSaved.find(saved => saved.id === movie.id)) {
      mainApi.postMovie(movie)
      .then((movie) => {
        console.log(movie);
        const newMovie = {
          country: movie.country,
          key: movie.id,
          id: movie.movieId,
          duration: movie.duration,
          image: movie.image,
          trailerLink: movie.trailerLink,
          nameRU: movie.nameRU,
          _id: movie._id,
          owner: movie.owner,
        }
        const newSaved = [newMovie, ...movieSaved];
        setMovieSaved(newSaved);
        localStorage.setItem('movieSaved', JSON.stringify(newSaved));
      })
      .catch((err) => {
        console.log(err);
        if(err === 'Ошибка доступа') {
          onSignOut();
        } else {
          console.log(err)
        }
      })
      .finally (() => setIsPreloader(false))
    } else {
        return
    }

  }

  function handleMovieDelete (data) {
    setIsPreloader(true);
    mainApi.removeMovie(data)
      .then(() => {
        const newMoviesList = movieSaved.filter((movie) => {
          if(data.id === movie.id) {
            return false;
          } return true; 
    })
        setMovieSaved(newMoviesList);
        localStorage.setItem('movieSaved', JSON.stringify(newMoviesList));
  })
      .catch(err => console.log(err))
      .finally (() => setIsPreloader(false))
  }

  function handleUpdateUser (data) {
    mainApi.patchProfile(data.name, data.email)
      .then((data) => {
        setCurrentUser(data)
        setIsChanged(true);
      })
      .catch(err => {
        console.log(err)
        setIsProfileError(true);
      });
  }

  return (
    <CurrenUserContext.Provider value={currentUser} >
      <div className="page">
        { isPreloader ? <Preloader /> : null }
        <Routes>
          <Route exact path="/" element={ <Main loggedIn={loggedIn} onMenu={handleMenu} /> } />

          <Route path="/signup" element={ loggedIn ? <Navigate to="/" /> : <Register onRegister={onRegister} isRegisterError={isRegisterError} /> } />
          <Route path="/signin" element={ loggedIn ? <Navigate to="/" /> : <Login onLogin={onLogin} isLoginError={isLoginError} isTokenError={isTokenError} /> } />

          <Route element={ <ProtectedRoute loggedIn={loggedIn} /> } >
            <Route path="movies" element={ <Movies movies={movies} isPreloader={isPreloader} setIsPreloader={setIsPreloader} setMovies={setMovies} saveMovie={handleMovieSaved} movieSaved={movieSaved} deleteMovie={handleMovieDelete} loggedIn={loggedIn} /> } />
            <Route path="saved-movies" element={<SavedMovies onMenu={handleMenu} movieSaved={movieSaved} setIsPreloader={setIsPreloader} deleteMovie={handleMovieDelete} loggedIn={loggedIn} setMovieSaved={setMovieSaved} />} />
            <Route path="profile" element={<Profile onMenu={handleMenu} onSignOut={onSignOut} editForm={handleUpdateUser} isChanged={isChanged} loggedIn={loggedIn} isProfileError={isProfileError} />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <PopupMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </CurrenUserContext.Provider>
  );
}

export default App;
