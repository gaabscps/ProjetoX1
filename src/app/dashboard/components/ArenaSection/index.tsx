import { useState } from "react";
import { Body } from "@/components/Body";
import { Card } from "@/components/Card";
import Input from "@/components/Input";
import myGames from "@/assets/svg/myGames.svg";
import Image from "next/image";
import buttonImage from "@/assets/svg/buttonImage.png";
import Link from "next/link";
import arrowCard from "@/assets/svg/arrowCard.svg";

interface ArenaSectionProps {
  modal: {
    setOpenFastGame: (value: boolean) => void;
  };
}

export default function ArenaSection({ modal }: ArenaSectionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

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
        <div style={{ width: "85%" }}>
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
            width="153px"
            height="44px"
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
      </Body>

      {/* Ações */}
      <Body marginBottom="60px">
        <div className="d-flex flex-gap-2">
          {/* Desafiar */}
          <Card
            borderRadius="5px"
            width="255px"
            height="100px"
            content={
              <Link href={"/challenge"}>
                <div className="home-action-card">
                  <p style={{ marginBottom: "10px" }}>Desafiar</p>
                  <div className="d-flex align-items-center justify-content-center w-100">
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
                  <Image className="arrowCard" src={arrowCard} alt="" />
                </div>
              </Link>
            }
          />
          {/* Desafios Recebidos */}
          <Card
            borderRadius="5px"
            width="255px"
            height="100px"
            content={
              <Link href={"/challenges"}>
                <div className="home-action-card">
                  <p style={{ marginBottom: "10px" }}>Desafios recebidos</p>
                  <p className="text-small-400 color-black-6">
                    0 desafios recebidos
                  </p>
                  <Image className="arrowCard" src={arrowCard} alt="" />
                </div>
              </Link>
            }
          />
          {/* Desafios Enviados */}
          <Card
            borderRadius="5px"
            width="255px"
            height="100px"
            content={
              <Link href={"/challenges-sent"}>
                <div className="home-action-card">
                  <p style={{ marginBottom: "10px" }}>Desafios enviados</p>
                  <p className="text-small-400 color-black-6">
                    10 desafios enviados
                  </p>
                  <Image className="arrowCard" src={arrowCard} alt="" />
                </div>
              </Link>
            }
          />
          {/* Jogos Ativos */}
          <Card
            borderRadius="5px"
            width="255px"
            height="100px"
            content={
              <Link href={"/active-games"}>
                <div className="home-action-card">
                  <p style={{ marginBottom: "10px" }}>Jogos ativos</p>
                  <div className="d-flex align-items-center justify-content-center w-100">
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
                  <Image className="arrowCard" src={arrowCard} alt="" />
                </div>
              </Link>
            }
          />
        </div>
      </Body>
    </>
  );
}
