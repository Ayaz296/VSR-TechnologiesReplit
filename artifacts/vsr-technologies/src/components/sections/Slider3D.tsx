import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: "airport",
    category: "Airport Security",
    title: "Complete Airport-Wide Surveillance & Access Management",
    body: "Deployed across terminal concourses, airside perimeters, baggage handling zones, and ground operations — our systems provide total situational awareness for airport security and operations teams.",
    highlights: ["300+ HD cameras", "AI crowd analytics", "Airside perimeter detection", "Biometric boarding gates"],
    accent: "from-sky-500 to-blue-700",
    accentLight: "sky",
    bg: "from-[#0A1F3F] to-[#071325]",
  },
  {
    id: "commercial",
    category: "Commercial Towers",
    title: "Unified Building Intelligence for High-Rise Facilities",
    body: "From basement parking to rooftop plant rooms, we integrate CCTV, access control, BMS, and fire systems across multi-floor commercial developments — managed through a single command dashboard.",
    highlights: ["50+ floor integration", "Visitor management", "Energy-optimised BMS", "24/7 remote monitoring"],
    accent: "from-violet-500 to-purple-700",
    accentLight: "violet",
    bg: "from-[#1A0F3F] to-[#0F071F]",
  },
  {
    id: "industrial",
    category: "Industrial Facilities",
    title: "Hardened Security for High-Risk Industrial Environments",
    body: "Explosion-proof housings, thermal imaging, and perimeter intrusion detection designed for refineries, power plants, and manufacturing facilities where harsh conditions and high-value assets coexist.",
    highlights: ["Thermal perimeter cameras", "ATEX-rated equipment", "SCADA integration", "LPR vehicle gates"],
    accent: "from-amber-500 to-orange-700",
    accentLight: "amber",
    bg: "from-[#2A1500] to-[#150B00]",
  },
  {
    id: "smartcity",
    category: "Smart City",
    title: "Municipal-Scale Public Safety & Traffic Intelligence",
    body: "VSR deploys wide-area surveillance networks, traffic management systems, and emergency communication infrastructure for cities and municipalities seeking to improve public safety outcomes.",
    highlights: ["City-wide camera mesh", "Traffic incident detection", "Emergency command centre", "IoT sensor integration"],
    accent: "from-teal-500 to-cyan-700",
    accentLight: "teal",
    bg: "from-[#00231F] to-[#001210]",
  },
  {
    id: "healthcare",
    category: "Healthcare Campuses",
    title: "Safe & Compliant Security for Healthcare Environments",
    body: "Patient privacy-aware camera placement, duress alarm integration, and infant abduction prevention systems — all designed to meet healthcare regulatory requirements while keeping staff and patients safe.",
    highlights: ["Infant protection zones", "Staff duress buttons", "Visitor badging system", "HIPAA-aware design"],
    accent: "from-green-500 to-emerald-700",
    accentLight: "green",
    bg: "from-[#001F0E] to-[#000F07]",
  },
];

const total = slides.length;

export function Slider3D() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setCurrent((c) => (c + dir + total) % total);
    },
    []
  );

  const slide = slides[current];

  return (
    <section className="fluid-grid-section fluid-to-stats py-28 bg-[#080F1E] relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-medium mb-8">
            Case Studies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-[1.1]">
            Proven across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-primary">
              every sector.
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">
            Explore how VSR Technologies delivers security infrastructure across industries.
          </p>
        </motion.div>

        {/* 3D Slide stage */}
        <div className="relative max-w-5xl mx-auto" style={{ perspective: "1200px" }}>
          {/* Background depth cards */}
          {[-1, 1].map((offset) => {
            const idx = (current + offset + total) % total;
            const s = slides[idx];
            return (
              <motion.div
                key={idx}
                className={`absolute top-0 w-full h-full rounded-3xl bg-gradient-to-br ${s.bg} border border-white/5 hidden lg:block`}
                style={{
                  transformOrigin: offset === -1 ? "right center" : "left center",
                  rotateY: offset === -1 ? -15 : 15,
                  translateX: `${offset * 6}%`,
                  translateZ: -120,
                  scale: 0.88,
                  opacity: 0.4,
                  zIndex: 0,
                }}
              />
            );
          })}

          {/* Main slide */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80, rotateY: direction * 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: direction * -80, rotateY: direction * -10 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`relative z-10 rounded-3xl bg-gradient-to-br ${slide.bg} border border-white/10 overflow-hidden`}
              style={{ transformOrigin: "center center" }}
            >
              {/* Glow overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent} opacity-[0.07] pointer-events-none`} />

              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: content */}
                <div className="p-8 md:p-12 flex flex-col justify-between min-h-[440px]">
                  <div>
                    <div className={`inline-flex text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-gradient-to-r ${slide.accent} bg-opacity-20 text-white mb-6`}>
                      {slide.category}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-[1.2] mb-5">
                      {slide.title}
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed mb-8">
                      {slide.body}
                    </p>
                  </div>

                  <a href="mailto:info@vsrt.in" className={`inline-flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${slide.accent} group`}>
                    Request case study details
                    <ArrowRight size={14} className={`text-sky-400 group-hover:translate-x-1 transition-transform`} />
                  </a>
                </div>

                {/* Right: highlights */}
                <div className="p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-white/8 flex flex-col justify-center gap-4">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-2">
                    Key Deliverables
                  </p>
                  {slide.highlights.map((h, i) => (
                    <motion.div
                      key={h}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-4"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${slide.accent} shrink-0`} />
                      <span className="text-white/85 font-medium text-sm">{h}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => go(-1)}
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-sky-400" : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
