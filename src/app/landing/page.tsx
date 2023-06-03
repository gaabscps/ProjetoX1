"use client";

import { Header } from "@/components/Header";
import { VideoSection } from "./components/VideoSection";
import { StatsSection } from "./components/StatsSection";
import { Button } from "@/components/Button";
import { LastNewsSection } from "./components/LastNewsSection";
import { GamesSection } from "./components/GamesSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Body } from "@/components/Body";
import HowToPlay from "./components/HowToPlay";
import LandingPageFaq from "./components/FAQ";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

interface PageProps {}

export default function Landing({}: PageProps) {
  function updateScale() {
    if (typeof window !== "undefined") {
      let screenWidth = window.innerWidth;
      let scale = screenWidth / 1110;

      if (screenWidth >= 1110) {
        scale = 1;
      }

      document.body.style.transform = "scale(" + scale + ")";
    }
  }

  useEffect(() => {
    updateScale(); // Chama a função imediatamente para aplicar a escala inicial
    if (typeof window !== "undefined") {
      updateScale(); // Chama a função imediatamente para aplicar a escala inicial

      window.addEventListener("load", updateScale);
      window.addEventListener("resize", updateScale);

      return () => {
        window.removeEventListener("load", updateScale);
        window.removeEventListener("resize", updateScale);
      };
    }
  }, []);
  return (
    <>
      <Header />
      <VideoSection />
      <StatsSection />
      <hr className="statsLine" />
      <LastNewsSection />
      <GamesSection />
      <FeaturesSection />
      <Body marginBottom="130px" className="d-flex justify-content-center">
        <Button size="large" content="Criar a minha conta" />
      </Body>
      <HowToPlay />
      <LandingPageFaq />
      <Footer />
    </>
  );
}
