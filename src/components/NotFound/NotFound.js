import { Link } from 'react-router-dom';
import './not-found.css';

function NotFound() {
    return (
        <section className="not-found">
            <h3 className="not-found__code">404</h3>
            <p className="not-found__description">Страница не найдена</p>
            <Link to="/" className="not-found__link">Назад</Link>
        </section>
    );
}

export default NotFound;