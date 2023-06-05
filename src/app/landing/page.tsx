"use client";

import { VideoSection } from "./components/VideoSection";
import { Header } from "@/components/Header";
import { StatsSection } from "./components/StatsSection";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { LastNewsSection } from "./components/LastNewsSection";
import { GamesSection } from "./components/GamesSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Body } from "@/components/Body";
import HowToPlay from "./components/HowToPlay";
import LandingPageFaq from "./components/FAQ";
import { Footer } from "@/components/Footer";
import { useModal } from "@/hooks/useModal";

interface PageProps {}

export default function Landing({}: PageProps) {
  const modal = useModal();

  return (
    <>
      {(modal.openLogin || modal.openRegister) && (
        <Modal
          setOpen={modal.handleSetModal}
          modalBody={modal.handleModalBody()}
          modalHeader={
            modal.openRegister ? (
              <span
                className="h-100 line-height-150"
                style={{
                  width: "442px",
                  textAlign: "center",
                  padding: "35px 0",
                }}
              >
                Crie a sua conta e ganhe R$ 50,00 para começar a desafiar outros
                jogadores
              </span>
            ) : null
          }
          modalHeaderBg={modal.openRegister ? "#5F5C6B" : null}
        />
      )}
      <Header
        setOpenRegister={modal.setOpenRegister}
        setOpenLogin={modal.handleSetModal}
      />
      <VideoSection setOpenRegister={modal.setOpenRegister} />
      <StatsSection />
      <hr className="statsLine" />
      <LastNewsSection />
      <GamesSection />
      <FeaturesSection />
      <Body marginBottom="130px" className="d-flex justify-content-center">
        <Button
          onClick={() => modal.setOpenRegister(true)}
          size="large"
          content="Criar a minha conta"
        />
      </Body>
      <HowToPlay />
      <LandingPageFaq />
      <Footer />
    </>
  );
}
