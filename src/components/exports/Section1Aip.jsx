import Img1Section1AIP from '../../assets/images/add info imagen 1.webp';
import Img1Section2AIP from '../../assets/images/add info imagen 2.webp';
import Img1Section3AIP from '../../assets/images/add info imagen 3.webp';
import Img1Section4AIP from '../../assets/images/add info imagen 4.webp';

const ventajas = [
    {
        text: 'Puedes obtener el préstamo aunque la casa que deseas renovar no sea de tu propiedad.',
        img: Img1Section1AIP,
        alt: 'Imagen de 2 manos pasando una moneda de una a otra.',
        id: 'ventaja-1',
    },
    {
        text: 'Los pagos del crédito se te descuentan vía nómina (las aportaciones patronales se van directamente al pago del crédito) lo que ayuda a que el plazo del crédito se reduzca.',
        img: Img1Section2AIP,
        alt: 'Imagen de 2 manos pasando un billete de una a otra.',
        id: 'ventaja-2',
    },
    {
        text: 'No hay penalizaciones por pago anticipado.',
        img: Img1Section3AIP,
        alt: 'Imagen de un celular con un billete de 100 pesos en la pantalla.',
        id: 'ventaja-3',
    },
    {
        text: 'Puedes solicitar este crédito en múltiples veces, sólo debes esperar 2 meses desde el momento en que liquidaste el anterior.',
        img: Img1Section4AIP,
        alt: 'Imagen de una mano con un formulario como el de solicitud de crédito.',
        id: 'ventaja-4',
    },
];

export const Section1Aip = () => {
    return (
        <section className="section-1-aip-container bold-text">
            <h1>Conoce las ventajas de tu crédito Mejoravit</h1>

            <div className="section-1-aip-ventajas light-text">
                {ventajas.map((ventaja) => {
                    return (
                        <div key={ventaja.id} className="section-1-aip-ventaja">
                            <img src={ventaja.img} alt={ventaja.alt} loading="lazy" />
                            <p>{ventaja.text}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
