import { useEffect, useState } from 'react';
import { User } from '@/types/Users';
import ModalBodyChallenge from './components/ModalBodyChallenge';
import gabs from '@/assets/svg/gabs.jpg';
import ModalFastGameBody from '@/components/ModalBody/FastGame';
import ModalSearchingFastGameBody from '../dashboard/components/ModalBody/SearchingFastGame';
import { toast } from 'react-toastify';
import api from '@/services/api';
import { useCookies } from 'react-cookie';
import { Profile } from '@/types/Dashboard';
import { AxiosResponse } from 'axios';
import useDashboard from '../dashboard/useDashboard';


const useChallenge = () => {
    const [openFastGame, setOpenFastGame] = useState(false)
    const [openSearchingFastGame, setOpenSearchingFastGame] = useState(false)
    const [openTag, setOpenTag] = useState<boolean[]>([]);
    const [openModal, setOpenModal] = useState<boolean[]>([]);
    const [followers, setFollowers] = useState<Profile[]>([]);

    const [game, setGame] = useState('');
    const [bet, setBet] = useState('');
    const [duration, setDuration] = useState('');
    const [textarea, setTextarea] = useState('');

    const [cookies, setCookie] = useCookies(['TokenAuth', 'idUser']);
    const { handleFastGameQueue, handleLeaveFastGameQueue } = useDashboard()

    const handleGetFollowers = async () => {
        try {
            const response: AxiosResponse = await api.get('challange/returnMyFollowers', {
                headers: {
                    'TokenAuth': cookies.TokenAuth,
                    'idUser': cookies.idUser as string
                }
            })
            if (response?.status === 200) {
                setFollowers(response?.data.returnMyFollowers as Profile[])
            }
        } catch (error) {
            console.error('Erro ao buscar usuário')
        }
    }

    const handleInviteChallenge = async (playerGuestId: string, gameId: string) => {
        const body = {
            gameId: gameId,
            playerGuestId: playerGuestId || '',
            playerHostId: cookies.idUser,
            value: Number(bet),
            durationInvite: Number(duration),
            message: textarea
        }
        try {
            console.log(body)
            const response: AxiosResponse = await api.post('challange/createChallange', body, {
                headers: {
                    'TokenAuth': cookies.TokenAuth,
                    'idUser': cookies.idUser as string
                }
            })
            if (response?.status === 200) {
                toast.success('Desafio enviado com sucesso ! Agora é só aguardar o seu oponente aceitar o seu desafio.');
            }
        } catch (error) {
            console.error('Erro ao buscar usuário')
        }
    }


    // MODAL
    function handleModalBody() {
        if (openFastGame) {
            return <ModalFastGameBody handleSearchingFastGame={handleSearchingFastGame} />
        }
        if (openSearchingFastGame) {
            return <ModalSearchingFastGameBody handleFastGameQueue={handleFastGameQueue} handleLeaveFastGameQueue={handleLeaveFastGameQueue} />
        }
        if (openModal.some(Boolean)) {
            return <ModalBodyChallenge
                bet={bet}
                duration={duration}
                textarea={textarea}
                game={game}
                games={followers[openModal.findIndex(Boolean)]?.games}
                handleChange={handleChange}
                userName={followers[openModal.findIndex(Boolean)]?.nickname}
                handleConfirmChallenge={handleConfirmChallenge}
            />
        }
        return null
    }

    const handleSearchingFastGame = () => {
        setOpenFastGame(false)
        setOpenSearchingFastGame(true)
    }

    const handleCloseModal = () => {
        setOpenModal([]);
        setOpenFastGame(false);
    };

    const handleOpenModal = (index: number) => {
        const newOpenModal = [...openModal];
        newOpenModal[index] = !newOpenModal[index];
        setOpenModal(newOpenModal);
    };


    // TAG
    const handleOpenTag = (index: number) => {
        const newOpenTag = [...openTag];
        newOpenTag[index] = !newOpenTag[index];
        setOpenTag(newOpenTag);
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;

        switch (name) {
            case 'game':
                setGame(value);
                break;
            case 'bet':
                setBet(value);
                break;
            case 'duration':
                setDuration(value);
                break;
            case 'textarea':
                setTextarea(value);
                break;
            default:
                break;
        }
    };


    const handleConfirmChallenge = () => {
        handleInviteChallenge(
            followers[openModal.findIndex(Boolean)]?._id
            , game)
        handleCloseModal();
    }

    useEffect(() => {
        handleGetFollowers()
    }, [])

    const modal = {
        openFastGame,
        setOpenFastGame,
        openSearchingFastGame,
        openModal,
        handleOpenModal,
        handleCloseModal,
        handleModalBody,
    }


    return {
        followers,
        openTag,
        handleOpenTag,
        handleChange,
        modal,
        game,
        bet,
        duration,
        textarea,
    }
};

export default useChallenge;
