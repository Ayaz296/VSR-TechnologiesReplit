import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Calendar, CheckCircle2, ArrowRight, Building, Plane, Factory, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import industryAirportImg from "@/assets/images/industry-airport.png";
import industryCommercialImg from "@/assets/images/industry-commercial.png";
import industryIndustrialImg from "@/assets/images/industry-industrial.png";
import industryInfrastructureImg from "@/assets/images/industry-infrastructure.png";
import serviceCctvImg from "@/assets/images/service-cctv.png";
import serviceSmartcityImg from "@/assets/images/service-smartcity.png";

const categories = ["All", "Aviation", "Commercial", "Industrial", "Smart City", "Critical Infrastructure"];

const projects = [
  {
    id: "terminal-a",
    title: "International Terminal A — CCTV & Access Control Upgrade",
    client: "Regional Aviation Authority",
    location: "Dallas/Fort Worth, TX",
    year: "2024",
    status: "Completed",
    category: "Aviation",
    icon: <Plane size={14} />,
    image: industryAirportImg,
    scope: "Full replacement of an ageing analogue CCTV infrastructure with a 1,200-camera 4K IP network covering all passenger zones, baggage halls, apron areas, and restricted airside perimeters. Integrated with biometric boarding gates and a centralised Security Operations Centre.",
    deliverables: ["1,200 × 4K IP cameras deployed", "Structured fiber optic backbone (40km)", "30 biometric access control doors", "Centralised Security Operations Centre", "AI-powered perimeter intrusion detection", "72-hour redundant NVR storage (120TB)"],
    accent: "from-blue-500 to-blue-700",
    tagBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "metro-towers",
    title: "Metro Towers — Integrated Building Management & Surveillance",
    client: "Metro Real Estate Group",
    location: "Houston, TX",
    year: "2024",
    status: "Completed",
    category: "Commercial",
    icon: <Building size={14} />,
    image: industryCommercialImg,
    scope: "Full-building security and automation across a 42-storey Class-A commercial tower. Scope included CCTV, access control for 38 floors, visitor management, and a unified BMS platform connecting HVAC, lighting, elevators, and security under single management.",
    deliverables: ["420 IP cameras across 42 floors", "1,100 access control points", "Visitor management kiosk system", "Unified BMS — HVAC, lighting, elevators", "Parking ALPR for 600-bay garage", "24/7 remote monitoring setup"],
    accent: "from-violet-500 to-purple-700",
    tagBg: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    id: "petrochemical-plant",
    title: "Petrochemical Facility — Hazardous Zone Surveillance & Fire Safety",
    client: "Confidential Industrial Client",
    location: "Port Arthur, TX",
    year: "2023",
    status: "Completed",
    category: "Industrial",
    icon: <Factory size={14} />,
    image: industryIndustrialImg,
    scope: "Explosion-proof CCTV and thermal camera deployment across a live petrochemical facility with ATEX Zone 1 and Zone 2 classifications. Simultaneously integrated a full addressable fire detection and suppression control system compliant with NFPA 72 and API 505 standards.",
    deliverables: ["220 ATEX-certified explosion-proof cameras", "80 thermal imaging units", "Full addressable fire alarm (1,400 points)", "Sprinkler and deluge system integration", "Perimeter fence intrusion detection", "Dedicated air-gapped security VLAN"],
    accent: "from-orange-500 to-orange-700",
    tagBg: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    id: "smart-city-pilot",
    title: "Smart City Surveillance Pilot — Downtown Public Safety Network",
    client: "City of San Antonio",
    location: "San Antonio, TX",
    year: "2023",
    status: "Completed",
    category: "Smart City",
    icon: <MapPin size={14} />,
    image: serviceSmartcityImg,
    scope: "Deployment of a 200-camera public safety surveillance network across 18 city blocks, fed into a real-time command centre with AI-powered crowd analytics and direct integration with emergency dispatch services.",
    deliverables: ["200 public safety cameras (4K, 360°)", "AI crowd density and incident analytics", "Dedicated fiber optic ring network", "Real-time command and control centre", "Emergency services CAD integration", "LiDAR traffic monitoring at 12 intersections"],
    accent: "from-teal-500 to-cyan-700",
    tagBg: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    id: "data-center",
    title: "Tier III Data Centre — Physical Security & Structured Cabling",
    client: "Confidential Technology Client",
    location: "Austin, TX",
    year: "2024",
    status: "In Progress",
    category: "Critical Infrastructure",
    icon: <Shield size={14} />,
    image: industryInfrastructureImg,
    scope: "Comprehensive physical security and networking for a 40,000 sq ft Tier III data centre — mantrap entrance control, server room access management, full CCTV coverage, and high-density structured cabling for 10G and 40G data paths.",
    deliverables: ["Mantrap and biometric server room access", "340 IP cameras — internal and external", "High-density Cat6A + OM4 fiber cabling", "24-port PoE switch infrastructure", "Rack-level access monitoring sensors", "SOC design and fit-out"],
    accent: "from-slate-500 to-slate-700",
    tagBg: "bg-slate-50 text-slate-700 border-slate-200",
  },
  {
    id: "logistics-hub",
    title: "Regional Logistics Hub — Perimeter & Parking Management",
    client: "National Freight Solutions",
    location: "Memphis, TN",
    year: "2023",
    status: "Completed",
    category: "Industrial",
    icon: <Factory size={14} />,
    image: serviceCctvImg,
    scope: "Security infrastructure for a 1.2 million sq ft distribution warehouse and truck yard — perimeter fence analytics, ALPR-controlled truck entry gates, and a vehicle tracking system monitoring all yard movements in real time.",
    deliverables: ["180 perimeter cameras with fence analytics", "ALPR-controlled entry/exit gates (8 lanes)", "Real-time yard vehicle tracking", "Driver ID and dwell time reporting", "Thermal perimeter coverage — night ops", "Integrated warehouse interior CCTV"],
    accent: "from-green-500 to-emerald-700",
    tagBg: "bg-green-50 text-green-700 border-green-200",
  },
  {
    id: "hospital-campus",
    title: "Regional Medical Centre — Campus-Wide Security Infrastructure",
    client: "Confidential Healthcare Group",
    location: "Dallas, TX",
    year: "2024",
    status: "Completed",
    category: "Commercial",
    icon: <Building size={14} />,
    image: industryCommercialImg,
    scope: "End-to-end physical security deployment across a three-building medical campus. Scope included paediatric ward access control, pharmacy safe rooms, parking ALPR, and an integrated emergency alert system.",
    deliverables: ["380 IP cameras across 3 buildings", "Pharmacy and safe room access control", "ALPR parking for 1,200 bays", "Emergency alert and lockdown system", "Visitor badge printing kiosks", "24/7 remote SOC monitoring"],
    accent: "from-rose-500 to-pink-700",
    tagBg: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    id: "port-terminal",
    title: "Container Terminal — Port Security & Perimeter Surveillance",
    client: "Confidential Port Authority",
    location: "Galveston, TX",
    year: "2023",
    status: "Completed",
    category: "Critical Infrastructure",
    icon: <Shield size={14} />,
    image: industryAirportImg,
    scope: "Maritime perimeter surveillance and access control across a 280-acre container terminal including quayside, gate lanes, and restricted cargo zones. Integrated with US CBP and Coast Guard notification systems.",
    deliverables: ["620 cameras — perimeter and quayside", "ALPR and vehicle screening at 6 gate lanes", "Vessel tracking radar integration", "CBP notification interface", "Waterside PTZ thermal cameras", "Intrusion detection along 4.5km fence line"],
    accent: "from-sky-500 to-blue-700",
    tagBg: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    id: "university",
    title: "State University — Campus Safety Modernisation",
    client: "Public University System",
    location: "Austin, TX",
    year: "2022",
    status: "Completed",
    category: "Commercial",
    icon: <Building size={14} />,
    image: industryCommercialImg,
    scope: "Phased security modernisation across a 400-acre campus — replacing legacy CCTV with 4K IP infrastructure, implementing single-credential access across 80 buildings, and deploying a mass notification and emergency alert system.",
    deliverables: ["900 cameras across 80 buildings", "Single-credential campus access system", "Mass notification emergency alert system", "24/7 campus security command centre", "Parking permit ALPR integration", "Blue-light emergency phones upgrade"],
    accent: "from-indigo-500 to-indigo-700",
    tagBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    id: "power-plant",
    title: "Gas Power Station — NERC CIP Physical Security Compliance",
    client: "Confidential Energy Utility",
    location: "Corpus Christi, TX",
    year: "2022",
    status: "Completed",
    category: "Critical Infrastructure",
    icon: <Shield size={14} />,
    image: industryInfrastructureImg,
    scope: "Full NERC CIP physical security programme for a 500MW combined-cycle gas plant — perimeter hardening, electronic security perimeter (ESP) implementation, and automated intrusion detection with SCADA integration.",
    deliverables: ["NERC CIP compliant ESP implementation", "340 cameras — internal and perimeter", "Multi-factor authentication at all ESPs", "24/7 electronic access monitoring", "SCADA and DCS network segregation", "Security plan documentation and audit support"],
    accent: "from-yellow-500 to-amber-600",
    tagBg: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
  {
    id: "retail-chain",
    title: "National Retail Chain — Loss Prevention & Analytics Rollout",
    client: "Confidential Retail Group",
    location: "Multi-site — TX, OK, LA",
    year: "2023",
    status: "Completed",
    category: "Commercial",
    icon: <Building size={14} />,
    image: industryCommercialImg,
    scope: "Standardised CCTV and video analytics rollout across 120 retail locations — including shelf analytics, customer flow heatmapping, automated self-checkout exception reporting, and centralised monitoring from a regional SOC.",
    deliverables: ["4,800 cameras across 120 stores", "Self-checkout exception reporting", "Customer flow and heat mapping analytics", "Regional SOC with centralised management", "Real-time shrinkage alert platform", "120-store structured cabling standardisation"],
    accent: "from-pink-500 to-rose-600",
    tagBg: "bg-pink-50 text-pink-700 border-pink-200",
  },
  {
    id: "stadium",
    title: "Multi-Use Stadium — Event Security & Crowd Analytics",
    client: "Confidential Sports & Entertainment Group",
    location: "Fort Worth, TX",
    year: "2024",
    status: "In Progress",
    category: "Smart City",
    icon: <MapPin size={14} />,
    image: serviceSmartcityImg,
    scope: "Comprehensive event security infrastructure for a 55,000-capacity stadium — perimeter crowd analytics, facial recognition at VIP and restricted access gates, incident detection, and an integrated command and control centre for event-day operations.",
    deliverables: ["780 cameras — bowl, concourse, perimeter", "AI crowd density and incident analytics", "Facial recognition at 12 VIP access gates", "Event-day command and control centre", "Emergency evacuation guidance system", "Broadcast-compatible camera integration"],
    accent: "from-teal-500 to-green-600",
    tagBg: "bg-teal-50 text-teal-700 border-teal-200",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "14+", label: "Years of Experience" },
  { value: "40+", label: "Enterprise Clients" },
  { value: "98%", label: "Client Retention" },
];

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className={`absolute bottom-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${project.tagBg} backdrop-blur-sm`}>
            {project.icon} {project.category}
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full p-2 hover:bg-white/20 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-8">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><MapPin size={12} />{project.location}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1.5"><Calendar size={12} />{project.year}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className={cn("font-medium", project.status === "In Progress" ? "text-amber-600" : "text-green-600")}>
              {project.status}
            </span>
          </div>

          <h2 className="text-xl font-bold text-foreground mb-4 leading-snug">{project.title}</h2>

          {/* Accent line */}
          <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${project.accent} mb-6`} />

          <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.scope}</p>

          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Deliverables</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
            {project.deliverables.map((d) => (
              <div key={d} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 size={13} className="text-primary mt-0.5 shrink-0" />
                {d}
              </div>
            ))}
          </div>

          <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Client: {project.client}</span>
            <a href="mailto:procurement@vsrtech.com">
              <Button size="sm" className={`bg-gradient-to-r ${project.accent} text-white border-0 hover:opacity-90`}>
                Similar Project? <ArrowRight size={13} className="ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Header ── */}
      <div className="relative pt-36 pb-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <CheckCircle2 size={14} />
              Selected Projects
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-3xl leading-[1.1]">
              Proven at Scale.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-primary">Across Every Sector.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-16">
              From international airports to city-wide smart surveillance networks, our portfolio demonstrates the depth of our capabilities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-bold text-white">{s.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Projects grid ── */}
      <main className="flex-1 py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200",
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                    : "bg-white text-slate-600 border-slate-200 hover:border-primary/40 hover:text-primary"
                )}
              >
                {cat}
                <span className={cn(
                  "ml-2 text-xs font-bold",
                  activeCategory === cat ? "text-white/70" : "text-slate-400"
                )}>
                  {cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <AnimatePresence>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-400"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                    {/* Status dot */}
                    <div className={cn(
                      "absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-sm border",
                      project.status === "In Progress"
                        ? "bg-amber-500/20 text-amber-300 border-amber-400/30"
                        : "bg-green-500/20 text-green-300 border-green-400/30"
                    )}>
                      <div className={cn("w-1.5 h-1.5 rounded-full", project.status === "In Progress" ? "bg-amber-400 animate-pulse" : "bg-green-400")} />
                      {project.status}
                    </div>

                    {/* Category tag */}
                    <div className={cn("absolute bottom-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold border backdrop-blur-sm", project.tagBg)}>
                      {project.icon} {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Gradient accent */}
                    <div className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${project.accent} mb-3 group-hover:w-16 transition-all duration-300`} />

                    <h3 className="text-sm font-bold text-foreground leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1"><MapPin size={10} />{project.location.split(",")[0]}</span>
                      <span className="flex items-center gap-1"><Calendar size={10} />{project.year}</span>
                    </div>

                    {/* View details hint */}
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-1 group-hover:translate-y-0">
                      View details <ArrowRight size={11} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      {/* CTA */}
      <div className="bg-primary py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Have a project in mind?</h3>
            <p className="text-primary-foreground/80 text-lg">Let's discuss the scope and build a tailored security solution for your facility.</p>
          </div>
          <a href="mailto:info@vsrt.in">
            <Button size="lg" variant="secondary" className="text-primary font-semibold h-14 px-10 shadow-xl hover:scale-[1.03] transition-all duration-300 shrink-0">
              Start the Conversation
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
