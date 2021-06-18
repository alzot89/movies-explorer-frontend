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
        e.target.setCustomValidity("Нужно ввести ключевое слово")
        setError("Нужно ввести ключевое слово");
    }

    useEffect(() => {
        setIsLoading(true);
        mainApi.getSavedMovies()
            .then((res) => {
                setMovies(res)
                setAllMovies(res)
            })
            .catch((err) => {
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
        setMovies(filteredMovies);
        setFilteredMovies(filteredMovies);
        form.reset();
        setSubmited(true);
        setError("");
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
                setMovies(shortMovies)
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

    return (
        <section className="movies">
            <Header isActive={isActive} onOpenBurger={onOpenBurger} />
            <SearchForm handleChange={handleInputChange} onSubmit={handleSearchFormSubmit} toggle={toggle} error={error} handleCheckbox={handleCheckbox} />
            {isLoading
                ? <Preloader />
                : <MoviesCardList movies={movies} index={index} onDeleteMovie={handleDeleteMovie} />}
            <Footer />
            <SideMenu isActive={isActive} />
        </section>
    );
}

export default SavedMovies;