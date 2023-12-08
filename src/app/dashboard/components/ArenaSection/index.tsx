import { Body } from '@/components/Body';
import { Card } from '@/components/Card';
import myGames from '@/assets/svg/myGames.svg';
import Image from 'next/image';
import Link from 'next/link';
import arrowCard from '@/assets/svg/arrowCard.svg';
import { useTabletHook } from '@/hooks/useMediaQuery/isTablet';
import FastGameInputBody from '@/components/FastGameInputBody';
import { Dashboard } from '@/types/Dashboard';

interface ArenaSectionProps {
  setOpenFastGame: (value: boolean) => void;
  dashboard: Dashboard | undefined;
}

export default function ArenaSection({ setOpenFastGame, dashboard }: ArenaSectionProps) {
  const isTablet = useTabletHook();
  const userAvailable: boolean = dashboard?.MatchArena?.status === 'Player is not in any ongoing match' ? true : false
  const userInvited: boolean = dashboard?.MatchArena?.ChallangeInvited === 0
  const userReceivedChallenge: boolean = dashboard?.MatchArena?.ChallengeReceive === 0

  return (
    <>
      {/* Titulo */}
      <Body marginBottom="30px">
        <div className="w-100 d-flex justify-content-between align-items-center home-title">
          <div className="d-flex align-items-center">
            <Image
              style={{ marginRight: '10px' }}
              src={myGames}
              alt="my games icon"
            />
            <p>Arena</p>
          </div>
          <Link href={'/games-history'}>
            <p className="text-small-400 action-icon">
              Ver todos os jogos realizados
            </p>
          </Link>
        </div>
        <p className="color-black-7 my-games-subtitle">
          Gerencie os seus desafios, procure por oponentes ou inicie um jogo
          rápido
        </p>
      </Body>

      {/* Procure jogador ou jogo rapido */}
      <Body className="d-flex flex-gap-1" marginBottom="40px">
        <FastGameInputBody setOpenFastGame={setOpenFastGame} />
      </Body>

      {/* Ações */}
      <Body marginBottom="250px">
        <div className="d-flex flex-gap-2 home-action-card-container">
          {/* Desafiar */}
          <Card
            className="home-action-card-content"
            borderRadius="5px"
            height="100px"
            content={
              <Link href={'/challenge'}>
                <div className="home-action-card">
                  <p style={{ marginBottom: '10px' }}>Desafiar</p>
                  <div className="arena-action-card-content">
                    <div
                      style={{ backgroundColor: 'var(--color-success)' }}
                      className="roundStatus"
                    />
                    <p
                      style={{ marginLeft: '8px' }}
                      className="text-small-400 color-black-6"
                    >
                      {dashboard?.MatchArena?.onlinePlayers || 0} jogadores online
                    </p>
                  </div>
                  {!isTablet && (
                    <Image className="arrowCard" src={arrowCard} alt="" />
                  )}
                </div>
              </Link>
            }
          />
          {/* Desafios Recebidos */}
          <Card
            disabled={!!userReceivedChallenge}
            className="home-action-card-content"
            borderRadius="5px"
            height="100px"
            content={
              <div className='h-100' onClick={() => {
                if (userReceivedChallenge) {
                  return
                }
                window.location.href = '/challenges'
              }}>
                <div style={{
                  cursor: userReceivedChallenge ? 'not-allowed' : 'pointer'
                }} className="home-action-card">
                  <p style={{ marginBottom: '10px' }}>Desafios recebidos</p>
                  <p className="text-small-400 color-black-6">
                    {dashboard?.MatchArena?.ChallengeReceive || 0} desafios recebidos
                  </p>
                  {!isTablet && (
                    <Image className="arrowCard" src={arrowCard} alt="" />
                  )}
                </div>
              </div>
            }
          />
          {/* Desafios Enviados */}
          <Card
            disabled={!!userInvited}
            className="home-action-card-content"
            borderRadius="5px"
            height="100px"
            content={
              <div className='h-100' onClick={() => {
                if (userInvited) {
                  return
                }
                window.location.href = '/challenges-sent'
              }}>
                <div style={{
                  cursor: userInvited ? 'not-allowed' : 'pointer'
                }} className="home-action-card">
                  <p style={{ marginBottom: '10px' }}>Desafios enviados</p>
                  <p className="text-small-400 color-black-6">
                    {dashboard?.MatchArena?.ChallangeInvited || 0} desafios enviados
                  </p>
                  {!isTablet && (
                    <Image className="arrowCard" src={arrowCard} alt="" />
                  )}
                </div>
              </div>
            }
          />
          {/* Jogos Ativos */}
          <Card
            disabled={!!userAvailable}
            className="home-action-card-content"
            borderRadius="5px"
            height="100px"
            content={
              <div className='h-100' onClick={() => {
                if (userAvailable) {
                  return
                }
                window.location.href = '/active-games'
              }}>
                <div style={{
                  cursor: userAvailable ? 'not-allowed' : 'pointer'
                }} className="home-action-card">
                  <p style={{ marginBottom: '10px' }}>Jogos ativos</p>
                  <div className="arena-action-card-content">
                    <div
                      style={{ backgroundColor: 'var(--color-success)' }}
                      className="roundStatus"
                    />
                    <p
                      style={{ marginLeft: '8px' }}
                      className="text-small-400 color-black-6"
                    >
                      {
                        // TODO - inverter a lógica para o status do jogo
                      }
                      {userAvailable ? 'Pronto para ser desafiado' : 'Jogando'}
                    </p>
                  </div>
                  {!isTablet && (
                    <Image className="arrowCard" src={arrowCard} alt="" />
                  )}
                </div>
              </div>
            }
          />
        </div>
      </Body >
    </>
  );
}
