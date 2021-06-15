import './profile.css';
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useForm';
import { useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onOpenBurger, isActive, handleLogout, onUpdateProfile, errorMessage, setErrorMessage }) {
    const { credential, setValidity, setCredential, setIsValid, setErrors, validity, handleChange, errors, isValid } = useFormWithValidation();
    const initialValidity = { name: true, email: true };
    const initialInputData = { name: "", email: "" };
    const currentUser = useContext(CurrentUserContext);

    function resetForm() {
        setCredential(initialInputData);
        setErrors(initialInputData);
        setIsValid(false);
        setValidity(initialValidity);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateProfile(credential);
        resetForm();
        setValidity(initialValidity)
    }

    useEffect(() => {
        setErrorMessage("")
        setValidity(initialValidity);
        setCredential(currentUser)
    }, [])

    return (
        <>
            <Header onOpenBurger={onOpenBurger} isActive={isActive} />
            <section className="profile">
                <h2 className="profile__title">Привет, Александр</h2>
                <form className="form form_profile" name="profile" onSubmit={handleSubmit} >
                    <div className="form__container form__container__profile">
                        <label className="form__label form__label_profile" htmlFor="name-input">Имя</label>
                        <input id="name-input" className={`form__input form__input_profile ${!validity && 'form__input_invalid'}`} type="text" name="name" value={credential.name} onChange={handleChange} required />
                        <span id="name-input-error" className="form__error">{errors.name}</span>
                    </div>
                    <div className="form__container form__container_profile">
                        <label className="form__label form__label_profile" htmlFor="email-input">E-mail</label>
                        <input id="email-input" className={`form__input form__input_profile ${!validity && 'form__input_invalid'}`} type="email" name="email" value={credential.email} onChange={handleChange} required />
                        <span id="email-input-error" className="form__error">{errors.email}</span>
                    </div>
                    <span className="form__error-message">{errorMessage}</span>
                    <button className={`form__button form__button_profile ${!isValid && 'form__button_inactive'}`}>Редактировать</button>
                </form>
                <Link to="/" className="profile__out" onClick={handleLogout}>Выйти из аккаунта</Link>
            </section>
        </>
    );
}

export default Profile;