"use client";

import { Header } from "@/components/Header";
import { VideoSection } from "./components/VideoSection";
import { StatsSection } from "./components/StatsSection";
import { Carrossel } from "@/components/Carousel";
import { EmptyBanner } from "@/assets/svg/EmptyBanner";

interface PageProps {}

//TODO componentizar os items do carousel
export default function Landing({}: PageProps) {
  const lastNews = [
    <div style={{ width: "231px" }} key={1}>
      <EmptyBanner />
      <div className="d-flex flex-column bannerCardText">
        <span>03/05/2023 1</span>
        <h6>O jogo League Of Legends 2 agora esta disponível na PLAY X1</h6>
      </div>
    </div>,
    <div style={{ width: "231px" }} key={2}>
      <EmptyBanner />
      <div className="d-flex flex-column bannerCardText">
        <span>03/05/2023 2</span>
        <h6>O jogo Valorant agora esta disponível na PLAY X1</h6>
      </div>
    </div>,
    <div style={{ width: "231px" }} key={3}>
      <EmptyBanner />
      <div className="d-flex flex-column bannerCardText">
        <span>03/05/2023 3</span>
        <h6>O jogo Overwatch 2 agora esta disponível na PLAY X1</h6>
      </div>
    </div>,
    <div style={{ width: "231px" }} key={4}>
      <EmptyBanner />
      <div className="d-flex flex-column bannerCardText">
        <span>03/05/2023 4</span>
        <h6 title=" O jogo Counter Strike : Global Offensive agora esta disponível na PLAY X1">
          O jogo Counter Strike : Global Offensive agora esta disponível na PLAY
          X1
        </h6>
      </div>
    </div>,
    <div style={{ width: "231px" }} key={5}>
      <EmptyBanner />
      <div className="d-flex flex-column bannerCardText">
        <span>03/05/2023 5</span>
        <h6>O jogo Path of Exile agora esta disponível na PLAY X1</h6>
      </div>
    </div>,
    <div style={{ width: "231px" }} key={6}>
      <EmptyBanner />
      <div className="d-flex flex-column bannerCardText">
        <span>03/05/2023 6</span>
        <h6>O jogo Albion agora esta disponível na PLAY X1</h6>
      </div>
    </div>,
    <div style={{ width: "231px" }} key={7}>
      <EmptyBanner />
      <div className="d-flex flex-column bannerCardText">
        <span>03/05/2023 7</span>
        <h6>O jogo The duel agora esta disponível na PLAY X1</h6>
      </div>
    </div>,
  ];

  const availableGames = [
    <div style={{ width: "231px" }} key={1}>
      <EmptyBanner />
    </div>,
    <div style={{ width: "231px" }} key={2}>
      <EmptyBanner />
    </div>,
    <div style={{ width: "231px" }} key={3}>
      <EmptyBanner />
    </div>,
    <div style={{ width: "231px" }} key={4}>
      <EmptyBanner />
    </div>,
    <div style={{ width: "231px" }} key={5}>
      <EmptyBanner />
    </div>,
  ];
  return (
    <>
      <Header />
      <VideoSection />
      <StatsSection />
      <div
        style={{ maxWidth: "1110px", margin: "0 auto", marginBottom: "80px" }}
      >
        <Carrossel title="Últimas notícias e atualizações" items={lastNews} />
      </div>
      <div
        style={{ maxWidth: "1110px", margin: "0 auto", marginBottom: "80px" }}
      >
        <Carrossel title="Jogos disponíveis" items={availableGames} />
      </div>
    </>
  );
}
