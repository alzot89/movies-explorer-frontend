import { useState } from 'react';
import { Route } from 'react-router';
import mainApi from '../../utils/MainApi';
import './movies-card.css';

function MoviesCard({ movie, handleDelete }) {

    const [saved, setSaved] = useState(false)
    const [savedMovie, setSavedMovie] = useState({})
    const BASE_URL = 'https://api.nomoreparties.co';
    const imageURL = movie.image ? BASE_URL + movie.image.url : 'нет картинки';
    const duration = `${Math.floor(movie.duration / 60)}ч${movie.duration % 60}м`;
    const movieData = {
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        director: movie.director,
        country: movie.country,
        year: movie.year,
        duration: movie.duration,
        description: movie.description,
        trailer: movie.trailerLink,
        image: imageURL,
        thumbnail: movie.image.formats ? BASE_URL + movie.image.formats.thumbnail.url : 'нет thumbnail'
    }

    function saveMovie() {
        setSaved((saved) => {
            saved = !saved;
            if (saved) {
                mainApi.saveMovie(movieData)
                    .then((res) => {
                        setSavedMovie(res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } else {
                mainApi.deleteMovie(savedMovie._id)
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            return saved
        });

    }

    function deleteMovie() {
        handleDelete(movie)
    }

    return (
        <li className="movie">
            <Route path="/movies">
                <img src={imageURL} alt={movie.nameRU} className="movie__img"></img>
                <div className="movie__info">
                    <h4 className="movie__title">{movie.nameRU}</h4>
                    <button className={`movie__button ${saved && 'movie__button_active'}`} onClick={saveMovie}></button>
                    <p className="movie__duration">{duration}</p>
                </div>
            </Route>
            <Route path="/saved-movies">
                <img src={movie.image} alt={movie.nameRU} className="movie__img"></img>
                <div className="movie__info">
                    <h4 className="movie__title">{movie.nameRU}</h4>
                    <button className="movie__button movie__button_delete" onClick={deleteMovie} ></button>
                    <p className="movie__duration">{duration}</p>
                </div>
            </Route>
        </li>
    );
}

export default MoviesCard;