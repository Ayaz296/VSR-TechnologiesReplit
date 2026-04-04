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

/* Gradient bridge between two sections */
function Bridge({ from, to }: { from: string; to: string }) {
  return (
    <div
      className="h-24 -my-px pointer-events-none"
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    />
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* Hero → dark */}
        <Hero />

        {/* dark (#0A1628) → light (#EFF6FF) */}
        <Bridge from="#0A1628" to="#EFF6FF" />
        <Services />

        {/* light (#F8FAFC) → dark (#0A1628) */}
        <Bridge from="#F8FAFC" to="#0A1628" />
        <InfrastructureShowcase />

        {/* dark (#0A1628) → threat-orange (#1A0800) */}
        <Bridge from="#0A1628" to="#1A0800" />
        <AiThreatDetection />

        {/* threat-orange (#160500) → white */}
        <Bridge from="#160500" to="#ffffff" />
        <Industries />

        {/* white → dark (#0A1628) */}
        <Bridge from="#ffffff" to="#0A1628" />
        <WhyChooseUs />

        {/* dark (#0A1628) → white */}
        <Bridge from="#0A1628" to="#ffffff" />
        <About />

        {/* white → deep navy (#0F1E3C) */}
        <Bridge from="#ffffff" to="#0F1E3C" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
