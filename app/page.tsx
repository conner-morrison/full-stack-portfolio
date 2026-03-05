import Hero from "./Hero/page";
import ContactSection from "./contact/page";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ContactSection variant="section" />
    </div>
  );
}
