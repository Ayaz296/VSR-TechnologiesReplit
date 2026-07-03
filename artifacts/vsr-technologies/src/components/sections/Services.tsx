import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Video, Eye, Network, Building2, Map, DoorClosed, Flame, Car, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useRef, useState } from "react";

const services = [
  {
    icon: Video,
    title: "CCTV Surveillance",
    desc: "Comprehensive CCTV surveillance and security solutions designed to enhance safety, security, and operational visibility.",
    features: ["Video Management Systems: Milestone, IndigoVision, Vehant & more", "HD/4K IP camera deployment", "Centralised NVR/DVR management", "24/7 remote monitoring integration"],
    color: "from-primary to-blue-700",
    num: "01",
  },
  {
    icon: Eye,
    title: "Video Analytics",
    desc: "AI and computer-vision powered video analytics for real-time monitoring, automated threat detection, and data-driven decisions.",
    features: ["Facial recognition & object detection/tracking", "ANPR / LPR solutions", "Perimeter security & intrusion detection", "Crowd, people & behavioural analytics"],
    color: "from-indigo-500 to-violet-600",
    num: "02",
  },
  {
    icon: Network,
    title: "Networking Solutions",
    desc: "End-to-end networking solutions delivering reliable, secure, and scalable IT infrastructure.",
    features: ["Network infrastructure design & deployment", "Wireless networking solutions", "Network security: firewalls & VPNs", "Data centre, server & storage infrastructure"],
    color: "from-teal-500 to-teal-700",
    num: "03",
  },
  {
    icon: Building2,
    title: "Building Management",
    desc: "Unified Building Management System integrating fire, access, CCTV, power, and automation into one control platform.",
    features: ["Fire alarm & access control integration", "Public address & electrical power systems", "Solar power solutions", "Building analytics & reporting"],
    color: "from-primary to-blue-700",
    num: "04",
  },
  {
    icon: Map,
    title: "Smart City Solutions",
    desc: "Smart and Safe City services spanning surveillance, traffic management, utilities, and AI-driven decision support.",
    features: ["City surveillance & intelligent traffic management (ITMS)", "Smart street lighting & smart parking", "IoT sensor networks & cybersecurity services", "AI, analytics & decision support platforms"],
    color: "from-indigo-500 to-violet-600",
    num: "05",
  },
  {
    icon: DoorClosed,
    title: "Entrance Control",
    desc: "Complete entrance control and perimeter security systems managing who enters your facility, when, and how.",
    features: ["Access control: RFID, biometric, face, QR", "ANPR & boom barrier automation", "Turnstiles, flap barriers & tyre killers", "Video door phone & intercom systems"],
    color: "from-teal-500 to-teal-700",
    num: "06",
  },
  {
    icon: Flame,
    title: "Fire Alarm Systems",
    desc: "Addressable fire detection, alarm, and suppression-integrated systems engineered for early warning and rapid response.",
    features: ["Addressable smoke & heat detectors", "Voice evacuation & PA integration", "Sprinkler & suppression tie-in", "NFPA-compliant installations"],
    color: "from-red-500 to-rose-700",
    num: "07",
  },
  {
    icon: Car,
    title: "Parking Management",
    desc: "Advanced parking management and access control solutions bringing order and intelligence to vehicle flow.",
    features: ["ANPR-based access with boom barrier integration", "Boom barriers, tyre killers & bollards", "Visitor management system", "Smart parking with AI video analytics"],
    color: "from-primary to-blue-700",
    num: "08",
  },
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
      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-100 cursor-pointer"
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
        <p className="relative z-10 text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
          {service.desc}
        </p>

        <ul className="relative z-10 space-y-1.5 mb-4 sm:mb-5">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
              <span className={`mt-1.5 w-1 h-1 rounded-full bg-gradient-to-br ${service.color} shrink-0`} />
              {f}
            </li>
          ))}
        </ul>

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
    <section id="services" className="py-32 bg-gradient-to-b from-[#EFF6FF] to-[#EEF4FF] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-400/15 blur-[100px] pointer-events-none" />

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
              We don't install components. We architect complete security infrastructure tailored to your environment.
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
