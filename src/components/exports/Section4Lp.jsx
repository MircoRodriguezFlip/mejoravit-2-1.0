import ImgPaloma4LP from '../../assets/images/Paloma Mejoravit 2.webp';

const steps = [
    {
        text: 'Contar por lo menos con dos referencias personales.',
        highlight: 'referencias',
    },
    {
        text: 'Identificación oficial con fotografía vigente.',
        highlight: 'Identificación',
    },
    {
        text: 'Presentar acta de nacimiento.',
        highlight: 'acta',
    },
    {
        text: 'Llenar previamente la solicitud de crédito.',
        highlight: 'solicitud',
    },
];

export const Section4Lp = () => {
    return (
        <section className="section-4-lp-container">
            <div className="section-4-lp-1 bold-text">
                <h3>El proceso para sacar tu préstamo Infonavit en efectivo:</h3>
            </div>

            <div className="section-4-lp-2 light-text">
                {steps.map((step) => {
                    const [before, after] = step.text.split(step.highlight);

                    return (
                        <div key={step.highlight} className="section-4-lp-pasos">
                            <img src={ImgPaloma4LP} alt="Ticket check, que funciona como marcador de los pasos a seguir" />
                            <p>
                                {before}
                                <strong>{step.highlight}</strong>
                                {after}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
