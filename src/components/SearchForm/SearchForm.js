import './search-form.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleChange, validity, onSubmit, toggle, handleCheckbox, error }) {

    return (
        <section className="search">
            <form className="search__form" name="search" onSubmit={onSubmit}>
                <div className="search__container">
                    <input className="search__input" name="movies" type="text" id="search" placeholder="Фильм" required onChange={handleChange}></input>
                    <button className="search__button">Найти</button>
                </div>
                <span id="search__error" className="search__error">{!validity && error}</span>
                <FilterCheckbox toggle={toggle} handleCheckbox={handleCheckbox} />
            </form>
            <div className="search__line"></div>
        </section>
    );
}

export default SearchForm;