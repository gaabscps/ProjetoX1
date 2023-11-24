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
import { GamesList } from '@/types/GamesList';

const useDashboard = () => {
    const [openAddGame, setOpenAddGame] = useState(false)
    const [openFastGame, setOpenFastGame] = useState(false)
    const [openSearchingFastGame, setOpenSearchingFastGame] = useState(false)
    const [profile, setProfile] = useState<Dashboard>()
    const [games, setGames] = useState<GamesList[]>([]);
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
                toast.error('Erro ao buscar seu perfil, tente entrar novamente')
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

    const getGames = async () => {
        try {
            const response = await api.get('/games/gamesReturn', {
            })
            if (response?.status === 200) {
                setGames(response?.data)
            }
        } catch (error) {
            console.error('Erro ao buscar lista de jogos')
        }
    }


    // MODAL
    const handleSearchingFastGame = () => {
        setOpenFastGame(false)
        setOpenSearchingFastGame(true)
    }

    function handleModalBody() {

        if (openAddGame) {
            return <ModalAddGameBody games={games} setOpenAddGame={setOpenAddGame} />
        }
        if (openFastGame) {
            return <ModalFastGameBody handleSearchingFastGame={handleSearchingFastGame} />
        }
        if (openSearchingFastGame) {
            return <ModalSearchingFastGameBody setOpenSearchingFastGame={setOpenSearchingFastGame} />
        }
        return null
    }

    const handleRemoveGame = async (gameId: string) => {
        try {
            const response = await api.delete('/dashboard/myProfile/removeGame', {
                headers: {
                    'TokenAuth': cookies.TokenAuth,
                    'idUser': cookies.idUser as string
                },
                data: {
                    gameId
                }
            })
            if (response?.status === 200) {
                toast.success('Jogo removido com sucesso')
                getProfile()
            }
        } catch (error) {
            toast.error('Erro ao remover jogo')
        }
    }

    useEffect(() => {
        getProfile();
        getGames();
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
        handleRemoveGame,
    }
};

export default useDashboard;