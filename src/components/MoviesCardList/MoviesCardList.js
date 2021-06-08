import './movies-card-list.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Route } from 'react-router-dom';

function MoviesCardList({ movies }) {
    return (
        <>
            <ul className="movies__list">
                {movies.slice(0, 10).map((movie) => { return (<MoviesCard movie={movie} key={movie.id} />) })}
            </ul>
            <Route path="/movies">
                <button className="movies__button">Еще</button>
            </Route>
        </>
    );
}

export default MoviesCardList;