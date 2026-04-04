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

const items = [...certifications, ...certifications];

export function CertificationsTicker() {
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Label */}
      <div className="text-center mb-8">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400">
          Certifications &amp; Partnerships
        </p>
      </div>

      {/* Ticker */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-4 shrink-0"
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
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-100 bg-slate-50 shrink-0 hover:border-primary/20 hover:bg-blue-50/60 transition-all duration-300 cursor-default group shadow-sm"
            >
              <ShieldCheck
                size={14}
                className="text-primary/40 shrink-0 group-hover:text-primary transition-colors"
              />
              <div>
                <div className="text-sm font-semibold text-slate-700 whitespace-nowrap leading-none mb-0.5 group-hover:text-primary transition-colors">
                  {cert.name}
                </div>
                <div className="text-[10px] text-slate-400 whitespace-nowrap leading-none">
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
