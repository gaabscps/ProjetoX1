import { useEffect, useState } from 'react';
import { MatchFinished } from './components/ModalBody/MatchFinished';
import { MatchProof } from './components/ModalBody/MatchProof';
import api from '@/services/api';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import useDashboard from '../dashboard/useDashboard';

const useActiveGames = () => {

    const [matchFinished, setMatchFinished] = useState(false);
    const [matchProof, setMatchProof] = useState(false);
    const [openRefuse, setOpenRefuse] = useState<boolean[]>([]);
    const [match, setMatch] = useState<any>(null);
    const [cookies, setCookie] = useCookies(['TokenAuth', 'idUser']);

    const { profile } = useDashboard()

    const handleGetMatch = async (match: string) => {
        try {
            const response = await api.get(`/arena/matchStatus/${match}`, {
                headers: {
                    'TokenAuth': cookies.TokenAuth,
                    'idUser': cookies.idUser as string
                }
            })
            if (response?.status === 200) {
                setMatch(response?.data)
            }
        } catch (error) {
            toast.error('Erro ao carregar partida')
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
                <MatchProof handleCloseModal={handleCloseModal} />
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
        setTimeout(() => {
            console.log(profile?.Profile.nickname)
            if (profile?.MatchArena.status !== (undefined)) {
                handleGetMatch(profile?.MatchArena.status as string)
            } else {
                setMatch(undefined)
            }
        }, 3000)
    }, [])

    return {
        matchFinished,
        matchProof,
        handleOpenMatchFinished,
        handleOpenCounterProposal,
        handleModalBody,
        handleCloseModal,
    }
}

export default useActiveGames