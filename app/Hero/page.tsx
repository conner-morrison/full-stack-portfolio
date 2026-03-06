"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Parallax } from "@/components/parallax";
import { useEffect, useState } from "react";

const HERO_LIGHT = "/dev/light/lauren-mancke-aOC7TSLb1o8-unsplash.jpg";
const HERO_DARK = "/dev/dark/ales-nesetril-Im7lZjxeLhg-unsplash.jpg";

const TAGLINE = "I build scalable SaaS systems and lead high-performing engineering teams.";
const TYPE_SPEED_MS = 55;
const DELETE_SPEED_MS = 35;
const PAUSE_AFTER_TYPE_MS = 2200;
const PAUSE_AFTER_DELETE_MS = 800;

const easeOut = [0.16, 1, 0.3, 1] as const;
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};
const line = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};
const cta = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.35, ease: easeOut },
  },
};
const lineWipe = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

export default function Hero() {
  const [taglineLength, setTaglineLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && taglineLength === TAGLINE.length) {
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE_MS);
      return () => clearTimeout(t);
    }
    if (isDeleting && taglineLength === 0) {
      const t = setTimeout(() => setIsDeleting(false), PAUSE_AFTER_DELETE_MS);
      return () => clearTimeout(t);
    }
    const delay = isDeleting ? DELETE_SPEED_MS : TYPE_SPEED_MS;
    const t = setTimeout(
      () => setTaglineLength((n) => (isDeleting ? Math.max(0, n - 1) : Math.min(TAGLINE.length, n + 1))),
      delay
    );
    return () => clearTimeout(t);
  }, [taglineLength, isDeleting]);

  return (
    <Parallax speed={30}>
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden rounded-b-3xl">
        {/* Background image - theme-aware via CSS so correct image shows before hydration */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={HERO_LIGHT}
            alt=""
            fill
            className="object-cover dark:opacity-0 dark:pointer-events-none"
            priority
            sizes="100vw"
          />
          <Image
            src={HERO_DARK}
            alt=""
            fill
            className="object-cover opacity-0 dark:opacity-100 dark:pointer-events-auto"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/85 via-[var(--background)]/50 to-[var(--background)]"
            aria-hidden
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-0"
          >
            <motion.h1
              variants={line}
              className="font-serif text-5xl sm:text-6xl font-semibold tracking-tight text-[var(--foreground)] mt-1"
            >
              Conner Morrison
            </motion.h1>

            <motion.p
              variants={line}
              className="mt-5 text-xl text-[var(--muted)] font-medium"
            >
              Engineering Manager & Software Architect
            </motion.p>

            <motion.p
              variants={lineWipe}
              className="mt-6 text-lg text-[var(--muted)] leading-relaxed max-w-xl mx-auto min-h-[2.75rem] flex flex-wrap justify-center items-center"
            >
              {TAGLINE.slice(0, taglineLength)}
            </motion.p>

            <motion.div
              variants={cta}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <a
                href="/Conner_Morrison_Resume.pdf"
                download
                className="inline-flex items-center justify-center min-w-[140px] px-6 py-3.5 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold shadow-lg shadow-[var(--accent)]/25 hover:opacity-90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
}
