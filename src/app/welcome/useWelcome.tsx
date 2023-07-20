import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useWelcome = () => {
    const [nickname, setNickname] = useState({
        nickname: '',
    });
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    // FORMS
    const handleChange = (event: any) => {
        const fieldValue = event.target.value
        const fieldName = event.target.name

        setNickname((currentValues) => {
            return {
                ...currentValues,
                [fieldName]: fieldValue,
            }
        })
    }

    const validation = () => {
        const specialCharacters = ['@', '_', '-', '#', '$', '%', '¨', '&', '*', '(', ')', '+', '=', '/', '?', '>', '<', '|', '!', '{', '}', '[', ']', '^', '~', '´', '`'];

        if (specialCharacters.some(char => nickname.nickname.includes(char))) {
            setError(true);
            setErrorMessage('Seu apelido não pode conter caracteres especiais');
            return;
        }
        if (nickname.nickname.length < 3) {
            setError(true)
            setErrorMessage('Seu apelido não pode conter menos de 3 caracteres')
            return
        } else {
            setError(false)
            setErrorMessage('')
            return
        }
    }

    const handleSubmit = () => {
        if (error) {
            if (nickname.nickname === 'admin') {
                setError(true)
                setErrorMessage('Apelido indisponível')
            }
            else {
                toast.error('Preencha os campos corretamente')
                return
            }
        }
    }

    useEffect(() => {
        if (nickname.nickname !== '') {
            validation()
        }
    }, [nickname.nickname])

    return {
        handleChange,
        handleSubmit,
        validation,
        error,
        errorMessage,
        nickname
    }
}

