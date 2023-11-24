import api from '@/services/api';
import { GamesList } from '@/types/GamesList';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';



const useAddGame = (games: GamesList[]) => {
    const [selectedValues, setSelectedValues] = useState<{ gameId: string; level: string }[]>([]);
    const [cookies, setCookies] = useCookies(['TokenAuth', 'idUser']);

    const handleOptionChange = (gameId: string, level: string) => {
        setSelectedValues((prevValues) => {
            const existingIndex = prevValues.findIndex((item) => item.gameId === gameId);

            if (existingIndex !== -1) {
                const updatedValues = [...prevValues];
                updatedValues[existingIndex] = { gameId, level };
                return updatedValues;
            } else {
                return [...prevValues, { gameId, level }];
            }
        });
    };

    const handleAddGame = async () => {
        try {
            const response = await api.post('/dashboard/myProfile/addGames', {
                games: selectedValues,
            }, {
                headers: {
                    'TokenAuth': cookies.TokenAuth,
                    'idUser': cookies.idUser as string
                }
            })

            if (response?.status === 200) {
                toast.success('Jogo adicionado com sucesso')
                // refrescar a página
                window.location.href = '/dashboard'
            }
        } catch (error) {
            toast.error('Erro ao adicionar jogo')
        }
    }

    const gamesRank = [
        {
            value: 'Iniciante',
            label: 'Iniciante',
        },
        {
            value: 'Intermediário',
            label: 'Intermediário',
        },
        {
            value: 'Expert',
            label: 'Expert',
        },
    ]

    const gamesWithRanks = games.map(game => ({
        ...game,
        rank: gamesRank,
    }));

    // Add more event handlers and functions as needed

    return {
        handleOptionChange,
        handleAddGame,
        selectedValues,
        gamesWithRanks,
    };
};

export default useAddGame;
