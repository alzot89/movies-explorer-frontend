import './auth.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <section className="auth">
            <div className="auth__container">
                <Link to="/#about">
                    <img className="logo" src={logo} alt="картинка: лого"></img>
                </Link>
                <h2 className="auth__title">Добро пожаловать!</h2>
                <form className="form" name="register">
                    <div className="form__container">
                        <label className="form__label" htmlFor="name-input">Имя</label>
                        <input id="name-input" className="form__input" type="text" name="name" required />
                        <span id="name-input-error" className="form__error"></span>
                    </div>
                    <div className="form__container">
                        <label className="form__label" htmlFor="email-input">E-mail</label>
                        <input id="email-input" className="form__input" type="email" name="email" required />
                        <span id="email-input-error" className="form__error"></span>
                    </div>
                    <div className="form__container">
                        <label className="form__label" htmlFor="password-input">Пароль</label>
                        <input id="password-input" className="form__input" type="password" name="password" required />
                        <span id="password-input-error" className="form__error"></span>
                    </div>
                    <button className="form__button">Зарегистрироваться</button>
                </form>
                <p className="auth__enter">Уже зарегистрированы? <Link className="auth__link" to="/signin">Войти</Link></p>
            </div>
        </section>
    );
}

export default Register;