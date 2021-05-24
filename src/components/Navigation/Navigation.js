import './navigation.css';
import { Link } from 'react-router-dom';

function Navigation({ isActive }) {
    return (
        <>
            <nav className={`navigation ${isActive && 'navigation_active'}`}>
                <ul className="navigation__list">
                    <li className="navigation__element">
                        <Link to='/' className="navigation__link">Главная</Link>
                    </li>
                    <li className="navigation__element">
                        <Link to='/movies' className="navigation__link">Фильмы</Link>
                    </li>
                    <li className="navigation__element">
                        <Link to='/saved-movies' className="navigation__link">Сохраненные фильмы</Link>
                    </li>
                </ul>
            </nav>
            <div className={`navigation__overlay ${isActive && 'navigation__overlay_active'}`}></div>
        </>
    );
}

export default Navigation;