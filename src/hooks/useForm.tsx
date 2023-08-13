import React, { useState, useCallback } from 'react';

export function useForm<T>(initialValues: T) {
    const [formData, setFormData] = useState<T>(initialValues);

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }, []);

    const resetForm = useCallback(() => {
        setFormData(initialValues);
    }, [initialValues]);

    return { formData, handleChange, resetForm, setFormData };
}
