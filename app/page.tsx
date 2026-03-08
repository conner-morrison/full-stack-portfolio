import dynamic from "next/dynamic";
import Hero from "./Hero/page";

const AboutSection = dynamic(
  () => import("@/app/components/about-section").then((m) => m.AboutSection),
  { ssr: true }
);

const ProjectsSection = dynamic(
  () => import("@/app/components/projects-section").then((m) => m.ProjectsSection),
  { ssr: true }
);

const ContactSection = dynamic(() => import("./contact/page"), { ssr: true });

export default function HomePage() {
  return (
    <div className="min-h-screen w-full min-w-0" id="top">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection variant="section" />
    </div>
  );
}
