import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Slider3D } from "@/components/sections/Slider3D";
import { Testimonials } from "@/components/sections/Testimonials";
import { Milestones } from "@/components/sections/Milestones";
import { OurClients } from "@/components/sections/OurClients";
import { FAQ } from "@/components/sections/FAQ";
import { ProjectHighlights } from "@/components/sections/ProjectHighlights";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Slider3D />
        <Services />
        <WhyChooseUs />
        <ProjectHighlights />
        <OurClients />
        <Milestones />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
