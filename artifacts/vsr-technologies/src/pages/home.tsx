import { motion } from "framer-motion";
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

/* Gradient bridge between two sections */
function Bridge({ from, to }: { from: string; to: string }) {
  return (
    <div
      className="h-20 -my-px pointer-events-none"
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    />
  );
}

/* Scroll-triggered fade-in + rise animation wrapper */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <Navbar />
      <main className="flex-1">

        {/* Hero — entrance animations are internal */}
        <Hero />

        {/* Certifications ticker — sits on dark hero background */}
        <FadeIn>
          <CertificationsTicker />
        </FadeIn>

        {/* dark (#0A1628) → light (#EFF6FF) */}
        <Bridge from="#0A1628" to="#EFF6FF" />

        <FadeIn>
          <Services />
        </FadeIn>

        {/* light (#F8FAFC) → dark (#0A1628) */}
        <Bridge from="#F8FAFC" to="#0A1628" />

        <FadeIn>
          <InfrastructureShowcase />
        </FadeIn>

        {/* dark (#0A1628) → threat-orange (#1A0800) */}
        <Bridge from="#0A1628" to="#1A0800" />

        <FadeIn>
          <AiThreatDetection />
        </FadeIn>

        {/* threat-orange (#160500) → white */}
        <Bridge from="#160500" to="#ffffff" />

        <FadeIn>
          <Industries />
        </FadeIn>

        {/* white → dark (#0A1628) */}
        <Bridge from="#ffffff" to="#0A1628" />

        <FadeIn>
          <WhyChooseUs />
        </FadeIn>

        {/* dark (#0A1628) → white */}
        <Bridge from="#0A1628" to="#ffffff" />

        <FadeIn>
          <About />
        </FadeIn>

        {/* white → deep navy (#0F1E3C) */}
        <Bridge from="#ffffff" to="#0F1E3C" />

        <FadeIn>
          <Contact />
        </FadeIn>

      </main>
      <Footer />
    </div>
  );
}
