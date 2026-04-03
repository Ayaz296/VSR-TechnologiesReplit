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
  },
  {
    num: "02",
    icon: Server,
    title: "Tailored Architecture",
    desc: "No off-the-shelf packages. Every system is bespoke — engineered for your specific threat model, facility layout, and compliance requirements.",
    color: "text-violet-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Enterprise Reliability",
    desc: "Commercial-grade hardware, redundant network designs, and failover configurations guarantee 99.9% uptime for mission-critical systems.",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    num: "04",
    icon: UserCog,
    title: "Certified Expertise",
    desc: "Our engineers hold NICET, BICSI, Axis, and Bosch certifications. You get specialists — not generalists — for every system we deploy.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    num: "05",
    icon: HardHat,
    title: "Critical Experience",
    desc: "Proven track record securing airports, power plants, data centres, and industrial cores — environments where failure has real consequences.",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    num: "06",
    icon: Clock,
    title: "24 / 7 Support",
    desc: "Round-the-clock monitoring, remote diagnostics, and on-site response — because threats don't respect business hours.",
    color: "text-sky-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-[#0A1628] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.1]">
            Why Critical Facilities
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-primary">Choose VSR</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            When security failure is not an option, organizations rely on our engineering standards and proven methodology.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-8 lg:p-10 bg-[#0D1E3A] hover:bg-[#0F2244] transition-colors duration-400 overflow-hidden cursor-default"
              >
                {/* Large number watermark */}
                <div className="absolute -top-4 -right-3 text-[100px] font-black text-white/[0.03] leading-none select-none group-hover:text-white/[0.05] transition-colors duration-400">
                  {f.num}
                </div>

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${f.bg} ${f.color} mb-6 relative z-10`}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 relative z-10">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10">{f.desc}</p>

                {/* Hover accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${f.bg.replace("bg-", "from-").replace("-50", "-400")} to-transparent`}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: "100%" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
