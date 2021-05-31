import { useState } from 'react';
import { Route } from 'react-router';
import './movies-card.css';


function MoviesCard({ movie }) {
    const [saved, setSaved] = useState(false);
    const BASE_URL = 'https://api.nomoreparties.co';
    const imageURL = movie.image ? BASE_URL + movie.image.url : 'нет картинки';
    const duration = `${Math.floor(movie.duration / 60)}ч${movie.duration % 60}м`;

    function handleMovieButton() {
        setSaved(!saved)
    }

    return (
        <li className="movie">
            <img src={imageURL} alt={movie.nameRU} className="movie__img"></img>
            <div className="movie__info">
                <h4 className="movie__title">{movie.nameRU}</h4>
                <Route path="/movies">
                    <button className={`movie__button ${saved && 'movie__button_active'}`} onClick={handleMovieButton}></button>
                </Route>
                <Route path="/saved-movies">
                    <button className="movie__button movie__button_delete"></button>
                </Route>
                <p className="movie__duration">{duration}</p>
            </div>
        </li>
    );
}

export default MoviesCard;