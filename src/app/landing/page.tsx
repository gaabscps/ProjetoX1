"use client";

import { Header } from "@/components/Header";
import { VideoSection } from "./components/VideoSection";
import { StatsSection } from "./components/StatsSection";

interface PageProps {}

export default function Landing({}: PageProps) {
  return (
    <>
      <Header />
      <VideoSection />
      <StatsSection />
      <div>Page</div>
    </>
  );
}
