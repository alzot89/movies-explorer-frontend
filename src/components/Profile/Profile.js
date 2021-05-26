import './profile.css';
import Header from '../Header/Header'
import { Link } from 'react-router-dom';

function Profile({ onOpenBurger, isActive }) {
    return (
        <>
            <Header onOpenBurger={onOpenBurger} isActive={isActive} />
            <section className="profile">
                <h2 className="profile__title">Привет, Александр</h2>
                <form className="form form_profile" name="register">
                    <div className="form__container form__container__profile">
                        <label className="form__label form__label_profile" htmlFor="name-input">Имя</label>
                        <input id="name-input" className="form__input form__input_profile" type="text" name="name" required />
                        <span id="name-input-error" className="form__error"></span>
                    </div>
                    <div className="form__container form__container_profile">
                        <label className="form__label form__label_profile" htmlFor="email-input">E-mail</label>
                        <input id="email-input" className="form__input form__input_profile" type="email" name="email" required />
                        <span id="email-input-error" className="form__error"></span>
                    </div>
                    <button className="form__button form__button_profile">Редактировать</button>
                </form>
                <Link to="/" className="profile__out">Выйти из аккаунта</Link>
            </section>
        </>
    );
}

export default Profile;