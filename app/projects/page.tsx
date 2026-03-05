"use client";

import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

      <div className="space-y-12 sm:space-y-16">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block group"
          >
            <article
              className="relative rounded-2xl overflow-hidden border border-[var(--card-border)] bg-[var(--card)] shadow-[var(--shadow)] transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:border-[var(--muted)]/50"
            >
              <div className="relative w-full h-72 sm:h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover brightness-[0.97] transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--foreground)] tracking-tight">
                  {project.title}
                </h2>
                <p className="text-[var(--muted)] leading-relaxed max-w-2xl">
                  {project.overview}
                </p>
                <span className="inline-block text-sm font-medium text-[var(--accent)] group-hover:underline">
                  View project →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
