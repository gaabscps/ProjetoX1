import useForm from '@/hooks/useForm'
import api from '@/services/api'
import { News } from '@/types/LandingNews'
import { unmaskCpf } from '@/utils/mask/maskCpf'
import { unmaskDate } from '@/utils/mask/maskBirthday'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '@/hooks/useAuth'
import { GamesList } from '@/types/GamesList'

const useLanding = () => {
  const { values, errorMessage, errors, handleChange, handleBlur, setErrors } = useForm({
    name: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    promoCode: '',
  })

  const [openLogin, setOpenLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  const [openTerms, setOpenTerms] = useState(false)
  const [selectedNewsIndex, setSelectedNewsIndex] = useState(-1) // Estado para controlar qual notícia foi clicada
  const [isModalOpen, setIsModalOpen] = useState(false) // Estado para controlar se o modal de notícias está aberto
  const [news, setNews] = useState<News[]>([])
  const [games, setGames] = useState<GamesList[]>([])

  const { auth, setAuth, cookies, setCookie } = useAuth()

  //   const getNews = async () => {
  //     try {
  //       const response = await api.get('/notice/noticesReturn')
  //       if (response?.status === 200) {
  //         setNews(response?.data)
  //       }
  //     } catch (error) {
  //       toast.error('Erro ao buscar notícias')
  //       // console.error(error)
  //     }
  //   }

  const getNews = () => {
    setNews([
      {
        _id: '1',
        content: 'Conteúdo da notícia 1',
        createdAt: '2021-10-10',
        updatedAt: '2021-10-10',
        photoUrl:
          'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?auto=format&fit=fill&q=80&w=300',
        tittle: 'Notícia 1',
      },
      // {
      //   _id: '2',
      //   content: 'Conteúdo da notícia 2',
      //   createdAt: '2021-10-10',
      //   updatedAt: '2021-10-10',
      //   photoUrl: 'https://via.placeholder.com/150',
      //   tittle: 'Notícia 2',
      // },
      // {
      //   _id: '3',
      //   content: 'Conteúdo da notícia 3',
      //   createdAt: '2021-10-10',
      //   updatedAt: '2021-10-10',
      //   photoUrl: 'https://via.placeholder.com/150',
      //   tittle: 'Notícia 3',
      // },
    ])
  }

  const getGames = async () => {
    // try {
    //   const response = await api.get('/games/gamesReturn')
    //   if (response?.status === 200) {
    //     setGames(response?.data)
    //   }
    // } catch (error) {
    //   toast.error('Erro ao buscar jogos')
    //   // console.error(error)
    // }
    setGames([
      {
        _id: '1',
        name: 'League of Legends',
        thumbnail:
          'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?auto=format&fit=fill&q=80&w=300',
        createdAt: '2021-10-10',
        updatedAt: '2021-10-10',
      },
      {
        _id: '2',
        name: 'Valorant',
        thumbnail:
          'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7b76209193f1bfe190d3ae6ef8728328870be9c3-736x138.png?auto=format&fit=fill&q=80&w=300',
        createdAt: '2021-10-10',
        updatedAt: '2021-10-10',
      },
      {
        _id: '3',
        name: 'Free Fire',
        thumbnail:
          'https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20226/01271f4d1ff8044f828510a833075744.png',
        createdAt: '2021-10-10',
        updatedAt: '2021-10-10',
      },
      {
        _id: '4',
        name: 'Call of Duty',
        thumbnail:
          'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/global/cod-logo.svg',
        createdAt: '2021-10-10',
        updatedAt: '2021-10-10',
      },
      {
        _id: '5',
        name: 'Fortnite',
        thumbnail: 'https://media.graphassets.com/ddDDGPriQHC1OyGYRAKO',
        createdAt: '2021-10-10',
        updatedAt: '2021-10-10',
      },
      {
        _id: '6',
        name: 'PUBG',
        thumbnail: 'https://wstatic-prod.pubg.com/web/live/main_053cbfd/img/2256138.png',
        createdAt: '2021-10-10',
        updatedAt: '2021-10',
      },
    ])
  }

  // const handleLogin = async () => {
  //     try {
  //         const credentials = {
  //             email: values.email,
  //             password: values.password
  //         }

  //         const response = await api.post('/auth/login', credentials)
  //         if (response?.status === 200) {
  //             setAuth(response?.data)
  //             const userIdJSON = response?.data?.id;
  //             const token = response?.data?.Token;
  //             setCookie('TokenAuth', token, { path: '/' })
  //             setCookie('idUser', userIdJSON, { path: '/' })

  //             const hasNickname = response?.data?.hasNickname

  //             if (hasNickname) {
  //                 window.location.href = '/dashboard'
  //             } else {
  //                 window.location.href = '/welcome'
  //             }
  //         }
  //     } catch (error) {
  //         toast.error('Credenciais inválidas')
  //         // console.error(error)
  //         setErrors(true)
  //     }
  // }

  const handleLogin = async () => {
    if (values.email === 'playx1@admin.com' && values.password === '123') {
      window.location.href = '/dashboard'
    } else {
      toast.error('Credenciais inválidas')
      setErrors(true)
    }
  }

  const handleRegister = async () => {
    try {
      if (errors) return

      const user = {
        name: values.name,
        email: values.email,
        cpf: unmaskCpf(values.cpf),
        password: values.password,
        dateBirthday: unmaskDate(values.birthDate),
        username: '',
        promoCode: values.promoCode,
      }

      const response = await api.post('/auth/register', user)
      if (response?.status === 200) {
        await handleLogin()
      }
    } catch (error) {
      toast.error('Erro ao cadastrar')
      // console.error(error)
      setErrors(true)
    }
  }

  useEffect(() => {
    // getNews()
    getGames()
  }, [])

  // MODAL
  const handleRegisterButton = () => {
    setOpenLogin(false)
    setOpenRegister(true)
  }

  const handleLoginButton = () => {
    setOpenRegister(false)
    setOpenLogin(true)
  }

  const modal = {
    openLogin,
    openRegister,
    selectedNewsIndex,
    openTerms,
    isModalOpen,
    setOpenLogin,
    setOpenRegister,
    setIsModalOpen,
    setSelectedNewsIndex,
    setOpenTerms,
  }

  return {
    // Data
    news,
    games,
    cookies,
    auth,

    // FORMS
    values,
    handleChange,
    handleBlur,
    handleLogin,
    handleRegister,
    errors,
    errorMessage,

    // MODAL
    modal,

    // MODAL BUTTONS
    handleRegisterButton,
    handleLoginButton,
  }
}

export default useLanding
