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
import { ParallaxStory } from "@/components/sections/ParallaxStory";
import { Slider3D } from "@/components/sections/Slider3D";
import { ExplodingStats } from "@/components/sections/ExplodingStats";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ParallaxStory />
        <CertificationsTicker />
        <Services />
        <Slider3D />
        <InfrastructureShowcase />
        <AiThreatDetection />
        <ExplodingStats />
        <Industries />
        <WhyChooseUs />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
