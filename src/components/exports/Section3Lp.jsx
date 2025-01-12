import ImgSection3LP from '../../assets/images/Imagen Section 3LP.webp';

export const Section3Lp = () => {
    return (
        <section className="section-3-lp-container">
            <div className="section-3-lp-1 bold-text">
                <h2>¿Cómo Tramitar un Crédito Mejoravit en Efectivo?</h2>
                <h3>Requisitos para Mejoravit 2024</h3>
            </div>

            <div className="section-3-lp-2 light-text">
                <div>
                    <ul>
                        <li>Ser derechohabiente de Infonavit.</li>
                        <li>Tener en tu subcuenta de ahorro un mínimo de $20,971.58 pesos.</li>
                        <li>Realizar la precalificación mejoravit y contar con 1,050 puntos.</li>
                        <li>Tener mínimo 6 meses continuos cotizando en Infonavit.</li>
                        <li>No exceder de 65 años de edad.</li>
                        <li>No tener otro crédito vigente con Infonavit.</li>
                    </ul>
                </div>

                <div>
                    <img src={ImgSection3LP} alt="Tres Documentos apilados con un signo de check positivo" loading="lazy" />
                </div>
            </div>
        </section>
    );
};
