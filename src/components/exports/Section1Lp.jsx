import { NavLink } from 'react-router-dom';

import LogoNavbar from '../../assets/images/Logo Mejoravit Home negro.webp';
import TarjetaCredito from '../../assets/images/Tarjeta 2.webp';
import FlechaHome from '../../assets/images/Flecha Home.webp';

export const Section1Lp = () => {
    return (
        <section className="section-1-lp-container">
            <div className="section-1-lp-1">
                <div className="section-1-lp-1-1">
                    <img src={LogoNavbar} alt="Logo de MejoraVit" loading="lazy" />
                    <h1 className="bold-text">¡Solicita tu crédito!</h1>
                </div>

                <div className="section-1-lp-1-2">
                    <img src={TarjetaCredito} alt="Imagen de Tarjeta de Crédito MejoraVit roja" loading="lazy" />
                </div>
            </div>

            <div className="section-1-lp-2">
                <div className="section-1-lp-2-1">
                    <img src={FlechaHome} alt="Flecha hacia abajo para indicar el siguiente paso" className="flecha-hacia-abajo" loading="lazy" />

                    <NavLink to="/precalificar" aria-label="Ir a la página de precalificación">
                        <button className="boton-home bold-text">SOLICITAR</button>
                    </NavLink>
                </div>

                <div className="section-1-lp-2-2">
                    <p className="light-text">
                        El crédito Mejoravit en efectivo sirve para remodelar o ampliar tu vivienda, el cual te permite solicitar el efectivo de hasta{' '}
                        <strong>$156,445.00</strong> pesos. Dicho monto dependerá del plazo, capacidad de pago y el saldo de tu subcuenta de vivienda.
                    </p>
                </div>
            </div>
        </section>
    );
};
