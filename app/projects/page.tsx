"use client";

import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-16">
      <div>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--foreground)]">
          Projects
        </h1>
        <p className="mt-3 text-lg text-[var(--muted)]">
          Selected work across enterprise SaaS, automation, and full-stack systems.
        </p>
      </div>

      <motion.div
        className="space-y-12 sm:space-y-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={card}>
            <Link href={`/projects/${project.slug}`} className="block group">
              <article
                className="relative rounded-2xl overflow-hidden border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] hover:border-[var(--muted)]/40 hover:-translate-y-1 hover:scale-[1.01]"
                style={{ transformOrigin: "center bottom" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
                </div>

                <div className="relative w-full h-72 sm:h-80 overflow-hidden">
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
                      sizes="(max-width: 768px) 100vw, 896px"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)]/90 via-[var(--card)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                <div className="relative p-6 sm:p-8 space-y-3">
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--foreground)] tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-[var(--muted)] leading-relaxed max-w-2xl">
                    {project.overview}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] group-hover:gap-2.5 transition-all duration-300">
                    View project
                    <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
