export default function ArchitectureSection() {
    return (
      <section className="px-24 py-32 grid md:grid-cols-2 gap-24">
  
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            Engineering Architecture
          </h2>
  
          <p className="text-neutral-400">
            Feature-based domain separation, service abstraction,
            Dockerized parity, and CI/CD enforcement.
          </p>
        </div>
  
        <div className="relative rounded-3xl border border-neutral-800 
          bg-neutral-900 p-12">
          <p className="text-neutral-500 text-sm">
            Architecture Diagram Placeholder
          </p>
        </div>
  
      </section>
    );
}