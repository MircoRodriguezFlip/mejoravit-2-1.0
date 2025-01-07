import { NavLink } from 'react-router-dom';

import LogoNavbar from '../../assets/images/logo navbar rojo.webp';
import { navLinks } from '../utils/NavBarMenu';

import { BurgerMenu } from './BurgerMenu';

export const NavBar = () => {
    return (
        <header>
            <nav className="navbar" aria-label="Barra de navegación principal">
                {/* Logo */}
                <div className="logo-container">
                    <NavLink to="/" aria-label="Ir a la página principal">
                        <img src={LogoNavbar} alt="Logotipo de Infonavit en la barra de navegación" className="logo-navbar" loading="lazy" />
                    </NavLink>
                </div>

                {/* Menú de Navegación */}
                <ul className="menu-nav light-text">
                    {navLinks.map((item, index) => (
                        <li key={item.id}>
                            <NavLink to={item.to} title={item.title} className={({ isActive }) => (isActive ? 'active' : '')}>
                                {item.label}
                            </NavLink>
                            {index < navLinks.length - 1 && <span className="linea-separadora">|</span>}
                        </li>
                    ))}
                </ul>

                {/* Menú Hamburguesa */}
                <BurgerMenu />
            </nav>
        </header>
    );
};
