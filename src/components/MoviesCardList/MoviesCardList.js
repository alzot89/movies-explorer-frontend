import './movies-card-list.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Route } from 'react-router-dom';
import { useState } from 'react';

function MoviesCardList({ movies, index }) {

    const [moviesAmount, setMoviesAmount] = useState(index)

    function handleClick() {
        setMoviesAmount(moviesAmount + index)
    }

    return (
        <div className="movies__container">
            <ul className="movies__list">
                {movies.slice(0, moviesAmount).map((movie) => { return (<MoviesCard movie={movie} key={movie.id} />) })}
            </ul>
            <Route path="/movies">
                <button className={`movies__button ${moviesAmount >= movies.length && 'movies__button_hidden'}`} onClick={handleClick}>Еще</button>
            </Route>
        </div>
    );
}

export default MoviesCardList;