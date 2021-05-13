import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__note">Учебный проект Яндекс.Практикум x BeatFilm</p>
            <div className='footer__line'></div>
            <p className="footer__copyright">&copy; 2020</p>
            <nav className="footer__nav">
                <ul className="footer__links">
                    <li className="footer__list-element">
                        <Link to="#" className="footer__link">Яндекс.Практикум</Link>
                    </li>
                    <li className="footer__list-element">
                        <Link to="#" className="footer__link">GitHub</Link>
                    </li>
                    <li className="footer__list-element">
                        <Link to="#" className="footer__link">Facebook</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;