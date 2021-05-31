import './side-menu.css';
import Navigation from '../Navigation/Navigation'

function SideMenu({ isActive }) {
    return (
        <>
            <div className={`side-menu__overlay ${isActive && 'side-menu__overlay_active'}`}></div>
            <div className={`side-menu__container ${isActive && 'side-menu__container_active'}`}>
                <Navigation />
            </div>
        </>
    );
}

export default SideMenu;