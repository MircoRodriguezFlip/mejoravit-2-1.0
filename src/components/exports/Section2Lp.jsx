import ImgSection2LP from '../../assets/images/Imagen Section 2LP.png';

export const Section2Lp = () => {
    return (
        <section className="section-2-lp-container">
            <div className="section-2-lp-1 bold-text">
                <h2>Entre las mejoras que ha tenido el crédito Mejoravit, podemos destacar los siguientes:</h2>
            </div>

            <div className="section-2-lp-2 light-text">
                <div>
                    <ul>
                        <li>Plazos más cómodos para cubrir el pago, los cuales van de 12 meses a 48 meses.</li>
                        <li>Puedes solicitarlo aunque solo tengas 6 meses cotizando en el IMSS con el mismo patrón.</li>
                        <li>Mejor tasa de interés la cual es del 11% anual (más baja en comparación con otros préstamos personales similares).</li>
                    </ul>
                </div>

                <div>
                    <img src={ImgSection2LP} alt="Imagen de la sección 2 de la landing page" />
                </div>
            </div>
        </section>
    );
};
