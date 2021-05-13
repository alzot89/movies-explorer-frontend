import './nav.css';
import { NavLink } from 'react-router-dom';

function NavTab() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__element">
                    <NavLink to="#" className="nav__link" activeClassName="nav__link_avctive">О проекте</NavLink>
                </li>
                <li className="nav__element">
                    <NavLink to="#" className="nav__link" activeClassName="nav__link_avctive">Технологии</NavLink>
                </li>
                <li className="nav__element">
                    <NavLink to="#" className="nav__link" activeClassName="nav__link_avctive">Студент</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;