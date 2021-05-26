import './movies-card-list.css';
import { Route } from 'react-router-dom';

function MoviesCardList() {
    return (
        <>
            <ul className="movies__list">
            </ul>
            <Route path="/movies">
                <button className="movies__button">Еще</button>
            </Route>
        </>
    );
}

export default MoviesCardList;