import { useState } from 'react';

export const UseForm = () => {
    const initialState = {
        nombre: '',
        telefono: '',
        estado: '',
        seguroSocial: '',
        form_type: 'registro',
    };

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const estados = [
        '',
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'México',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'telefono') {
            // Asegura que solo se permitan números, añade prefijo +52 si no está presente
            const cleanValue = value.replace(/\D/g, ''); // Elimina caracteres no numéricos
            const formattedValue = cleanValue.startsWith('52') ? '+' + cleanValue : '+52' + cleanValue;
            setFormData((prev) => ({ ...prev, telefono: formattedValue }));
        } else if (name === 'seguroSocial') {
            // Limita el NSS a 11 caracteres y solo números
            const cleanValue = value.replace(/\D/g, '').slice(0, 11);
            setFormData((prev) => ({ ...prev, seguroSocial: cleanValue }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        // Limpia errores específicos del campo modificado
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'Por favor, ingresa tu nombre completo';
        }

        if (!/^\+52\d{10}$/.test(formData.telefono)) {
            newErrors.telefono = 'Por favor, ingresa un número de teléfono válido';
        }

        if (!formData.estado) {
            newErrors.estado = 'Por favor, selecciona un estado';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const resetForm = () => {
        setFormData(initialState);
        setErrors({});
    };

    return { formData, setFormData, errors, handleChange, validateForm, estados, resetForm };
};
