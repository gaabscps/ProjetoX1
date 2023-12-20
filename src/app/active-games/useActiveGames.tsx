import { useEffect, useState } from 'react';
import { MatchFinished } from './components/ModalBody/MatchFinished';
import { MatchProof } from './components/ModalBody/MatchProof';
import api from '@/services/api';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import useDashboard from '../dashboard/useDashboard';
import { idExtractor } from '@/utils/idExtractor';
import { ActiveGameMatch, ActiveGameResponse } from '@/types/ActiveGame';
import { AxiosResponse } from 'axios';
import { Dashboard } from '@/types/Dashboard';

const useActiveGames = () => {

    const [matchFinished, setMatchFinished] = useState(false);
    const [matchProof, setMatchProof] = useState(false);
    const [openRefuse, setOpenRefuse] = useState<boolean[]>([]);
    const [match, setMatch] = useState<ActiveGameMatch>({} as any);
    const [cookies, setCookie] = useCookies(['TokenAuth', 'idUser']);

    const { profile, dashboard, getProfile } = useDashboard()
    const profileStorage: Dashboard | null = typeof window !== 'undefined' && window.sessionStorage.getItem('profile') ? JSON.parse(window.sessionStorage.getItem('profile') || '') : null;


    console.log('O valor do sessionStorage está vazio ou nulo.');
    const matchId = idExtractor(String(profileStorage?.MatchArena?.status))


    const handleGetMatch = async (matchId: string) => {
        try {
            const response: AxiosResponse = await api.get(`/arena/matchStatus/${matchId}`, {
                headers: {
                    'TokenAuth': cookies.TokenAuth,
                    'idUser': cookies.idUser as string
                }
            })
            if (response?.status === 200) {
                const data: ActiveGameResponse = response?.data
                setMatch(data.match)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleFinishGame = async (matchId: string, result: string, image: File) => {
        try {
            const formData = new FormData()
            formData.append('result', result);
            if (image) {
                formData.append('image', image);
            }
            formData.forEach((value, key) => { console.log(key, value); });
            const response: AxiosResponse = await api.post(`/arena/finishedGame/${matchId}`, formData, {
                headers: {
                    'TokenAuth': cookies.TokenAuth,
                    'idUser': cookies.idUser as string
                }
            })
            if (response?.status === 200) {
                handleCloseModal()
                toast.success('Partida finalizada com sucesso')
                setTimeout(() => {
                    window.location.href = '/dashboard'
                }, 1000)
            }
        } catch (error) {
            toast.error('Erro ao finalizar partida')
        }
    }

    const handleModalBody = () => {
        if (matchFinished) {
            return (
                <MatchFinished setMatchFinished={setMatchFinished} />
            );
        }
        if (matchProof) {
            return (
                <MatchProof matchId={matchId} match={match} handleFinishGame={handleFinishGame} />
            );
        }
        if (openRefuse.some(Boolean)) {
            return (
                <></>
            );
        }
        return <></>;
    };


    const handleOpenMatchFinished = () => {
        setMatchFinished(true);
    };

    const handleOpenCounterProposal = () => {
        setMatchProof(true)
    };

    // const handleOpenRefuse = (index: number) => {
    //     const newOpenRefuse = [...openRefuse];
    //     newOpenRefuse[index] = !newOpenRefuse[index];
    //     setOpenRefuse(newOpenRefuse);
    // };

    const handleCloseModal = () => {
        setMatchFinished(false);
        setMatchProof(false);
    };

    useEffect(() => {
        handleGetMatch(matchId)
    }, [profile])

    return {
        matchFinished,
        matchProof,
        handleOpenMatchFinished,
        handleOpenCounterProposal,
        handleModalBody,
        handleCloseModal,
        match,
    }
}

export default useActiveGames