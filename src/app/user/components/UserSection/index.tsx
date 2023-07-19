import { Body } from '@/components/Body';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartDataset,
} from 'chart.js';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import gabs from '@/assets/svg/gabs.jpg';
import brazil from '@/assets/svg/brazil.svg';
import { useTabletHook } from '@/hooks/useMediaQuery/isTablet';
import { useMobileHook } from '@/hooks/useMediaQuery/isMobile';
import { Button } from '@/components/Button';

interface CustomChartDataset extends ChartDataset<'pie', number[]> {
  cutout?: number | string;
}

interface UserSectionProps {
  isVisiting?: boolean;
}

export default function UserSection({ isVisiting }: UserSectionProps) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const isTablet = useTabletHook();
  const isMobile = useMobileHook();

  const [onHover, setOnHover] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const dataSet: CustomChartDataset = {
    // Exp ativo, exp inativo, tamanho tag
    data: [80, 10, 10],
    backgroundColor: ['#963BFF', 'transparent', 'transparent'],
    hoverBackgroundColor: ['#963BFF', 'transparent', 'transparent'],
    borderWidth: 0,
    rotation: 199,
    cutout: '96%',
    borderJoinStyle: 'round',
    borderRadius: 10,
  };

  useEffect(() => {
    if (isVisiting) {
      console.log({ isFollowing })
    }
  }, [isFollowing]);


  return (
    <Body>
      <div className="user-section-container">
        <div
          className="user-profile-picture"
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          style={{ position: 'relative' }}
        >
          {/* Barra de progressão de level */}
          <div
            style={{
              position: 'absolute',
              width: '176px',
              top: '-13px',
              left: '-8px',
            }}
          >
            <Pie
              options={{
                events: [],
              }}
              data={{ datasets: [dataSet] }}
            />
          </div>

          <div className="levelTag">23</div>
          <div
            className={`levelStats ${onHover ? 'levelStatsHover' : 'levelStatsOff'
              }`}
          >
            <p style={{ marginBottom: '5px', marginTop: '3px' }}>70%</p>
            <p>7.000/10.000 </p>
          </div>

          <div
            className="profilePicture"
            style={{
              position: 'relative',
              boxShadow: '0 0 0 3px #464448',
              zIndex: '-1',
            }}
          >
            <Image className="profilePicture" src={gabs} alt="profile" />
          </div>
        </div>
        <div className="ml-1 w-100 user-stats-container">
          <div className="nationalityTag-container">
            <div className='d-flex'>
              <h6 className='h6-400' style={{ marginBottom: '10px' }}>Alex da Silva Almeida Junior</h6>
              {isVisiting && (
                <div className='d-flex align-items-center' style={{ marginLeft: '25px' }}>
                  <Button disabled={!isFollowing} theme='outline' margin='0 4px' width='80px' height='25px' content="Desafiar" />
                  <Button onClick={() => setIsFollowing(true)} theme={isFollowing ? 'selected' : 'standard'} margin='0 4px' width='80px' height='25px' content={isFollowing ? 'Seguindo' : 'Seguir'}
                  />
                  {isFollowing && (
                    <p onClick={() => setIsFollowing(false)} className='button-tertiary' style={{ margin: '0 4px' }}>Deixar de seguir</p>
                  )}
                </div>
              )}
            </div>
            <div className="nationalityTag">
              <Image src={brazil} alt="brazil" />
              <p className="text-extra-small-400">Brasil</p>
            </div>
          </div>
          <div className="home-user-stats">
            <span className="color-black-7">10 seguidores</span>
            <span className="color-black-7">15 seguindo</span>
            <span className="color-black-7">10x que desafiou</span>
            <span className="color-black-7">5x que foi desafiado</span>
            {(!isTablet || !isMobile) && (
              <span className="color-black-7">{'//'}</span>
            )}
            <span className="color-black-7">5 jogos realizados</span>
            <span className="color-black-7">2 vitórias</span>
            <span className="color-black-7">3 derrotas</span>
          </div>
        </div>
      </div>
    </Body>
  );
}