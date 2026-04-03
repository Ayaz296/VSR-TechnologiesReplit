import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Calendar, CheckCircle2, ArrowRight, Building, Plane, Factory, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import industryAirportImg from "@/assets/images/industry-airport.png";
import industryCommercialImg from "@/assets/images/industry-commercial.png";
import industryIndustrialImg from "@/assets/images/industry-industrial.png";
import industryInfrastructureImg from "@/assets/images/industry-infrastructure.png";
import serviceCctvImg from "@/assets/images/service-cctv.png";
import serviceSmartcityImg from "@/assets/images/service-smartcity.png";

const projects = [
  {
    id: "terminal-a",
    title: "International Terminal A — CCTV & Access Control Upgrade",
    client: "Regional Aviation Authority",
    location: "Dallas/Fort Worth, TX",
    year: "2024",
    status: "Completed",
    category: "Aviation",
    icon: <Plane size={18} />,
    image: industryAirportImg,
    scope: "Full replacement of an aging analogue CCTV infrastructure with a 1,200-camera 4K IP network covering all passenger zones, baggage halls, apron areas, and restricted airside perimeters. Integrated with biometric boarding gates and a centralised security operations centre.",
    deliverables: [
      "1,200 × 4K IP cameras deployed",
      "Structured fiber optic backbone (40km)",
      "30 access control doors — biometric + smart card",
      "Centralised Security Operations Centre (SOC)",
      "AI-powered perimeter intrusion detection",
      "72-hour redundant NVR storage (120TB)",
    ],
    accent: "bg-blue-600",
    tag: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "metro-towers",
    title: "Metro Towers — Integrated Building Management & Surveillance",
    client: "Metro Real Estate Group",
    location: "Houston, TX",
    year: "2024",
    status: "Completed",
    category: "Commercial",
    icon: <Building size={18} />,
    image: industryCommercialImg,
    scope: "Full-building security and automation deployment across a 42-story Class-A commercial tower. Scope included CCTV, access control for 38 floors, visitor management integration, and a unified BMS platform connecting HVAC, lighting, elevators, and security under single management.",
    deliverables: [
      "420 IP cameras across 42 floors",
      "1,100 access control points",
      "Visitor management kiosk system",
      "Unified BMS — HVAC, lighting, elevators",
      "Parking ALPR for 600-bay garage",
      "24/7 remote monitoring setup",
    ],
    accent: "bg-violet-600",
    tag: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    id: "petrochemical-plant",
    title: "Petrochemical Facility — Hazardous Zone Surveillance & Fire Safety",
    client: "Confidential Industrial Client",
    location: "Port Arthur, TX",
    year: "2023",
    status: "Completed",
    category: "Industrial",
    icon: <Factory size={18} />,
    image: industryIndustrialImg,
    scope: "Explosion-proof CCTV and thermal camera deployment across a live petrochemical processing facility with ATEX Zone 1 and Zone 2 classifications. Simultaneously integrated a full addressable fire detection and suppression control system compliant with NFPA 72 and API 505 standards.",
    deliverables: [
      "220 ATEX-certified explosion-proof cameras",
      "80 thermal imaging units for hot-spot detection",
      "Full addressable fire alarm network (1,400 points)",
      "Sprinkler and deluge system integration",
      "Perimeter fence intrusion detection",
      "Dedicated air-gapped security VLAN",
    ],
    accent: "bg-orange-600",
    tag: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    id: "smart-city-pilot",
    title: "Smart City Surveillance Pilot — Downtown Public Safety Network",
    client: "City of San Antonio",
    location: "San Antonio, TX",
    year: "2023",
    status: "Completed",
    category: "Smart City",
    icon: <MapPin size={18} />,
    image: serviceSmartcityImg,
    scope: "Deployment of a 200-camera public safety surveillance network across 18 city blocks in the downtown core, fed into a real-time command centre with AI-powered crowd analytics, incident detection, and direct integration with emergency dispatch services.",
    deliverables: [
      "200 public safety cameras (4K, 360°)",
      "AI crowd density and incident analytics",
      "Dedicated fiber optic ring network",
      "Real-time command and control centre",
      "Emergency services CAD integration",
      "LiDAR traffic monitoring at 12 intersections",
    ],
    accent: "bg-teal-600",
    tag: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    id: "data-center",
    title: "Tier III Data Centre — Physical Security & Structured Cabling",
    client: "Confidential Technology Client",
    location: "Austin, TX",
    year: "2024",
    status: "In Progress",
    category: "Critical Infrastructure",
    icon: <Shield size={18} />,
    image: industryInfrastructureImg,
    scope: "Comprehensive physical security and networking infrastructure for a 40,000 sq ft Tier III data centre. Project includes mantrap entrance control, server room access management, full internal CCTV coverage, and a high-density structured cabling plant supporting 10G and 40G data paths.",
    deliverables: [
      "Mantrap and biometric server room access",
      "340 IP cameras — internal and external",
      "High-density Cat6A + OM4 fiber cabling",
      "24-port PoE switch infrastructure",
      "Rack-level access monitoring sensors",
      "SOC design and fit-out",
    ],
    accent: "bg-slate-700",
    tag: "bg-slate-50 text-slate-700 border-slate-200",
  },
  {
    id: "logistics-hub",
    title: "Regional Logistics Hub — Perimeter & Parking Management",
    client: "National Freight Solutions",
    location: "Memphis, TN",
    year: "2023",
    status: "Completed",
    category: "Industrial",
    icon: <Factory size={18} />,
    image: serviceCctvImg,
    scope: "Security infrastructure for a 1.2 million sq ft distribution warehouse and truck yard. Deployment focused on perimeter fence line analytics, ALPR-controlled truck entry gates, and a vehicle tracking system that monitors all yard movements in real time.",
    deliverables: [
      "180 perimeter cameras with fence analytics",
      "ALPR-controlled entry/exit gates (8 lanes)",
      "Real-time yard vehicle tracking system",
      "Driver ID and dwell time reporting",
      "Thermal perimeter coverage — night operations",
      "Integrated warehouse interior CCTV",
    ],
    accent: "bg-green-700",
    tag: "bg-green-50 text-green-700 border-green-200",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "12+", label: "Years of Experience" },
  { value: "40+", label: "Enterprise Clients" },
  { value: "98%", label: "Client Retention" },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <div className="relative pt-36 pb-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.12)_0%,transparent_60%)] pointer-events-none" />
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
              Selected Projects
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-3xl leading-[1.1]">
              Proven at Scale.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-primary">Across Every Sector.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-16">
              From international airports to city-wide smart surveillance networks, our project portfolio demonstrates the depth and breadth of our capabilities.
            </p>

            {/* Stats */}
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

      {/* Projects */}
      <main className="flex-1 py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative lg:w-80 xl:w-96 h-64 lg:h-auto shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className={`absolute top-5 left-5 h-1.5 w-10 rounded-full ${project.accent}`} />
                  <div className={`absolute bottom-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${project.tag} backdrop-blur-sm`}>
                    {project.icon}
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5"><MapPin size={13} />{project.location}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1.5"><Calendar size={13} />{project.year}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className={`flex items-center gap-1.5 font-medium ${project.status === "In Progress" ? "text-amber-600" : "text-green-600"}`}>
                        <CheckCircle2 size={13} />
                        {project.status}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl text-sm">
                      {project.scope}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Client: {project.client}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* CTA */}
      <div className="bg-primary py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Have a project in mind?</h3>
            <p className="text-primary-foreground/80 text-lg">Let's discuss the scope and build a tailored security solution for your facility.</p>
          </div>
          <a href="/#contact">
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
