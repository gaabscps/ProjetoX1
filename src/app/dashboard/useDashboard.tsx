import { useEffect, useState } from 'react';
import ModalAddGameBody from './components/ModalBody/AddGame';
import ModalFastGameBody from '@/components/ModalBody/FastGame';
import ModalSearchingFastGameBody from './components/ModalBody/SearchingFastGame';
import api from '@/services/api';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { Dashboard, Location } from '@/types/Dashboard';
import { LocationService } from '@/types/LocationService';
import { useHeader } from '@/components/Header/useHeader';

const useDashboard = () => {
    const [openAddGame, setOpenAddGame] = useState(false)
    const [openFastGame, setOpenFastGame] = useState(false)
    const [openSearchingFastGame, setOpenSearchingFastGame] = useState(false)
    const [profile, setProfile] = useState<Dashboard>()
    const [cookies, setCookie] = useCookies(['TokenAuth', 'idUser']);

    const { logOut } = useHeader();

    const getProfile = async () => {
        try {
            const response = await api.get('/dashboard/myProfile', {
                headers: {
                    'TokenAuth': cookies.TokenAuth,
                    'idUser': cookies.idUser as string
                }
            })
            if (response?.status === 200) {
                setProfile(response?.data)
                window.sessionStorage.setItem('profile', JSON.stringify(response?.data))
                await getUserLocation()
            }
        } catch (error) {
            setTimeout(() => {
                toast.error('Erro ao buscar notícias, tente entrar novamente')
            }, 1000)
            logOut()
        }
    }
    const getUserLocation = async () => {
        try {
            const response = await fetch('https://eu-api.ipdata.co?api-key=365b3166a0da06597d8b9274e88500020348a287202c9c076e33a1a0');
            const data = await response.json();

            const newLocation: Location = {
                Country: data.country_name,
                CountryFlag: data.flag,
            };

            setProfile((prevProfile: any) => {
                if (!prevProfile) {
                    return {
                        Location: newLocation,
                        Profile: {},
                        Notifications: [],
                    };
                }

                return { ...prevProfile, Location: newLocation };
            });
        } catch (error) {
            console.error('Erro ao obter a localização do usuário:', error);
        }
    };


    // MODAL
    const handleSearchingFastGame = () => {
        setOpenFastGame(false)
        setOpenSearchingFastGame(true)
    }

    function handleModalBody() {

        if (openAddGame) {
            return <ModalAddGameBody setOpenAddGame={setOpenAddGame} />
        }
        if (openFastGame) {
            return <ModalFastGameBody handleSearchingFastGame={handleSearchingFastGame} />
        }
        if (openSearchingFastGame) {
            return <ModalSearchingFastGameBody setOpenSearchingFastGame={setOpenSearchingFastGame} />
        }
        return null
    }

    useEffect(() => {
        getProfile();
    }, [])

    const modal = {
        openAddGame,
        setOpenAddGame,
        openFastGame,
        setOpenFastGame,
        openSearchingFastGame,
        setOpenSearchingFastGame,
        handleModalBody
    }

    return {
        modal,
        profile,
        getProfile,
    }
};

export default useDashboard;