import '../Register/auth.css';
import logo from '../../images/logo.png';
import { useFormWithValidation } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Login({ onLogin, errorMessage }) {
    const { credential, setValidity, validity, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const initialValidity = { email: true, password: true }

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(credential);
        resetForm();
        setValidity(initialValidity)
    }

    useEffect(() => {
        setValidity(initialValidity)
    }, [])

    return (
        <section className="auth">
            <div className="auth__container">
                <Link to="/">
                    <img className="logo" src={logo} alt="картинка: лого"></img>
                </Link>
                <h2 className="auth__title">Рады видеть!</h2>
                <form className="form" name="login" onSubmit={handleSubmit} >
                    <div className="form__container">
                        <label className="form__label" htmlFor="email-input">E-mail</label>
                        <input id="email-input" className={`form__input ${!validity.email && 'form__input_invalid'} `} type="email" name="email" value={credential.email} required onChange={handleChange} />
                        <span id="email-input-error" className="form__error">{errors.email}</span>
                    </div>
                    <div className="form__container">
                        <label className="form__label" htmlFor="password-input">Пароль</label>
                        <input id="password-input" className={`form__input ${!validity.password && 'form__input_invalid'} `} type="password" name="password" value={credential.password} required onChange={handleChange} />
                        <span id="password-input-error" className="form__error">{errors.password}</span>
                    </div>
                    <span className="form__error-message">{errorMessage}</span>
                    <button className={`form__button ${!isValid && 'form__button_inactive'}`}>Войти</button>
                </form>
                <p className="auth__enter">Еще не зарегистрированы? <Link className="auth__link" to="/signup">Регистрация</Link></p>
            </div>
        </section>
    );
}

export default Login;