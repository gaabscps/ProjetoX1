import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ModalBodyChallenge from './components/ModalBodyChallenge'
import ModalFastGameBody from '@/components/ModalBody/FastGame'
import ModalSearchingFastGameBody from '../dashboard/components/ModalBody/SearchingFastGame'
import { useCookies } from 'react-cookie'
import { Profile } from '@/types/Dashboard'

const useChallenge = () => {
  const [openFastGame, setOpenFastGame] = useState(false)
  const [openSearchingFastGame, setOpenSearchingFastGame] = useState(false)
  const [openTag, setOpenTag] = useState<boolean[]>([])
  const [openModal, setOpenModal] = useState<boolean[]>([])
  const [followers, setFollowers] = useState<Profile[]>([])

  const [game, setGame] = useState('')
  const [bet, setBet] = useState('')
  const [duration, setDuration] = useState('')
  const [textarea, setTextarea] = useState('')

  const [cookies] = useCookies(['TokenAuth', 'idUser'])

  const handleGetFollowers = async () => {
    setFollowers([
      {
        _id: '1',
        nickname: 'Jorginho',
        urlPhoto: 'https://picsum.photos/200/300',
        JR: 10,
        V: 5,
        D: 5,
        games: [
          {
            name: 'League of Legends',
            gameId: '1',
            matchDeafet: '5',
            matchPlayed: '10',
            level: 'expert',
            urlPhoto: 'https://picsum.photos/200/300',
            _id: '1',
            matchWin: '5',
          },
        ],
        following: '',
        followers: '',
        xp: '',
        timesChangelled: '',
        timesyouChangelled: '',
        gamesPlayed: '',
        balance: '',
        idUser: '',
        youFollow: false,
        createdAt: '',
        updatedAt: '',
        __v: 0,
      },
    ])
  }

  const handleInviteChallenge = () => {
    toast.success(
      'Desafio enviado com sucesso! Agora é só aguardar o seu oponente aceitar o seu desafio.',
    )
    toast.success('Integração mockada, demonstrativo no console')
  }

  function handleModalBody() {
    if (openFastGame) {
      return <ModalFastGameBody handleSearchingFastGame={handleSearchingFastGame} />
    }
    if (openSearchingFastGame) {
      return (
        <ModalSearchingFastGameBody
          handleFastGameQueue={() => {
            undefined
          }}
          handleLeaveFastGameQueue={() => {
            undefined
          }}
        />
      )
    }
    if (openModal.some(Boolean)) {
      const currentFollower = followers[openModal.findIndex(Boolean)]
      return (
        <ModalBodyChallenge
          bet={bet}
          duration={duration}
          textarea={textarea}
          game={game}
          games={currentFollower?.games}
          handleChange={handleChange}
          userName={currentFollower?.nickname}
          handleConfirmChallenge={handleConfirmChallenge}
        />
      )
    }
    return null
  }

  const handleSearchingFastGame = () => {
    setOpenFastGame(false)
    setOpenSearchingFastGame(true)
  }

  const handleCloseModal = () => {
    setOpenModal([])
    setOpenFastGame(false)
    setGame('')
    setBet('')
    setDuration('')
    setTextarea('')
  }

  const handleOpenModal = (index: number) => {
    const newOpenModal = [...openModal]
    newOpenModal[index] = !newOpenModal[index]
    setOpenModal(newOpenModal)
  }

  const handleOpenTag = (index: number) => {
    const newOpenTag = [...openTag]
    newOpenTag[index] = !newOpenTag[index]
    setOpenTag(newOpenTag)
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target
    switch (name) {
      case 'game':
        setGame(value)
        break
      case 'bet':
        setBet(value)
        break
      case 'duration':
        setDuration(value)
        break
      case 'textarea':
        setTextarea(value)
        break
      default:
        break
    }
  }

  const handleConfirmChallenge = () => {
    handleInviteChallenge()
    handleCloseModal()
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
}

export default useChallenge
