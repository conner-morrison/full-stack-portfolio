"use client";

import Image from "next/image";
import Link from "next/link";

const SHORELINE_IMAGES = [
  "/shoreline/Richmond Beach Shoreline Washington Waterfront Housing Aerial.jpg",
  "/shoreline/Alki Beach in Seattle Washington.jpg",
  "/shoreline/Shoreline at Hartstene Pointe in Shelton, WA..jpg",
].map((path) => encodeURI(path));

type ContactSectionProps = { variant?: "page" | "section" };

export default function ContactPage({ variant = "page" }: ContactSectionProps) {
  const isSection = variant === "section";
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-16">
      <div className="space-y-4">
        <h1 className={`font-serif font-semibold tracking-tight text-[var(--foreground)] ${isSection ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"}`}>
          {isSection ? "Get in touch" : "Contact me"}
        </h1>
        <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
          For engineering leadership opportunities, technical collaboration, or
          product discussions, feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        {/* Location — with shoreline imagery */}
        <div className="md:col-span-1 overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)]">
          <div className="relative h-44 sm:h-52">
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
          <div className="p-6 space-y-3">
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              1049 NW 178th St
              <br />
              Shoreline, WA 98177-3827
            </p>
            <a
              href="https://www.google.com/maps?q=1049+NW+178th+St+Shoreline+WA+98177"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-[var(--accent)] hover:underline"
            >
              View on Google Maps →
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 sm:p-8 shadow-[var(--shadow)] space-y-4">
          <h2 className="font-serif text-lg font-semibold text-[var(--foreground)]">
            Email
          </h2>
          <p className="text-[var(--muted)] text-sm">
            morrisonconner638@gmail.com
          </p>
          <a
            href="mailto:morrisonconner638@gmail.com"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Send Email
          </a>
        </div>

        {/* Phone */}
        <div className="overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 sm:p-8 shadow-[var(--shadow)] space-y-4">
          <h2 className="font-serif text-lg font-semibold text-[var(--foreground)]">
            Phone
          </h2>
          <p className="text-[var(--muted)] text-sm">(206) 318-0677</p>
          <p className="text-xs text-[var(--muted)]">Washington State</p>
        </div>
      </div>

      {/* Shoreline gallery strip */}
      <div className="rounded-2xl overflow-hidden border border-[var(--card-border)]">
        <p className="px-6 py-3 text-sm font-medium text-[var(--muted)] bg-[var(--muted-bg)] border-b border-[var(--border)]">
          Around the Puget Sound
        </p>
        <div className="grid grid-cols-3 gap-px bg-[var(--border)]">
          {SHORELINE_IMAGES.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] bg-[var(--muted-bg)]">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
