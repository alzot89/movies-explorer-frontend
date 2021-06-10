class MainApi {
    constructor(address) {
        this._address = address;
    }

    getSavedMovies() {
        return fetch(`${this._address}/movies`, {
            credentials: 'include'
        })
            .then((res) => {
                return this._checkResponseStatus(res)
            })
    }

    saveMovie(movie) {
        return fetch(`${this._address}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie),
            credentials: 'include'
        })
            .then((res) => {
                return this._checkResponseStatus(res)
            })
    }

    getUserData() {
        return fetch(`${this._address}/users/me`, {
            credentials: 'include'
        })
            .then((res) => {
                return this._checkResponseStatus(res)
            })
    }

    changeUserData(data) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
            .then((res) => {
                return this._checkResponseStatus(res)
            })
    }


    deleteMovie(movieId) {
        return fetch(`${this._address}/movies/${movieId}`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then((res) => {
                return this._checkResponseStatus(res)
            })
    }

    _checkResponseStatus(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`))
    }
}

const address = 'https://api.alzot.movies.nomoredomains.icu';

const mainApi = new MainApi(address);

export default mainApi