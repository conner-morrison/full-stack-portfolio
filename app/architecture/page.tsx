export default function ArchitecturePage() {
    return (
      <div className="space-y-12">
        <h1 className="text-3xl font-semibold">Architecture</h1>
  
        <Section title="Structure">
          Feature-based architecture with clear domain boundaries.
        </Section>
  
        <Section title="Separation">
          UI, services, and infrastructure layers are isolated to ensure scalability and maintainability.
        </Section>
  
        <Section title="Standards">
          TypeScript strict mode, ESLint, Prettier, documented conventions.
        </Section>
  
        <Section title="Deployment">
          Dockerized environments with CI/CD pipelines for build validation and deployment.
        </Section>
  
        <Section title="Performance">
          Measured optimization through SSR strategy, caching layers, and database indexing.
        </Section>
      </div>
    );
  }
  
  function Section({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="space-y-2">
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-neutral-600">{children}</p>
      </div>
    );
  }