import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { navLinks } from '../utils/NavBarMenu';

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            {/* Icono de barras para abrir el menú */}
            <FontAwesomeIcon icon={faBars} className="burger-menu-icon" onClick={toggleMenu} />

            {/* Contenedor del menú móvil */}
            <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
                {/* Opciones del menú */}
                <ul className="burger-menu-nav bold-text">
                    {navLinks.map((link) => (
                        <div className="link-container" key={link.id}>
                            <li>
                                <NavLink to={link.to} onClick={toggleMenu} title={link.title}>
                                    {link.label}
                                </NavLink>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};
