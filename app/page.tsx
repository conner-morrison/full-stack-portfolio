import Hero from "./Hero/page";
import ContactSection from "./contact/page";
import { AboutSection } from "@/app/components/about-section";
import { ProjectsSection } from "@/app/components/projects-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection variant="section" />
    </div>
  );
}
