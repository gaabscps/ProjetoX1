import { useEffect, useState } from 'react';
import gabs from '@/assets/svg/gabs.jpg';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import api from '@/services/api';
import { useCookies } from 'react-cookie';
import { ChallengesSent } from '@/types/ChallengesSent';


const useChallengesSent = () => {
    const [openCancel, setOpenCancel] = useState<boolean[]>([]);
    const [challengesSent, setChallengesSent] = useState<ChallengesSent[]>([]);
    const [cookies, setCookies] = useCookies(['TokenAuth', 'idUser']);

    const handleGetChallenges = async () => {
        try {
            const response: AxiosResponse = await api.get('challange/invitesByMe', {
                headers: {
                    'TokenAuth': cookies.TokenAuth,
                    'idUser': cookies.idUser as string
                }
            })
            if (response?.status === 200) {
                setChallengesSent(response?.data.returnMyInvites as ChallengesSent[])
            }
        } catch (error) {
            console.error('Erro ao buscar usuário')
        }
    }

    const handleRejectChallenge = async (id: string) => {
        try {
            const response: AxiosResponse = await api.patch(`challange/rejectChallange/`, {
                inviteId: id
            }, {
                headers: {
                    'TokenAuth': cookies.TokenAuth,
                    'idUser': cookies.idUser as string
                }
            })
            if (response?.status === 200) {
                toast.success('Desafio cancelado com sucesso. O seu oponente não verá mais esse desafio.');
                handleGetChallenges();
            }
        } catch (error) {
            console.error('Erro ao buscar usuário')
        }
    }


    const Challenges = [{
        user: {
            userImage: gabs,
            userName: 'John',
            gamesPlayed: '10',
            gamesVictory: '7',
            gamesDefeat: '3',
            status: 0,
            games: [
                {
                    game: 'FIFA 21',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'League of Legends',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'Valorant',
                    gameRank: 'Profissional',
                },
                {
                    game: 'CS:GO',
                    gameRank: 'Profissional',
                }
            ],
        },
        value: 100,
        game: 'FIFA 21',
        gameRank: 'Iniciante',
    },
    {
        user: {
            userImage: gabs,
            userName: 'Emily',
            gamesPlayed: '15',
            gamesVictory: '9',
            gamesDefeat: '6',
            status: 0,
            games: [
                {
                    game: 'FIFA 21',
                    gameRank: 'Profissional',
                },
                {
                    game: 'League of Legends',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'Valorant',
                    gameRank: 'Profissional',
                },
                {
                    game: 'CS:GO',
                    gameRank: 'Intermediario',
                }
            ],
        },
        value: 200,
        game: 'League of Legends',
        gameRank: 'Iniciante',
    },
    {
        user: {
            userImage: gabs,
            userName: 'David',
            gamesPlayed: '8',
            gamesVictory: '4',
            gamesDefeat: '4',
            status: 1,
            games: [
                {
                    game: 'FIFA 21',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'League of Legends',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'Valorant',
                    gameRank: 'Profissional',
                },
            ],
        },
        value: 300,
        game: 'Valorant',
        gameRank: 'Profissional',
    },
    {
        user: {
            userImage: gabs,
            userName: 'Sarah',
            gamesPlayed: '12',
            gamesVictory: '10',
            gamesDefeat: '2',
            status: 1,
            games: [
                {
                    game: 'FIFA 21',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'League of Legends',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'Valorant',
                    gameRank: 'Profissional',
                },
            ],
        },
        value: 400,
        game: 'FIFA 21',
        gameRank: 'Profissional',
    },
    {
        user: {
            userImage: gabs,
            userName: 'Michael',
            gamesPlayed: '20',
            gamesVictory: '15',
            gamesDefeat: '5',
            status: 2,
            games: [
                {
                    game: 'FIFA 21',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'League of Legends',
                    gameRank: 'Iniciante',
                },
                {
                    game: 'Valorant',
                    gameRank: 'Profissional',
                },
            ],
        },
        value: 500,
        game: 'League of Legends',
        gameRank: 'Intermediário',
    }
    ]

    const handleCloseModal = () => {
        setOpenCancel([]);
    };

    const handleOpenModal = (index: number) => {
        const newOpenCancel = [...openCancel];
        newOpenCancel[index] = !newOpenCancel[index];
        setOpenCancel(newOpenCancel);
    };

    useEffect(() => {
        handleGetChallenges();
    }, [])


    return {
        Challenges,
        openCancel,
        challengesSent,
        handleOpenModal,
        handleCloseModal,
        handleRejectChallenge,
    };

}

export default useChallengesSent;