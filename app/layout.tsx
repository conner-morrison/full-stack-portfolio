import "./globals.css";
import { ClientRootLayout } from "./client-root-layout";
import type { Metadata } from "next";

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
      <body className="min-h-screen text-[var(--foreground)] transition-colors duration-300 antialiased">
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
