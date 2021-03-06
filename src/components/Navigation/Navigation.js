import './navigation.css';
import { NavLink, useHistory } from 'react-router-dom';

function Navigation() {

    const history = useHistory();

    function handleAccountButton() {
        history.push('/profile')
    }

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__element">
                    <NavLink exact to='/' className="navigation__link" activeClassName="navigation__link_active">Главная</NavLink>
                </li>
                <li className="navigation__element">
                    <NavLink to='/movies' className="navigation__link" activeClassName="navigation__link_active">Фильмы</NavLink>
                </li>
                <li className="navigation__element">
                    <NavLink to='/saved-movies' className="navigation__link" activeClassName="navigation__link_active">Сохраненные фильмы</NavLink>
                </li>
            </ul>
            <button className="account-button account-button_navigation" onClick={handleAccountButton}>Аккаунт</button>
        </nav>
    );
}

export default Navigation;