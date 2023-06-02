"use client";

import { Header } from "@/components/Header";
import { VideoSection } from "./components/VideoSection";
import { StatsSection } from "./components/StatsSection";
import { Button } from "@/components/Button";
import { LastNewsSection } from "./components/LastNewsSection";
import { GamesSection } from "./components/GamesSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Body } from "@/components/Body";
import { LandingEffect } from "@/assets/svg/landingEffect";

interface PageProps {}

export default function Landing({}: PageProps) {
  return (
    <>
      <Header />
      <VideoSection />
      <StatsSection />
      <hr className="statsLine" />
      <LastNewsSection />
      <GamesSection />
      <FeaturesSection />
      <Body marginBottom="80px" className="d-flex justify-content-center">
        <Button size="large" content="Criar a minha conta" />
      </Body>
    </>
  );
}
