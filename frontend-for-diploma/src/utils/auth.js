class Auth {
  constructor (baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json() 
    }
    return Promise.reject(`Ошибка аутентификации: ${res.status}`)
  }

  signUp ({name, email, password}) {
    return fetch(this._baseUrl + '/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
      body: JSON.stringify({
        name: name,
        email: email, 
        password: password})
    })
    .then(this._checkResponse)
  }

  signIn ({email, password}) {
    return fetch(this._baseUrl + '/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email, 
        password: password})
    })
    .then(this._checkResponse)
  }

  checkToken (token) {
    return fetch (this._baseUrl + '/users/me', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization' : `Bearer ${token}`
      }
    })
    .then(this._checkResponse)
  }
}

// const auth = new Auth ('https://api.metel.nomorepartiesxyz.ru');
const auth = new Auth ('http://localhost:3001');
export default auth;