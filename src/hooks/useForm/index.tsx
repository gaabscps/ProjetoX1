// useForm.ts
import { validator } from '@/utils/validators/validator';
import React, { useState, ChangeEvent, FocusEvent } from 'react';

export interface FormValues {
    [key: string]: string;
}

export interface ErrorMessages {
    [key: string]: string;
}
interface UseFormReturn {
    values: FormValues;
    errors: boolean;
    errorMessage: ErrorMessages;
    handleChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
    handleBlur: (event: FocusEvent<HTMLInputElement>) => void;
    setErrors: React.Dispatch<React.SetStateAction<boolean>>;
    setValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const useForm = (initialValues: FormValues): UseFormReturn => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<ErrorMessages>(
        Object.keys(initialValues).reduce((acc: Record<string, string>, key) => {
            acc[key] = '';
            return acc;
        }, {})
    );


    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = event.target;

        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        const validationErrors = validator(name, value, values);

        setErrorMessage(prevErrors => ({
            ...prevErrors,
            [name]: validationErrors[name] || '',
        }));

        const hasErrors = Object.values(validationErrors).some(error => error);

        setErrors(hasErrors);
    };

    return {
        values,
        errors,
        errorMessage,
        handleChange,
        handleBlur,
        setErrors,
        setValues,
    };
};

export default useForm;
