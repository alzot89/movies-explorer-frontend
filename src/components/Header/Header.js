import './header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

function Header({ isActive, onOpenBurger }) {

    return (
        <header className="header">
            <Link to='/'>
                <img className="logo" src={logo} alt="картинка: лого"></img>
            </Link>
            <Route exact path="/">
                <div className="header__nav">
                    <Link className="header__link" to="/signup">Регистрация</Link>
                    <button className="header__button">Войти</button>
                </div>
            </Route>
            <Route path="/profile">
                <button className="header__button header__button_profile">Аккаунт</button>
                <div className={`header__burger ${isActive && 'header__burger_active'}`} onClick={onOpenBurger}>
                    <span></span>
                </div>
            </Route>
        </header>
    );
}

export default Header;