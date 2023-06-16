"use client";
import EmptyUserDashboard from "@/assets/svg/EmptyUserDashboard";
import { Body } from "@/components/Body";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import Input from "@/components/Input";
import { Modal } from "@/components/Modal";
import { useModal } from "@/hooks/useModal";
import Link from "next/link";
import Image from "next/image";
import myGames from "@/assets/svg/myGames.svg";
import valorant from "@/assets/svg/mockGame3.svg";
import buttonImage from "@/assets/svg/buttonImage.png";

export default function Dashboard() {
  const modal = useModal();

  return (
    <>
      <Modal
        open={modal.openLogin || modal.openRegister || modal.openAddGame}
        setOpen={modal.handleSetModal}
        modalBody={modal.handleModalBody()}
        modalHeader={
          modal.openRegister ? (
            <span
              className="h-100 line-height-150 registerHeaderContent"
              style={{}}
            >
              Crie a sua conta e ganhe R$ 50,00 para começar a desafiar outros
              jogadores
            </span>
          ) : null
        }
        modalHeaderBg={modal.openRegister ? "#3E3B3F" : null}
      />
      <Header
        setOpenRegister={modal.setOpenRegister}
        setOpenLogin={modal.handleSetModal}
      />
      <div className="pageBody">
        <Body>
          <div className="d-flex align-items-center mb-3">
            <EmptyUserDashboard />
            <div className="ml-1 w-100">
              <p style={{ marginBottom: "26px" }}>
                Alex da Silva Almeida Junior
              </p>
              <div className="d-flex w-100 justify-content-between">
                <span className="color-black-7">10 seguidores</span>
                <span className="color-black-7">15 seguindo</span>
                <span className="color-black-7">10x que desafiou</span>
                <span className="color-black-7">5x que foi desafiado</span>
                <span className="color-black-7">{`//`}</span>
                <span className="color-black-7">5 jogos realizados</span>
                <span className="color-black-7">2 vitórias</span>
                <span className="color-black-7">3 derrotas</span>
              </div>
            </div>
          </div>
        </Body>
        <Body marginBottom="60px">
          <div className="d-flex align-items-center home-title">
            <Image
              style={{ marginRight: "10px" }}
              src={myGames}
              alt="my games icon"
            />
            <p>Meus jogos</p>
          </div>
          <p className="color-black-7 my-games-subtitle">
            Adicione os jogos que você joga e o seu rank em cada um
          </p>
          <div className="d-flex flex-gap-2">
            <Card
              color="#464448"
              onClick={() => modal.setOpenAddGame(true)}
              width="160px"
              height="170px"
              borderRadius="5px"
              theme="dotted"
              content={
                <div className="d-flex flex-column align-items-center justify-content-center h-100 ptb-1 text-center">
                  Adicionar Jogo
                </div>
              }
            />
            <Card
              color="#3E3B3F"
              width="160px"
              height="170px"
              borderRadius="5px"
              theme="outline"
              content={
                <div className="my-games-card-container">
                  <Image
                    src={valorant}
                    alt="valorant logo"
                    className="my-games-image"
                  />
                  <div className="d-flex flex-column align-items-center">
                    <span style={{ marginBottom: "5px" }}>Rank</span>
                    <span>Profissional</span>
                  </div>
                  <div className="d-flex justify-content-between w-100">
                    <p className="text-small-400">JR: 10</p>
                    <p className="text-small-400">V: 1</p>
                    <p className="text-small-400">D: 0</p>
                  </div>
                </div>
              }
            />
          </div>
        </Body>
        <Body marginBottom="60px">
          <hr style={{ background: "#3E3B3F" }} className="hr-line" />
        </Body>
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
            <p className="text-small-400">Ver todos os jogos realizados</p>
          </div>
          <p className="color-black-7 my-games-subtitle">
            Gerencie os seus desafios, procure por oponentes ou inicie um jogo
            rápido
          </p>
        </Body>
        <Body className="d-flex flex-gap-1" marginBottom="40px">
          <div style={{ width: "85%" }}>
            <Input placeholder="Procure um jogador para desafiar" />
          </div>
          <div style={{ position: "relative" }}>
            <Card
              background={buttonImage.src}
              width="153px"
              height="44px"
              content={<> </>}
            />
            <p className="fast-game text-small-700">Jogo rápido</p>
          </div>
        </Body>
        <Body marginBottom="60px">
          <div className="d-flex flex-gap-2">
            <Card
              borderRadius="5px"
              width="255px"
              height="100px"
              content={
                <Link href={"/challenge"}>
                  <div className="action-icon h-100">Desafiar</div>
                </Link>
              }
            />
            <Card
              borderRadius="5px"
              width="255px"
              height="100px"
              content={
                <Link href={"/challenges"}>
                  <div className="action-icon h-100">Desafios recebidos</div>
                </Link>
              }
            />
            <Card
              borderRadius="5px"
              width="255px"
              height="100px"
              content={
                <Link href={"/challenges-sent"}>
                  <div className="action-icon h-100">Desafios enviados</div>
                </Link>
              }
            />
            <Card
              borderRadius="5px"
              width="255px"
              height="100px"
              content={
                <Link href={"/active-games"}>
                  <div className="action-icon h-100">Jogos ativos</div>
                </Link>
              }
            />
          </div>
        </Body>
      </div>
    </>
  );
}
