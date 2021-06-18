import './movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SideMenu from '../SideMenu/SideMenu';
import { defineMoviesAmount } from '../../utils/defineMoviesAmount';
import useWindowDimensions from '../../utils/MediaQuery';
import moviesApi from '../../utils/MoviesApi';
import { useState } from 'react';
import { filterByKeyWord, filterByDuration } from '../../utils/FilterMovies';

function Movies({ isActive, onOpenBurger }) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [isFailed, setIsFailed] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [validity, setValidity] = useState(true);
    const [isLoading, setIsLoading] = useState(false)
    const [filteredMovies, setFilteredMoviees] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [toggle, setToggle] = useState(false);
    const { width } = useWindowDimensions();
    const index = defineMoviesAmount(width);

    function handleInputChange(e) {
        setSearchQuery(e.target.value);
        setError("Нужно ввести ключевое слово");
        setValidity(e.target.validity.valid)
    }

    async function handleRequest() {
        try {
            setIsFailed(false);
            setIsLoading(true);
            const res = await moviesApi.getMovies();
            setIsLoading(false);
            return res
        } catch (err) {
            setIsFailed(true);
            setIsLoading(false);
            throw err
        }
    }

    function checkMoviesLength(movies) {
        if (movies.length === 0) {
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
        }
    }

    function handleSearchFormSubmit(e) {
        const form = e.target;
        e.preventDefault();
        handleRequest()
            .then((res) => {
                if (searchQuery !== '') {
                    const filteredMovies = filterByKeyWord(res, searchQuery)
                    setFilteredMoviees(filteredMovies)
                    setMovies((movies) => {
                        movies = filteredMovies;
                        checkMoviesLength(movies);
                        return movies
                    })
                        .catch((err) => {
                            console.log(err)
                        })
                }
            })
            .catch((err) => {
                console.log(err)
            })
        form.reset();
        setError("");
        setValidity(true);
    }

    function handleCheckbox(e) {
        setToggle(!toggle);
        const checked = e.target.checked
        if (!checked) {
            setMovies(filteredMovies)
        } else {
            const shortMovies = filterByDuration(filteredMovies)
            setMovies((movies) => {
                movies = shortMovies;
                checkMoviesLength(movies);
                return movies
            })
        }
    }

    const errorMessage = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"

    return (
        <section className="movies">
            <Header isActive={isActive} onOpenBurger={onOpenBurger} />
            <SearchForm handleChange={handleInputChange} onSubmit={handleSearchFormSubmit} validity={validity} toggle={toggle} error={error} handleCheckbox={handleCheckbox} />
            {isLoading
                ? <Preloader />
                : (isFailed ? <p className="movies__error" >{errorMessage}</p> : <MoviesCardList movies={movies} isEmpty={isEmpty} index={index} />)}
            <Footer />
            <SideMenu isActive={isActive} />
        </section>
    );
}

export default Movies;