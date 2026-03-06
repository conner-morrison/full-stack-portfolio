"use client";

import Image from "next/image";

const ABOUT_IMAGE_LIGHT = "/dev/light/jeff-sheldon-9dI3g8owHiI-unsplash.jpg";
const ABOUT_IMAGE_DARK = "/dev/dark/ilya-pavlov-OqtafYT5kTw-unsplash.jpg";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 w-full py-12 sm:py-16 md:py-20 lg:py-24 space-y-16 sm:space-y-20">
      {/* Heading on its own row to avoid overlap with image, kept on one line */}
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--foreground)] whitespace-nowrap">
        About Conner Morrison
      </h2>

      {/* Intro row: text + image */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Engineering Manager and Senior Full-Stack Engineer specializing in
            scalable cloud platforms, enterprise architecture, and high-performance
            SaaS systems.
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--card-border)] ring-1 ring-black/10 dark:ring-white/10 order-1 md:order-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.12),0_10px_20px_-5px_rgba(0,0,0,0.15),0_30px_60px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),0_10px_20px_-5px_rgba(0,0,0,0.4),0_30px_60px_-15px_rgba(0,0,0,0.6)]">
          <Image
            src={ABOUT_IMAGE_LIGHT}
            alt="Professional workspace"
            fill
            className="object-cover dark:hidden"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Image
            src={ABOUT_IMAGE_DARK}
            alt="Professional workspace"
            fill
            className="object-cover hidden dark:block"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Professional Summary */}
      <div className="space-y-6">
        <h3 className="font-serif text-2xl font-semibold text-[var(--foreground)]">
          Professional Summary
        </h3>
        <div className="space-y-4 text-[var(--muted)] leading-relaxed text-base sm:text-lg">
          <p>
            I am a technology leader with extensive experience designing and
            delivering enterprise-grade software platforms across SaaS systems,
            internal tooling, and automation frameworks.
          </p>
          <p>
            My work focuses on building scalable distributed systems, modernizing
            enterprise platforms, and improving developer productivity through
            engineering automation.
          </p>
          <p>
            I combine hands-on engineering expertise with leadership experience
            to guide architecture decisions, mentor engineers, and deliver
            high-impact software products.
          </p>
        </div>
      </div>

      {/* Core Strengths */}
      <div className="space-y-10">
        <h3 className="font-serif text-2xl font-semibold text-[var(--foreground)]">
          Core Strengths
        </h3>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              title: "Engineering Leadership",
              desc: "Leading cross-functional engineering teams and guiding architecture decisions across complex software platforms.",
            },
            {
              title: "Cloud-Native Architecture",
              desc: "Designing scalable distributed systems and microservices architectures built for reliability and performance.",
            },
            {
              title: "Full-Stack Engineering",
              desc: "Developing modern applications using robust backend services and responsive frontend technologies.",
            },
            {
              title: "Automation & Developer Productivity",
              desc: "Building CI/CD pipelines, automation systems, and internal developer platforms that improve engineering velocity.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] space-y-2"
            >
              <h4 className="font-semibold text-[var(--foreground)]">
                {item.title}
              </h4>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-8">
        <h3 className="font-serif text-2xl font-semibold text-[var(--foreground)]">
          Education
        </h3>
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)]">
            <h4 className="font-semibold text-[var(--foreground)]">
              Master of Science (M.S.) in Computer Science
            </h4>
            <p className="mt-1 text-[var(--muted)]">
              University of California, Irvine · 2014 – 2016
            </p>
            <p className="mt-2 text-[var(--muted)]">GPA: 3.8</p>
            <p className="mt-2 text-sm text-[var(--muted)] italic">
              Thesis: Scalable Web Application Architecture for Distributed Systems
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)]">
            <h4 className="font-semibold text-[var(--foreground)]">
              Bachelor of Science (B.S.) in Computer Science
            </h4>
            <p className="mt-1 text-[var(--muted)]">
              University of Washington · 2010 – 2014
            </p>
            <p className="mt-2 text-[var(--muted)]">GPA: 3.6</p>
            <p className="mt-2 text-sm text-[var(--muted)] opacity-90">
              Focus: Software Engineering, Distributed Systems, Algorithms, and
              Computer Architecture. Emphasis on scalable system design, data
              structures, and modern application development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
