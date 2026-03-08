"use client";

import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EXCLUDED_PROJECT_SLUGS = ["crm-modernization", "multi-tenant-saas-platform"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 w-full min-w-0 py-[clamp(2rem,6vw,6rem)] space-y-[clamp(2rem,5vw,4rem)]">
      <div>
        <h2 className="font-serif text-[clamp(1.875rem,5vw,3rem)] font-semibold tracking-tight text-[var(--foreground)]">
          Projects
        </h2>
        <p className="mt-2 sm:mt-3 text-[clamp(0.875rem,2vw,1.125rem)] text-[var(--muted)] max-w-2xl">
          Selected work across enterprise SaaS, automation, and full-stack systems.
        </p>
      </div>

      <motion.div
        className="space-y-[clamp(1.5rem,4vw,4rem)]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {projects
          .filter((p) => !EXCLUDED_PROJECT_SLUGS.includes(p.slug))
          .map((project) => (
          <motion.div key={project.slug} variants={card}>
            <Link href={`/projects/${project.slug}`} className="block group">
              <article
                className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] hover:border-[var(--muted)]/40 hover:-translate-y-1 hover:scale-[1.01]"
                style={{ transformOrigin: "center bottom" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
                </div>

                <div className="relative w-full min-w-0 h-52 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover brightness-[0.97]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)]/90 via-[var(--card)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                <div className="relative p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--foreground)] tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed max-w-2xl">
                    {project.overview}
                  </p>
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                      {project.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[var(--muted-bg)] text-[var(--muted)] text-xs font-medium border border-[var(--border)]"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[var(--muted-bg)]/80 text-[var(--muted)] text-xs font-medium">
                          +{project.tech.length - 5}
                        </span>
                      )}
                    </div>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--accent)] group-hover:gap-2.5 transition-all duration-300">
                    View project
                    <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
