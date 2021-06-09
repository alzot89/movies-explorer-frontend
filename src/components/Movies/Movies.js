import './movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { defineMoviesAmount } from '../../utils/defineMoviesAmount';
import useWindowDimensions from '../../utils/MediaQuery';

function Movies({ isActive, onOpenBurger, movies, isLoading, handleChange, handleSubmit, toggle, handleCheckbox }) {

    const { width } = useWindowDimensions();
    const index = defineMoviesAmount(width)

    return (
        <>
            <Header isActive={isActive} onOpenBurger={onOpenBurger} />
            <SearchForm handleChange={handleChange} onSubmit={handleSubmit} toggle={toggle} handleCheckbox={handleCheckbox} />
            <section className="movies">
                {isLoading
                    ? <Preloader />
                    : <MoviesCardList movies={movies} index={index} />}
            </section>
            <Footer />
        </>
    );
}

export default Movies;