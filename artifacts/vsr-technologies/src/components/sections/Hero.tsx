import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";
import { useRef } from "react";
import { Link } from "wouter";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Full-bleed background with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Security infrastructure"
          className="w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/75 to-[#0A1628]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-transparent" />
      </motion.div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[100px] pointer-events-none z-0" />

      {/* Floating scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent z-0 pointer-events-none"
        animate={{ top: ["10%", "90%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <motion.div style={{ opacity }} className="relative z-10 w-full">
        <div className="container mx-auto px-6 md:px-8 pt-28 pb-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-medium mb-10 backdrop-blur-sm"
            >
              <ShieldCheck size={15} />
              Enterprise Physical Security Infrastructure
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05] mb-8"
            >
              Advanced
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-primary">
                Security Systems
              </span>
              <br />
              for Critical Sites.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl"
            >
              End-to-end physical security, structured cabling, and intelligent threat surveillance — designed, installed, and maintained for airports, commercial buildings, and industrial facilities.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-20"
            >
              <Link href="/services">
                <Button size="lg" className="text-base h-14 px-8 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 hover:scale-[1.03] transition-all duration-300">
                  Explore Services
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="text-base h-14 px-8 border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm hover:scale-[1.03] transition-all duration-300">
                  View Projects
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 max-w-xl"
            >
              {[
                { value: "500+", label: "Enterprise Sites" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "24/7", label: "Active Monitoring" },
              ].map((stat) => (
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
