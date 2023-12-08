import { Card } from '@/components/Card'
import { Body } from '@/components/Body'
import myGames from '@/assets/svg/myGames.svg'
import Image from 'next/image'
import { useState } from 'react'
import GameCard from './GameCard'
import { Dashboard, Profile } from '@/types/Dashboard'

interface MyGamesSectionProps {
  setOpenAddGame: (value: boolean) => void
  handleRemoveGame?: (gameId: string) => void
  profile: Profile | undefined
  isVisiting?: boolean
}

export default function MyGamesSection({ setOpenAddGame, handleRemoveGame, profile, isVisiting }: MyGamesSectionProps) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)

  const data = profile?.games || []

  return (
    <Body marginBottom='60px'>
      <div className='d-flex align-items-center home-title'>
        <Image style={{ marginRight: '10px' }} src={myGames} alt='my games icon' />
        <p>{isVisiting ? 'Jogos' : 'Meus jogos'} ({data.length})</p>
      </div>
      {!isVisiting && (
        <p className='color-black-7 my-games-subtitle'>
          Adicione os jogos que você joga e o seu rank em cada um
        </p>
      )}
      <div className='d-flex flex-gap-2 my-games-cards'>
        {!isVisiting && (
          <Card
            color='#464448'
            onClick={() => setOpenAddGame(true)}
            width='160px'
            height='170px'
            borderRadius='5px'
            theme='dotted'
            content={
              <div className='d-flex flex-column align-items-center justify-content-center h-100 ptb-1 text-center'>
                Adicionar Jogo
              </div>
            }
          />
        )}
        {isVisiting && data.length === 0 ? (
          <h6 className='h6-400 color-black-7'>Nenhum jogo adicionado</h6>
        ) :
          data.map((item, index) => (
            <GameCard
              isVisiting={isVisiting}
              handleRemoveGame={handleRemoveGame}
              setOpenAddGame={setOpenAddGame}
              key={index}
              data={item}
              openDropdown={openDropdown === index}
              setOpenDropdown={(value) => setOpenDropdown(value ? index : null)}
            />
          ))}
      </div>
    </Body>
  )
}
