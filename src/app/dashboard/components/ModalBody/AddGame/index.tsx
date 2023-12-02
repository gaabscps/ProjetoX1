import Accordion from '@/components/Accordion'
import { Button } from '@/components/Button'
import RadioGroup from '@/components/RadioGroup'
import { GamesList } from '@/types/GamesList'
import useAddGame from './useAddGame'
import useDashboard from '@/app/dashboard/useDashboard'
import alert from '../../../../../assets/svg/alert.svg'
import Image from 'next/image'

interface ModalAddGameBodyProps {
  setOpenAddGame: (value: boolean) => void
  games: GamesList[]
}

export default function ModalAddGameBody({ setOpenAddGame, games }: ModalAddGameBodyProps) {

  const { selectedValues, gamesWithRanks, handleOptionChange, handleAddGame, } = useAddGame(games)
  const { profile } = useDashboard()

  const profileGames = profile?.Profile?.games
  const gamesNotAdded = gamesWithRanks.filter((game) => !profileGames?.find((item) => item.gameId === game._id))

  return (
    <>
      <div className='addGameModalBody d-flex flex-column justify-content-between'>
        <div>
          <div className='w-100 mb-2'>
            <h6 style={{ marginBottom: '10px' }} className='h6-500'>
              Adicionar jogo
            </h6>
            <span className='color-black-6'>
              Selecione o(s) jogo(s) que você quer adicionar e depois o rank
            </span>
          </div>
          <div className='text-extra-small-500 d-flex align-items-center flex-gap-1' style={{ padding: '10px 20px', background: 'rgba(66, 147, 221, 0.10)', borderRadius: '5px', marginBottom: '40px' }}>
            <Image src={alert} alt='alert' width={15} height={15} />
            <div style={{ color: '#4293DD' }}>
              O nosso sistema irá reajustar o rank dos seus jogos automaticamente depois de 10 partidas.
            </div>
          </div>
          <div>
            {gamesNotAdded.map((game) => (
              <Accordion
                key={game.name}
                style={{ marginBottom: '20px' }}
                title={game.name}
                content={
                  <div className='addGameContent'>
                    <p className='rankTitle'>Rank</p>
                    <RadioGroup
                      name={game.name}
                      options={game.rank}
                      selectedValue={selectedValues.find((item) => item.gameId === game._id)?.level || ''}
                      setSelectedValue={(value) => handleOptionChange(game._id, value)}
                    />
                  </div>
                }
              />
            ))}
          </div>
        </div>
        <div className='mb-2'>
          <p className='text-center color-black-6 line-height-150'>
            Ao adicionar um jogo, você concorda com os nossos
          </p>
          <p className='text-center line-height-150 mb-1'>Termos e Condições</p>
          <Button
            disabled={Object.keys(selectedValues).length === 0}
            theme='primary'
            onClick={() => {
              handleAddGame()
              setOpenAddGame(false)
            }}
            width='100%'
            size='large'
            content='Adicionar'
          />
        </div>
      </div>
    </>
  )
}
