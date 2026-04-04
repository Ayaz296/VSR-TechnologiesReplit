import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const certifications = [
  { name: "Axis Communications", label: "Certified Partner" },
  { name: "Bosch Security Systems", label: "Certified Integrator" },
  { name: "NICET Level III", label: "Fire Alarm Systems" },
  { name: "BICSI RCDD", label: "Registered Comms Designer" },
  { name: "Lenel S2", label: "Authorised Dealer" },
  { name: "Honeywell Security", label: "Certified Partner" },
  { name: "Genetec", label: "Certified Partner" },
  { name: "NFPA 72", label: "Compliant Installations" },
  { name: "TIA-568", label: "Certified Contractor" },
  { name: "ISO 9001:2015", label: "Quality Management" },
  { name: "Milestone XProtect", label: "Certified Integrator" },
  { name: "Texas DPS", label: "Alarm Systems License" },
];

/* Duplicate for seamless loop */
const items = [...certifications, ...certifications];

export function CertificationsTicker() {
  return (
    <section className="py-12 bg-[#0A1628] border-y border-white/6 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A1628] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A1628] to-transparent z-10 pointer-events-none" />

      {/* Label */}
      <div className="text-center mb-8">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-slate-500">
          Certifications &amp; Partnerships
        </p>
      </div>

      {/* Ticker */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-6 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {items.map((cert, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/8 bg-white/4 backdrop-blur-sm shrink-0 hover:border-sky-400/30 hover:bg-white/7 transition-all duration-300 cursor-default group"
            >
              <ShieldCheck
                size={14}
                className="text-sky-400/60 shrink-0 group-hover:text-sky-400 transition-colors"
              />
              <div>
                <div className="text-sm font-semibold text-white/80 whitespace-nowrap leading-none mb-0.5 group-hover:text-white transition-colors">
                  {cert.name}
                </div>
                <div className="text-[10px] text-slate-500 whitespace-nowrap leading-none">
                  {cert.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
