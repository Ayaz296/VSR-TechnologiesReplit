import { motion } from "framer-motion";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import airportImg from "@/assets/images/ind-airport.png";
import commercialImg from "@/assets/images/ind-commercial.png";
import industrialImg from "@/assets/images/ind-industrial.png";
import criticalImg from "@/assets/images/ind-critical.png";

const projects = [
  {
    label: "Aviation",
    title: "International Airport Security Overhaul",
    location: "Gulf Region",
    image: airportImg,
    summary:
      "Full-terminal deployment covering 1,400+ networked cameras, biometric boarding gates, ALPR parking control, and a unified PSIM integrating all sub-systems into a single operator console.",
    outcomes: [
      "1,400+ HD cameras across 3 terminals",
      "Biometric boarding at all 42 gates",
      "ALPR-controlled 8,000-bay car park",
      "Single-pane PSIM dashboard",
    ],
    accent: "from-blue-500 to-sky-400",
    tag: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    label: "Commercial Real Estate",
    title: "Grade-A Office Tower Integration",
    location: "Central Business District",
    image: commercialImg,
    summary:
      "End-to-end security and building automation for a 42-storey mixed-use tower: credential-based floor access, visitor management, HVAC tie-in, and 24/7 remote NOC monitoring.",
    outcomes: [
      "42-floor credential access control",
      "Touchless visitor management system",
      "BMS integration with HVAC & lifts",
      "24/7 remote NOC monitoring",
    ],
    accent: "from-violet-500 to-purple-400",
    tag: "bg-violet-50 text-violet-700 border-violet-100",
  },
  {
    label: "Industrial",
    title: "Petrochemical Plant Perimeter Defense",
    location: "Industrial Zone",
    image: industrialImg,
    summary:
      "Explosion-proof thermal and HD cameras, multi-zone intrusion detection, and automated fire-and-gas suppression control across a 3.2 km secured perimeter — zero undetected breaches since commissioning.",
    outcomes: [
      "3.2 km secured perimeter",
      "Thermal + explosion-proof cameras",
      "Automated fire & gas suppression",
      "Zero undetected breaches post-commissioning",
    ],
    accent: "from-amber-500 to-orange-400",
    tag: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    label: "Critical Infrastructure",
    title: "Municipal Water Authority Network",
    location: "Metro Region",
    image: criticalImg,
    summary:
      "NERC CIP-aligned security infrastructure spanning 18 unmanned substations: fiber-backhaul CCTV, encrypted access control, environmental monitoring, and centralised alarm management.",
    outcomes: [
      "18 unmanned facilities networked",
      "NERC CIP-aligned architecture",
      "Encrypted access across all sites",
      "Centralised alarm & event management",
    ],
    accent: "from-teal-500 to-emerald-400",
    tag: "bg-teal-50 text-teal-700 border-teal-100",
  },
];

export function ProjectHighlights() {
  return (
    <section className="py-20 sm:py-28 bg-[#060e1e] relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-blue-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-violet-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs sm:text-sm font-medium mb-5 sm:mb-6">
            Project Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-5 leading-[1.1]">
            Deployed Across
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">
              Critical Environments
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            From international aviation hubs to unmanned infrastructure sites —
            these are the environments where our systems operate daily.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-white/[0.04] border border-white/8 overflow-hidden hover:border-white/15 hover:bg-white/[0.06] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1e] via-[#060e1e]/40 to-transparent" />

                {/* Accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${p.accent}`} />

                {/* Label badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${p.tag}`}>
                    {p.label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-7">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1 text-slate-500 text-xs whitespace-nowrap mt-0.5 flex-shrink-0">
                    <MapPin className="w-3 h-3" />
                    {p.location}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {p.summary}
                </p>

                {/* Outcome bullets */}
                <ul className="space-y-1.5">
                  {p.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 sm:mt-14 text-center"
        >
          <a
            href="mailto:procurement@vsrtech.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-slate-200 text-sm font-medium hover:bg-white/10 hover:border-white/25 transition-all duration-200"
          >
            Discuss your project with our team
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
