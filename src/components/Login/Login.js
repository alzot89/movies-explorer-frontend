import '../Register/auth.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <section className="auth">
            <div className="auth__container">
                <Link to="/">
                    <img className="logo" src={logo} alt="картинка: лого"></img>
                </Link>
                <h2 className="auth__title">Рады видеть!</h2>
                <form className="form" name="login">
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
                    <button className="form__button">Войти</button>
                </form>
                <p className="auth__enter">Еще не зарегистрированы? <Link className="auth__link" to="/signup">Регистрация</Link></p>
            </div>
        </section>
    );
}

export default Login;