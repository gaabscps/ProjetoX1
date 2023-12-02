import { Card } from '@/components/Card'
import DropdownMenu from '@/components/DropdownMenu'
import Image from 'next/image'
import dot from '@/assets/svg/verticalDot.svg'
import remover from '@/assets/svg/remover.svg'

interface GameCardProps {
  openDropdown: boolean
  data: {
    gameId: string;
    urlPhoto: string;
    gameName: string;
    matchPlayed: string;
    matchWin: string;
    matchDeafet: string;
    level: string;
  }
  setOpenAddGame: (value: boolean) => void
  setOpenDropdown: (value: boolean) => void
  handleRemoveGame?: (gameId: string) => void
}

export default function GameCard({ openDropdown, data, setOpenDropdown, handleRemoveGame }: GameCardProps) {
  return (
    <Card
      borderRadius='5px'
      color='#3E3B3F'
      width='160px'
      height='170px'
      theme='outline'
      content={
        <div className='my-games-card-container'>
          <img
            style={{
              maxWidth: '90px',
              maxHeight: '40px',
            }}
            src={data.urlPhoto}
            alt='valorant logo'
            className='my-games-image'
          />
          <div className='d-flex flex-column align-items-center'>
            <span style={{ marginBottom: '5px' }}>Rank</span>
            <span>{data.level}</span>
          </div>
          <div className='d-flex justify-content-between w-100'>
            <p className='text-small-400'>JR: {data.matchPlayed}</p>
            <p className='text-small-400'>V: {data.matchWin}</p>
            <p className='text-small-400'>D: {data.matchDeafet}</p>
          </div>
          <Image
            onClick={() => setOpenDropdown(!openDropdown)}
            className='action-icon'
            style={{
              position: 'absolute',
              right: '5px',
              width: '15px',
              transform: openDropdown ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'all 0.2s ease',
            }}
            src={dot}
            alt='valorant logo'
          />
          <DropdownMenu
            onMouseLeave={() => setOpenDropdown(false)}
            open={openDropdown}
            top={32}
            right={9}
            tabs={[
              // {
              //   icon: editar,
              //   content: 'Editar',
              //   onClick: () =>
              //     setOpenAddGame(true),
              // },
              {
                icon: remover,
                content: 'Remover',
                onClick: () => { handleRemoveGame && handleRemoveGame(data.gameId); setOpenDropdown(false) }
              },
            ]}
          />
        </div>
      }
    />
  )
}
