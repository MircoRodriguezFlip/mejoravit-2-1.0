import ImgSection5LP from '../../assets/images/Imagen Section 5LP.webp';

export const Section5Lp = () => {
    return (
        <section className="section-5-lp-container">
            <div className="section-5-lp-1 light-text">
                <p>
                    Una vez que reúnas todos los documentos y requisitos para Mejoravit te recomendamos dejar tus datos para que uno de nuestros
                    asesores certificados se contacte contigo a la brevedad.
                </p>
                <p>
                    Obtener un préstamo en efectivo no es complicado si cumples con los requisitos clave: ser asalariado(a) o trabajador(a)
                    independiente, y estar afiliado(a) al IMSS, con al menos 6 meses en tu empleo, podrás acceder a esta opción de financiamiento.
                </p>
            </div>

            <div className="section-5-lp-2">
                <img src={ImgSection5LP} alt="Mujer vestida de traje, investigando sobre el crédito mejoravit en un computador portátil" />
            </div>
        </section>
    );
};
