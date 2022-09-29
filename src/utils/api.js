const { getMouseEventOptions } = require("@testing-library/user-event/dist/utils");

class Api {
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject('Сервер недоступен')
  }

  getMovies () {
    return fetch(this._baseUrl + '/movies', {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkResponse)
  }

  postMovie (country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN) {
    return fetch(this._baseUrl + '/movies', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailerLink: trailerLink,
        thumbnail: thumbnail,
        movieId: movieId,
        nameRU: nameRU,
        nameEN: nameEN
      })
    })
    .then(this._checkResponse)
  }

  









}

export default Api;