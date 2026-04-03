import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Video,
  Eye,
  Network,
  Building2,
  Map,
  DoorClosed,
  Flame,
  Car,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "cctv",
    icon: <Video className="w-8 h-8" />,
    title: "CCTV Surveillance",
    tagline: "Advanced video monitoring systems for comprehensive security coverage",
    description:
      "Our CCTV systems deliver enterprise-grade, high-definition video coverage for every corner of your facility. From perimeter surveillance to internal zone monitoring, we design multi-camera networks tailored to your site's specific threat profile and operational requirements.",
    features: [
      "4K and HD IP camera deployment",
      "Night vision and thermal imaging options",
      "Centralized NVR/DVR management",
      "Redundant recording infrastructure",
      "Pan-Tilt-Zoom remote control",
      "Long-range perimeter coverage",
    ],
    accent: "from-blue-600 to-blue-800",
    light: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    id: "analytics",
    icon: <Eye className="w-8 h-8" />,
    title: "Video Analytics",
    tagline: "Intelligent video analysis for enhanced security decision-making",
    description:
      "Move beyond passive monitoring with AI-powered video analytics. Our systems automatically detect anomalies, track objects, identify patterns, and issue real-time alerts — dramatically reducing response times and the burden on human security operators.",
    features: [
      "AI-driven threat detection",
      "Facial and object recognition",
      "Crowd density & flow analysis",
      "Behavioral anomaly detection",
      "License plate recognition (LPR)",
      "Automated alert management",
    ],
    accent: "from-violet-600 to-purple-800",
    light: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    id: "networking",
    icon: <Network className="w-8 h-8" />,
    title: "Networking Solutions",
    tagline: "Robust network infrastructure for seamless connectivity",
    description:
      "A security system is only as strong as its network. We architect and deploy structured cabling, fiber optic backbones, and secure VLANs that provide zero-latency video transmission, isolated security data pathways, and the bandwidth headroom to scale as your needs grow.",
    features: [
      "Cat6A & fiber optic structured cabling",
      "Network switch & PoE deployment",
      "Isolated security VLANs",
      "Redundant uplink configuration",
      "TIA-568 certified installations",
      "End-to-end cable documentation",
    ],
    accent: "from-teal-600 to-cyan-800",
    light: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    id: "bms",
    icon: <Building2 className="w-8 h-8" />,
    title: "Building Management",
    tagline: "Comprehensive control systems for optimal building operations",
    description:
      "We integrate HVAC, lighting, access control, and security into a unified Building Management System (BMS), giving facility managers a single pane of glass to oversee, control, and automate all critical building functions — improving safety, efficiency, and occupant comfort.",
    features: [
      "Unified BMS dashboard",
      "HVAC and lighting integration",
      "Energy optimization controls",
      "Elevator and door automation",
      "Remote management access",
      "Audit trails and reporting",
    ],
    accent: "from-amber-600 to-orange-700",
    light: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    id: "smartcity",
    icon: <Map className="w-8 h-8" />,
    title: "Smart City Solutions",
    tagline: "Comprehensive urban technology for better quality of life",
    description:
      "VSR Technologies extends its infrastructure expertise to macro-scale urban deployments. We connect municipal assets — traffic monitoring, public safety cameras, emergency communication networks, and smart lighting — into cohesive city-wide platforms.",
    features: [
      "Wide-area surveillance networks",
      "Traffic flow and incident detection",
      "Public safety command centers",
      "Emergency communication systems",
      "Smart street lighting controls",
      "IoT sensor network integration",
    ],
    accent: "from-sky-600 to-blue-700",
    light: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    id: "entrance",
    icon: <DoorClosed className="w-8 h-8" />,
    title: "Entrance Control",
    tagline: "Secure access management for regulated entry to facilities",
    description:
      "Control who enters your facility, when, and where. Our entrance control systems combine biometric readers, smart card access, turnstiles, and intercom solutions into a seamless workflow that enforces security policy without creating friction for authorized personnel.",
    features: [
      "Biometric fingerprint and facial readers",
      "Smart card / RFID access systems",
      "Turnstile and speed lane integration",
      "Visitor management software",
      "Anti-tailgate sensor technology",
      "Multi-door controller networks",
    ],
    accent: "from-green-600 to-emerald-800",
    light: "bg-green-50",
    border: "border-green-100",
  },
  {
    id: "fire",
    icon: <Flame className="w-8 h-8" />,
    title: "Fire Alarm System",
    tagline: "Reliable fire detection and alert systems for life safety",
    description:
      "Protecting lives is the highest security imperative. Our fire alarm installations use addressable detector networks, voice evacuation systems, and suppression integration to detect, locate, and respond to fire incidents with the speed and precision your facility demands.",
    features: [
      "Addressable smoke and heat detectors",
      "Voice evacuation and PA integration",
      "Sprinkler and suppression tie-in",
      "Panel monitoring and remote alerts",
      "NFPA 72 compliant installations",
      "Regular testing and maintenance",
    ],
    accent: "from-red-600 to-rose-700",
    light: "bg-red-50",
    border: "border-red-100",
  },
  {
    id: "parking",
    icon: <Car className="w-8 h-8" />,
    title: "Parking Management",
    tagline: "Intelligent parking solutions for optimized space utilization",
    description:
      "From ALPR-controlled barriers to real-time occupancy dashboards, our parking management systems bring order and accountability to vehicle flow in and out of your facility — reducing unauthorized access, improving throughput, and providing actionable analytics.",
    features: [
      "ALPR (license plate recognition) barriers",
      "Real-time occupancy sensors",
      "Parking guidance display systems",
      "Permit and validation management",
      "CCTV-integrated ticketing",
      "Revenue control systems",
    ],
    accent: "from-slate-600 to-slate-800",
    light: "bg-slate-50",
    border: "border-slate-100",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page header */}
      <div className="relative pt-36 pb-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <CheckCircle2 size={14} />
              Full-Spectrum Security Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-3xl leading-[1.1]">
              Every System.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-primary">One Partner.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              We design, install, and maintain the complete stack of physical security and building infrastructure — from a single access point to a campus-wide smart city deployment.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services list */}
      <main className="flex-1 py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`group flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden border ${service.border} bg-white shadow-sm hover:shadow-xl transition-all duration-500`}
              >
                {/* Colored accent bar */}
                <div className={`lg:w-2 w-full h-2 lg:h-auto bg-gradient-to-b ${service.accent} shrink-0`} />

                <div className="flex flex-col md:flex-row flex-1 gap-0">
                  {/* Icon + title block */}
                  <div className={`${service.light} p-8 md:p-10 flex flex-col justify-between md:w-72 lg:w-80 shrink-0`}>
                    <div>
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.accent} text-white mb-6 shadow-lg`}>
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-3">{service.title}</h2>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{service.tagline}</p>
                    </div>
                    <div className="mt-8 hidden md:block">
                      <a href="#contact">
                        <Button variant="outline" size="sm" className="group/btn text-xs border-slate-200 hover:border-primary hover:text-primary transition-all">
                          Request a Quote
                          <ArrowRight size={12} className="ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Description + features */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-2xl">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2.5 text-sm text-slate-700">
                            <CheckCircle2 size={15} className="text-primary shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 md:hidden">
                      <a href="#contact">
                        <Button variant="outline" size="sm" className="text-xs border-slate-200 hover:border-primary hover:text-primary transition-all">
                          Request a Quote
                          <ArrowRight size={12} className="ml-1" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* CTA band */}
      <div className="bg-primary py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Ready to secure your facility?</h3>
            <p className="text-primary-foreground/80 text-lg">Our engineers are available for a free consultation and site assessment.</p>
          </div>
          <a href="/#contact">
            <Button size="lg" variant="secondary" className="text-primary font-semibold h-14 px-10 shadow-xl hover:scale-[1.03] transition-all duration-300 shrink-0">
              Contact Our Team
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
