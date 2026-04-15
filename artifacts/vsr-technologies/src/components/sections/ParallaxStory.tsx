import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Cpu, Globe, Award } from "lucide-react";

const chapters = [
  {
    label: "01 — Who We Are",
    heading: "Built for the environments where failure is not an option.",
    body: "VSR Technologies is a specialist physical security and infrastructure company, founded to serve facilities that operate at the edge of criticality — airports, power stations, government complexes, and commercial towers. We combine deep engineering expertise with enterprise-grade hardware partnerships to deliver systems that last.",
    icon: Shield,
    accent: "from-sky-400 to-blue-600",
    stat: "500+",
    statLabel: "Enterprise Deployments",
  },
  {
    label: "02 — What We Do",
    heading: "We architect the complete security stack — not just the cameras.",
    body: "From structured cabling and fiber backbones to CCTV, video analytics, building management, fire alarm systems, and entrance control — every discipline is handled in-house by our certified engineers. No third-party handoffs. No finger-pointing between contractors.",
    icon: Cpu,
    accent: "from-violet-400 to-purple-600",
    stat: "8+",
    statLabel: "Integrated Disciplines",
  },
  {
    label: "03 — Where We Work",
    heading: "From regional airports to smart city deployments at scale.",
    body: "Our portfolio spans international airports, industrial facilities, high-rise commercial towers, hospital campuses, and municipal infrastructure networks. If the environment demands precision, reliability, and accountability — VSR Technologies belongs there.",
    icon: Globe,
    accent: "from-teal-400 to-cyan-600",
    stat: "99.9%",
    statLabel: "Uptime SLA Guarantee",
  },
  {
    label: "04 — Why Choose Us",
    heading: "Certified specialists, not generalists with a catalogue.",
    body: "Our engineers hold NICET, BICSI, Axis, Bosch, and Genetec certifications. Every system is designed to a bespoke specification, validated through full commissioning, and backed by 24/7 monitoring and on-site rapid response — because your security infrastructure deserves more than a sales team.",
    icon: Award,
    accent: "from-amber-400 to-orange-600",
    stat: "24/7",
    statLabel: "Active Support & Monitoring",
  },
];

function ParallaxChapter({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const Icon = chapter.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20 py-20 lg:py-32`}
    >
      {/* Text side */}
      <motion.div style={{ y }} className="flex-1 max-w-xl">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className={`w-8 h-[2px] bg-gradient-to-r ${chapter.accent}`} />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400">
            {chapter.label}
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-6">
          {chapter.heading}
        </h3>
        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          {chapter.body}
        </p>

        {/* Stat */}
        <div className={`inline-flex items-baseline gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10`}>
          <span className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${chapter.accent}`}>
            {chapter.stat}
          </span>
          <span className="text-sm text-slate-400 font-medium">{chapter.statLabel}</span>
        </div>
      </motion.div>

      {/* Visual side */}
      <motion.div style={{ y: imageY }} className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-sm aspect-square">
          {/* Background ring */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${chapter.accent} opacity-10 blur-2xl`} />
          <div className={`absolute inset-8 rounded-full border-2 border-white/5`} />
          <div className={`absolute inset-16 rounded-full border border-white/8`} />

          {/* Rotating dashes ring */}
          <motion.div
            className={`absolute inset-4 rounded-full border-2 border-dashed border-white/10`}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`p-8 rounded-3xl bg-gradient-to-br ${chapter.accent} shadow-2xl`}>
              <Icon className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Floating dots */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <motion.div
              key={i}
              className={`absolute w-3 h-3 rounded-full bg-gradient-to-br ${chapter.accent} opacity-60`}
              style={{
                top: `${50 - 42 * Math.cos((deg * Math.PI) / 180)}%`,
                left: `${50 + 42 * Math.sin((deg * Math.PI) / 180)}%`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ParallaxStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#060E1E] overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-sky-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Vertical progress line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center pt-24 pb-8 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            The infrastructure behind
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-300 to-primary">
              every secure facility.
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Scroll through our story — from who we are, to what we build, to why critical facilities trust VSR.
          </p>
        </motion.div>

        {/* Chapters */}
        <div className="divide-y divide-white/5">
          {chapters.map((chapter, i) => (
            <ParallaxChapter key={chapter.label} chapter={chapter} index={i} />
          ))}
        </div>

        {/* Bottom spacer */}
        <div className="pb-24" />
      </div>
    </section>
  );
}
