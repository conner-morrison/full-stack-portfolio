import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="w-full max-w-5xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 space-y-8 sm:space-y-10 md:space-y-14 lg:space-y-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
      >
        <span aria-hidden>←</span>
        Back to Projects
      </Link>
      <Reveal>
        <div className="space-y-3 sm:space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--foreground)]">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            {project.overview}
          </p>
        </div>
      </Reveal>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            View on GitHub
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl border-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] text-sm font-medium hover:bg-[var(--muted-bg)] transition-colors w-full sm:w-auto"
          >
            Live Demo
          </Link>
        )}
      </div>

      <Reveal>
        <div className="relative w-full aspect-video md:aspect-auto md:h-[380px] lg:h-[420px] xl:h-[460px] rounded-xl sm:rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-[var(--shadow-lg)]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
          />
        </div>
      </Reveal>

      <div className="space-y-10 sm:space-y-12 md:space-y-14 text-base sm:text-lg leading-relaxed">
        {project.tech && project.tech.length > 0 && (
          <section>
            <h2 className="font-serif text-lg sm:text-xl font-semibold text-[var(--foreground)] mb-3 sm:mb-4">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[var(--muted-bg)] text-[var(--muted)] text-xs sm:text-sm font-medium border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {(["role", "challenge", "solution", "result"] as const).map(
          (sectionKey) => {
            const content = project[sectionKey];
            if (!content) return null;
            return (
              <Reveal key={sectionKey}>
                <section className="space-y-2 sm:space-y-3">
                  <h2 className="font-serif text-lg sm:text-xl font-semibold text-[var(--foreground)] capitalize">
                    {sectionKey}
                  </h2>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {content}
                  </p>
                </section>
              </Reveal>
            );
          }
        )}
      </div>
    </div>
  );
}
