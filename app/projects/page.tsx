"use client";

import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-24 space-y-24">

      <h1 className="text-5xl font-bold tracking-tight">
        Projects
      </h1>

      <div className="space-y-24">
        {projects.map((project) => {
          return (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block group"
          >
            <div className="
              relative
              rounded-3xl
              overflow-hidden
              border border-neutral-800
              bg-neutral-950
              transition-all duration-500
              group-hover:border-neutral-500
              group-hover:shadow-[0_0_40px_rgba(255,255,255,0.10)]
            ">
            {/* Animated Edge Highlight Sweep */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-500
              "
            >
              <div
                className="
                  absolute
                  -inset-1
                  bg-gradient-to-r
                  from-transparent
                  via-white/15
                  to-transparent
                  translate-x-[-100%]
                  group-hover:translate-x-[100%]
                  transition-transform
                  duration-1000
                  ease-in-out
                  blur-2xl
                "
              />
            </div>
              {/* LANDSCAPE IMAGE */}
              <div className="relative w-full h-[420px] overflow-hidden">
                {/* Reveal Mask */}
                <motion.div
                  initial={{ y: "0%" }}
                  whileInView={{ y: "-100%" }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-neutral-950 z-20"
                />

                {/* Parallax + Zoom */}
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  className="relative w-full h-[120%]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover brightness-95 contrast-105"
                  />
                </motion.div>

                  {/* Image Animation */}
                  <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                </motion.div>

                {/* Subtle Transparency Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent pointer-events-none" />

              </div>

              {/* TEXT SECTION */}
              <div className="p-10 space-y-4">

                <h2 className="text-3xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>

                <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl">
                  {project.overview}
                </p>

              </div>

            </div>
          </Link>
        );
        })}
      </div>
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/5 pointer-events-none group-hover:ring-white/10 transition duration-500" />
    </div>
  );
}