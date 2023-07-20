import { useState } from 'react';
import gabs from '@/assets/svg/gabs.jpg';
import { Challenges } from '@/types/Challenges';
import { toast } from 'react-toastify';


const useChallengesSent = () => {
    const [openCancel, setOpenCancel] = useState<boolean[]>([]);

    const Challenges: Challenges[] = [{
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

    const handleSubmit = () => {
        console.log('submit');
        toast.success('Desafio cancelado com sucesso. O seu oponente não verá mais esse desafio.');
        handleCloseModal();
    };


    return {
        Challenges,
        openCancel,
        handleOpenModal,
        handleCloseModal,
        handleSubmit,
    };

}

export default useChallengesSent;