import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__note">Учебный проект Яндекс.Практикум x BeatFilm</p>
            <div className='footer__line'></div>
            <p className="footer__copyright">&copy; 2020</p>
            <nav className="footer__nav">
                <ul className="footer__links">
                    <li className="footer__list-element">
                        <a href="https://praktikum.yandex.ru/profile/web/" target="blank" className="footer__link">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__list-element">
                        <a href="https://github.com/alzot89" target="blank" className="footer__link">GitHub</a>
                    </li>
                    <li className="footer__list-element">
                        <a href="https://www.facebook.com/profile.php?id=100011348736376" target="blank" className="footer__link">Facebook</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;