import './header.css';
import logo from '../../images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { useMediaQuery } from '../../utils/MediaQuery';

function Header({ isActive, onOpenBurger }) {

    const history = useHistory();

    function handleLoginButton() {
        history.push('/signin')
    }

    function handleAccountButton() {
        history.push('/profile')
    }

    const [width] = useMediaQuery();

    return (
        <header className="header">
            <Link to='/'>
                <img className="logo" src={logo} alt="картинка: лого"></img>
            </Link>
            <Route exact path="/">
                <div className="header__auth">
                    <Link className="header__link" to="/signup">Регистрация</Link>
                    <button className="header__button" onClick={handleLoginButton} >Войти</button>
                </div>
            </Route>
            <Route path="/profile">
                {(width > 768) &&
                    <>
                        <Navigation />
                        <button className="account-button" onClick={handleAccountButton}>Аккаунт</button>
                    </>
                }
                <div className={`header__burger ${isActive && 'header__burger_active'}`} onClick={onOpenBurger}>
                    <span></span>
                </div>
            </Route>
            <Route path="/movies">
                {(width > 768) &&
                    <>
                        <Navigation />
                        <button className="account-button" onClick={handleAccountButton}>Аккаунт</button>
                    </>
                }
                <div className={`header__burger ${isActive && 'header__burger_active'}`} onClick={onOpenBurger}>
                    <span></span>
                </div>
            </Route>
            <Route path="/saved-movies">
                {(width > 768) &&
                    <>
                        <Navigation />
                        <button className="account-button" onClick={handleAccountButton}>Аккаунт</button>
                    </>
                }
                <div className={`header__burger ${isActive && 'header__burger_active'}`} onClick={onOpenBurger}>
                    <span></span>
                </div>
            </Route>
        </header>
    );
}

export default Header;