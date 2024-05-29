import api from '@/services/api'
import { AvailableGames } from '@/types/Dashboard'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'

const useAddGame = (games: AvailableGames[]) => {
  const [selectedValues, setSelectedValues] = useState<{ gameId: string; level: string }[]>([])
  const [cookies, setCookies] = useCookies(['TokenAuth', 'idUser'])

  const handleOptionChange = (gameId: string, level: string) => {
    setSelectedValues((prevValues) => {
      const existingIndex = prevValues.findIndex((item) => item.gameId === gameId)

      if (existingIndex !== -1) {
        const updatedValues = [...prevValues]
        updatedValues[existingIndex] = { gameId, level }
        return updatedValues
      } else {
        return [...prevValues, { gameId, level }]
      }
    })
  }

  const handleAddGame = async () => {
    toast.success('Jogo adicionado com sucesso')
    toast.success('Integração mockada, demonstrativo no console')
    console.log({
      headers: {
        TokenAuth: cookies.TokenAuth,
        idUser: cookies.idUser as string,
      },
      games: selectedValues,
    })
  }
  // const handleAddGame = async () => {
  //   try {
  //     const response = await api.post(
  //       '/dashboard/myProfile/addGames',
  //       {
  //         games: selectedValues,
  //       },
  //       {
  //         headers: {
  //           TokenAuth: cookies.TokenAuth,
  //           idUser: cookies.idUser as string,
  //         },
  //       },
  //     )

  //     if (response?.status === 200) {
  //       toast.success('Jogo adicionado com sucesso')
  //       // refrescar a página
  //       window.location.href = '/dashboard'
  //     }
  //   } catch (error) {
  //     toast.error('Erro ao adicionar jogo')
  //   }
  // }

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

  const gamesWithRanks = games.map((game) => ({
    ...game,
    rank: gamesRank,
  }))

  // Add more event handlers and functions as needed

  return {
    handleOptionChange,
    handleAddGame,
    selectedValues,
    gamesWithRanks,
  }
}

export default useAddGame
