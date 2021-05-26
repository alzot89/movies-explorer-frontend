import './saved-movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ isActive, onOpenBurger }) {
    return (
        <>
            <Header isActive={isActive} onOpenBurger={onOpenBurger} />
            <SearchForm />
            <section className="movies">
                <MoviesCardList />
                <Preloader />
            </section>
            <Footer />
        </>
    );
}

export default SavedMovies;