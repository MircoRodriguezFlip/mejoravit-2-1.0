import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import ImgFormContacto from '../../assets/images/imagen contacto page mejoravit 2.webp';

const opcionesAsunto = ['Selecciona un asunto', 'Consulta', 'Reclamo', 'Sugerencia', 'Otro'];

export const FormContact = () => {
    const [formData, setFormData] = useState({
        nombreCompleto: '',
        telefono: '+52',
        email: '',
        asunto: 'Selecciona un asunto',
        mensaje: '',
        form_type: 'contacto',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'telefono') {
            // Asegura que el prefijo "+52" siempre esté presente
            const phoneNumber = value.replace(/\D/g, '');
            const newPhoneValue = phoneNumber ? '+52' + phoneNumber.slice(2) : '+52';
            setFormData((prevData) => ({ ...prevData, telefono: newPhoneValue }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }

        // Limpiar errores al cambiar el valor
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombreCompleto.trim()) newErrors.nombreCompleto = 'Completa este campo.';
        if (formData.telefono.length <= 3 || formData.telefono.length < 8) {
            newErrors.telefono = 'Ingresa un número de teléfono válido.';
        }
        if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Ingresa un correo electrónico válido.';
        if (formData.asunto === 'Selecciona un asunto') newErrors.asunto = 'Selecciona un asunto válido.';
        if (!formData.mensaje.trim()) newErrors.mensaje = 'Completa este campo.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        try {
            const response = await fetch('/MejoraVit/backend/submit.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Enviado',
                    text: 'Tu mensaje fue enviado correctamente.',
                    icon: 'success',
                }).then(() => navigate('/mensaje-enviado'));
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al enviar tu mensaje.',
                    icon: 'error',
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'No se pudo enviar tu mensaje.',
                icon: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form light-text" noValidate>
            <div className="campos-obligatorios">
                <p className="light-text">(*) Campos obligatorios</p>
            </div>

            {/* NOMBRE COMPLETO */}
            <div className="campo-precalificar-form">
                <label htmlFor="nombreCompleto" className="form-label" aria-label="Nombre completo del usuario">
                    *Nombre Completo:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="nombreCompleto"
                    name="nombreCompleto"
                    value={formData.nombreCompleto}
                    onChange={handleChange}
                />
                {errors.nombreCompleto && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.nombreCompleto}
                    </small>
                )}
            </div>

            {/* TELEFONO */}
            <div className="campo-precalificar-form">
                <label htmlFor="telefono" className="form-label" aria-label="Telefono del usuario">
                    *Teléfono:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    maxLength="13" // +52 y 10 dígitos
                />
                {errors.telefono && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.telefono}
                    </small>
                )}
            </div>

            {/* EMAIL */}
            <div className="campo-precalificar-form">
                <label htmlFor="email" className="form-label" aria-label="Email del usuario">
                    *Correo Electrónico:
                </label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.email}
                    </small>
                )}
            </div>

            {/* ASUNTO */}
            <div className="campo-precalificar-form">
                <label htmlFor="asunto" className="form-label" aria-label="Asunto del usuario">
                    *Asunto:
                </label>
                <select className="form-control" id="asunto" name="asunto" value={formData.asunto} onChange={handleChange}>
                    {opcionesAsunto.map((opcion) => (
                        <option key={opcion} value={opcion}>
                            {opcion}
                        </option>
                    ))}
                </select>
                {errors.asunto && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.asunto}
                    </small>
                )}
            </div>

            {/* MENSAJE */}
            <div className="campo-precalificar-form">
                <label htmlFor="mensaje" className="form-label" aria-label="Mensaje del usuario">
                    *Mensaje:
                </label>
                <textarea
                    className="form-control textAreaForm"
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="5"
                ></textarea>
                {errors.mensaje && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.mensaje}
                    </small>
                )}
            </div>

            <input type="hidden" name="form_type" value="contacto"></input>

            {/* BOTÓN DE ENVÍO */}
            <div>
                <button type="submit" className="botonForm bold-text" title="Haz clic para enviarnos tus comentarios" disabled={loading}>
                    ENVIAR
                </button>
                {loading && (
                    <div className="spinner-container">
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </div>
                )}
            </div>

            <div className="contacto-form-image">
                <img src={ImgFormContacto} alt="Sobres dorados siendo enviados por correo, para hacernos llegar tu mensaje" loading="lazy" />
            </div>
        </form>
    );
};
