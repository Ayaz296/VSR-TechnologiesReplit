import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Video, Eye, Network, Building2, Map, DoorClosed, Flame, Car, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useRef, useState } from "react";

const services = [
  { icon: Video, title: "CCTV Surveillance", desc: "HD networked camera systems for total site visibility.", color: "from-blue-500 to-blue-700", num: "01" },
  { icon: Eye, title: "Video Analytics", desc: "AI-driven threat detection and behavioral analysis.", color: "from-violet-500 to-purple-700", num: "02" },
  { icon: Network, title: "Networking Solutions", desc: "Structured cabling and fiber backbone infrastructure.", color: "from-teal-500 to-cyan-700", num: "03" },
  { icon: Building2, title: "Building Management", desc: "Unified control of HVAC, access, and security systems.", color: "from-amber-500 to-orange-700", num: "04" },
  { icon: Map, title: "Smart City Solutions", desc: "Municipal-scale surveillance and public safety networks.", color: "from-sky-500 to-blue-600", num: "05" },
  { icon: DoorClosed, title: "Entrance Control", desc: "Biometric and credential access for restricted zones.", color: "from-green-500 to-emerald-700", num: "06" },
  { icon: Flame, title: "Fire Alarm Systems", desc: "NFPA-compliant fire detection and suppression control.", color: "from-red-500 to-rose-700", num: "07" },
  { icon: Car, title: "Parking Management", desc: "ALPR-controlled vehicle flow and occupancy tracking.", color: "from-slate-500 to-slate-700", num: "08" },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 cursor-pointer"
      style={{ boxShadow: hovered ? "0 20px 60px -10px rgba(0,0,0,0.12)" : "0 1px 4px rgba(0,0,0,0.05)" }}
    >
      {/* Animated gradient top bar */}
      <motion.div
        className={`h-1 w-full bg-gradient-to-r ${service.color}`}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.07 + 0.3 }}
      />

      <div className="p-5 sm:p-7 relative">
        {/* Large faded number in background */}
        <div className="absolute top-4 right-5 text-[72px] font-black text-slate-100 leading-none select-none transition-colors duration-300 group-hover:text-slate-50">
          {service.num}
        </div>

        {/* Icon */}
        <motion.div
          className={`relative z-10 inline-flex p-3.5 rounded-xl bg-gradient-to-br ${service.color} text-white mb-5 shadow-lg`}
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Icon className="w-5 h-5" />
        </motion.div>

        <h3 className="relative z-10 text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="relative z-10 text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
          {service.desc}
        </p>

        {/* Reveal arrow */}
        <motion.div
          className="relative z-10 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ x: hovered ? 0 : -8 }}
          transition={{ duration: 0.2 }}
        >
          Learn more <ArrowRight size={13} />
        </motion.div>
      </div>

      {/* Bottom gradient wash on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} pointer-events-none`}
        animate={{ opacity: hovered ? 0.03 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-[#F0F4FF] to-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Integrated Security
              <br />
              <span className="text-primary">Ecosystems</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              We don't install components — we architect complete security infrastructure tailored to your environment.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/services">
              <div className="group flex items-center gap-2 text-sm font-semibold text-primary border-b-2 border-primary/30 hover:border-primary pb-0.5 transition-colors cursor-pointer whitespace-nowrap">
                View all services <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
