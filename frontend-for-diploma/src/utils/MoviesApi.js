class MoviesApi {
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject('Сервер недоступен')
  }

  getMovies () {
    console.log("Получить фильмы со стороннего апи");
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: {
        // authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }
}

export default new MoviesApi ({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});