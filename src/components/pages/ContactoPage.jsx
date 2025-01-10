import LogoPortada from '../../assets/images/logo negro.webp';
import { FormContact } from '../exports/FormContacto';

export const ContactoPage = () => {
    return (
        <main className="page-container fondo-page">
            <section className="contacto-page-s1">
                <div className="contacto-page-titulo">
                    <img src={LogoPortada} alt="Logo de MejoraVit" loading="lazy" />

                    <h1 className="bold-text">Contacto</h1>

                    <h2 className="bold-text">Información de Contacto</h2>

                    <h3 className="light-text">Info@mejoravit.com.mx</h3>

                    <h3 className="light-text">+52 8128802899</h3>
                </div>
            </section>

            <section>
                <FormContact />
            </section>
        </main>
    );
};
