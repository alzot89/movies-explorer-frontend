import './nav.css';

function NavTab() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__element">
                    <a href="#about" className="nav__link" >О проекте</a>
                </li>
                <li className="nav__element">
                    <a href="#tech" className="nav__link">Технологии</a>
                </li>
                <li className="nav__element">
                    <a href="#student" className="nav__link">Студент</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;