export const BASE_URL = 'https://api.alzot.movies.nomoredomains.icu';

export const register = (credential) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credential)
    })
        .then((res) => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw res.json()
            }
        })
        .then((res) => {
            return res;
        })
}

export const authorize = (credential) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credential)
    })
        .then((res) => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw res.json()
            }
        })
}

export const signout = () => {
    return fetch(`${BASE_URL}/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
    })
        .then((res) => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw new Error(`Ошибка: ${res.status} ${res.statusText} `)
            }
        })
}

export const checkToken = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    })
        .then((res) => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw new Error(`Ошибка: ${res.status} ${res.statusText}`)
            }
        })
        .then(data => data)
}