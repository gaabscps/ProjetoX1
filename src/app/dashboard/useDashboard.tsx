import { useEffect, useState } from 'react'
import ModalAddGameBody from './components/ModalBody/AddGame'
import ModalFastGameBody from '@/components/ModalBody/FastGame'
import ModalSearchingFastGameBody from './components/ModalBody/SearchingFastGame'
import api from '@/services/api'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'
import { Dashboard, Location, Profile } from '@/types/Dashboard'
import { useHeader } from '@/components/Header/useHeader'
import { GamesList } from '@/types/GamesList'
import { unmaskBRL } from '@/utils/mask/maskMoney'
import { AxiosError, AxiosResponse } from 'axios'
import { SearchPlayersByName } from '@/types/SearchPlayersByName'

const useDashboard = () => {
  const gamesMock = [
    {
      _id: '1',
      urlPhoto: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1631601068',
      createdAt: '2021-10-05T16:00:00.000Z',
      updatedAt: '2021-10-05T16:00:00.000Z',
      gameId: '1',
      level: 'Intermediário',
      matchDeafet: '10',
      matchPlayed: '20',
      matchWin: '10',
      name: 'League of Legends',
    },
    {
      _id: '2',
      urlPhoto: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1631601068',
      createdAt: '2021-10-05T16:00:00.000Z',
      updatedAt: '2021-10-05T16:00:00.000Z',
      gameId: '2',
      level: 'Expert',
      matchDeafet: '30',
      matchPlayed: '50',
      matchWin: '20',
      name: 'Valorant',
    },
  ]

  const [openAddGame, setOpenAddGame] = useState(false)
  const [openFastGame, setOpenFastGame] = useState(false)
  const [openSearchingFastGame, setOpenSearchingFastGame] = useState(false)
  const [games, setGames] = useState<GamesList[]>(gamesMock)
  const [profile, setProfile] = useState<Profile>()
  const [cookies, setCookie] = useCookies(['TokenAuth', 'idUser'])
  const [onlineUsers, setOnlineUsers] = useState<SearchPlayersByName[]>([])
  const [location, setLocation] = useState<Location>()
  const [dashboard, setDashboard] = useState<Dashboard>()

  const { logOut } = useHeader()
  const fastGame =
    typeof sessionStorage !== 'undefined'
      ? JSON.parse(sessionStorage.getItem('fastGame') || '{}')
      : {}

  function extractMatchId(creatingMatch: string | null) {
    const regex = /Match Id: (?<matchId>\w+)/
    const match = creatingMatch?.match(regex)
    return match ? match.groups?.matchId : null
  }

  //   const getUserLocation = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://eu-api.ipdata.co?api-key=365b3166a0da06597d8b9274e88500020348a287202c9c076e33a1a0',
  //       )
  //       const data = await response.json()
  //       setLocation(data)
  //     } catch (error) {
  //       console.error('Erro ao obter a localização do usuário:', error)
  //     }
  //   }

  // const getProfile = async () => {
  //     if (window.location.pathname === '/dashboard' || window.location.pathname === '/active-games') {
  //         try {
  //             const response = await api.get('/dashboard/myProfile', {
  //                 headers: {
  //                     'TokenAuth': cookies.TokenAuth,
  //                     'idUser': cookies.idUser as string
  //                 }
  //             })
  //             if (response?.status === 200) {
  //                 setProfile(response?.data.Profile)
  //                 setDashboard(response?.data)
  //                 window.sessionStorage.setItem('profile', JSON.stringify(response?.data))
  //                 await getUserLocation()
  //             }
  //         } catch (error) {
  //             setTimeout(() => {
  //                 toast.error('Erro ao buscar seu perfil, tente entrar novamente')
  //             }, 1000)
  //             logOut()
  //         }
  //     } else {
  //         console.log('Não é dashboard')
  //     }
  // }

  const getGames = () => {
    setGames(gamesMock)
  }

  const getProfile = () => {
    setProfile({
      V: 0,
      JR: 0,
      D: 0,
      _id: '123456',
      nickname: 'Gabriel',
      following: '358',
      followers: '500',
      xp: '57432',
      games: games,
      timesChangelled: '100',
      timesyouChangelled: '240',
      gamesPlayed: '180',
      balance: '900',
      idUser: 'string',
      urlPhoto: 'https://picsum.photos/201/300',
      youFollow: false,
      createdAt: 'string',
      updatedAt: 'string',
      __v: 0,
    })
  }

  //   const getGames = async () => {
  //     if (window.location.pathname === '/dashboard') {
  //       try {
  //         const response = await api.get('/games/gamesReturn', {})
  //         if (response?.status === 200) {
  //           setGames(response?.data)
  //         }
  //       } catch (error) {
  //         console.error('Erro ao buscar lista de jogos')
  //       }
  //     }
  //   }

  const handleLeaveFastGameQueue = async () => {
    try {
      const response = await api.delete(`/arena/exitQueue/${profile?.idUser}`, {
        headers: {
          TokenAuth: cookies.TokenAuth,
          idUser: cookies.idUser as string,
        },
      })
      if (response?.status === 200) {
        toast.success(response.data.mensagem)
        sessionStorage.removeItem('fastGame')
        setOpenSearchingFastGame(false)
        setOpenFastGame(true)
      }
    } catch (error: AxiosError | any) {
      toast.error(error.response.data.mensagem)
    }
  }

  const handleFastGameQueue = async () => {
    try {
      const response = await api.post(
        '/arena/searchOponent',
        {
          playerId: cookies.idUser,
          game: fastGame.game,
          value: unmaskBRL(fastGame.bet),
        },
        {
          headers: {
            TokenAuth: cookies.TokenAuth,
            idUser: cookies.idUser as string,
          },
        },
      )
      if (response?.status === 200) {
        const gameId = {
          ...fastGame,
          matchId: extractMatchId(response?.data?.creatingMatch),
          opponentId: response?.data?.oponenteId,
        }
        sessionStorage.setItem('fastGame', JSON.stringify(gameId))
        window.location.href = '/active-games'
      }
    } catch (error: any) {
      console.error('Erro ao entrar na fila de partida rápida:', error)
      handleLeaveFastGameQueue()
    }
  }

  //   const handleGetOnlineUsers = async () => {
  //     try {
  //       const response: AxiosResponse = await api.get('/arena/searchPlayersByName', {
  //         headers: {
  //           TokenAuth: cookies.TokenAuth,
  //           idUser: cookies.idUser as string,
  //         },
  //       })
  //       if (response?.status === 200) {
  //         response?.data !== onlineUsers && setOnlineUsers(response?.data as SearchPlayersByName[])
  //       }
  //     } catch (error) {
  //       console.error('Erro ao buscar usuários online')
  //     }
  //   }

  const handleGetOnlineUsers = () => {
    setOnlineUsers([
      {
        nickname: 'João',
        urlPhoto: 'https://picsum.photos/200/300',
        idUser: '2',
      },
      {
        nickname: 'Maria',
        urlPhoto: 'https://picsum.photos/200/301',
        idUser: '3',
      },
    ])
  }

  //   const handleGetUser = async (userId: string) => {
  //     if (window.location.pathname.includes('/user/')) {
  //       try {
  //         const response = await api.get(`/dashboard/othersProfile/${userId}`, {
  //           headers: {
  //             TokenAuth: cookies.TokenAuth,
  //             idUser: cookies.idUser as string,
  //           },
  //         })
  //         if (response?.status === 200) {
  //           setProfile(response?.data)
  //         }
  //       } catch (error) {
  //         console.error('Erro ao buscar usuário')
  //       }
  //     }
  //   }

  const handleGetUser = (userId: string) => {
    // set profile based on id
    if (userId === '1') {
      setProfile({
        V: 0,
        JR: 0,
        D: 0,
        _id: '123',
        nickname: 'Gabriel',
        following: '358',
        followers: '500',
        xp: '57432',
        games: games,
        timesChangelled: '100',
        timesyouChangelled: '240',
        gamesPlayed: '180',
        balance: '900',
        idUser: 'string',
        urlPhoto: 'https://picsum.photos/201/300',
        youFollow: false,
        createdAt: 'string',
        updatedAt: 'string',
        __v: 0,
      })
    }
    if (userId === '2') {
      setProfile({
        V: 0,
        JR: 0,
        D: 0,
        _id: '123',
        nickname: 'João',
        following: '100',
        followers: '130',
        xp: '3452',
        games: games,
        timesChangelled: '45',
        timesyouChangelled: '23',
        gamesPlayed: '44',
        balance: '233356',
        idUser: 'string',
        urlPhoto: 'https://picsum.photos/200/300',
        youFollow: false,
        createdAt: 'string',
        updatedAt: 'string',
        __v: 0,
      })
    }
    if (userId === '3') {
      setProfile({
        V: 0,
        JR: 0,
        D: 0,
        _id: '123',
        nickname: 'Maria',
        following: '489',
        followers: '334',
        xp: '2234',
        games: games,
        timesChangelled: '67',
        timesyouChangelled: '23',
        gamesPlayed: '65',
        balance: '33456',
        idUser: 'string',
        urlPhoto: 'https://picsum.photos/200/301',
        youFollow: true,
        createdAt: 'string',
        updatedAt: 'string',
        __v: 0,
      })
    }
  }

  const handleFollow = async (idUser: string, youFollow: boolean) => {
    try {
      if (youFollow) {
        await api.delete(`/social/unfollowing/${idUser}`, {
          headers: {
            TokenAuth: cookies.TokenAuth,
            idUser: cookies.idUser as string,
          },
        })
      } else {
        await api.post(
          `/social/following/${idUser}`,
          {},
          {
            headers: {
              TokenAuth: cookies.TokenAuth,
              idUser: cookies.idUser as string,
            },
          },
        )
      }
      handleGetUser(window.location.pathname.split('/')[2])
    } catch (error) {
      console.error('Erro ao seguir usuário:', error)
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
      return (
        <ModalSearchingFastGameBody
          handleFastGameQueue={handleFastGameQueue}
          handleLeaveFastGameQueue={handleLeaveFastGameQueue}
        />
      )
    }
    return null
  }

  const handleRemoveGame = async (gameId: string) => {
    try {
      const response = await api.delete('/dashboard/myProfile/removeGame', {
        headers: {
          TokenAuth: cookies.TokenAuth,
          idUser: cookies.idUser as string,
        },
        data: {
          gameId,
        },
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
    getGames()
    getProfile()
    handleGetOnlineUsers()
    handleGetUser(window.location.pathname.split('/')[2])
    console.log(games, profile)
  }, [window.location.pathname])

  const modal = {
    openAddGame,
    setOpenAddGame,
    openFastGame,
    setOpenFastGame,
    openSearchingFastGame,
    setOpenSearchingFastGame,
    handleModalBody,
  }

  return {
    modal,
    profile,
    onlineUsers,
    location,
    dashboard,
    getProfile,
    handleRemoveGame,
    handleGetOnlineUsers,
    handleFollow,
    handleLeaveFastGameQueue,
    handleFastGameQueue,
  }
}

export default useDashboard
