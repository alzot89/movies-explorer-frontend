import './saved-movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import SideMenu from '../SideMenu/SideMenu';
import { useEffect, useState } from 'react';
import useWindowDimensions from '../../utils/MediaQuery';
import { defineMoviesAmount } from '../../utils/defineMoviesAmount';
import { filterByKeyWord, filterByDuration } from '../../utils/FilterMovies';

function SavedMovies({ isActive, onOpenBurger }) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [isFailed, setIsFailed] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [validity, setValidity] = useState(true)
    const [allMovies, setAllMovies] = useState([]);
    const [submited, setSubmited] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [toggle, setToggle] = useState(false);
    const { width } = useWindowDimensions();
    const index = defineMoviesAmount(width)

    function handleInputChange(e) {
        setSearchQuery(e.target.value);
        setError("Нужно ввести ключевое слово");
        setValidity(e.target.validity.valid)
    }

    function checkMoviesLength(movies) {
        if (movies.length === 0) {
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
        }
    }

    useEffect(() => {
        setIsLoading(true);
        mainApi.getSavedMovies()
            .then((res) => {
                setIsFailed(false)
                setMovies(res)
                setAllMovies(res)
            })
            .catch((err) => {
                setIsFailed(true);
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, []);

    function handleSearchFormSubmit(e) {
        const form = e.target;
        e.preventDefault();
        const filteredMovies = filterByKeyWord(movies, searchQuery);
        setMovies((movies) => {
            movies = filteredMovies;
            checkMoviesLength(movies);
            return movies
        })
        setFilteredMovies(filteredMovies);
        form.reset();
        setSubmited(true);
        setError("");
        setValidity(true)
    }

    function handleCheckbox(e) {
        setToggle(!toggle);
        const checked = e.target.checked
        if (!submited) {
            if (!checked) {
                setMovies(allMovies)
            } else {
                const shortMovies = filterByDuration(movies)
                setMovies(shortMovies)
            }
        } else {
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
    }

    function handleDeleteMovie(movie) {
        mainApi.deleteMovie(movie._id)
            .then((res) => {
                console.log(res);
                const newMovies = movies.filter((m) => { return !(m._id === movie._id) && m });
                console.log(newMovies)
                setMovies(newMovies);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const errorMessage = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"


    return (
        <section className="movies">
            <Header isActive={isActive} onOpenBurger={onOpenBurger} />
            <SearchForm handleChange={handleInputChange} onSubmit={handleSearchFormSubmit} validity={validity} toggle={toggle} error={error} handleCheckbox={handleCheckbox} />
            {isLoading
                ? <Preloader />
                : (isFailed ? <p className="movies__error" >{errorMessage}</p> : <MoviesCardList movies={movies} isEmpty={isEmpty} index={index} onDeleteMovie={handleDeleteMovie} />)}
            <Footer />
            <SideMenu isActive={isActive} />
        </section>
    );
}

export default SavedMovies;