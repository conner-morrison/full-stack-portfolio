"use client";

import Image from "next/image";

const ABOUT_IMAGE = "/conner/conner.png";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 w-full min-w-0 py-[clamp(2rem,6vw,6rem)] space-y-[clamp(3rem,8vw,5rem)]">
      <h2 className="font-serif text-[clamp(1.5rem,5vw,3rem)] sm:text-[clamp(1.75rem,5vw,3rem)] md:text-[clamp(2rem,5vw,3.5rem)] lg:text-[clamp(2.25rem,5vw,3rem)] font-semibold tracking-tight text-[var(--foreground)]">
        About Me
      </h2>

      {/* Intro: paragraph and photo on one line at every resolution, responsive sizing */}
      <div className="flex flex-col sm:flex-row flex-nowrap items-stretch sm:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 min-w-0">
        <p className="text-[clamp(0.75rem,2vw,1rem)] sm:text-sm md:text-base lg:text-lg text-[var(--muted)] leading-relaxed min-w-0 flex-1 basis-0 max-w-md sm:max-w-lg">
          Engineering Manager and Senior Full-Stack Engineer specializing in
          scalable cloud platforms, enterprise architecture, and high-performance
          SaaS systems.
        </p>
        <div className="relative shrink-0 w-full max-w-[240px] sm:max-w-none sm:w-60 md:w-72 lg:w-80 xl:w-96 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-[var(--card-border)] ring-1 ring-black/10 dark:ring-white/10 shadow-[0_12px_32px_-10px_rgba(15,23,42,0.28),0_28px_70px_-24px_rgba(15,23,42,0.24)] dark:shadow-[0_12px_32px_-10px_rgba(0,0,0,0.5),0_28px_70px_-24px_rgba(0,0,0,0.6)] min-w-0">
          <Image
            src={ABOUT_IMAGE}
            alt="Conner Morrison"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 240px, (max-width: 768px) 240px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
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
            A technology leader with extensive experience designing and
            delivering enterprise-grade software platforms across SaaS systems,
            internal tooling, and automation frameworks.
          </p>
          <p>
            Focus on building scalable distributed systems, modernizing
            enterprise platforms, and improving developer productivity through
            engineering automation.
          </p>
          <p>
            Combining hands-on engineering expertise with leadership experience
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

      {/* Professional Experience */}
      <div className="space-y-8">
        <h3 className="font-serif text-2xl font-semibold text-[var(--foreground)]">
          Professional Experience
        </h3>
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] space-y-4">
            <div>
              <h4 className="font-semibold text-[var(--foreground)]">
                Senior Software Engineer
              </h4>
              <p className="text-sm text-[var(--muted)] mt-0.5">
                NextWave Digital Systems · Seattle, WA · Jan 2024 – Present
              </p>
            </div>
            <ul className="space-y-2 text-sm text-[var(--muted)] leading-relaxed list-disc list-inside marker:text-[var(--accent)]">
              <li>Architected SaaS platform using Next.js (App Router) + TypeScript with SSR and structured feature-based architecture.</li>
              <li>Implemented reusable UI component system using Shadcn UI + Tailwind CSS.</li>
              <li>Enforced coding standards including naming conventions, folder structure, ESLint and Prettier integration.</li>
              <li>Designed and maintained Dockerized environments for development and production parity.</li>
              <li>Built CI/CD pipelines using GitHub Actions for automated linting, testing, and deployment.</li>
              <li>Led team of 5–6 engineers, conducting code reviews and architectural discussions.</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] space-y-4">
            <div>
              <h4 className="font-semibold text-[var(--foreground)]">
                Technical Consultant
              </h4>
              <p className="text-sm text-[var(--muted)] mt-0.5">
                Stratus Consulting Group · New York, NY · Jan 2022 – Dec 2023
              </p>
            </div>
            <ul className="space-y-2 text-sm text-[var(--muted)] leading-relaxed list-disc list-inside marker:text-[var(--accent)]">
              <li>Advised enterprise clients on React + TypeScript modernization strategies.</li>
              <li>Designed scalable frontend systems using Next.js (Pages Router era).</li>
              <li>Assisted clients in Docker adoption and CI/CD workflow implementation.</li>
              <li>Improved maintainability through modular refactoring and documentation standardization.</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] space-y-4">
            <div>
              <h4 className="font-semibold text-[var(--foreground)]">
                Full-Stack Engineer
              </h4>
              <p className="text-sm text-[var(--muted)] mt-0.5">
                Innovexa Labs · San Francisco, CA · Apr 2020 – Mar 2023
              </p>
            </div>
            <ul className="space-y-2 text-sm text-[var(--muted)] leading-relaxed list-disc list-inside marker:text-[var(--accent)]">
              <li>Developed production applications using React, Next.js (Pages Router), and TypeScript.</li>
              <li>Built backend APIs using Node.js and FastAPI.</li>
              <li>Implemented SSR using traditional Next.js data fetching methods.</li>
              <li>Containerized services and deployed to AWS (EC2, RDS, S3).</li>
              <li>Designed reusable UI components and improved frontend performance.</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] space-y-4">
            <div>
              <h4 className="font-semibold text-[var(--foreground)]">
                Quality Assurance Engineer
              </h4>
              <p className="text-sm text-[var(--muted)] mt-0.5">
                BrightPath Technologies · Austin, TX · Apr 2018 – Mar 2020
              </p>
            </div>
            <ul className="space-y-2 text-sm text-[var(--muted)] leading-relaxed list-disc list-inside marker:text-[var(--accent)]">
              <li>Developed automated test suites using Selenium and Jest.</li>
              <li>Integrated regression testing into Jenkins-based CI pipelines.</li>
              <li>Improved system stability and deployment confidence.</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] space-y-4">
            <div>
              <h4 className="font-semibold text-[var(--foreground)]">
                Software Engineer
              </h4>
              <p className="text-sm text-[var(--muted)] mt-0.5">
                Nihon Systems Innovation Co., Ltd. · Osaka, Japan · Apr 2017 – Mar 2018
              </p>
            </div>
            <ul className="space-y-2 text-sm text-[var(--muted)] leading-relaxed list-disc list-inside marker:text-[var(--accent)]">
              <li>Developed backend services using Java (Spring Boot).</li>
              <li>Designed REST APIs and optimized database performance.</li>
              <li>Collaborated within enterprise Agile teams.</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] space-y-4">
            <div>
              <h4 className="font-semibold text-[var(--foreground)]">
                Software Developer
              </h4>
              <p className="text-sm text-[var(--muted)] mt-0.5">
                Sakura Digital Solutions · Tokyo, Japan · Apr 2016 – Mar 2017
              </p>
            </div>
            <ul className="space-y-2 text-sm text-[var(--muted)] leading-relaxed list-disc list-inside marker:text-[var(--accent)]">
              <li>Maintained enterprise Java applications and relational databases.</li>
              <li>Developed frontend features using JavaScript.</li>
              <li>Supported debugging and production issue resolution.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="space-y-8">
        <h3 className="font-serif text-2xl font-semibold text-[var(--foreground)]">
          Education
        </h3>
        <div className="space-y-6">
          {/* UC Irvine — card with large logo at end */}
          <div className="flex flex-col sm:flex-row rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] overflow-hidden">
            <div className="flex-1 min-w-0 p-6 sm:p-8 flex flex-col justify-center">
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
            <div className="w-full sm:w-56 md:w-64 lg:w-72 shrink-0 h-[200px] sm:h-[220px] bg-[var(--muted-bg)]/50 flex items-center justify-center p-4 sm:p-6 border-t sm:border-t-0 sm:border-l border-[var(--border)]">
              <div className="relative w-full h-full">
                <Image
                  src="/conner/Caluni.png"
                  alt="University of California, Irvine"
                  fill
                  className="object-contain drop-shadow-md"
                  sizes="(max-width: 640px) 100vw, 288px"
                />
              </div>
            </div>
          </div>

          {/* University of Washington — card with large logo at end */}
          <div className="flex flex-col sm:flex-row rounded-2xl border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] overflow-hidden">
            <div className="flex-1 min-w-0 p-6 sm:p-8 flex flex-col justify-center">
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
            <div className="w-full sm:w-56 md:w-64 lg:w-72 shrink-0 h-[200px] sm:h-[220px] bg-[var(--muted-bg)]/50 flex items-center justify-center p-4 sm:p-6 border-t sm:border-t-0 sm:border-l border-[var(--border)]">
              <div className="relative w-full h-full">
                <Image
                  src="/conner/Washuni.png"
                  alt="University of Washington"
                  fill
                  className="object-contain drop-shadow-md"
                  sizes="(max-width: 640px) 100vw, 288px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
