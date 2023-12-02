import { Card } from '@/components/Card'
import { Body } from '@/components/Body'
import myGames from '@/assets/svg/myGames.svg'
import Image from 'next/image'
import { useState } from 'react'
import GameCard from './GameCard'
import { Dashboard } from '@/types/Dashboard'

interface MyGamesSectionProps {
  setOpenAddGame: (value: boolean) => void
  handleRemoveGame?: (gameId: string) => void
  profile: Dashboard | undefined
}

export default function MyGamesSection({ setOpenAddGame, handleRemoveGame, profile }: MyGamesSectionProps) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)

  const data = profile?.Profile?.games || []

  return (
    <Body marginBottom='60px'>
      <div className='d-flex align-items-center home-title'>
        <Image style={{ marginRight: '10px' }} src={myGames} alt='my games icon' />
        <p>Meus jogos</p>
      </div>
      <p className='color-black-7 my-games-subtitle'>
        Adicione os jogos que você joga e o seu rank em cada um
      </p>
      <div className='d-flex flex-gap-2 my-games-cards'>
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
        {data.map((item, index) => (
          <GameCard
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
