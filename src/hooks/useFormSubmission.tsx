import React, {useCallback} from 'react';
import {useForm} from "./useForm";

export function useFormSubmission<T>(
    initialValues: T,
    onSubmit: (formData: T) => void,
    onCloseModal: () => void
) {
    const {formData, handleChange, resetForm, setFormData} = useForm<T>(initialValues);

    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            onSubmit(formData);
            resetForm();
            onCloseModal();
        },
        [onSubmit, formData, resetForm, onCloseModal]
    );

    return {formData, handleChange, handleSubmit, setFormData};
}
