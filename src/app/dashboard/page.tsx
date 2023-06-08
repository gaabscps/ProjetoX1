"use client";
import { EmptyImage } from "@/assets/svg/EmptyImage";
import EmptyUserDashboard from "@/assets/svg/EmptyUserDashboard";
import { Body } from "@/components/Body";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import Input from "@/components/Input";
import { Modal } from "@/components/Modal";
import { useModal } from "@/hooks/useModal";

export default function Dashboard() {
  const modal = useModal();

  return (
    <>
      {(modal.openLogin || modal.openRegister || modal.openAddGame) && (
        <Modal
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
      )}
      <Header
        setOpenRegister={modal.setOpenRegister}
        setOpenLogin={modal.handleSetModal}
      />
      <div className="pageBody">
        <Body>
          <div className="d-flex align-items-center mb-3">
            <EmptyUserDashboard />
            <div className="ml-1 w-100">
              <p style={{ marginBottom: "25px" }}>
                Alex da Silva Almeida Junior
              </p>
              <div className="d-flex w-100 justify-content-between">
                <span>10 seguidores</span>
                <span>15 seguindo</span>
                <span>10x que desafiou</span>
                <span>5x que foi desafiado</span>
                <span>{`//`}</span>
                <span>5 jogos realizados</span>
                <span>2 vitórias</span>
                <span>3 derrotas</span>
              </div>
            </div>
          </div>
        </Body>
        <Body marginBottom="60px">
          <div className="mb-1">
            <span>Meus jogos</span>
          </div>
          <div className="d-flex flex-gap-2">
            <Card
              onClick={() => modal.setOpenAddGame(true)}
              width="160px"
              height="170px"
              borderRadius="5px"
              theme="dotted"
              content={
                <div className="d-flex flex-column align-items-center justify-content-center h-100 ptb-1">
                  Adicionar Jogo
                </div>
              }
            />
            <Card
              width="160px"
              height="170px"
              borderRadius="5px"
              theme="outline"
              content={
                <div className="d-flex flex-column align-items-center justify-content-between h-100 ptb-1">
                  <EmptyImage />
                  <div className="d-flex flex-column align-items-center">
                    <span style={{ marginBottom: "5px" }}>Rank</span>
                    <span>Profissional</span>
                  </div>
                </div>
              }
            />
            <Card
              width="160px"
              height="170px"
              borderRadius="5px"
              theme="outline"
              content={
                <div className="d-flex flex-column align-items-center justify-content-between h-100 ptb-1">
                  <EmptyImage />
                  <div className="d-flex flex-column align-items-center">
                    <span style={{ marginBottom: "5px" }}>Rank</span>
                    <span>Profissional</span>
                  </div>
                </div>
              }
            />
            <Card
              width="160px"
              height="170px"
              borderRadius="5px"
              theme="outline"
              content={
                <div className="d-flex flex-column align-items-center justify-content-between h-100 ptb-1">
                  <EmptyImage />
                  <div className="d-flex flex-column align-items-center">
                    <span style={{ marginBottom: "5px" }}>Rank</span>
                    <span>Profissional</span>
                  </div>
                </div>
              }
            />
            <Card
              width="160px"
              height="170px"
              borderRadius="5px"
              theme="outline"
              content={
                <div className="d-flex flex-column align-items-center justify-content-between h-100 ptb-1">
                  <EmptyImage />
                  <div className="d-flex flex-column align-items-center">
                    <span style={{ marginBottom: "5px" }}>Rank</span>
                    <span>Profissional</span>
                  </div>
                </div>
              }
            />
            <Card
              width="160px"
              height="170px"
              borderRadius="5px"
              theme="outline"
              content={
                <div className="d-flex flex-column align-items-center justify-content-between h-100 ptb-1">
                  <EmptyImage />
                  <div className="d-flex flex-column align-items-center">
                    <span style={{ marginBottom: "5px" }}>Rank</span>
                    <span>Profissional</span>
                  </div>
                </div>
              }
            />
          </div>
        </Body>
        <Body marginBottom="60px">
          <hr className="hr-line" />
        </Body>
        <Body marginBottom="40px">
          <Input placeholder="Procure um jogador para desafiar"></Input>
        </Body>
        <Body marginBottom="60px">
          <div className="w-100 d-flex justify-content-between">
            <p className="mb-1">Arena</p>
            <p>Ver todos os jogos realizados</p>
          </div>
          <div className="d-flex flex-gap-2">
            <Card
              borderRadius="5px"
              width="255px"
              height="100px"
              content={<div></div>}
            />
            <Card
              borderRadius="5px"
              width="255px"
              height="100px"
              content={<div></div>}
            />
            <Card
              borderRadius="5px"
              width="255px"
              height="100px"
              content={<div></div>}
            />
            <Card
              borderRadius="5px"
              width="255px"
              height="100px"
              content={<div></div>}
            />
          </div>
        </Body>
      </div>
    </>
  );
}
