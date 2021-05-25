import './search-form.css';

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <div className="search__container">
                    <input className="search__input" name="movies" type="text" id="search" placeholder="Фильм"></input>
                    <span id="search__error" className="search__error"></span>
                </div>
                <button className="search__button">Найти</button>
            </form>
            <div className="search__line"></div>
        </section>
    );
}

export default SearchForm;