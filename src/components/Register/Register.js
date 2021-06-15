import './auth.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useForm';
import { useEffect } from 'react';

function Register({ onRegister, errorMessage, setErrorMessage }) {
    const { credential, setValidity, setCredential, setIsValid, setErrors, validity, handleChange, errors, isValid } = useFormWithValidation();
    const initialValidity = { name: true, email: true, password: true }
    const initialInputData = { name: "", email: "", password: "" };

    function resetForm() {
        setCredential(initialInputData);
        setErrors(initialInputData);
        setIsValid(false);
        setValidity(initialValidity);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(credential);
        resetForm();
        setValidity(initialValidity)
    }

    useEffect(() => {
        setErrorMessage("")
        setValidity(initialValidity)
    }, [])

    return (
        <section className="auth">
            <div className="auth__container">
                <Link to="/">
                    <img className="logo" src={logo} alt="картинка: лого"></img>
                </Link>
                <h2 className="auth__title">Добро пожаловать!</h2>
                <form className="form" name="register" onSubmit={handleSubmit} >
                    <div className="form__container">
                        <label className="form__label" htmlFor="name-input">Имя</label>
                        <input id="name-input" className={`form__input ${!validity.email && 'form__input_invalid'} `} type="text" name="name" value={credential.name} onChange={handleChange} required />
                        <span id="name-input-error" className="form__error">{errors.name}</span>
                    </div>
                    <div className="form__container">
                        <label className="form__label" htmlFor="email-input">E-mail</label>
                        <input id="email-input" className={`form__input ${!validity.email && 'form__input_invalid'} `} type="email" name="email" value={credential.email} onChange={handleChange} required />
                        <span id="email-input-error" className="form__error">{errors.email}</span>
                    </div>
                    <div className="form__container">
                        <label className="form__label" htmlFor="password-input">Пароль</label>
                        <input id="password-input" className={`form__input ${!validity.email && 'form__input_invalid'} `} type="password" name="password" value={credential.password} onChange={handleChange} required />
                        <span id="password-input-error" className="form__error">{errors.password}</span>
                    </div>
                    <span className="form__error-message">{errorMessage}</span>
                    <button className={`form__button ${!isValid && 'form__button_inactive'}`}>Зарегистрироваться</button>
                </form>
                <p className="auth__enter">Уже зарегистрированы? <Link className="auth__link" to="/signin">Войти</Link></p>
            </div>
        </section>
    );
}

export default Register;