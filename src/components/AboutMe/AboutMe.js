import './about-me.css';
import Me from '../../images/me.jpg';


function AboutMe() {
    return (
        <section className="about-me" id="student">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__line"></div>
            <img src={Me} alt="картинка: студент" className="about-me__image"></img>
            <h2 className="about-me__name">Саша Зотов</h2>
            <p className="about-me__subtitle">Фронтенд-разработчик, 32 года</p>
            <p className="about-me__description">Я родился в Москве в 89-м на краю города,
            моча рано ударила в голову.
            В 4 активно ругался матом, в детском саду
            девочки впервые показали мне п*зду.
            Потом школа, вонючая форма, драки, клей.
            Так я становился сильней.
            </p>
            <nav className="about-me__nav">
                <ul className="about-me__links">
                    <li className="about-me__list-element">
                        <a href="https://www.facebook.com/profile.php?id=100011348736376" target="blank" className="about-me__link">Facebook</a>
                    </li>
                    <li className="about-me__list-element">
                        <a href="https://github.com/alzot89" target="blank" className="about-me__link">GitHub</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default AboutMe;