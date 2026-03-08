import Hero from "./Hero/page";
import ContactSection from "./contact/page";
import { AboutSection } from "@/app/components/about-section";
import { ProjectsSection } from "@/app/components/projects-section";

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
