import api from '@/services/api';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

export const useWelcome = () => {
    const [nickname, setNickname] = useState({
        nickname: '',
    });
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [cookies, setCookie] = useCookies(['TokenAuth', 'idUser']);

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

    const handleSubmit = async () => {
        try {
            const user = {
                username: nickname.nickname
            };
            const response = await api.patch(`/users/${cookies.idUser as string}`, user, {
                headers: {
                    'TokenAuth': cookies.TokenAuth
                }
            });
            if (response?.status === 200) {
                toast.success('Cadastrado');
                window.location.href = '/dashboard'
            }
        } catch (error) {
            console.log(error);
            toast.error('Erro ao cadastrar');
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

