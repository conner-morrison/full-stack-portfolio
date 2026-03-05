import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-24 space-y-20">

      {/* Hero */}
      <section className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          About Conner Morrison
        </h1>

        <p className="text-xl text-neutral-400 leading-relaxed">
          Engineering Manager and Senior Full-Stack Engineer specializing
          in scalable cloud platforms, enterprise architecture, and
          high-performance SaaS systems.
        </p>
      </section>


      {/* Professional Summary */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          Professional Summary
        </h2>

        <p className="text-neutral-300 leading-relaxed text-lg">
          I am a technology leader with extensive experience designing
          and delivering enterprise-grade software platforms across
          SaaS systems, internal tooling, and automation frameworks.
        </p>

        <p className="text-neutral-300 leading-relaxed text-lg">
          My work focuses on building scalable distributed systems,
          modernizing enterprise platforms, and improving developer
          productivity through engineering automation.
        </p>

        <p className="text-neutral-300 leading-relaxed text-lg">
          I combine hands-on engineering expertise with leadership
          experience to guide architecture decisions, mentor engineers,
          and deliver high-impact software products.
        </p>
      </section>


      {/* Core Strengths */}
      <section className="space-y-10">
        <h2 className="text-2xl font-semibold text-white">
          Core Strengths
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Engineering Leadership
            </h3>
            <p className="text-neutral-400">
              Leading cross-functional engineering teams and guiding
              architecture decisions across complex software platforms.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Cloud-Native Architecture
            </h3>
            <p className="text-neutral-400">
              Designing scalable distributed systems and microservices
              architectures built for reliability and performance.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Full-Stack Engineering
            </h3>
            <p className="text-neutral-400">
              Developing modern applications using robust backend
              services and responsive frontend technologies.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Automation & Developer Productivity
            </h3>
            <p className="text-neutral-400">
              Building CI/CD pipelines, automation systems, and internal
              developer platforms that improve engineering velocity.
            </p>
          </div>

        </div>
      </section>

      {/* Education */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-white">
          Education
        </h2>

        <div className="space-y-6">

          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-lg font-semibold text-white">
              Bachelor of Science in Computer Science
            </h3>

            <p className="text-neutral-400">
              Focus: Software Engineering, Distributed Systems,
              Algorithms, and Computer Architecture
            </p>

            <p className="text-neutral-500 text-sm mt-2">
              Emphasis on scalable system design, data structures,
              software architecture, and modern application development.
            </p>
          </div>

        </div>
      </section>



      {/* Contact */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          Contact
        </h2>

        <div className="space-y-3 text-neutral-300">

          <p>
            <strong>Location:</strong>{" "}
            1049 NW 178TH ST, Shoreline, WA 98177-3827
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:morrisonconner638@gmail.com"
              className="text-blue-400 hover:underline"
            >
              morrisonconner638@gmail.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            (WA) 318-0677
          </p>

        </div>
      </section>

    </div>
  );
}