export type Project = {
  slug: string;
  title: string;
  overview: string;
  period: string;
  role: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  tech?: string[];
};

export const projects: Project[] = [
  {
    slug: "internal-ops-tool",
    title: "Internal Operations Management Tool",
    overview:
      "Internal task and employee operations tracking system for enterprise use. Built during early stage of career focusing on backend stability and CRUD functionality.",
    period: "2016–2017",
    role: "Junior Backend Developer",
    challenge:
      "Controller-service coupling made testing difficult.",
    solution:
      "Separated business logic into service layer and introduced DAO abstraction.",
    result:
      "Improved maintainability and reduced regression bugs.",
    image: "/projects/internal-ops.png",
    githubUrl: "https://github.com/conner-morrison/internal-ops-tool",

    tech: [
      "Next.js 14",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS"
    ],
  },
  {
    slug: "enterprise-payroll-api",
    title: "Enterprise Payroll & HR API Core",
    overview:
      "Enterprise-grade REST APIs for payroll and HR internal systems.",
    period: "2017–2018",
    role: "Backend Engineer",
    challenge:
      "Payroll batch processing slowed dramatically with data growth.",
    solution:
      "Query optimization, DB indexing, and batch job refactoring.",
    result:
      "~40% performance improvement.",
    image: "/projects/payroll-api.png",
    githubUrl: "https://github.com/conner-morrison/spring-enterprise-core",

    tech: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "PostgreSQL",
      "Docker",
      "AWS"
    ],
  },
  {
    slug: "ci-automation-framework",
    title: "CI Automation & Regression Framework",
    overview:
      "Automation framework integrated into CI pipeline to stabilize enterprise deployment workflows.",
    period: "2018–2020",
    role: "QA Automation Engineer",
    challenge:
      "Flaky UI tests blocking production deployments.",
    solution:
      "Introduced explicit waits, retry wrappers, and separated UI/API tests.",
    result:
      "50% reduction in CI pipeline failures.",
    image: "/projects/ci-framework.png",
    githubUrl: "https://github.com/conner-morrison/ci-automation-framework",

    tech: [
      "GitHub Actions",
      "Docker",
      "Terraform",
      "Node.js",
      "AWS"
    ],
  },
  {
    slug: "b2b-workflow-saas",
    title: "B2B Workflow Management SaaS Platform",
    overview:
      "Workflow automation platform allowing teams to manage tasks, approvals, reporting dashboards, and internal analytics.",
    period: "2020–2023",
    role: "Full-Stack Engineer",
    challenge:
      "Internal-only tool required conversion into scalable SaaS.",
    solution:
      "Refactored to multi-tenant architecture with RBAC and environment configs.",
    result:
      "Scaled to 10,000+ users.",
    image: "/projects/workflow-saas.png",
    githubUrl: "https://github.com/conner-morrison/b2b-workflow-saas",

    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS"
    ],
  },
  {
    slug: "crm-modernization",
    title: "Enterprise CRM Modernization",
    overview:
      "Migrated legacy JavaScript CRM into modern TypeScript + modular React architecture.",
    period: "2022–2024",
    role: "Lead Migration Consultant",
    challenge:
      "Legacy JS codebase with no typing and high technical debt.",
    solution:
      "Gradual TypeScript adoption and service layer abstraction.",
    result:
      "40% improvement in development velocity.",
    image: "/projects/crm-modernization.png",
    githubUrl: "https://github.com/conner-morrison/crm-modernization-platform",

    tech: [
      "Next.js",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "Docker",
      "AWS"
    ],
  },
  {
    slug: "multi-tenant-saas-platform",
    title: "Multi-Tenant SaaS Admin Platform",
    overview:
      "Enterprise-grade multi-tenant SaaS platform using modern Next.js App Router and SSR optimization.",
    period: "2024–Present",
    role: "Senior Engineer & Team Manager",
    challenge:
      "Heavy SSR analytics pages causing performance bottlenecks.",
    solution:
      "Partial SSR, Redis caching, and optimized server/client boundaries.",
    result:
      "35% improved load time.",
    image: "/projects/multi-tenant-saas.png",
    githubUrl: "https://github.com/conner-morrison/nextwave-saas-platform",

    tech: [
      "Next.js 14",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS"
    ],
  },
];