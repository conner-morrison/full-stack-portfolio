"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Parallax } from "@/components/parallax";

const HERO_LIGHT = "/dev/light/lauren-mancke-aOC7TSLb1o8-unsplash.jpg";
const HERO_DARK = "/dev/dark/ales-nesetril-Im7lZjxeLhg-unsplash.jpg";

export default function Hero() {
  const { resolvedTheme } = useTheme();

  return (
    <Parallax speed={30}>
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden rounded-b-3xl">
        {/* Background image - theme-aware */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={resolvedTheme === "dark" ? HERO_DARK : HERO_LIGHT}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/85 via-[var(--background)]/50 to-[var(--background)]"
            aria-hidden
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl font-semibold tracking-tight text-[var(--foreground)]"
          >
            Conner Morrison
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-xl text-[var(--muted)] font-medium"
          >
            Engineering Manager & Software Architect
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg text-[var(--muted)] leading-relaxed max-w-xl mx-auto"
          >
            I build scalable SaaS systems and lead high-performing engineering teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/about"
              className="inline-flex items-center justify-center min-w-[140px] px-6 py-3.5 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold shadow-lg shadow-[var(--accent)]/25 hover:opacity-90 transition-all duration-200"
            >
              About Me
            </Link>
            <a
              href="/Conner_Morrison_Resume.pdf"
              download
              className="inline-flex items-center justify-center min-w-[140px] px-6 py-3.5 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold shadow-lg shadow-[var(--accent)]/25 hover:opacity-90 transition-all duration-200"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
}
