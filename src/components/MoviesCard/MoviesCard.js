import { useState } from 'react';
import './movies-card.css';


function MoviesCard({ movie }) {
    const [saved, setSaved] = useState(false);

    function handleMovieButton() {
        setSaved(!saved)
    }

    return (
        <li className="movie">
            <img src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU} className="movie__img"></img>
            <div className="movie__info">
                <h4 className="movie__title">{movie.nameRU}</h4>
                <button className={`movie__button ${saved && 'movie__button_active'}`} onClick={handleMovieButton}></button>
                <p className="movie__duration">{`${Math.floor(movie.duration / 60)}ч${movie.duration % 60}м`}</p>
            </div>
        </li>
    );
}

export default MoviesCard;