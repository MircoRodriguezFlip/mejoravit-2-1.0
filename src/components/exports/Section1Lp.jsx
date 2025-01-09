import { NavLink } from 'react-router-dom';

import LogoPortada from '../../assets/images/logo negro.webp';
import TarjetaCredito from '../../assets/images/Tarjeta 2.webp';
import FlechaHome from '../../assets/images/Flecha Home.webp';

export const Section1Lp = () => {
    return (
        <section className="section-1-lp-container">
            <div className="section-1-lp-1">
                <div>
                    <div className="section-1-lp-1-1 titulo-section-1-1">
                        <img src={LogoPortada} alt="Logo de MejoraVit" loading="lazy" />
                        <h1 className="bold-text">¡Solicita tu crédito!</h1>
                    </div>

                    <div className="section-1-lp-1-2">
                        <img src={TarjetaCredito} alt="Imagen de Tarjeta de Crédito MejoraVit roja" loading="lazy" />
                    </div>
                </div>

                <div>
                    <div className="section-1-lp-1-1 titulo-section-1-2">
                        <img src={LogoPortada} alt="Logo de MejoraVit" loading="lazy" />
                        <h1 className="bold-text">¡Solicita tu crédito!</h1>
                    </div>

                    <div className="section-1-lp-2-1">
                        <img src={FlechaHome} alt="Flecha hacia abajo para indicar el siguiente paso" className="flecha-hacia-abajo" loading="lazy" />

                        <NavLink to="/precalificar" aria-label="Ir a la página de precalificación">
                            <button className="boton-home bold-text">SOLICITAR</button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="section-1-lp-2">
                <div className="section-1-lp-2-2 light-text">
                    <p className="section-1-lp-2-2-p1">
                        Obten hasta <strong>$156,445.00</strong> pesos en efectivo
                    </p>
                    <p className="section-1-lp-2-2-p2">Fácil • Rápido • Seguro</p>
                </div>
            </div>
        </section>
    );
};
