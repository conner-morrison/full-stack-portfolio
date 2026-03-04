import Hero from "./Hero/page";
import FeaturedProjects from "./FeaturedProjects/page";
import ArchitectureSection from "./ArchitectureSection/page";
import LeadershipSection from "./Leadership/page";
import ContactSection from "./Contact/page";

export default function HomePage() {
  return (
    <div className="bg-neutral-950 text-neutral-100">
      <Hero />
      <FeaturedProjects />
      <ArchitectureSection />
      <LeadershipSection />
      <ContactSection />
    </div>
  );
}