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
