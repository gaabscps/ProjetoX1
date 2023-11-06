import useForm from '@/hooks/useForm';
import api from '@/services/api';
import { unmaskCpf } from '@/utils/mask/maskCpf';
import { unmaskDate } from '@/utils/mask/maskDate';
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
    const [openTerms, setOpenTerms] = useState(false)
    const [selectedNewsIndex, setSelectedNewsIndex] = useState(-1); // Estado para controlar qual notícia foi clicada
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar se o modal de notícias está aberto


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
                cpf: unmaskCpf(values.cpf),
                password: values.password,
                dateBirthday: unmaskDate(values.birthDate),
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
        selectedNewsIndex,
        openTerms,
        isModalOpen,
        setOpenLogin,
        setOpenRegister,
        setIsModalOpen,
        setSelectedNewsIndex,
        setOpenTerms,
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
