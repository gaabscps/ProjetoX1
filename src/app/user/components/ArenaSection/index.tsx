import { Body } from '@/components/Body';
import { Card } from '@/components/Card';
import myGames from '@/assets/svg/myGames.svg';
import Image from 'next/image';
import Link from 'next/link';
import arrowCard from '@/assets/svg/arrowCard.svg';
import { useTabletHook } from '@/hooks/useMediaQuery/isTablet';
import FastGameInputBody from '@/components/FastGameInputBody';

interface ArenaSectionProps {
  setOpenFastGame: (value: boolean) => void;
  isVisiting?: boolean;
}

export default function UserArenaSection({ setOpenFastGame, isVisiting }: ArenaSectionProps) {
  const isTablet = useTabletHook();

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
            <div className="text-small-400 action-icon">
              Ver todos os jogos realizados
            </div>
          </Link>
        </div>
        <p className="color-black-7 my-games-subtitle">
          Gerencie os seus desafios, procure por oponentes ou inicie um jogo
          rápido
        </p>
      </Body>

      {/* Procure jogador ou jogo rapido */}

      <Body className="d-flex flex-gap-1" marginBottom="40px">
        <FastGameInputBody isVisiting setOpenFastGame={setOpenFastGame} />
      </Body>

      {/* Ações */}
      <Body marginBottom="250px">
        <div className="d-flex flex-gap-2 home-action-card-container">
          {/* Desafiar */}
          {!isVisiting && (
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
                        0 jogadores online
                      </p>
                    </div>
                    {!isTablet && (
                      <Image className="arrowCard" src={arrowCard} alt="" />
                    )}
                  </div>
                </Link>
              }
            />
          )}
          {/* Desafios Recebidos */}
          <Card
            className="home-action-card-content"
            borderRadius="5px"
            height="100px"
            content={
              <Link href={'/challenges'}>
                <div className="home-action-card">
                  <p style={{ marginBottom: '10px' }}>Desafios recebidos</p>
                  <p className="text-small-400 color-black-6">
                    0 desafios recebidos
                  </p>
                  {!isTablet && (
                    <Image className="arrowCard" src={arrowCard} alt="" />
                  )}
                </div>
              </Link>
            }
          />
          {/* Desafios Enviados */}
          <Card
            className="home-action-card-content"
            borderRadius="5px"
            height="100px"
            content={
              <Link href={'/challenges-sent'}>
                <div className="home-action-card">
                  <p style={{ marginBottom: '10px' }}>Desafios enviados</p>
                  <p className="text-small-400 color-black-6">
                    0 desafios enviados
                  </p>
                  {!isTablet && (
                    <Image className="arrowCard" src={arrowCard} alt="" />
                  )}
                </div>
              </Link>
            }
          />
          {/* Jogos Ativos */}
          <Card
            className="home-action-card-content"
            borderRadius="5px"
            height="100px"
            content={
              <Link href={'/active-games'}>
                <div className="home-action-card">
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
                      Pronto para ser desafiado
                    </p>
                  </div>
                  {!isTablet && (
                    <Image className="arrowCard" src={arrowCard} alt="" />
                  )}
                </div>
              </Link>
            }
          />
        </div>
      </Body>
    </>
  );
}
