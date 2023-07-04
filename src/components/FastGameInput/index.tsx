import { useMobileHook } from '@/hooks/useMediaQuery/isMobile';
import { useState } from 'react';
import buttonImage from '@/assets/svg/buttonImage.png';
import { Card } from '../Card';
import Input from '../Input';


interface FastGameInputProps {
  setOpenFastGame: (value: boolean) => void;
}

export default function FastGameInput({ setOpenFastGame }: FastGameInputProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const isMobile = useMobileHook();

  return (

    <div className="d-flex w-100 flex-gap-1 fast-game-container">
      <div style={{ width: isMobile ? '100%' : '85%' }}>
        <Input
          className="input-1"
          maxHeight={'50px'}
          placeholder="Procure um jogador para desafiar"
        />
      </div>
      <div style={{ position: 'relative' }}>
        <Card
          onClick={() => setOpenFastGame(true)}
          borderRadius="5px"
          background={buttonImage.src}
          width={isMobile ? '100%' : '153px'}
          height={isMobile ? '100px' : '44px'}
          content={<> </>}
          className={`fast-game-card ${isHovered ? 'fast-game-card-hover' : ''
            } ${isActive ? 'fast-game-card-active' : ''}`}
        />
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            setIsActive(true);
            setTimeout(() => {
              setIsActive(false);
            }, 100);
            setOpenFastGame(true);
          }}
          className="fast-game text-small-700"
        >
          Jogo rápido
        </p>
      </div>
    </div>

  )
}
