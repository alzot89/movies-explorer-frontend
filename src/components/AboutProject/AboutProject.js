import './about-project.css';

function AboutProject() {
    return (
        <section className="about-project" id="about">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__line"></div>
            <div className="about-project__container">
                <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                <h3 className="about-project__subtitle about-project__subtitle_weeks">На выполнение диплома ушло 5 недель</h3>
                <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className="about-project__paragraph">У каждого этапа был мягкий и жесткий дедлайн, которые нужно было соблюдать чтобы успешно защититься.</p>
            </div>
            <div className="about-project__progress-bar">
                <p className="about-project__one-week">1 неделя</p>
                <p className="about-project__four-weeks">4 недели</p>
            </div>
            <div className="about-project__milestones">
                <p className="about-project__backend">Back-end</p>
                <p className="about-project__frontend">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;