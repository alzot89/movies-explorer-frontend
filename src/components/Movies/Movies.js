import './movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ isActive, onOpenBurger, movies, isLoading, handleChange, handleSubmit }) {
    return (
        <>
            <Header isActive={isActive} onOpenBurger={onOpenBurger} />
            <SearchForm handleChange={handleChange} onSubmit={handleSubmit} />
            <section className="movies">
                {isLoading
                    ? <Preloader />
                    : <MoviesCardList movies={movies} />}
            </section>
            <Footer />
        </>
    );
}

export default Movies;