"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ReactNode, useState } from "react";
import { CommandPalette } from "@/components/command-palette";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="min-h-screen flex flex-col">
            <Header onOpenCommand={() => setOpen(true)} />
            <main className="flex-1 max-w-4xl mx-auto px-6 py-16">
              {children}
            </main>
            <Footer />
            <CommandPalette open={open} setOpen={setOpen} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}