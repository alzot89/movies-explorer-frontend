import './header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <a href='#about'>
                <img className="logo" src={logo} alt="картинка: лого"></img>
            </a>
            <div className="header__nav">
                <Link className="header__link" to="/signup">Регистрация</Link>
                <button className="header__button">Войти</button>
            </div>
        </header>
    );
}

export default Header;