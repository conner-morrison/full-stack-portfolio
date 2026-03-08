"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Parallax } from "@/components/parallax";
import { useEffect, useState } from "react";

const HERO_TEXTURE = "/dev/light/lauren-mancke-aOC7TSLb1o8-unsplash.jpg";
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
        {/* Editorial spotlight hero background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-1/2 h-[60%] w-[88%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(242,245,249,0.72)_42%,rgba(230,233,238,0.64)_100%)] shadow-[0_26px_90px_-42px_rgba(15,23,42,0.26)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(5,10,20,0.96)_0%,rgba(8,14,26,0.94)_42%,rgba(6,12,22,0.96)_100%)] dark:shadow-[0_26px_90px_-42px_rgba(0,0,0,0.6)]"
            aria-hidden
          />
          <div
            className="absolute left-1/2 top-1/2 h-[60%] w-[88%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_50%_18%,rgba(255,255,255,0.68)_0%,rgba(255,255,255,0.24)_28%,transparent_58%),radial-gradient(circle_at_18%_78%,rgba(59,130,246,0.12)_0%,transparent_26%),radial-gradient(circle_at_84%_24%,rgba(14,165,233,0.1)_0%,transparent_22%)] dark:bg-[radial-gradient(ellipse_at_50%_18%,rgba(255,255,255,0.02)_0%,transparent_28%,transparent_58%),radial-gradient(circle_at_18%_78%,rgba(59,130,246,0.08)_0%,transparent_26%),radial-gradient(circle_at_84%_24%,rgba(14,165,233,0.06)_0%,transparent_22%)]"
            aria-hidden
          />
          <div
            className="absolute left-1/2 top-1/2 h-[60%] w-[88%] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.5rem]"
            aria-hidden
          >
            <Image
              src={HERO_TEXTURE}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 88vw, 896px"
              className="object-cover scale-[1.04] opacity-[0.28] saturate-[0.8] contrast-[0.96] dark:opacity-[0.48] dark:saturate-[0.6] dark:brightness-[0.55] dark:contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.08)_38%,rgba(226,232,240,0.12)_100%)] dark:bg-[linear-gradient(180deg,rgba(2,6,18,0.62),rgba(4,10,24,0.48)_38%,rgba(2,6,18,0.58)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.46)_0%,transparent_36%),radial-gradient(circle_at_22%_80%,rgba(59,130,246,0.08)_0%,transparent_24%)] dark:bg-[radial-gradient(circle_at_50%_18%,rgba(4,10,22,0.45)_0%,transparent_50%),radial-gradient(circle_at_22%_80%,rgba(37,99,235,0.08)_0%,transparent_24%),radial-gradient(circle_at_82%_22%,rgba(8,47,73,0.1)_0%,transparent_26%)]" />
            <div className="absolute inset-0 dark:bg-[linear-gradient(135deg,rgba(6,12,28,0.35),transparent_32%,rgba(3,8,20,0.4)_100%)]" />
            <div className="absolute left-[12%] top-[16%] h-[180%] w-[18%] -translate-y-1/2 rotate-[22deg] bg-[linear-gradient(180deg,rgba(255,255,255,0.46),transparent_55%)] dark:bg-[linear-gradient(180deg,rgba(148,163,184,0.08),transparent_55%)]" />
            <div className="absolute right-[10%] top-[8%] h-px w-[24%] bg-[linear-gradient(90deg,transparent,rgba(148,163,184,0.5),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(148,163,184,0.24),transparent)]" />
            <div className="absolute left-[50%] top-[20%] h-[46%] w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(148,163,184,0.32),transparent)] dark:bg-[linear-gradient(180deg,rgba(148,163,184,0.18),transparent)]" />
            <div className="absolute inset-x-[12%] bottom-[14%] h-px bg-[linear-gradient(90deg,transparent,rgba(148,163,184,0.22),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(148,163,184,0.14),transparent)]" />
          </div>
          <div
            className="absolute left-1/2 top-1/2 h-[60%] w-[88%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] ring-1 ring-black/5 dark:ring-white/5"
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
