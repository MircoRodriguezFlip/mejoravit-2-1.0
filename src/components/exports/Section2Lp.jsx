import ImgSection2LP from '../../assets/images/Imagen Section 2LP.webp';

export const Section2Lp = () => {
    return (
        <section className="section-2-lp-container">
            <div className="section-2-lp-1 bold-text">
                <h2>Entre las mejoras que ha tenido el crédito Mejoravit, podemos destacar los siguientes:</h2>
            </div>

            <div className="section-2-lp-2 light-text">
                <div>
                    <ul>
                        <li>plazos flexibles de 12 a 48 meses para realizar el pago.</li>
                        <li>Solicitalo con solo 6 meses cotizando en el IMSS con el mismo empleador.</li>
                        <li>Tasa de interés del 11% anual, más baja que otros préstamos similares.</li>
                    </ul>
                </div>

                <div>
                    <img src={ImgSection2LP} alt="Mujer apuntando con el dedo las características principales de crédito mejoravit" loading="lazy" />
                </div>
            </div>
        </section>
    );
};
