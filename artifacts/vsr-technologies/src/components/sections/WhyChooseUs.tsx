import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Server, UserCog, Network, Clock } from "lucide-react";

const features = [
  {
    num: "01",
    icon: Network,
    title: "End-to-End Delivery",
    desc: "From initial CAD design to final commissioning and ongoing maintenance — we handle the entire lifecycle without third-party handoffs.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    accent: "from-blue-400 to-blue-600",
  },
  {
    num: "02",
    icon: Server,
    title: "Tailored Architecture",
    desc: "No off-the-shelf packages. Every system is bespoke — engineered for your specific threat model, facility layout, and compliance requirements.",
    color: "text-violet-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
    accent: "from-violet-400 to-violet-600",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Enterprise Reliability",
    desc: "Commercial-grade hardware, redundant network designs, and failover configurations guarantee 99.9% uptime for mission-critical systems.",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
    accent: "from-teal-400 to-teal-600",
  },
  {
    num: "04",
    icon: UserCog,
    title: "Certified Expertise",
    desc: "Our engineers hold NICET, BICSI, Axis, and Bosch certifications. You get specialists — not generalists — for every system we deploy.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    accent: "from-amber-400 to-amber-600",
  },
  {
    num: "05",
    icon: HardHat,
    title: "Critical Experience",
    desc: "Proven track record securing airports, power plants, data centres, and industrial cores — environments where failure has real consequences.",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
    accent: "from-red-400 to-red-600",
  },
  {
    num: "06",
    icon: Clock,
    title: "24 / 7 Support",
    desc: "Round-the-clock monitoring, remote diagnostics, and on-site response — because threats don't respect business hours.",
    color: "text-sky-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    accent: "from-sky-400 to-sky-600",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#F8FAFC] to-[#F0F4FF] relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Light glow accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-blue-50/80 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-medium mb-5 sm:mb-6">
            Why VSR
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-5 leading-[1.1]">
            Why Critical Facilities
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-500">
              Choose VSR
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed">
            When security failure is not an option, organizations rely on our engineering standards and proven methodology.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-5 sm:p-7 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-default"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              >
                {/* Number watermark */}
                <div className="absolute -top-2 -right-2 text-[72px] sm:text-[90px] font-black text-slate-50 leading-none select-none group-hover:text-slate-100/80 transition-colors duration-300">
                  {f.num}
                </div>

                {/* Top accent line */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${f.accent}`}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 + 0.2 }}
                />

                {/* Icon */}
                <div className={`inline-flex p-2.5 sm:p-3 rounded-xl ${f.bg} ${f.color} mb-4 sm:mb-5 relative z-10`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 sm:mb-3 relative z-10">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed relative z-10">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
