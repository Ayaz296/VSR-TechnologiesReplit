import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";
import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import { defaultSiteContent, type SiteContent } from "@/content/siteContent";

type HeroContent = SiteContent["hero"];

function RotatingText({ services }: { services: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % services.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <span className="relative inline-block overflow-hidden" style={{ minWidth: "340px", verticalAlign: "bottom" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-primary"
        >
          {services[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero({ content = defaultSiteContent.hero }: { content?: HeroContent }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={containerRef} className="fluid-grid-section fluid-to-story relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Security infrastructure"
          fetchPriority="high"
          decoding="sync"
          className="w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/97 via-[#0A1628]/80 to-[#0A1628]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-transparent to-transparent" />
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-sky-500/8 blur-[100px] pointer-events-none z-0" />

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent z-0 pointer-events-none"
        animate={{ top: ["8%", "92%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />

      <motion.div style={{ opacity }} className="relative z-10 w-full">
        <div className="container mx-auto px-6 md:px-8 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/25 bg-sky-400/8 text-sky-300 text-sm font-medium mb-10 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              {content.badge}
            </motion.div>

            {/* Headline with rotating text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.08] mb-4"
            >
              {content.headlinePrefix}
              <br />
              <RotatingText services={content.rotatingServices} />
              <br />
              <span className="text-white/90 font-light text-4xl md:text-5xl lg:text-6xl">
                {content.headlineSuffix}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl"
            >
              {content.description}
            </motion.p>

            {/* Capability chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-2 mb-12"
            >
              {content.capabilities.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-white/12 bg-white/6 text-slate-300 backdrop-blur-sm"
                >
                  {c}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 mb-20"
            >
              <Link href="/services">
                <Button
                  size="lg"
                  className="text-base h-14 px-8 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 hover:scale-[1.03] transition-all duration-300"
                >
                  {content.primaryCta}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base h-14 px-8 border-white/20 text-white bg-white/6 hover:bg-white/12 backdrop-blur-sm hover:scale-[1.03] transition-all duration-300"
                >
                  {content.secondaryCta}
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 max-w-xl"
            >
              {content.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/35 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
