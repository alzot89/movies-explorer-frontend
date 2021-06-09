import './search-form.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleChange, onSubmit, toggle, handleCheckbox }) {
    return (
        <section className="search">
            <form className="search__form" name="search" onSubmit={onSubmit}>
                <div className="search__container">
                    <input className="search__input" name="movies" type="text" id="search" placeholder="Фильм" required onChange={handleChange}></input>
                    <span id="search__error" className="search__error"></span>
                </div>
                <button className="search__button">Найти</button>
                <FilterCheckbox toggle={toggle} handleCheckbox={handleCheckbox} />
            </form>
            <div className="search__line"></div>
        </section>
    );
}

export default SearchForm;