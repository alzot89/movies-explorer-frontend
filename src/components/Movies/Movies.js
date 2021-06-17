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
import mainApi from '../../utils/MainApi';

function Movies({ isActive, onOpenBurger }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [filteredMovies, setFilteredMoviees] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [toggle, setToggle] = useState(false);
    const { width } = useWindowDimensions();
    const index = defineMoviesAmount(width)

    function handleInputChange(e) {
        setSearchQuery(e.target.value)
    }

    async function handleRequest() {
        try {
            const res = await moviesApi.getMovies();
            return res
        } catch (err) {
            console.log(err)
        }
    }

    function handleSearchFormSubmit(e) {
        setIsLoading(true)
        const form = e.target;
        e.preventDefault();
        handleRequest()
            .then((res) => {
                if (searchQuery !== '') {
                    const filteredMovies = filterByKeyWord(res, searchQuery)
                    setFilteredMoviees(filteredMovies)
                    setMovies(filteredMovies)
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
        form.reset();
    }

    function handleCheckbox(e) {
        setToggle(!toggle);
        const checked = e.target.checked
        if (!checked) {
            setMovies(filteredMovies)
        } else {
            const shortMovies = filterByDuration(filteredMovies)
            setMovies(shortMovies)
        }
    }

    return (
        <section className="movies">
            <Header isActive={isActive} onOpenBurger={onOpenBurger} />
            <SearchForm handleChange={handleInputChange} onSubmit={handleSearchFormSubmit} toggle={toggle} handleCheckbox={handleCheckbox} />
            {isLoading
                ? <Preloader />
                : <MoviesCardList movies={movies} index={index} />}
            <Footer />
            <SideMenu isActive={isActive} />
        </section>
    );
}

export default Movies;