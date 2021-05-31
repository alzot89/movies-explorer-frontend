class MoviesApi {
    constructor({ address }) {
        this._address = address;
    }

    getMovies() {
        return fetch(`${this._address}`)
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

const config = {
    address: 'https://api.nomoreparties.co/beatfilm-movies',
}

const moviesApi = new MoviesApi(config);

export default moviesApi