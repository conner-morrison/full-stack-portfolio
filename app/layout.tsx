"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ReactNode, useState } from "react";
import { CommandPalette } from "@/components/command-palette";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { BackgroundGrid } from "@/components/background-grid";
import { NoiseOverlay } from "@/components/noise-overlay";
import { Spotlight } from "@/components/spotlight";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system">
          <BackgroundGrid />
          <NoiseOverlay />
          <Spotlight />
          <div className="min-h-screen flex flex-col">
            <Header onOpenCommand={() => setOpen(true)} />
            <main className="flex-1 w-full max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
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