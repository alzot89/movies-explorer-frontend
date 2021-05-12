import './header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to='#'>
                <img className="header__logo" src={logo} alt="картинка: лого"></img>
            </Link>
            <div className="header__nav">
                <Link className="header__link" to="/sign-up">Регистрация</Link>
                <button className="header__button">Войти</button>
            </div>
        </header>
    );
}

export default Header;