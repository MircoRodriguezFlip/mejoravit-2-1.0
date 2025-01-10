import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { UseForm } from '../../hooks/UseForm';
import ImgFormPrecalificar from '../../assets/images/imagen precalificar page mejoravit 2.webp';

export const FormPrecalificar = () => {
    const { formData, errors, handleChange, validateForm, estados } = UseForm();
    const [formError, setFormError] = useState(false); // Estado para el mensaje de "Completa el formulario"
    const [loading, setLoading] = useState(false); // Estado para manejar el spinner
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setFormError(true); // Mostrar mensaje de error si hay campos inválidos
            return;
        }

        setFormError(false); // Ocultar el mensaje si el formulario es válido
        setLoading(true); // Mostrar el spinner

        try {
            // Cambiar la URL a la del backend PHP
            const response = await fetch('/MejoraVit/backend/submit.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log('Respuesta del backend:', data);

            if (response.ok) {
                Swal.fire({
                    title: 'Excelente',
                    text: 'Datos enviados correctamente',
                    icon: 'success',
                }).then(() => {
                    navigate('/formulario-enviado');
                });
            } else {
                Swal.fire({
                    title: 'Ups',
                    text: 'Hubo un error al enviar los datos',
                    icon: 'error',
                });
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error);

            Swal.fire({
                title: 'Ups',
                text: 'Error al enviar los datos',
                icon: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form" noValidate>
            <div className="campos-obligatorios">
                <p className="light-text">(*) Campos obligatorios</p>
            </div>

            {/* NOMBRE */}
            <div className="campo-precalificar-form">
                <label htmlFor="nombre" className="light-text" aria-label="Nombre del usuario">
                    *Nombre Completo:
                </label>
                <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                {errors.nombre && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.nombre}
                    </small>
                )}
            </div>

            {/* TELEFONO */}
            <div className="campo-precalificar-form">
                <label htmlFor="telefono" className="light-text" aria-label="Telefono del usuario">
                    *Teléfono:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    maxLength="13"
                />
                {errors.telefono && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.telefono}
                    </small>
                )}
            </div>

            {/* ESTADO */}
            <div className="campo-precalificar-form">
                <label htmlFor="estado" className="light-text" aria-label="Estado donde vive del usuario">
                    *Estado donde vives:
                </label>
                <select className="form-control" id="estado" name="estado" value={formData.estado} onChange={handleChange}>
                    {estados.map((estado, index) => (
                        <option key={index} value={estado}>
                            {estado}
                        </option>
                    ))}
                </select>
                {errors.estado && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.estado}
                    </small>
                )}
            </div>

            {/* NSS */}
            <div className="campo-precalificar-form">
                <label htmlFor="seguroSocial" className="light-text" aria-label="Numero de seguro social del usuario">
                    Número de Seguro Social (Opcional):
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="seguroSocial"
                    name="seguroSocial"
                    value={formData.seguroSocial}
                    onChange={handleChange}
                    maxLength="11"
                />
            </div>

            <input type="hidden" name="form_type" value="registro"></input>

            {/* Contenedor para el botón y spinner */}
            <div>
                <button type="submit" className="botonForm bold-text" title="Haz clic para enviarnos tus datos" disabled={loading}>
                    ENVIAR
                </button>

                {/* Mostrar el spinner solo si el formulario está en proceso de envío */}
                {loading && (
                    <div className="spinner-container" aria-live="assertive">
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </div>
                )}
            </div>

            {/* Mensaje de error si el formulario tiene errores */}
            {formError && (
                <div className="form-error" aria-live="assertive">
                    <p>Completa el formulario.</p>
                </div>
            )}
            <div className="precalificar-form-image">
                <img src={ImgFormPrecalificar} alt="Hombre de traje apuntando hacia el formulario" loading="lazy" />
            </div>
        </form>
    );
};
