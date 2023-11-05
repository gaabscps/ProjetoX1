import api from '@/services/api';
import { useState } from 'react';
import { toast } from 'react-toastify';

const useLanding = () => {
    const [openLogin, setOpenLogin] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)
    const [values, setValues] = useState({
        name: '',
        email: '',
        cpf: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
    });
    const [errors, setErrors] = useState(false);



    // FORMS
    const handleChange = (event: any) => {
        const fieldValue = event.target.value
        const fieldName = event.target.name

        setValues((currentValues) => {
            return {
                ...currentValues,
                [fieldName]: fieldValue,
            }
        })
    }

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
            const response = await api.post('/auth/register', user)
            const userJSON = JSON.stringify(response.data._id);
            window.localStorage.setItem('userId', userJSON)
            console.log(response?.data)
            toast.success('Cadastrado')
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
        handleLogin,
        handleRegister,
        errors,

        // MODAL
        modal,

        // MODAL BUTTONS
        handleRegisterButton,
        handleLoginButton
    };

};


export default useLanding;
