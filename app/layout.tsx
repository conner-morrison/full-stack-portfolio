import "./globals.css";
import { ClientRootLayout } from "./client-root-layout";
import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-next",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Conner Morrison",
  description: "Engineering Manager & Software Architect — scalable SaaS, cloud platforms, and engineering leadership.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSans.variable} ${sourceSerif.variable} min-h-screen text-[var(--foreground)] transition-colors duration-300 antialiased`}>
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
