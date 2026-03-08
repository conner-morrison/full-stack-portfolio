"use client";

import Image from "next/image";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SHORELINE_IMAGES = [
  "/shoreline/Richmond Beach Shoreline Washington Waterfront Housing Aerial.jpg",
  "/shoreline/Alki Beach in Seattle Washington.jpg",
  "/shoreline/Shoreline at Hartstene Pointe in Shelton, WA..jpg",
  "/shoreline/Long Beach washington.jpg",
  "/shoreline/Scenic view of rocks in sea against sky,Pacific County,Washington,United States,USA.jpg",
  "/shoreline/Renton Park Lake Shoreline 3.jpg",
].map((path) => encodeURI(path));

type ContactSectionProps = { variant?: "page" | "section" };

export default function ContactPage({ variant = "page" }: ContactSectionProps) {
  const isSection = variant === "section";

  return (
    <section
      id={isSection ? "contact" : undefined}
      className={isSection ? "scroll-mt-20 w-full min-w-0 max-w-[min(92vw,64rem)] mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(3rem,8vw,6rem)] space-y-[clamp(3rem,6vw,4rem)]" : "max-w-[min(92vw,64rem)] mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(3rem,8vw,6rem)] space-y-[clamp(3rem,6vw,4rem)] min-w-0"}
    >
      <div className="space-y-4">
        <h1 className={`font-serif font-semibold tracking-tight text-[var(--foreground)] ${isSection ? "text-[clamp(1.5rem,4vw,2.25rem)] sm:text-[clamp(1.75rem,4vw,2.5rem)]" : "text-[clamp(1.75rem,4vw,2.5rem)] sm:text-[clamp(2rem,5vw,3rem)]"}`}>
          {isSection ? "Get in touch" : "Contact me"}
        </h1>
        <p className="text-[clamp(0.9375rem,2vw,1.125rem)] text-[var(--muted)] leading-relaxed max-w-2xl">
          For engineering leadership opportunities, technical collaboration, or
          product discussions, feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {/* Location */}
        <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)]">
          <div className="relative h-44 sm:h-52 shrink-0">
            <Image
              src={SHORELINE_IMAGES[0]}
              alt="Shoreline, Washington waterfront"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)]/90 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4">
              <h2 className="font-serif text-lg font-semibold text-[var(--foreground)]">
                Location
              </h2>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6 sm:p-8">
            <div className="flex-1 space-y-3">
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                1049 NW 178th St
                <br />
                Shoreline, WA 98177-3827
              </p>
            </div>
            <a
              href="https://www.google.com/maps?q=1049+NW+178th+St+Shoreline+WA+98177"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-[var(--accent)]/25"
            >
              View on Google Maps
              <ArrowRight size={16} className="shrink-0" />
            </a>
          </div>
        </div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.25)] hover:border-[var(--accent)]/40 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex flex-1 flex-col p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent)]/80 text-white shadow-lg shadow-[var(--accent)]/30 group-hover:scale-110 transition-transform duration-300">
                <Mail size={26} strokeWidth={2} />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                Reach out
              </span>
            </div>
            <div className="mt-6 flex-1">
              <h2 className="font-serif text-xl font-semibold text-[var(--foreground)]">
                Email
              </h2>
              <p className="mt-2 text-[var(--muted)] text-sm break-all leading-relaxed">
                morrisonconner638@gmail.com
              </p>
            </div>
            <a
              href="mailto:morrisonconner638@gmail.com"
              className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-[var(--accent)]/25"
            >
              Send Email
              <ArrowRight size={16} className="shrink-0" />
            </a>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.25)] hover:border-[var(--accent)]/40 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex flex-1 flex-col p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent)]/80 text-white shadow-lg shadow-[var(--accent)]/30 group-hover:scale-110 transition-transform duration-300">
                <Phone size={26} strokeWidth={2} />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                Call or text
              </span>
            </div>
            <div className="mt-6 flex-1">
              <h2 className="font-serif text-xl font-semibold text-[var(--foreground)]">
                Phone
              </h2>
              <p className="mt-2 text-[var(--foreground)] text-lg font-semibold tracking-tight">
                (206) 318-0677
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">Washington State · Local</p>
            </div>
            <a
              href="tel:+12063180677"
              className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-[var(--accent)]/25"
            >
              Call Now
              <ArrowRight size={16} className="shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
