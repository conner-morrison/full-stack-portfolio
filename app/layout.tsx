"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import { CommandPalette } from "@/components/command-palette";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { AuroraMesh } from "@/components/aurora-mesh";
import { BackgroundGrid } from "@/components/background-grid";
import { NoiseOverlay } from "@/components/noise-overlay";
import { ParticleNetwork } from "@/components/particle-network";
import { ScrollToHash } from "@/app/components/scroll-to-hash";

export type BackgroundMode = "aurora" | "grid";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-[var(--foreground)] transition-colors duration-300 antialiased">
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
          <div className="min-h-screen flex flex-col">
            <Header
              onOpenCommand={() => setOpen(true)}
              backgroundMode={backgroundMode}
              onToggleBackgroundMode={() =>
                setBackgroundMode((mode) => (mode === "aurora" ? "grid" : "aurora"))
              }
            />
            <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-16 lg:py-20">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <CommandPalette open={open} setOpen={setOpen} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}