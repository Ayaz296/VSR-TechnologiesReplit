import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";
import { useRef } from "react";

function CentralOrb() {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center perspective-[1000px]">
      <motion.div
        animate={{ rotateY: 360, rotateX: 10 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-64 h-64 md:w-96 md:h-96 preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Outer Ring */}
        <motion.div
          animate={{ rotateZ: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-primary/20 shadow-[0_0_50px_rgba(var(--primary),0.1)]"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
          <div className="absolute bottom-0 left-1/2 w-2 h-2 -ml-1 -mb-1 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
        </motion.div>

        {/* Middle Ring */}
        <motion.div
          animate={{ rotateZ: 360, rotateX: 20 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border-[2px] border-dashed border-teal-500/30"
          style={{ transform: "translateZ(0px)" }}
        />

        {/* Inner Core */}
        <div className="absolute inset-12 rounded-full bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md border border-white/50 shadow-2xl flex items-center justify-center overflow-hidden" style={{ transform: "translateZ(-20px)" }}>
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.1)_0%,transparent_70%)]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Lens */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-slate-900 border-4 border-slate-800 shadow-inner flex items-center justify-center">
            <motion.div 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500/20 border border-blue-400/50 flex items-center justify-center relative overflow-hidden"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-4 h-4 rounded-full bg-teal-400/40 blur-[2px]" />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/80" />
            </motion.div>
          </div>
        </div>

        {/* Scanning lines */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full text-primary/30"
          style={{ transform: "translateZ(30px)" }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
          <path d="M50 2 L50 15 M50 85 L50 98 M2 50 L15 50 M85 50 L98 50" stroke="currentColor" strokeWidth="1" />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background pt-24 md:pt-32">
      {/* Background Image & Overlay */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img src={heroBg} alt="Abstract futuristic background" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40 blur-[1px]"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [null, Math.random() * -200],
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-primary/10 text-primary font-medium text-sm mb-8 shadow-sm">
                <ShieldCheck size={16} />
                <span>Enterprise Grade Security Infrastructure</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-foreground leading-[1.05] mb-6 drop-shadow-sm">
                Advanced Security,{" "}
                <br />
                <span className="text-slate-400 font-light">Built for</span>
                <br />
                Critical Infrastructure.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                End-to-end physical security, structured cabling, and intelligent threat surveillance. We install, maintain, and network systems for airports, commercial buildings, and industrial facilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Button size="lg" className="text-base h-14 px-8 shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300">
                  Explore Solutions
                </Button>
                <Button size="lg" variant="outline" className="text-base h-14 px-8 group bg-white/50 backdrop-blur-md hover:bg-white hover:scale-105 transition-all duration-300">
                  Contact Us
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-slate-200/50"
            >
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-slate-500 font-medium mt-1">Enterprise Sites</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-slate-500 font-medium mt-1">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-slate-500 font-medium mt-1">Active Monitoring</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <CentralOrb />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
