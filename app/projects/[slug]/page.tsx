import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-8 py-24 space-y-20">

      {/* HEADER */}
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          {project.title}
        </h1>

        <p className="text-xl text-neutral-400 leading-relaxed">
          {project.overview}
        </p>

        {/* Links */}
        <div className="flex gap-6 pt-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition"
            >
              View on GitHub
            </Link>
          )}

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="px-6 py-3 rounded-xl border border-neutral-700 hover:border-neutral-500 transition"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="relative w-full h-[520px] rounded-3xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* DETAILS SECTION */}
      <div className="space-y-16 text-neutral-300 text-lg leading-relaxed">

        {/* Tech Stack */}
        {project.tech && project.tech.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-neutral-800 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Role */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">
            My Role
          </h2>
          <p>{project.role}</p>
        </section>

        {/* Challenge */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Challenge
          </h2>
          <p>{project.challenge}</p>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Solution
          </h2>
          <p>{project.solution}</p>
        </section>

        {/* Result */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Result
          </h2>
          <p>{project.result}</p>
        </section>

      </div>

    </div>
  );
}