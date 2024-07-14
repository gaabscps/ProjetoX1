/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Body } from '@/components/Body'
import { Carrossel } from '@/components/Carousel'
import { Element } from 'react-scroll'
import { GamesList } from '@/types/GamesList'

interface GamesSectionProps {
  games: GamesList[]
}

export function GamesSection({ games }: GamesSectionProps) {
  const availableGames = games.map((item: GamesList) => (
    <div
      className='h-100 d-flex justify-content-center align-items-center games-carousel'
      style={{ width: '231px', height: '126px' }}
      key={1}
    >
      <img src={item.thumbnail} />
    </div>
  ))

  return games && games.length > 0 ? (
    <>
      <Element name='games'>
        <Body carousel marginBottom='130px' marginTop='130px'>
          <Carrossel isBanner title='Jogos disponíveis' items={availableGames} />
        </Body>
      </Element>
    </>
  ) : null
}
