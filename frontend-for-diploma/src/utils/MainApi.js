class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject('Сервер недоступен')
  }

  getUserInfo () {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse) 
  }

  patchProfile (name, email) {
    console.log("patch");
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name, 
        email: email
      })
    })
    .then(this._checkResponse)
    }

  getInitialMovies () {
    return fetch(this._baseUrl + '/movies', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }

  postMovie (data) {
    return fetch(this._baseUrl + '/movies', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN
      })
    })
    .then(this._checkResponse)
  }

  // удаляем карточку
  removeMovie (data) {
    console.log(data);
    return fetch (`${this._baseUrl + '/movies'}/${data._id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
    })
    .then (this._checkResponse)
  }
}

// const mainApi = new MainApi ('https://api.metel.nomorepartiesxyz.ru');
const mainApi = new MainApi ('http://localhost:3001');

export default mainApi;