import './movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import SideMenu from '../SideMenu/SideMenu';

function Movies({ isActive, onOpenBurger }) {
    return (
        <>
            <Header isActive={isActive} onOpenBurger={onOpenBurger} />
            <SearchForm />
            <section className="movies">
                <ul className="search__list">

                </ul>
                <button className="movies__button">Еще</button>
                <SideMenu isActive={isActive} />
            </section>
            <Footer />
        </>
    );
}

export default Movies;