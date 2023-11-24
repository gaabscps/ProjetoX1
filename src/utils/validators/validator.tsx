import { FormValues } from '@/hooks/useForm';
import { validateCPF } from './validatorCpf';
import { validateBirthDate } from './validator18+';

interface ValidationErrors {
    [key: string]: string;
}

interface Values extends FormValues {
    [key: string]: string;
}

export const validator = (
    fieldName: string,
    fieldValue: string,
    values: Values
): ValidationErrors => {
    const specialCharacters = [
        '@', '_', '-', '#', '$', '%', '¨', '&', '*', '(', ')', '+', '=', '/',
        '?', '>', '<', '|', '!', '{', '}', '[', ']', '^', '~', '´', '`', '  '
    ];
    const errors: ValidationErrors = {};

    if (fieldValue === '') {
        return errors;
    }

    else if (fieldName === 'email') {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(fieldValue)) {
            errors[fieldName] = 'E-mail inválido';
        }
    }

    else if (fieldName === 'name') {
        if (specialCharacters.some(char => fieldValue.includes(char))) {
            errors[fieldName] = 'Seu nome não pode conter caracteres especiais';
        }
        if (fieldValue.length < 3) {
            errors[fieldName] = 'Seu nome não pode conter menos de 3 caracteres';
        }
    }

    else if (fieldName === 'password') {
        if (fieldValue.length < 8) {
            errors[fieldName] = 'Sua senha não pode conter menos de 8 caracteres';
        }
    }

    else if (fieldName === 'confirmPassword') {
        if (values.password !== values.confirmPassword) {
            errors['confirmPassword'] = 'As senhas não coincidem';
        }
    }

    else if (fieldName === 'cpf') {
        if (fieldValue.length < 11) {
            errors[fieldName] = 'Seu CPF não pode conter menos de 11 caracteres';
        }
        const cpfValidation = validateCPF(fieldValue);
        if (cpfValidation !== true) {
            errors[fieldName] = 'CPF inválido';
        }
    }

    else if (fieldName === 'birthDate') {
        if (fieldValue.length < 10) {
            errors[fieldName] = 'Sua data de nascimento não pode conter menos de 10 caracteres';
        }
        const birthDateValidation = validateBirthDate(fieldValue);
        if (birthDateValidation !== true) {
            errors[fieldName] = 'Você deve ter pelo menos 18 anos';
        }
    }


    return errors;
};
