import { Card } from '@/components/Card'
import DropdownMenu from '@/components/DropdownMenu'
import Image from 'next/image'
import dot from '@/assets/svg/verticalDot.svg'
import editar from '@/assets/svg/editar.svg'
import remover from '@/assets/svg/remover.svg'

interface GameCardProps {
  openDropdown: boolean
  data: {
    nome: string
    logo: string
    rank: string
    jr: number
    v: number
    d: number
  }
  setOpenAddGame: (value: boolean) => void
  setOpenDropdown: (value: boolean) => void
}

export default function GameCard({ openDropdown, data, setOpenAddGame, setOpenDropdown }: GameCardProps) {
  return (
    <Card
      borderRadius='5px'
      color='#3E3B3F'
      width='160px'
      height='170px'
      theme='outline'
      content={
        <div className='my-games-card-container'>
          <Image
            style={{
              maxWidth: '90px',
              maxHeight: '40px',
            }}
            src={data.logo}
            alt='valorant logo'
            className='my-games-image'
          />
          <div className='d-flex flex-column align-items-center'>
            <span style={{ marginBottom: '5px' }}>Rank</span>
            <span>{data.rank}</span>
          </div>
          <div className='d-flex justify-content-between w-100'>
            <p className='text-small-400'>JR: {data.jr}</p>
            <p className='text-small-400'>V: {data.v}</p>
            <p className='text-small-400'>D: {data.d}</p>
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
            open={openDropdown}
            top={32}
            right={9}
            tabs={[
              {
                icon: editar,
                content: 'Editar',
                onClick: () =>
                  setOpenAddGame(true),
              },
              {
                icon: remover,
                content: 'Remover',
              },
            ]}
          />
        </div>
      }
    />
  )
}
