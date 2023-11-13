import useForm from '@/hooks/useForm';
import api from '@/services/api';
import { News } from '@/types/LandingNews';
import { unmaskCpf } from '@/utils/mask/maskCpf';
import { unmaskDate } from '@/utils/mask/maskDate';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import useDashboard from '../dashboard/useDashboard';
import { Auth } from '@/types/Auth';
import { useAuth } from '@/hooks/useAuth';
import { GamesList } from '@/types/GamesList';

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
    const [news, setNews] = useState<News[]>([]);
    const [games, setGames] = useState<GamesList[]>([]);

    const { auth, setAuth, cookies, setCookie } = useAuth()

    const getNews = async () => {
        try {
            const response = await api.get('/notice/noticesReturn')
            if (response?.status === 200) {
                setNews(response?.data)
            }
        } catch (error) {
            toast.error('Erro ao buscar notícias')
            // console.error(error)
        }
    }

    const getGames = async () => {
        try {
            const response = await api.get('/games/gamesReturn')
            if (response?.status === 200) {
                setGames(response?.data)
            }
        } catch (error) {
            toast.error('Erro ao buscar jogos')
            // console.error(error)
        }
    }

    const handleLogin = async () => {
        try {
            const credentials = {
                email: values.email,
                password: values.password
            }

            const response = await api.post('/auth/login', credentials)
            if (response?.status === 200) {
                setAuth(response?.data)
                const userIdJSON = response?.data?.id;
                const token = response?.data?.Token;
                setCookie('TokenAuth', token, { path: '/' })
                setCookie('idUser', userIdJSON, { path: '/' })

                const hasNickname = response?.data?.hasNickname

                if (hasNickname) {
                    window.location.href = '/dashboard'
                } else {
                    window.location.href = '/welcome'
                }
            }
        } catch (error) {
            toast.error('Credenciais inválidas')
            // console.error(error)
            setErrors(true)
        }
    }

    const handleRegister = async () => {
        try {
            if (errors) return

            const user = {
                name: values.name,
                email: values.email,
                cpf: unmaskCpf(values.cpf),
                password: values.password,
                dateBirthday: unmaskDate(values.birthDate),
                username: ''
            }

            const response = await api.post('/auth/register', user)
            if (response?.status === 200) {
                await handleLogin()
            }
        }
        catch (error) {
            toast.error('Erro ao cadastrar')
            // console.error(error)
            setErrors(true)
        }
    }


    useEffect(() => {
        getNews()
        getGames()
    }, [])

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
        // Data
        news,
        games,
        cookies,
        auth,

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
