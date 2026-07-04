import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Plane,
  Shield,
  Factory,
  Landmark,
  Cross,
  Building,
  X,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import imgAviation from "@/assets/images/projects/ind-airport.png";
import imgDefence from "@/assets/images/projects/industry-industrial.png";
import imgIndustrial from "@/assets/images/projects/ind-industrial.png";
import imgGovernment from "@/assets/images/projects/ind-critical.png";
import imgHealthcare from "@/assets/images/projects/industry-commercial.png";
import imgBfsi from "@/assets/images/projects/ind-commercial.png";

type ProjectEntry = { y: number; w: string; p: string };
type Client = {
  id: string;
  name: string;
  cat: string;
  intro: string;
  image?: string; // optional per-client photo — drop file in public/projects/ and set path here
  projects: ProjectEntry[];
};

const CATS: Record<string, { label: string; icon: React.ReactElement; accent: string; tagBg: string; image: string }> = {
  aviation: { label: "Aviation", icon: <Plane size={14} />, accent: "from-blue-500 to-blue-700", tagBg: "bg-blue-50 text-blue-700 border-blue-200", image: imgAviation },
  defence: { label: "Defence & Aerospace", icon: <Shield size={14} />, accent: "from-violet-500 to-purple-700", tagBg: "bg-violet-50 text-violet-700 border-violet-200", image: imgDefence },
  industrial: { label: "Industrial & Energy", icon: <Factory size={14} />, accent: "from-amber-500 to-orange-700", tagBg: "bg-amber-50 text-amber-700 border-amber-200", image: imgIndustrial },
  government: { label: "Government & Smart City", icon: <Landmark size={14} />, accent: "from-teal-500 to-cyan-700", tagBg: "bg-teal-50 text-teal-700 border-teal-200", image: imgGovernment },
  healthcare: { label: "Healthcare", icon: <Cross size={14} />, accent: "from-rose-500 to-pink-700", tagBg: "bg-rose-50 text-rose-700 border-rose-200", image: imgHealthcare },
  bfsi: { label: "BFSI & Commercial", icon: <Building size={14} />, accent: "from-slate-500 to-slate-700", tagBg: "bg-slate-50 text-slate-700 border-slate-200", image: imgBfsi },
};

const categories = ["All", ...Object.keys(CATS)];

const clients: Client[] = [
  {
    id: "gmr-hyderabad",
    name: "GMR International Airport, Hyderabad",
    cat: "aviation",
    image: "artifacts/vsr-technologies/src/assets/images/projects/gmr-hyderabad.jpg",
    intro: "Our longest-running relationship: an ongoing, multi-year security and infrastructure programme covering CCTV, fire safety, access control, structured cabling and passive network infrastructure across the entire airport.",
    projects: [
      { y: 2025, w: "CCTV surveillance across the airside perimeter area for enhanced security monitoring.", p: "GMR Groups" },
      { y: 2025, w: "Installation, testing and commissioning of the Fire Alarm System, enhancing facility-wide fire safety.", p: "Johnson Control (India) Pvt Ltd" },
      { y: 2025, w: "Installation, testing and commissioning of the Access Control System at airport security gates.", p: "Johnson Control (India) Pvt Ltd" },
      { y: 2025, w: "Supply, installation, testing and commissioning of CCTV surveillance at Cargo T2 of GHIAL.", p: "WAISL Limited" },
      { y: 2025, w: "Supply, installation, testing and commissioning of IT passive infrastructure for parking ramps, FASTag enabling project.", p: "GMR Groups" },
      { y: 2025, w: "Supply of skilled manpower for operation and maintenance of Stratacache kiosk machines displaying flight information.", p: "Stratecache India Pvt Ltd" },
      { y: 2025, w: "CCTV surveillance ensuring enhanced security monitoring at the Air Traffic Reporting System.", p: "GMR Groups" },
      { y: 2025, w: "Passive network infrastructure including IT cable re-routing near the storm water drain to the isolation bay.", p: "GMR Groups" },
      { y: 2024, w: "Supply, installation, testing and commissioning of structured cabling throughout the entire airport premises.", p: "GMR Groups" },
      { y: 2024, w: "Annual Maintenance Contract for operation and servicing of passive components, 24×7×365 support.", p: "WAISL Limited" },
      { y: 2023, w: "Annual Maintenance Contract for operation and servicing of passive components, 24×7×365 support.", p: "WAISL Limited" },
      { y: 2022, w: "AMC for UVSS, bollards, barriers, MRO taxiway gate, swing gates, public address and intercom systems.", p: "Sindoori Solutions" },
      { y: 2021, w: "Supply and installation of high-quality structured cabling infrastructure (CAT6/Fiber), including conduiting and cable-tray dressing.", p: "GMR Groups" },
      { y: 2021, w: "Installation and commissioning of around 3,300 CCTV cameras across the airport premises.", p: "Echelon Edge" },
      { y: 2020, w: "Optical Fiber Cable (OFC) laying, including all associated civil works, as part of the IT infrastructure expansion project.", p: "GMR Groups" },
      { y: 2020, w: "Laying and testing of 100km of Optical Fiber Cable for IT infrastructure and backbone networking.", p: "Orchids Network & Systems" },
      { y: 2020, w: "Installation and commissioning of perimeter CCTV surveillance integrated with power fencing.", p: "Crown Solar" },
      { y: 2018, w: "CCTV surveillance systems at the airport apron area for enhanced airside security monitoring.", p: "Atluri and Co." },
      { y: 2018, w: "Installation, testing and commissioning of power fencing systems for enhanced perimeter security.", p: "Crown Solar" },
    ],
  },
  {
    id: "gmr-bhogapuram",
    name: "GMR International Airport, Bhogapuram, Vishakhapatnam",
    cat: "aviation",
    image: "/projects/gmr-bhogapuram.jpg",
    intro: "Deploying solar-powered, wireless CCTV infrastructure for GMR's newest greenfield airport in Andhra Pradesh.",
    projects: [
      { y: 2024, w: "Supply, installation, testing and commissioning of CCTV systems integrated with solar power and wireless technology.", p: "GMR Groups" },
    ],
  },
  {
    id: "kempegowda",
    name: "Kempegowda International Airport, Bangalore",
    cat: "aviation",
    image: "/projects/kempegowda.jpg",
    intro: "A turnkey building-systems deployment covering fire safety, access control and building management for one of India's busiest airports.",
    projects: [
      { y: 2019, w: "Installation, testing and commissioning of Building Management System (BMS), Fire Alarm System (FAS), Public Address System (PA) and Access Control System (ACS).", p: "Siemens Limited" },
    ],
  },
  {
    id: "bharat-dynamics",
    name: "Bharat Dynamics Limited, Hyderabad",
    cat: "defence",
    image: "/projects/bharat-dynamics.jpg",
    intro: "Perimeter and premises-wide surveillance for a Government of India defence public sector undertaking.",
    projects: [
      { y: 2022, w: "Supply, installation, testing and commissioning of CCTV surveillance covering the entire perimeter and premises.", p: "IH Automation" },
    ],
  },
  {
    id: "hal",
    name: "Hindustan Aeronautics Limited",
    cat: "defence",
    image: "/projects/hal.jpg",
    intro: "Facility-wide fire detection and early-warning infrastructure at HAL.",
    projects: [
      { y: 2018, w: "Installation, testing and commissioning of the Fire Alarm System, enhancing facility-wide fire safety and early warning capabilities.", p: "Godrej Security Solutions" },
    ],
  },
  {
    id: "tata-advanced",
    name: "Tata Advanced, Tata Lockheed Martin, Tata Sikorsky & Tata Boeing",
    cat: "defence",
    image: "/projects/tata-advanced.jpg",
    intro: "Comprehensive perimeter and premises CCTV across the Tata Group's aerostructures manufacturing joint ventures.",
    projects: [
      { y: 2017, w: "Installation, testing and commissioning of a comprehensive CCTV surveillance system, ensuring enhanced security monitoring across both premises and perimeter areas.", p: "Atluri and Co." },
    ],
  },
  {
    id: "pi-industries",
    name: "PI Industries, Jambusar, Gujarat",
    cat: "industrial",
    image: "/projects/pi-industries.jpg",
    intro: "Two phases of large-scale surveillance rollout at PI Industries' agrochemical manufacturing complex in Gujarat.",
    projects: [
      { y: 2023, w: "Supply, installation, testing and commissioning of approximately 150 CCTV surveillance systems, including all associated hardware and software components.", p: "Echelon Edge" },
      { y: 2021, w: "Supply, installation, testing and commissioning of approximately 200 CCTV surveillance systems, including hardware and software components.", p: "Echelon Edge" },
    ],
  },
  {
    id: "iocl",
    name: "Indian Oil Corporation Limited",
    cat: "industrial",
    image: "/projects/iocl.jpg",
    intro: "Ongoing annual maintenance of surveillance infrastructure across IOCL bottling plants in two states.",
    projects: [
      { y: 2019, w: "Annual Maintenance Contract for CCTV surveillance systems across IOCL bottling plants in Andhra Pradesh and Telangana.", p: "Godrej Security Solutions" },
    ],
  },
  {
    id: "ntpc",
    name: "National Thermal Power Corporation, Ramagundam",
    cat: "industrial",
    image: "/projects/ntpc.jpg",
    intro: "Annual maintenance of critical surveillance infrastructure at NTPC's Ramagundam power plant.",
    projects: [
      { y: 2019, w: "Annual Maintenance Contract for CCTV surveillance systems at NTPC.", p: "Godrej Security Solutions" },
    ],
  },
  {
    id: "dr-reddys",
    name: "Dr. Reddy's Laboratories, Hyderabad",
    cat: "industrial",
    image: "/projects/dr-reddys.jpg",
    intro: "Perimeter access control for a leading pharmaceutical manufacturing facility.",
    projects: [
      { y: 2018, w: "Installation, testing and commissioning of power fencing and boom barriers for enhanced access control and perimeter security.", p: "Godrej Security Solutions" },
    ],
  },
  {
    id: "gomti-nagar",
    name: "Gomti Nagar Railway Station, Lucknow, UP",
    cat: "government",
    image: "/projects/gomti-nagar.jpg",
    intro: "A complete station-safety upgrade covering surveillance, fire safety, access control and public announcements.",
    projects: [
      { y: 2023, w: "Installation and commissioning of CCTV, Fire Alarm System, Access Control System, and Public Address System.", p: "TNS Groups" },
    ],
  },
  {
    id: "telangana-secretariat",
    name: "Telangana Secretariat, Hyderabad",
    cat: "government",
    image: "/projects/telangana-secretariat.jpg",
    intro: "Fire safety, public address and surveillance systems for the state government's administrative headquarters.",
    projects: [
      { y: 2022, w: "Installation, testing and commissioning of Fire Alarm System, Public Address System, and CCTV Surveillance System.", p: "Technocraft" },
    ],
  },
  {
    id: "ghmc",
    name: "Municipal Corporation of Hyderabad",
    cat: "government",
    image: "/projects/ghmc.jpg",
    intro: "High-security bollards to control vehicle access at the historic Charminar in Hyderabad's old city.",
    projects: [
      { y: 2019, w: "Installation of high-security bollards to enhance perimeter protection and control vehicle access at Charminar.", p: "Bgi Engitech Pvt Ltd" },
    ],
  },
  {
    id: "aiims-guntur",
    name: "All India Institute of Medical Sciences, Guntur",
    cat: "healthcare",
    image: "/projects/aiims-guntur.jpg",
    intro: "A full building-systems deployment across CCTV, BMS, fire alarm and access control for AIIMS Guntur.",
    projects: [
      { y: 2019, w: "Installation, testing and commissioning of CCTV, Building Management System (BMS), Fire Alarm System (FAS), and Access Control System (ACS).", p: "Tata Groups" },
    ],
  },
  {
    id: "manappuram",
    name: "Manappuram Finance Limited",
    cat: "bfsi",
    image: "/projects/manappuram.jpg",
    intro: "A rare non-industrial engagement: fire safety rolled out across 200+ branch offices nationwide, backed by an extended AMC.",
    projects: [
      { y: 2018, w: "Fire Alarm System installation across 200+ offices, along with an extended Annual Maintenance Contract for support and reliability.", p: "Godrej Security Solutions" },
    ],
  },
];

const partners = [
  { n: "GMR Groups", d: "Core client partner across airside CCTV, cabling, passive infra and fibre projects at GMR airports since 2020." },
  { n: "WAISL Limited", d: "Joint AMC delivery and cargo-terminal CCTV at GMR International Airport, Hyderabad." },
  { n: "Johnson Control (India) Pvt Ltd", d: "Fire alarm and access-control system rollout at GMR Hyderabad's security gates." },
  { n: "Godrej Security Solutions", d: "Longest-standing OEM partner: fire alarm and CCTV AMCs across IOCL, NTPC, HAL, Dr. Reddy's and Manappuram." },
  { n: "Echelon Edge", d: "CCTV hardware and software rollout partner: 3,300+ cameras at GMR Hyderabad and PI Industries Gujarat." },
  { n: "Siemens Limited", d: "Building management and fire-safety systems integration at Kempegowda International Airport, Bangalore." },
  { n: "Tata Groups", d: "CCTV, BMS, fire alarm and access control delivery at AIIMS Guntur." },
  { n: "Crown Solar, Hyderabad", d: "Perimeter CCTV and power-fencing installations at GMR Hyderabad." },
  { n: "Atluri and Co., Hyderabad", d: "Airside and perimeter CCTV at GMR Hyderabad's apron and the Tata aerostructures joint ventures." },
  { n: "IH Automation", d: "Perimeter surveillance at Bharat Dynamics Limited, Hyderabad." },
  { n: "Bgi Engitech Pvt Ltd", d: "High-security bollard installation at Charminar for the Municipal Corporation of Hyderabad." },
  { n: "Sindoori Solutions, Hyderabad", d: "AMC for UVSS, bollards, barriers and gate systems at GMR Hyderabad." },
  { n: "Stratecache India Pvt Ltd", d: "Kiosk operations manpower supply for flight-information displays at GMR Hyderabad." },
  { n: "Technocraft", d: "Fire alarm, PA and CCTV systems at the Telangana Secretariat, Hyderabad." },
  { n: "TNS Groups", d: "Station-wide safety systems at Gomti Nagar Railway Station, Lucknow." },
  { n: "Orchids Network & Systems Pvt Ltd", d: "100km backbone fibre laying and testing at GMR Hyderabad." },
];

const stats = [
  { value: "15", label: "Enterprise Clients" },
  { value: "35+", label: "Projects Delivered" },
  { value: "16", label: "Execution Partners" },
  { value: "2017", label: "Founded" },
];

function yearRange(client: Client) {
  const years = client.projects.map((p) => p.y);
  return years.length > 1 ? `${Math.min(...years)}–${Math.max(...years)}` : `${years[0]}`;
}

function partnerList(client: Client) {
  return Array.from(new Set(client.projects.map((p) => p.p)));
}

function initials(name: string) {
  return name
    .replace(/\(.*?\)/g, "")
    .split(/[\s,&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function ClientModal({ client, onClose }: { client: Client; onClose: () => void }) {
  const cat = CATS[client.cat];
  const sortedProjects = [...client.projects].sort((a, b) => b.y - a.y);

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
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img src={client.image ?? cat.image} alt={client.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-t ${cat.accent} opacity-75 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/15 backdrop-blur-sm border border-white/25 text-white rounded-full p-2 hover:bg-white/25 transition-colors"
          >
            <X size={16} />
          </button>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white font-bold text-lg shrink-0 backdrop-blur-sm">
              {initials(client.name)}
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white mb-2 backdrop-blur-sm">
                {cat.icon} {cat.label}
              </div>
              <h2 className="text-xl font-bold text-white leading-snug">{client.name}</h2>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-slate-500 pb-6 border-b border-slate-100">
            <span className="flex items-center gap-1.5"><Calendar size={12} />{yearRange(client)}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{client.projects.length} project{client.projects.length > 1 ? "s" : ""}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1.5"><Users size={12} />{partnerList(client).length} partner{partnerList(client).length > 1 ? "s" : ""}</span>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-8">{client.intro}</p>

          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Project History</h4>
          <div className="space-y-4">
            {sortedProjects.map((p, i) => (
              <div key={i} className="border-l-2 border-slate-100 pl-4">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-xs font-bold text-primary">{p.y}</span>
                  <span className="text-xs text-slate-400">Delivered with {p.p}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{p.w}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end">
            <a href="mailto:info@vsrt.in">
              <Button size="sm" className={`bg-gradient-to-r ${cat.accent} text-white border-0 hover:opacity-90`}>
                Discuss a Similar Project <ArrowRight size={13} className="ml-1" />
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
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const filtered = activeCategory === "All" ? clients : clients.filter((c) => c.cat === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Header ── */}
      <div className="relative pt-36 pb-24 bg-[#003978] overflow-hidden">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-100">Across Every Sector.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-16">
              From India's busiest airports to defence PSUs, industrial plants, and government institutions, our portfolio demonstrates the depth of our capabilities.
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

      {/* ── Clients grid ── */}
      <main className="flex-1 py-16 bg-[#EEF4FF]">
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
                {cat === "All" ? "All" : CATS[cat].label}
                <span className={cn(
                  "ml-2 text-xs font-bold",
                  activeCategory === cat ? "text-white/70" : "text-slate-400"
                )}>
                  {cat === "All" ? clients.length : clients.filter((c) => c.cat === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence>
              {filtered.map((client, i) => {
                const cat = CATS[client.cat];
                const partnersForClient = partnerList(client);
                return (
                  <motion.div
                    key={client.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-400"
                    onClick={() => setSelectedClient(client)}
                  >
                    <div className="relative h-44 sm:h-48 overflow-hidden">
                      <img
                        src={client.image ?? cat.image}
                        alt={client.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${cat.accent} opacity-70 mix-blend-multiply`} />
                      <div className="relative h-full flex items-start justify-between p-5">
                        <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/15 text-white backdrop-blur-sm")}>
                          {cat.icon} {cat.label}
                        </div>
                        <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white font-bold text-sm shrink-0 backdrop-blur-sm">
                          {initials(client.name)}
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${cat.accent} mb-3 group-hover:w-16 transition-all duration-300`} />

                      <h3 className="text-sm font-bold text-foreground leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {client.name}
                      </h3>

                      <p className="text-xs text-slate-500 mb-4">
                        {partnersForClient.length} partner{partnersForClient.length > 1 ? "s" : ""} · {partnersForClient.slice(0, 2).join(", ")}
                        {partnersForClient.length > 2 ? ` +${partnersForClient.length - 2}` : ""}
                      </p>

                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1"><Calendar size={10} />{yearRange(client)}</span>
                        <span>{client.projects.length} project{client.projects.length > 1 ? "s" : ""}</span>
                      </div>

                      <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-1 group-hover:translate-y-0">
                        View details <ArrowRight size={11} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedClient && (
          <ClientModal client={selectedClient} onClose={() => setSelectedClient(null)} />
        )}
      </AnimatePresence>

      {/* Execution partners */}
      <div className="py-24 relative overflow-hidden" style={{ background: "#003978" }}>
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-blue-400/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-cyan-400/10 blur-[100px] pointer-events-none rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-medium mb-6">
              <MapPin size={14} />
              Execution Partners
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Delivered alongside trusted partners</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Every engagement is executed hand-in-hand with leading OEMs, system integrators, and contractors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partners.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="bg-white/8 rounded-2xl p-5 border border-white/15 hover:bg-white/12 transition-all duration-300"
              >
                <div className="font-semibold text-white text-sm mb-2">{p.n}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{p.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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
