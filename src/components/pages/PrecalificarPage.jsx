import LogoPortada from '../../assets/images/logo negro.webp';
import { FormPrecalificar } from '../exports/FormPrecalificar';

export const PrecalificarPage = () => {
    return (
        <main className="page-container fondo-page">
            <section className="precalificar-page-s1">
                <div className="precalificar-page-titulo">
                    <img src={LogoPortada} alt="Logo de MejoraVit" loading="lazy" />

                    <h1 className="bold-text">Ingresa tus datos para precalificar</h1>

                    <h2 className="light-text">
                        Un asesor certificado se comunicará contigo para brindarte más información sobre tu crédito Mejoravit.
                    </h2>
                </div>
            </section>

            <section className="form-precalificar-container">
                <FormPrecalificar />
            </section>
        </main>
    );
};
