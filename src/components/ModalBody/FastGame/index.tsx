import { Button } from '@/components/Button'
import { Card } from '@/components/Card';
import Input from '@/components/Input'
import Select from '@/components/Select'
import useForm from '@/hooks/useForm';
import api from '@/services/api';
import { maskBRL, unmaskBRL } from '@/utils/mask/maskMoney';
import { _isClickEvent } from 'chart.js/dist/helpers/helpers.core';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

interface ModalFastGameBodyProps {
  handleSearchingFastGame: () => void
}

export default function ModalFastGameBody({ handleSearchingFastGame }: ModalFastGameBodyProps) {
  // const { form, setForm, handleInputChange } = useFormFastGameBody();
  const profile = JSON.parse(sessionStorage.getItem('profile') || '{}');
  const [cookies, setCookie] = useCookies(['TokenAuth', 'idUser']);


  const initialValues = {
    game: '',
    bet: '',
  }

  const { handleChange, values, setValues } = useForm(initialValues);

  const games = profile.Profile?.games.map((game: any) => {
    return {
      value: game.gameId,
      label: game.gameName,
    }
  })

  const bets = [
    {
      bet: '20',
    },
    {
      bet: '50',
    },
    {
      bet: '100',
    },
    {
      bet: '150',
    },
    {
      bet: '200',
    },
  ]

  const handleFastGame = async () => {
    try {
      const response = await api.post('/arena/enterQueue', {
        playerId: cookies.idUser,
        game: values.game,
        value: unmaskBRL(values.bet),
      }, {
        headers: {
          'TokenAuth': cookies.TokenAuth,
          'idUser': cookies.idUser as string
        }
      })
      if (response?.status === 200) {
        console.log(response)
        const fastGame = JSON.parse(sessionStorage.getItem('fastGame') || '{}');
        const gameQueue = {
          ...fastGame,
          expectedTime: response?.data?.expectedTime,
        }
        sessionStorage.setItem('fastGame', JSON.stringify(gameQueue));
        handleSearchingFastGame();
      }

    }
    catch (error: any) {
      toast.error(error.response.data.Error)
    }
  }

  return (
    <>
      <div className='fastGameModalBody d-flex flex-column'>
        <div className='fastGameModalTitle'>
          <h6 style={{ marginBottom: '10px' }} className='h6-500'>
            Jogo rápido
          </h6>
        </div>
        <Select
          name='game'
          onChange={(e) => handleChange(e)}
          value={values.game}
          placeholder='Jogo a ser jogado'
          option={games}
        />
        <div className='d-flex flex-gap-1'>
          {bets.map((bet, index) => (
            <Card key={index} borderRadius='5px' theme='outline' width='120px' color='#464448' content={<div className='color-black-6 text-small-400 d-flex justify-content-center align-items-center h-100'>{maskBRL(bet.bet)}</div>}
              onClick={() => setValues({
                ...values,
                bet: bet.bet,
              })}
              className={`mb-1 bet-class${values.bet === bet.bet
                ? 'active' : ''}`} />
          ))}
        </div>
        {/* <Input
          name='bet'
          value={values.bet}
          onChange={handleChange}
          type='number'
          placeholder='Valor da aposta (BRL)'
          marginBottom='40px'
          disabled
        /> */}
        <Button
          theme='primary'
          onClick={async () => {
            const selectedGame = games.find((game: any) => game.value === values.game);
            const gameLabel = selectedGame ? selectedGame.label : ''; // Se o jogo for encontrado, obtenha o label, caso contrário, deixe vazio

            const fastGameValues = {
              game: gameLabel,
              bet: values.bet,
            };

            window.sessionStorage.setItem('fastGame', JSON.stringify(fastGameValues));
            await handleFastGame();
          }}
          width='100%'
          size='large'
          content='Procurar jogo rápido'
          disabled={!values.game || !values.bet}
        />
      </div >
    </>
  )
}
