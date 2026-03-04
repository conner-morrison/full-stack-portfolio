export default function ProjectsPage() {
    return (
      <div className="space-y-16">
        <h1 className="text-3xl font-semibold">Projects</h1>
  
        <Project
          title="Multi-Tenant SaaS Admin Platform"
          tech="Next.js 14 · TypeScript · Redis · PostgreSQL"
          description="Designed system architecture and led delivery team. Implemented SSR optimization and caching strategy. 35% performance improvement."
        />
  
        <Project
          title="Enterprise CRM Modernization"
          tech="Next.js · TypeScript · Docker · CI/CD"
          description="Directed structured migration from legacy JavaScript. Improved velocity by 40%."
        />
  
        <Project
          title="CI Automation Framework"
          tech="Selenium · Cypress · Jenkins"
          description="Stabilized deployment pipeline. Reduced CI failures by 50%."
        />
      </div>
    );
  }
  
  function Project({
    title,
    tech,
    description,
  }: {
    title: string;
    tech: string;
    description: string;
  }) {
    return (
      <div className="space-y-2">
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-sm text-neutral-500">{tech}</p>
        <p className="text-neutral-600">{description}</p>
      </div>
    );
  }