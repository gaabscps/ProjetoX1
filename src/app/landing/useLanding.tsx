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

    const handleLogin = () => {
        values.email === 'admin@email.com' && values.password === '123'
            ? toast.success('Entrou')
            : toast.error('Credenciais inválidas')
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

        // MODAL
        modal,

        // MODAL BUTTONS
        handleRegisterButton,
        handleLoginButton
    };

};


export default useLanding;
