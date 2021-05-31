import './techs.css';

function Techs() {
    return (
        <section className="techs" id="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="techs__line"></div>
            <h2 className="techs__seven">7 Технологий</h2>
            <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в проекте.</p>
            <ul className="techs__list">
                <li className="techs__list-element">
                    <p className="techs__item">HTMS</p>
                </li>
                <li className="techs__list-element">
                    <p className="techs__item">CSS</p>
                </li>
                <li className="techs__list-element">
                    <p className="techs__item">JS</p>
                </li>
                <li className="techs__list-element">
                    <p className="techs__item">React</p>
                </li>
                <li className="techs__list-element">
                    <p className="techs__item">Git</p>
                </li>
                <li className="techs__list-element">
                    <p className="techs__item">Express.js</p>
                </li>
                <li className="techs__list-element">
                    <p className="techs__item">mongoDB</p>
                </li>
            </ul>
        </section>
    );
}

export default Techs;