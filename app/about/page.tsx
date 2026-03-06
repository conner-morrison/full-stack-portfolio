"use client";

import Image from "next/image";

const ABOUT_IMAGE_LIGHT = "/dev/light/jeff-sheldon-9dI3g8owHiI-unsplash.jpg";
const ABOUT_IMAGE_DARK = "/dev/dark/ilya-pavlov-OqtafYT5kTw-unsplash.jpg";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-20">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--foreground)]">
            About Conner Morrison
          </h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            Engineering Manager and Senior Full-Stack Engineer specializing in
            scalable cloud platforms, enterprise architecture, and high-performance
            SaaS systems.
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-[var(--shadow-lg)] order-1 md:order-2">
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
      </section>

      {/* Professional Summary */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)]">
          Professional Summary
        </h2>
        <div className="space-y-4 text-[var(--muted)] leading-relaxed text-lg">
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
      </section>

      {/* Core Strengths */}
      <section className="space-y-10">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)]">
          Core Strengths
        </h2>
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
              <h3 className="font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-8">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)]">
          Education
        </h2>
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)]">
            <h3 className="font-semibold text-[var(--foreground)]">
              Master of Science (M.S.) in Computer Science
            </h3>
            <p className="mt-1 text-[var(--muted)]">
              University of California, Irvine · 2014 – 2016
            </p>
            <p className="mt-2 text-[var(--muted)]">GPA: 3.8</p>
            <p className="mt-2 text-sm text-[var(--muted)] italic">
              Thesis: Scalable Web Application Architecture for Distributed Systems
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)]">
            <h3 className="font-semibold text-[var(--foreground)]">
              Bachelor of Science (B.S.) in Computer Science
            </h3>
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
      </section>
    </div>
  );
}
