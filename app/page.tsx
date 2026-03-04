import { MotionWrapper } from "@/components/motion-wrapper";
import { Spotlight } from "@/components/spotlight";

export default function HomePage() {
    return (
      <MotionWrapper>
        <section className="relative space-y-6 py-24">
          <Spotlight />

          <h1 className="text-4xl font-semibold tracking-tight">
            Conner Morrison
          </h1>

          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Engineering Manager & Software Architect
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl">
            I build scalable systems and lead engineering teams.
            10 years of experience across the U.S. and Japan in SaaS architecture,
            production systems, and technical leadership.
          </p>
        </section>

      <div className="space-y-20">
        <section className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight">
            Conner Morrison
          </h1>
          <p className="text-xl text-neutral-600">
            Engineering Manager & Software Architect
          </p>
          <p className="text-neutral-700 max-w-2xl">
            I build scalable systems and lead engineering teams. 
            10 years of experience across the U.S. and Japan in SaaS architecture, 
            production systems, and technical leadership.
          </p>
          <div className="space-x-6 text-sm font-medium">
            <a href="/projects" className="underline">
              View Work
            </a>
            <a href="/Conner_Morrison_Resume.pdf" download className="underline">
              Download Resume
            </a>
          </div>
        </section>
  
        <section className="space-y-10">
          <h2 className="text-2xl font-semibold">Selected Work</h2>
  
          <ProjectPreview
            title="Multi-Tenant SaaS Platform (2024–Present)"
            description="Led architecture and team delivery of a modern SaaS platform built with Next.js App Router, PostgreSQL, and Redis. Improved production load time by 35%."
          />
  
          <ProjectPreview
            title="CRM Modernization (2022–2024)"
            description="Directed migration of legacy JavaScript CRM to modular TypeScript architecture. Improved development velocity by 40%."
          />
  
          <ProjectPreview
            title="Workflow SaaS Platform (2020–2023)"
            description="Converted internal workflow tool into external multi-tenant SaaS serving 10,000+ users. Designed authentication, RBAC, and deployment strategy."
          />
        </section>
  
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Leadership</h2>
          <ul className="space-y-2 text-neutral-700">
            <li>Clear architectural direction</li>
            <li>Strong coding standards</li>
            <li>Production readiness</li>
            <li>Measurable performance</li>
            <li>Sustainable team velocity</li>
          </ul>
        </section>
      </div>
      </MotionWrapper>
    );
  }
  
  function ProjectPreview({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    return (
      <div className="space-y-2">
        <h3 className="font-medium">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    );
  }