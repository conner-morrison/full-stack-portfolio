"use client";

import { ReactNode, useState } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { AuroraMesh } from "@/components/aurora-mesh";
import { NoiseOverlay } from "@/components/noise-overlay";
import { ParticleNetwork } from "@/components/particle-network";
import { ScrollToHash } from "@/app/components/scroll-to-hash";

const CommandPalette = dynamic(
  () => import("@/components/command-palette").then((m) => m.CommandPalette),
  { ssr: false }
);

export function ClientRootLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <ScrollToHash />
      <AuroraMesh />
      <ParticleNetwork />
      <NoiseOverlay />
      <div className="min-h-screen flex flex-col w-full min-w-0">
        <Header onOpenCommand={() => setOpen(true)} />
        <main className="flex-1 w-full max-w-[var(--container-width)] mx-auto px-[var(--container-padding)] py-[clamp(2rem,5vw,5rem)] min-w-0">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <CommandPalette open={open} setOpen={setOpen} />
      </div>
    </ThemeProvider>
  );
}
