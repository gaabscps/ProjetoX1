import useForm from '@/hooks/useForm';
import api from '@/services/api';
import { useState } from 'react';
import { toast } from 'react-toastify';

const useLanding = () => {
    const { values, errorMessage, errors, handleChange, handleBlur, setErrors } = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
    });

    const [openLogin, setOpenLogin] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)


    const handleLogin = async () => {
        try {
            const auth = {
                email: values.email,
                password: values.password
            }
            const response = await api.post('/auth/login', auth)
            const userJSON = JSON.stringify(response?.data?._id);
            window.localStorage.setItem('userId', userJSON)
            console.log(response?.data)
            window.sessionStorage.setItem('sessionToken', response?.data?.authentication?.sessionToken)
            toast.success('Entrou')
            if (response?.data?.username) {
                window.location.href = '/dashboard'
            } else {
                window.location.href = '/welcome'
            }
        } catch (error) {
            console.log(error)
            setErrors(true)
            toast.error('Credenciais inválidas')
        }
    }

    const handleRegister = async () => {
        try {
            const user = {
                name: values.name,
                email: values.email,
                cpf: values.cpf,
                password: values.password,
                dateBirthday: values.birthDate,
                username: ''
            }
            if (errors) {
                return
            }
            const response = await api.post('/auth/register', user)
            const userJSON = JSON.stringify(response.data._id);
            window.localStorage.setItem('userId', userJSON)
            console.log(response?.data)
            toast.success('Cadastrado')
            window.location.href = '/welcome'
        } catch (error) {
            console.log(error)
            setErrors(true)
            toast.error('Erro ao cadastrar')
        }
    }


    // MODAL
    const handleRegisterButton = () => {
        setOpenLogin(false)
        setOpenRegister(true)
    }

    const handleLoginButton = () => {
        setOpenRegister(false)
        setOpenLogin(true)
    }

    const modal = {
        openLogin,
        openRegister,
        setOpenLogin,
        setOpenRegister,
    }

    return {
        // FORMS
        values,
        handleChange,
        handleBlur,
        handleLogin,
        handleRegister,
        errors,
        errorMessage,

        // MODAL
        modal,

        // MODAL BUTTONS
        handleRegisterButton,
        handleLoginButton
    };

};


export default useLanding;
