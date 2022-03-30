import './portfolio.css';
import Arrow from '../../images/arrow.svg'

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__container">
                <p className="portfolio__subtitle">Статичный сайт</p>
                <a href="https://alzot89.github.io/how-to-learn/" className="portfolio__link" target="blank">
                    <img src={Arrow} alt="картинка: ссылка"></img>
                </a>
                <div className="portfolio__line"></div>
                <p className="portfolio__subtitle">Адаптивный сайт</p>
                <a href="https://alzot89.github.io/russian-travel/" className="portfolio__link" target="blank">
                    <img src={Arrow} alt="картинка: ссылка"></img>
                </a>
                <div className="portfolio__line"></div>
                <p className="portfolio__subtitle">Одностраничное приложение</p>
                <a href="https://alzot89.github.io/react-mesto-auth/" className="portfolio__link" target="blank">
                    <img src={Arrow} alt="картинка: ссылка"></img>
                </a>
            </div>
        </section>
    );
}

export default Portfolio;