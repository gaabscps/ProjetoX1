"use client";

import { Header } from "@/components/Header";
import { VideoSection } from "./components/VideoSection";
import { StatsSection } from "./components/StatsSection";
import { Carrossel } from "@/components/Carousel";
import { EmptyBanner } from "@/assets/svg/EmptyBanner";
import { Card } from "@/components/Card";
import { EmptyUser } from "@/assets/svg/EmptyUser";
import { Button } from "@/components/Button";
import { LastNewsSection } from "./components/LastNewsSection";
import { GamesSection } from "./components/GamesSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Body } from "@/components/Body";

interface PageProps {}

export default function Landing({}: PageProps) {
  return (
    <>
      <Header />
      <VideoSection />
      <StatsSection />
      <LastNewsSection />
      <GamesSection />
      <FeaturesSection />
      <Body className="d-flex justify-content-center">
        <Button theme="large" content="Criar a minha conta" />
      </Body>
    </>
  );
}
