import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { InfrastructureShowcase } from "@/components/sections/InfrastructureShowcase";
import { AiThreatDetection } from "@/components/sections/AiThreatDetection";
import { Industries } from "@/components/sections/Industries";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { About } from "@/components/sections/About";
import { ParallaxStory } from "@/components/sections/ParallaxStory";
import { Slider3D } from "@/components/sections/Slider3D";
import { ExplodingStats } from "@/components/sections/ExplodingStats";
import { FAQ } from "@/components/sections/FAQ";
import { useQuery } from "@tanstack/react-query";
import { defaultSiteContent } from "@/content/siteContent";
import { fetchWordPressSiteContent, hasWordPressContentSource } from "@/lib/wordpressContent";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["wordpress-site-content"],
    queryFn: fetchWordPressSiteContent,
    enabled: hasWordPressContentSource(),
    retry: false,
  });
  const content = data ?? defaultSiteContent;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <Navbar contactEmail={content.contact.email} />
      <main className="flex-1">
        <Hero content={content.hero} />
        <ParallaxStory />
        <Slider3D />
        <ExplodingStats />
        <InfrastructureShowcase />
        <AiThreatDetection />
        <Services content={content.services} />
        <WhyChooseUs content={content.whyChooseUs} />
        <Industries content={content.industries} />
        <About content={content.about} />
        <FAQ content={content.faq} email={content.contact.email} />
      </main>
      <Footer content={content.footer} contact={content.contact} />
    </div>
  );
}
