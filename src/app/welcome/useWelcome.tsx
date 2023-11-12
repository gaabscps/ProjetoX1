import api from '@/services/api';
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

    const handleSubmit = async () => {
        // if (error) {
        //     if (nickname.nickname === 'admin') {
        //         setError(true)
        //         setErrorMessage('Apelido indisponível')
        //     }
        //     else {
        //         toast.error('Preencha os campos corretamente')
        //         return
        //     }
        // }
        try {
            // const sessionToken = window.sessionStorage.getItem('sessionToken');
            const userIdJSON = window.localStorage.getItem('userId');
            const userId = userIdJSON
            const user = {
                // sessionToken: sessionToken,
                username: nickname.nickname
            };
            console.log(userId);
            const response = await api.patch(`/users/${userId as string}`, user);
            localStorage.removeItem('userId')
            console.log(response?.data);
            toast.success('Cadastrado');
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

