"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import type { BackgroundMode } from "@/app/types";
import { CommandPalette } from "@/components/command-palette";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { AuroraMesh } from "@/components/aurora-mesh";
import { BackgroundGrid } from "@/components/background-grid";
import { NoiseOverlay } from "@/components/noise-overlay";
import { ParticleNetwork } from "@/components/particle-network";
import { ScrollToHash } from "@/app/components/scroll-to-hash";

export function ClientRootLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [backgroundMode, setBackgroundMode] = useState<BackgroundMode>("aurora");

  useEffect(() => {
    const savedMode = window.localStorage.getItem("background-mode");
    if (savedMode === "aurora" || savedMode === "grid") {
      setBackgroundMode(savedMode);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("background-mode", backgroundMode);
  }, [backgroundMode]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <ScrollToHash />
      {backgroundMode === "grid" ? (
        <BackgroundGrid />
      ) : (
        <>
          <AuroraMesh />
          <ParticleNetwork />
        </>
      )}
      <NoiseOverlay />
      <div className="min-h-screen flex flex-col w-full min-w-0">
        <Header
          onOpenCommand={() => setOpen(true)}
          backgroundMode={backgroundMode}
          onToggleBackgroundMode={() =>
            setBackgroundMode((mode) => (mode === "aurora" ? "grid" : "aurora"))
          }
        />
        <main className="flex-1 w-full max-w-[var(--container-width)] mx-auto px-[var(--container-padding)] py-[clamp(2rem,5vw,5rem)] min-w-0">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <CommandPalette open={open} setOpen={setOpen} />
      </div>
    </ThemeProvider>
  );
}
