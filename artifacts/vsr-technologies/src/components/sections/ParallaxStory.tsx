import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Shield, Cpu, Globe, Award } from "lucide-react";

const chapters = [
  {
    label: "01 — Who We Are",
    heading: "Built for the environments where failure is not an option.",
    body: "VSR Technologies is a specialist physical security and infrastructure company, founded to serve facilities that operate at the edge of criticality — airports, power stations, government complexes, and commercial towers.",
    icon: Shield,
    accent: "from-sky-400 to-blue-600",
    stat: "500+",
    statLabel: "Enterprise Deployments",
    fragments: [
      { label: "Airports", angle: 0 },
      { label: "Power Stations", angle: 72 },
      { label: "Gov. Complexes", angle: 144 },
      { label: "Data Centres", angle: 216 },
      { label: "Hospitals", angle: 288 },
    ],
  },
  {
    label: "02 — What We Do",
    heading: "We architect the complete security stack — not just the cameras.",
    body: "From structured cabling and fiber backbones to CCTV, video analytics, building management, fire alarm systems, and entrance control — every discipline is handled in-house by our certified engineers.",
    icon: Cpu,
    accent: "from-violet-400 to-purple-600",
    stat: "8+",
    statLabel: "Integrated Disciplines",
    fragments: [
      { label: "CCTV", angle: 0 },
      { label: "Networking", angle: 72 },
      { label: "Fire Alarm", angle: 144 },
      { label: "BMS", angle: 216 },
      { label: "Analytics", angle: 288 },
    ],
  },
  {
    label: "03 — Where We Work",
    heading: "From regional airports to smart city deployments at scale.",
    body: "Our portfolio spans international airports, industrial facilities, high-rise commercial towers, hospital campuses, and municipal infrastructure networks. If the environment demands precision — VSR Technologies belongs there.",
    icon: Globe,
    accent: "from-teal-400 to-cyan-600",
    stat: "99.9%",
    statLabel: "Uptime SLA Guarantee",
    fragments: [
      { label: "Americas", angle: 0 },
      { label: "Europe", angle: 72 },
      { label: "Middle East", angle: 144 },
      { label: "Asia Pacific", angle: 216 },
      { label: "Africa", angle: 288 },
    ],
  },
  {
    label: "04 — Why Choose Us",
    heading: "Certified specialists, not generalists with a catalogue.",
    body: "Our engineers hold NICET, BICSI, Axis, Bosch, and Genetec certifications. Every system is designed to a bespoke specification, validated through full commissioning, and backed by 24/7 monitoring and rapid response.",
    icon: Award,
    accent: "from-amber-400 to-orange-600",
    stat: "24/7",
    statLabel: "Active Support & Monitoring",
    fragments: [
      { label: "NICET", angle: 0 },
      { label: "BICSI", angle: 72 },
      { label: "Axis Certified", angle: 144 },
      { label: "Genetec", angle: 216 },
      { label: "Bosch", angle: 288 },
    ],
  },
];

/* Orbit radius — wide spread so chips are clearly visible on desktop */
const RADIUS = 185;

/* Each fragment chip as its own component so hooks are called at top level */
function FragmentChip({
  label,
  angle,
  index,
  scrollYProgress,
}: {
  label: string;
  angle: number;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const rad = (angle * Math.PI) / 180;
  const tx = Math.sin(rad) * RADIUS;
  const ty = -Math.cos(rad) * RADIUS;

  /* Stagger each chip slightly; keep all animation in the 0.1–0.8 band
     so chips only appear after the section center enters the viewport */
  const start = 0.1 + index * 0.1;
  const peak  = start + 0.22;
  const land  = peak  + 0.12;

  const x = useTransform(
    scrollYProgress,
    [0, start, peak, land, 1],
    [0, tx * 0.15, tx * 1.18, tx * 0.97, tx]
  );
  const y = useTransform(
    scrollYProgress,
    [0, start, peak, land, 1],
    [0, ty * 0.15, ty * 1.18, ty * 0.97, ty]
  );
  const opacity = useTransform(scrollYProgress, [0, start, start + 0.1], [0, 0, 1]);
  const scale   = useTransform(scrollYProgress, [start, peak, land], [0, 1.15, 1]);

  return (
    <motion.div
      style={{ x, y, opacity, scale, position: "absolute", top: "50%", left: "50%" }}
    >
      <div
        style={{ transform: "translate(-50%, -50%)" }}
        className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap border border-white/25 bg-white/12 text-white/90 backdrop-blur-sm shadow-md"
      >
        {label}
      </div>
    </motion.div>
  );
}

function ExplodingVisual({
  chapter,
  scrollYProgress,
}: {
  chapter: (typeof chapters)[0];
  scrollYProgress: MotionValue<number>;
}) {
  const Icon = chapter.icon;

  const iconScale = useTransform(scrollYProgress, [0, 0.35, 0.55], [0, 1.2, 1]);
  const iconOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const ring1 = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const ring2 = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const ring3 = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  return (
    <div
      className="relative flex items-center justify-center w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]"
    >
      {/* Ambient glow */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-br ${chapter.accent} opacity-[0.12] blur-3xl`}
      />

      {/* Rings expanding in */}
      <motion.div
        style={{ scale: ring3 }}
        className="absolute inset-0 rounded-full border border-white/6"
      />
      <motion.div
        style={{ scale: ring2 }}
        className="absolute inset-[24px] rounded-full border border-white/8"
      />
      <motion.div
        style={{ scale: ring1 }}
        className="absolute inset-[48px] rounded-full border-2 border-dashed border-white/12"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Fragment chips — each is its own component with its own hooks */}
      {chapter.fragments.map((frag, i) => (
        <FragmentChip
          key={frag.label}
          label={frag.label}
          angle={frag.angle}
          index={i}
          scrollYProgress={scrollYProgress}
        />
      ))}

      {/* Center icon bursts in */}
      <motion.div
        style={{ scale: iconScale, opacity: iconOpacity, position: "relative", zIndex: 10 }}
        className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${chapter.accent} shadow-2xl`}
      >
        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
      </motion.div>
    </div>
  );
}

function ParallaxChapter({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* Explosion tracker — tied to the CENTER of the chapter block so it
     fires only when the visual is actually scrolled into view on mobile */
  const { scrollYProgress: explodeProgress } = useScroll({
    target: ref,
    offset: ["center 1.0", "center 0.0"],
  });

  const y = useTransform(sectionProgress, [0, 1], [40, -40]);
  const opacity = useTransform(sectionProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`relative flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 sm:gap-10 lg:gap-16 py-10 sm:py-14 lg:py-20`}
    >
      {/* Text side */}
      <motion.div style={{ y }} className="flex-1 max-w-xl w-full">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className={`w-6 h-[2px] bg-gradient-to-r ${chapter.accent}`} />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
            {chapter.label}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.18] mb-4">
          {chapter.heading}
        </h3>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
          {chapter.body}
        </p>

        {/* Stat pill */}
        <div className="inline-flex items-baseline gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
          <span
            className={`text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${chapter.accent}`}
          >
            {chapter.stat}
          </span>
          <span className="text-xs sm:text-sm text-slate-400 font-medium">
            {chapter.statLabel}
          </span>
        </div>
      </motion.div>

      {/* Visual side */}
      <div className="flex-1 flex items-center justify-center py-2">
        <ExplodingVisual chapter={chapter} scrollYProgress={explodeProgress} />
      </div>
    </motion.div>
  );
}

export function ParallaxStory() {
  return (
    <section className="fluid-grid-section fluid-to-cases relative bg-[#060E1E] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-sky-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center pt-14 sm:pt-20 pb-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-xs sm:text-sm font-medium mb-5 sm:mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Our Story
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4 sm:mb-5">
            The infrastructure behind
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-300 to-primary">
              {" "}every secure facility.
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed">
            Scroll through our story — who we are, what we build, and why critical facilities trust VSR.
          </p>
        </motion.div>

        {/* Chapters */}
        <div className="divide-y divide-white/5">
          {chapters.map((chapter, i) => (
            <ParallaxChapter key={chapter.label} chapter={chapter} index={i} />
          ))}
        </div>

        <div className="pb-14 sm:pb-20" />
      </div>
    </section>
  );
}
