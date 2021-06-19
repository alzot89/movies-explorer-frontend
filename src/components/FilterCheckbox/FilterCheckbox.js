import './checkbox.css';

function FilterCheckbox({ toggle, handleCheckbox }) {

    function handleChange(e) {
        handleCheckbox(e)
    }

    return (
        <label htmlFor="checkbox" className="search__label" >
            <input className="search__input search__input_type_checkbox" type="checkbox" checked={toggle} name="checkbox" id="checkbox" onChange={handleChange} ></input>
            <span className={`search__base ${toggle && 'search__base_active'}`}></span>
            <span className={`search__tumbler ${toggle && 'search__tumbler_active'}`}></span>
            <span className="search__label-text">Короткометражки</span>
        </label>
    );
}

export default FilterCheckbox;