export default function AboutPage() {
    return (
      <div className="space-y-12">
        <section className="space-y-6">
          <h1 className="text-3xl font-semibold">About</h1>
          <p className="text-neutral-700">
            I’m an Engineering Manager with a background in backend systems, 
            frontend architecture, and DevOps.
          </p>
          <p className="text-neutral-700">
            My career began in enterprise Java systems in Japan, progressed through 
            automation and QA infrastructure in the U.S., and evolved into full-stack 
            SaaS architecture and team leadership.
          </p>
          <p className="text-neutral-700">
            Today, I lead engineers while remaining hands-on in system design and 
            architectural decision-making.
          </p>
        </section>
  
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Experience Snapshot</h2>
          <Experience
            role="Senior Software Engineer – NextWave Digital Systems (2024–Present)"
            description="Lead a team of 5–6 engineers building a multi-tenant SaaS platform. Own architecture decisions, CI/CD standards, and production performance strategy."
          />
          <Experience
            role="Technical Consultant – Stratus Consulting Group (2022–2023)"
            description="Advised enterprises on React + TypeScript modernization and Docker adoption."
          />
          <Experience
            role="Full-Stack Engineer – Innovexa Labs (2020–2023)"
            description="Built production systems using Next.js, Node.js, and AWS."
          />
        </section>
      </div>
    );
  }
  
  function Experience({
    role,
    description,
  }: {
    role: string;
    description: string;
  }) {
    return (
      <div className="space-y-1">
        <h3 className="font-medium">{role}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    );
  }