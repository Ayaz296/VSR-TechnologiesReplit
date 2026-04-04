import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { InfrastructureShowcase } from "@/components/sections/InfrastructureShowcase";
import { AiThreatDetection } from "@/components/sections/AiThreatDetection";
import { Industries } from "@/components/sections/Industries";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CertificationsTicker } from "@/components/sections/CertificationsTicker";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CertificationsTicker />
        <Services />
        <InfrastructureShowcase />
        <AiThreatDetection />
        <Industries />
        <WhyChooseUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
