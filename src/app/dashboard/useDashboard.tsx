import { useEffect, useState } from 'react';
import ModalAddGameBody from './components/ModalBody/AddGame';
import ModalFastGameBody from '@/components/ModalBody/FastGame';
import ModalSearchingFastGameBody from './components/ModalBody/SearchingFastGame';
import api from '@/services/api';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { Dashboard } from '@/types/Dashboard';

const useDashboard = () => {
    const [openAddGame, setOpenAddGame] = useState(false)
    const [openFastGame, setOpenFastGame] = useState(false)
    const [openSearchingFastGame, setOpenSearchingFastGame] = useState(false)
    const [profile, setProfile] = useState<Dashboard>()

    const [cookies, setCookie] = useCookies(['TokenAuth', 'idUser']);

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
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

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