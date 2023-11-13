import { Body } from '@/components/Body';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartDataset,
} from 'chart.js';
import { useState } from 'react';
import Image from 'next/image';
import gabs from '@/assets/svg/gabs.jpg';
import brazil from '@/assets/svg/brazil.svg';
import { useTabletHook } from '@/hooks/useMediaQuery/isTablet';
import { useMobileHook } from '@/hooks/useMediaQuery/isMobile';
import { Dashboard } from '@/types/Dashboard';

interface CustomChartDataset extends ChartDataset<'pie', number[]> {
  cutout?: number | string;
}

interface UserSectionProps {
  profile: Dashboard | undefined;
}

export default function UserSection({ profile }: UserSectionProps) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const isTablet = useTabletHook();
  const isMobile = useMobileHook();

  const [onHover, setOnHover] = useState(false);

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
            <p>{profile?.Profile?.xp}/10.000 </p>
          </div>

          <div
            className="profilePicture"
            style={{
              position: 'relative',
              boxShadow: '0 0 0 3px #464448',
              zIndex: '-1',
            }}
          >
            <img className="profilePicture" src={profile?.Profile.urlPhoto || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="profile" />
          </div>
        </div>
        <div className="ml-1 w-100 user-stats-container">
          <div className="nationalityTag-container">
            <p style={{ marginBottom: '10px' }}>{profile?.Profile?.nickname || '--'}</p>
            {(profile?.Location?.CountryFlag && profile.Location.Country) &&
              <div className="nationalityTag">
                <>
                  <img style={{
                    maxWidth: '20px',
                    maxHeight: '20px',
                    marginRight: '5px',
                  }} src={profile?.Location?.CountryFlag || ''} alt="country flag" />
                  <p className="text-extra-small-400">{profile?.Location?.Country}</p>
                </>
              </div>
            }
          </div>
          <div className="home-user-stats">
            <span className="color-black-7">{profile?.Profile?.followers || '--'} seguidores</span>
            <span className="color-black-7">{profile?.Profile?.following || '--'} seguindo</span>
            <span className="color-black-7">{profile?.Profile?.timesyouChangelled || '--'}x que desafiou</span>
            <span className="color-black-7">{profile?.Profile?.timesChangelled || '--'}x que foi desafiado</span>
            {(!isTablet || !isMobile) && (
              <span className="color-black-7">{'//'}</span>
            )}
            <span className="color-black-7">{profile?.Profile?.gamesPlayed || '--'} jogos realizados</span>
            {/* <span className="color-black-7">2 vitórias</span>
            <span className="color-black-7">3 derrotas</span> */}
          </div>
        </div>
      </div>
    </Body>
  );
}
