import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

import LogoNavbar from '../../assets/images/Logo Navbar.webp';

export const Footer = () => {
    return (
        <footer className="footer">
            <div>
                {/* Logo y Redes Sociales */}
                <section>
                    <div>
                        <NavLink to="/" aria-label="Volver al inicio">
                            <img src={LogoNavbar} alt="Logo de Mejoravit Infonavit" className="img-logo-footer" loading="lazy" />
                        </NavLink>
                    </div>

                    {/* Redes Sociales */}
                    <div>
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="icono-redes" />
                        <FontAwesomeIcon icon={faTiktok} size="2x" className="icono-redes" />
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </div>
                </section>

                {/* Copyright */}
                <section className="poli-copy">
                    <p className="light-text">
                        © 2025 Mejoravit | Infonavit <br />
                        <NavLink to="/politica-privacidad" title="Ver la política de privacidad">
                            Política de privacidad
                        </NavLink>
                    </p>
                </section>
            </div>
        </footer>
    );
};
