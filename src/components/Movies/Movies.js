import './movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies({ isActive, onOpenBurger }) {
    return (
        <>
            <Header isActive={isActive} onOpenBurger={onOpenBurger} />
            <SearchForm />
            <section className="movies">
                <MoviesCardList />
            </section>
            <Footer />
        </>
    );
}

export default Movies;