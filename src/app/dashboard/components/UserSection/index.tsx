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
import { useTabletHook } from '@/hooks/useMediaQuery/isTablet';
import { useMobileHook } from '@/hooks/useMediaQuery/isMobile';
import { Location, Profile } from '@/types/Dashboard';
import { Button } from '@/components/Button';
import back from '@/assets/svg/back.svg';
import Link from 'next/link';
import Image from 'next/image';

interface CustomChartDataset extends ChartDataset<'pie', number[]> {
  cutout?: number | string;
}

interface UserSectionProps {
  profile: Profile | undefined;
  location?: Location | undefined;
  isVisiting?: boolean;
  handleFollow?: (idUser: string, youFollow: boolean) => void;
}

export default function UserSection({ profile, location, isVisiting, handleFollow }: UserSectionProps) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const isTablet = useTabletHook();
  const isMobile = useMobileHook();

  const [onHover, setOnHover] = useState(false);

  const profileXp = profile?.xp || 0;
  const profileLevel = Math.floor(Number(profileXp) / 1000);
  const profileLevelProgress = Number(profileXp) % 1000;
  const profileLevelProgressPercent = (profileLevelProgress / 1000) * 100;
  const notLeveledExp = 100 - profileLevelProgressPercent;

  const dataSet: CustomChartDataset = {
    // Exp ativo, exp inativo, tamanho tag
    data: [profileLevelProgressPercent, notLeveledExp, 10],
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
      {isVisiting &&
        <Link className='action-icon' href='/dashboard'>
          <Image src={back} width={16} height={16} alt='' />
        </Link>
      }
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

          <div className="levelTag">{profileLevel}</div>
          <div
            className={`levelStats ${onHover ? 'levelStatsHover' : 'levelStatsOff'
              }`}
          >
            <p style={{ marginBottom: '5px', marginTop: '3px' }}>{profileLevelProgressPercent}%</p>
            <p>{profileLevelProgress}/1.000 </p>
          </div>

          <div
            className="profilePicture"
            style={{
              position: 'relative',
              boxShadow: '0 0 0 3px #464448',
              zIndex: '-1',
            }}
          >
            <img className="profilePicture" src={profile?.urlPhoto || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="profile" />
          </div>
        </div>
        <div className="ml-1 w-100 user-stats-container">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }} className="nationalityTag-container">
            <div className='d-flex align-items-center'>
              <p style={{ textAlign: 'center' }}>{profile?.nickname || '--'}</p>
              {(location?.CountryFlag && location.Country) &&
                <div className="nationalityTag">
                  <>
                    <img style={{
                      maxWidth: '15px',
                      maxHeight: '15px',
                      marginRight: '5px',
                    }} src={location?.CountryFlag || ''} alt="country flag" />
                    <p className="text-extra-small-400">{location?.Country}</p>
                  </>
                </div>
              }
            </div>
            {isVisiting && (
              <div className='d-flex align-items-center' style={{ marginLeft: '25px' }}>
                <Button disabled={!profile?.youFollow} theme='outline' margin='0 4px' width='80px' height='25px' content="Desafiar" />
                <Button onClick={() => handleFollow ? handleFollow(window.location.pathname.split('/')[2] || '', false) : undefined} theme={profile?.youFollow ? 'selected' : 'standard'} margin='0 4px' width='80px' height='25px' content={profile?.youFollow ? 'Seguindo' : 'Seguir'}
                />
                {profile?.youFollow && (
                  <p onClick={() => handleFollow ? handleFollow(window.location.pathname.split('/')[2] || '', true) : undefined} className='button-tertiary' style={{ margin: '0 4px' }}>Deixar de seguir</p>
                )}
              </div>
            )}
          </div>
          <div className="home-user-stats">
            <span className="color-black-7">{profile?.followers || '--'} seguidores</span>
            <span className="color-black-7">{profile?.following || '--'} seguindo</span>
            <span className="color-black-7">{profile?.timesyouChangelled || '--'}x que desafiou</span>
            <span className="color-black-7">{profile?.timesChangelled || '--'}x que foi desafiado</span>
            {(!isTablet || !isMobile) && (
              <span className="color-black-7">{'//'}</span>
            )}
            <span className="color-black-7">{profile?.gamesPlayed || '--'} jogos realizados</span>
            {/* <span className="color-black-7">2 vitórias</span>
            <span className="color-black-7">3 derrotas</span> */}
          </div>
        </div>
      </div>
    </Body>
  );
}
