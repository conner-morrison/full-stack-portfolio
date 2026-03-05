import Hero from "./Hero/page";
import ContactSection from "./contact/page";

export default function HomePage() {
  return (
    <div className="bg-neutral-950 text-neutral-100">
      <Hero />
      <ContactSection />
    </div>
  );
}