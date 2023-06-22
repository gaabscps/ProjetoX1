import { useState } from "react";
import { Body } from "@/components/Body";
import { Card } from "@/components/Card";
import Input from "@/components/Input";
import myGames from "@/assets/svg/myGames.svg";
import Image from "next/image";
import buttonImage from "@/assets/svg/buttonImage.png";
import Link from "next/link";
import arrowCard from "@/assets/svg/arrowCard.svg";
import { useTabletHook } from "@/hooks/useMediaQuery/isTablet";
import { useMobileHook } from "@/hooks/useMediaQuery/isMobile";

interface ArenaSectionProps {
  modal: {
    setOpenFastGame: (value: boolean) => void;
  };
}

export default function ArenaSection({ modal }: ArenaSectionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const isTablet = useTabletHook();
  const isMobile = useMobileHook();

  return (
    <>
      {/* Titulo */}
      <Body marginBottom="30px">
        <div className="w-100 d-flex justify-content-between align-items-center home-title">
          <div className="d-flex align-items-center">
            <Image
              style={{ marginRight: "10px" }}
              src={myGames}
              alt="my games icon"
            />
            <p>Arena</p>
          </div>
          <p className="text-small-400 action-icon">
            Ver todos os jogos realizados
          </p>
        </div>
        <p className="color-black-7 my-games-subtitle">
          Gerencie os seus desafios, procure por oponentes ou inicie um jogo
          rápido
        </p>
      </Body>

      {/* Procure jogador ou jogo rapido */}
      <Body className="d-flex flex-gap-1" marginBottom="40px">
        <div className="d-flex w-100 flex-gap-1 fast-game-container">
          <div style={{ width: isMobile ? "100%" : "85%" }}>
            <Input
              className="input-1"
              maxHeight={"50px"}
              placeholder="Procure um jogador para desafiar"
            />
          </div>
          <div style={{ position: "relative" }}>
            <Card
              onClick={() => modal.setOpenFastGame(true)}
              borderRadius="5px"
              background={buttonImage.src}
              width={isMobile ? "100%" : "153px"}
              height={isMobile ? "100px" : "44px"}
              content={<> </>}
              className={`fast-game-card ${
                isHovered ? "fast-game-card-hover" : ""
              } ${isActive ? "fast-game-card-active" : ""}`}
            />
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => {
                setIsActive(true);
                setTimeout(() => {
                  setIsActive(false);
                }, 100);
                modal.setOpenFastGame(true);
              }}
              className="fast-game text-small-700"
            >
              Jogo rápido
            </p>
          </div>
        </div>
      </Body>

      {/* Ações */}
      <Body marginBottom="60px">
        <div className="d-flex flex-gap-2 home-action-card-container">
          {/* Desafiar */}
          <Card
            className="home-action-card-content"
            borderRadius="5px"
            height="100px"
            content={
              <Link href={"/challenge"}>
                <div className="home-action-card">
                  <p style={{ marginBottom: "10px" }}>Desafiar</p>
                  <div className="arena-action-card-content">
                    <div
                      style={{ backgroundColor: "var(--color-success)" }}
                      className="roundStatus"
                    />
                    <p
                      style={{ marginLeft: "8px" }}
                      className="text-small-400 color-black-6"
                    >
                      10 jogadores online
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
            className="home-action-card-content"
            borderRadius="5px"
            height="100px"
            content={
              <Link href={"/challenges"}>
                <div className="home-action-card">
                  <p style={{ marginBottom: "10px" }}>Desafios recebidos</p>
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
              <Link href={"/challenges-sent"}>
                <div className="home-action-card">
                  <p style={{ marginBottom: "10px" }}>Desafios enviados</p>
                  <p className="text-small-400 color-black-6">
                    10 desafios enviados
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
              <Link href={"/active-games"}>
                <div className="home-action-card">
                  <p style={{ marginBottom: "10px" }}>Jogos ativos</p>
                  <div className="arena-action-card-content">
                    <div
                      style={{ backgroundColor: "var(--color-success)" }}
                      className="roundStatus"
                    />
                    <p
                      style={{ marginLeft: "8px" }}
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
