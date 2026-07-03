import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Video, Eye, Network, Building2, Map, DoorClosed, Flame, Car,
  ArrowRight, CheckCircle2, Search, ClipboardList, Wrench, Gauge, Radio,
  ShieldCheck, Cpu, Globe2, Users, BarChart3, Lock,
  FileText, GraduationCap, RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
/* ─── service data ─── */
const services = [

  {
    id: "networking",
    icon: Network,
    title: "Networking Solutions",
    tagline: "Reliable, secure, and scalable IT infrastructure",
    gradient: "from-teal-500 to-teal-700",
    glow: "rgba(20,184,166,0.15)",
    description:
      "VSR Technologies is a comprehensive networking solutions provider committed to delivering reliable, secure, and scalable IT infrastructure services, covering end-to-end networking from design through deployment.",
    features: [
      "Network infrastructure design & deployment",
      "Wireless networking solutions",
      "Network security solutions (firewalls, VPNs)",
      "Network services support",
      "Data centre & server infrastructure services",
      "Network storage solutions (NAS, SAN, backup & recovery)",
      "Internet & WAN connectivity solutions",
      "Access / distribution / core layer network solutions",
    ],
  },
  {
    id: "cctv",
    icon: Video,
    title: "CCTV Surveillance",
    tagline: "Advanced video monitoring for total site visibility",
    gradient: "from-primary to-blue-700",
    glow: "rgba(59,130,246,0.15)",
    description:
      "VSR Technologies provides comprehensive CCTV surveillance and security solutions designed to enhance safety, security, and operational visibility across every facility type.",
    features: [
      "Video Management Systems: Milestone, IndigoVision, Vehant & more",
      "4K and HD IP camera deployment",
      "Night vision and thermal imaging options",
      "Centralised NVR/DVR management",
      "Redundant recording infrastructure",
      "Pan-Tilt-Zoom remote control",
      "Long-range perimeter coverage",
      "24/7 remote monitoring integration",
    ],
  },
  {
    id: "analytics",
    icon: Eye,
    title: "Video Analytics",
    tagline: "AI and computer-vision powered intelligence",
    gradient: "from-slate-600 to-slate-800",
    glow: "rgba(100,116,139,0.15)",
    description:
      "VSR Technologies delivers advanced video analytics solutions powered by AI and computer vision to enhance security, operational efficiency, and business intelligence across government, smart city, transportation, industrial, commercial, healthcare, educational, and critical infrastructure environments.",
    features: [
      "Video summarization",
      "Facial recognition systems",
      "Object detection and tracking solutions",
      "Automatic Number Plate Recognition (ANPR/LPR)",
      "Perimeter security & intrusion detection systems",
      "Crowd and people analytics solutions",
      "Behavioural and activity analytics",
      "Alert and event management systems",
      "Analytics dashboards and visualization platforms",
    ],
  },
{
    id: "parking",
    icon: Car,
    title: "Parking Management",
    tagline: "Intelligent solutions for optimised vehicle flow",
    gradient: "from-slate-600 to-slate-800",
    glow: "rgba(100,116,139,0.15)",
    description:
      "VSR Technologies offers advanced parking management and access control solutions that bring order, automation, and accountability to vehicle flow.",
    features: [
      "ANPR-based vehicle access control with boom barrier integration",
      "Boom barriers, tyre killers, bollards & entrance automation systems",
      "Vehicle entry, exit, and parking management solutions",
      "Visitor Management System (VMS)",
      "Smart parking solutions using AI-based video analytics",
      "Customised parking and access control integrations",
    ],
  },
   {
    id: "fire",
    icon: Flame,
    title: "Fire Alarm System",
    tagline: "Reliable detection and alert systems for life safety",
    gradient: "from-red-500 to-rose-700",
    glow: "rgba(239,68,68,0.15)",
    description:
      "Our fire alarm installations use addressable detector networks, voice evacuation systems, and suppression integration to detect, locate, and respond to fire incidents with precision your facility demands.",
    features: [
      "Addressable smoke and heat detectors",
      "Voice evacuation and PA integration",
      "Sprinkler and suppression tie-in",
      "Panel monitoring and remote alerts",
      "NFPA 72 compliant installations",
      "Regular testing and maintenance",
    ],
  },
   {
    id: "entrance",
    icon: DoorClosed,
    title: "Entrance Control",
    tagline: "Secure access management for regulated entry",
    gradient: "from-teal-500 to-teal-700",
    glow: "rgba(20,184,166,0.15)",
    description:
      "VSR Technologies delivers complete entrance control and perimeter security systems, managing who enters your facility, when, and how, through a seamless, integrated workflow.",
    features: [
      "Access Control System (RFID, biometric, face recognition, QR code)",
      "ANPR (Automatic Number Plate Recognition)",
      "Vehicle access management & boom barrier automation",
      "Automatic sliding and swing gates",
      "Turnstile access control & flap/swing barriers",
      "Bollard and road blocker, tyre killer",
      "Visitor Management System (VMS)",
      "Video Door Phone (VDP) & audio/video intercom systems",
      "CCTV surveillance & centralised monitoring integration",
      "Alarm and intrusion detection interface",
      "Attendance and time management integration",
    ],
  },
  {
    id: "bms",
    icon: Building2,
    title: "Building Management",
    tagline: "Unified control for optimal building operations",
    gradient: "from-primary to-blue-700",
    glow: "rgba(59,130,246,0.15)",
    description:
      "We integrate fire, access, CCTV, power, and automation subsystems into a single, unified Building Management System, giving facility managers one platform to oversee, control, and automate every critical building function.",
    features: [
      "Fire alarm system",
      "Access control system",
      "Public address system",
      "Electrical power systems",
      "CCTV surveillance",
      "Solar power solutions",
      "Parking management system",
      "Building analytics and reporting system",
    ],
  },
  {
    id: "smartcity",
    icon: Map,
    title: "Smart City Solutions",
    tagline: "Municipal-scale technology for safer urban environments",
    gradient: "from-slate-600 to-slate-800",
    glow: "rgba(100,116,139,0.15)",
    description:
      "VSR Technologies extends its expertise to macro-scale urban deployments: smart and safe city services spanning surveillance, traffic management, utilities, and AI-driven decision support.",
    features: [
      "City surveillance and video monitoring system",
      "Intelligent Traffic Management Systems (ITMS)",
      "Traffic management and enforcement solutions",
      "Smart street lighting solutions",
      "Smart parking management solutions",
      "Access control and critical infrastructure security",
      "Public address and emergency communication systems",
      "Smart utility management & IoT sensor network infrastructure",
      "Cybersecurity services",
      "AI, analytics, and decision support platforms",
    ],
  },
];

/* ─── process steps ─── */
const steps = [
  {
    num: "01",
    icon: Search,
    title: "Site Inspection & Threat Assessment",
    desc: "Every engagement begins with a comprehensive physical survey. Our engineers walk every metre of your facility, mapping all zones, identifying structural blind spots, cataloguing existing infrastructure, and building a detailed threat model specific to your environment and operational profile.",
    detail: [
      "Full-perimeter and interior zone mapping",
      "Existing cabling and network infrastructure audit",
      "Threat vector identification by zone and access point",
      "Environmental assessment for camera and detector placement",
      "Regulatory compliance gap analysis",
    ],
    color: "text-blue-400",
    ring: "ring-blue-400/20",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    lineBg: "bg-blue-400",
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "Bespoke System Design",
    desc: "Site data feeds directly into a full engineering design package. We produce camera placement CAD drawings, structured cabling schematics, equipment schedules with full specifications, network topology diagrams, and a phased deployment plan, presented to you for review and sign-off before a single cable is run.",
    detail: [
      "CAD camera placement and coverage diagrams",
      "Structured cabling and fiber route schematics",
      "Full equipment schedule with model specifications",
      "Network topology and VLAN segmentation plan",
      "Phased deployment timeline and milestone schedule",
    ],
    color: "text-slate-400",
    ring: "ring-slate-400/20",
    bg: "bg-slate-400/10",
    border: "border-slate-400/30",
    lineBg: "bg-slate-400",
  },
  {
    num: "03",
    icon: FileText,
    title: "Procurement & Material Staging",
    desc: "We manage the full procurement cycle: sourcing certified equipment from approved vendors, verifying specifications against the design, staging and pre-configuring hardware off-site, and coordinating delivery windows to align with your facility's operational schedule.",
    detail: [
      "Certified vendor sourcing and supply chain management",
      "Equipment specification verification against design",
      "Off-site hardware staging and firmware pre-loading",
      "Delivery and on-site logistics coordination",
      "Full material traceability documentation",
    ],
    color: "text-teal-400",
    ring: "ring-teal-400/20",
    bg: "bg-teal-400/10",
    border: "border-teal-400/30",
    lineBg: "bg-teal-400",
  },
  {
    num: "04",
    icon: Wrench,
    title: "Certified Installation",
    desc: "Our field teams execute the installation precisely to the approved design, covering structured cabling runs, camera and detector mounting, server rack build-out, network switch configuration, and software platform setup, all completed without disrupting your ongoing facility operations.",
    detail: [
      "TIA-568 and manufacturer-certified cabling installation",
      "Camera, detector, and access reader mounting and alignment",
      "Server rack, NVR, and network switch build-out",
      "Software platform and VMS configuration",
      "Zero-disruption scheduling around operational hours",
    ],
    color: "text-blue-400",
    ring: "ring-blue-400/20",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    lineBg: "bg-blue-400",
  },
  {
    num: "05",
    icon: Gauge,
    title: "Commissioning & Quality Assurance",
    desc: "Every installed system undergoes a rigorous commissioning protocol before handover. Camera coverage and focus are verified against the design drawings, alert thresholds are stress-tested under simulated conditions, all integrations are validated end-to-end, and a full sign-off certificate is issued.",
    detail: [
      "Camera angle and coverage verification against CAD plan",
      "Alert threshold and notification path stress-testing",
      "End-to-end integration testing across all sub-systems",
      "Failover and redundancy scenario validation",
      "Formal commissioning certificate issued on completion",
    ],
    color: "text-slate-400",
    ring: "ring-slate-400/20",
    bg: "bg-slate-400/10",
    border: "border-slate-400/30",
    lineBg: "bg-slate-400",
  },
  {
    num: "06",
    icon: GraduationCap,
    title: "Operator Training & Handover",
    desc: "A system is only as effective as the team operating it. We deliver structured training sessions for your security operations staff, covering system navigation, alert response workflows, reporting tools, and escalation procedures. Full as-built documentation and user manuals are provided at handover.",
    detail: [
      "Hands-on VMS and BMS operator training sessions",
      "Alert response and escalation workflow walkthroughs",
      "As-built CAD drawings and cable documentation package",
      "User manuals and quick-reference guides",
      "Designated VSR technical contact for post-handover queries",
    ],
    color: "text-teal-400",
    ring: "ring-teal-400/20",
    bg: "bg-teal-400/10",
    border: "border-teal-400/30",
    lineBg: "bg-teal-400",
  },
  {
    num: "07",
    icon: Radio,
    title: "24/7 Remote Monitoring & Response",
    desc: "Post-commissioning, our Network Operations Centre provides around-the-clock remote monitoring of your system's health and security event stream. Anomalies trigger immediate alert routing, and our on-site response teams are dispatched under SLA-governed response time agreements.",
    detail: [
      "Continuous system health and connectivity monitoring",
      "Real-time security event alerting and escalation",
      "SLA-guaranteed on-site response time commitments",
      "Incident logging and post-event reporting",
      "Regular security review calls with your team",
    ],
    color: "text-blue-400",
    ring: "ring-blue-400/20",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    lineBg: "bg-blue-400",
  },
  {
    num: "08",
    icon: RefreshCw,
    title: "Lifecycle Management & Annual Review",
    desc: "Security threats and technology evolve, and your infrastructure should too. We conduct annual system reviews, manage firmware and software update cycles, replace end-of-life hardware before it becomes a risk, and provide strategic roadmap recommendations to keep your security posture ahead of emerging threats.",
    detail: [
      "Annual on-site system performance review",
      "Firmware and software update lifecycle management",
      "Proactive end-of-life hardware replacement planning",
      "Emerging threat and technology briefings",
      "Strategic infrastructure upgrade roadmapping",
    ],
    color: "text-slate-400",
    ring: "ring-slate-400/20",
    bg: "bg-slate-400/10",
    border: "border-slate-400/30",
    lineBg: "bg-slate-400",
  },
];

/* ─── Technology partners / capabilities ─── */
const capabilities = [
  { icon: ShieldCheck, title: "Compliance-Ready", desc: "Every installation is designed to meet NFPA, TIA-568, IEC, and local regulatory requirements from the outset." },
  { icon: Cpu, title: "AI-Powered Analytics", desc: "On-edge and cloud-connected AI processing for real-time threat detection without latency." },
  { icon: Globe2, title: "Remote Management", desc: "Full system visibility and control from anywhere via secure web and mobile management platforms." },
  { icon: Users, title: "Operator Training", desc: "Comprehensive handover training ensures your team gets the most from every system from day one." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Detailed incident reports, system health dashboards, and compliance documentation on demand." },
  { icon: Lock, title: "Cyber-Hardened", desc: "Security-by-design network architecture with VLANs, encrypted streams, and regular firmware audits." },
];

/* ─── Service Tab Panel ─── */
function ServicePanel({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={service.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="h-full"
      >
        <div className="flex items-start gap-4 sm:gap-5 mb-8">
          <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg shrink-0`}>
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">{service.title}</h2>
            <p className="text-slate-500 text-sm leading-relaxed">{service.tagline}</p>
          </div>
        </div>
        <div className={`h-px bg-gradient-to-r ${service.gradient} opacity-30 mb-8`} />
        <p className="text-slate-600 leading-relaxed text-base mb-10">{service.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {service.features.map((f) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2.5 bg-slate-50 rounded-xl px-4 py-3 text-sm text-slate-700 border border-slate-100"
            >
              <CheckCircle2 size={14} className="text-primary shrink-0" />
              {f}
            </motion.div>
          ))}
        </div>
        <a href="mailto:info@vsrt.in">
          <Button className={`bg-gradient-to-r ${service.gradient} text-white border-0 shadow-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-300`}>
            Request a Quote
            <ArrowRight size={15} className="ml-2" />
          </Button>
        </a>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ServicesPage() {
  const [activeId, setActiveId] = useState("cctv");
  const active = services.find((s) => s.id === activeId)!;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Page header ── */}
      <div className="relative pt-32 sm:pt-36 pb-20 sm:pb-24 bg-[#003978] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
              <CheckCircle2 size={14} />
              Full-Spectrum Security Services
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-5 sm:mb-6 max-w-3xl leading-[1.1]">
              Every System.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-primary">One Partner.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              We design, install, and maintain the complete stack of physical security and building infrastructure, from a single access point to a campus-wide smart city deployment.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="flex-1">

        {/* ── Tabbed Services Explorer ── */}
        <section className="pt-16 sm:pt-24 pb-0 bg-[#EEF4FF]">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Our Services</h2>
              <p className="text-slate-500 text-base sm:text-lg">Select a service to explore its scope, capabilities, and deliverables.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4 sm:gap-6">
              {/* Left nav: horizontal scroll on mobile, vertical on desktop */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                {services.map((s) => {
                  const SIcon = s.icon;
                  const isActive = s.id === activeId;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveId(s.id)}
                      className={cn(
                        "group flex items-center gap-3 px-3 py-3 sm:px-4 sm:py-3.5 rounded-xl text-left transition-all duration-200 shrink-0 lg:shrink border",
                        isActive
                          ? "bg-white shadow-md border-slate-200 text-foreground"
                          : "border-transparent text-slate-500 hover:bg-white/70 hover:text-foreground hover:border-slate-100"
                      )}
                    >
                      <div className={cn(
                        "p-2 rounded-lg transition-all duration-200 shrink-0",
                        isActive ? `bg-gradient-to-br ${s.gradient} text-white shadow-sm` : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                      )}>
                        <SIcon className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-sm whitespace-nowrap lg:whitespace-normal">{s.title}</span>
                      {isActive && (
                        <motion.div layoutId="activeIndicator" className="ml-auto w-1.5 h-1.5 rounded-full bg-primary hidden lg:block" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right panel */}
              <div
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 md:p-12 min-h-[480px] sm:min-h-[520px]"
                style={{ boxShadow: `0 4px 40px ${active.glow}, 0 1px 3px rgba(0,0,0,0.04)` }}
              >
                <ServicePanel service={active} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Capabilities Grid ── */}
        <section className="pt-16 sm:pt-20 pb-16 sm:pb-24 bg-[#EEF4FF]">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
                Built-In Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4 leading-[1.1]">
                Every service includes these{" "}
                <span className="text-primary">standards.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                These aren't add-ons. They're built into how we engineer every system we deploy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group p-6 sm:p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-primary/8 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{cap.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Timeline (vertical) */}
        <section className="py-16 sm:py-24 bg-[#003978] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "80px 80px" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-14 sm:mb-20"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-medium mb-8">
                Our Process
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.1]">
                From first inspection
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-primary">to lifelong protection.</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
                Every VSR engagement follows a disciplined five-stage methodology designed to eliminate risk and deliver a system that performs from day one.
              </p>
            </motion.div>

            {/* Vertical timeline */}
            <div className="max-w-3xl mx-auto relative">
              {/* Vertical line */}
              <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-[2px] bg-white/5" />
              <motion.div
                className="absolute left-[23px] sm:left-[27px] top-0 w-[2px] bg-gradient-to-b from-sky-400/60 to-primary/40"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
              />

              <div className="flex flex-col gap-0">
                {steps.map((step, i) => {
                  const StepIcon = step.icon;
                  return (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: i * 0.15 }}
                      className="flex gap-5 sm:gap-8 pb-10 sm:pb-14 last:pb-0 group"
                    >
                      {/* Circle */}
                      <div className="relative shrink-0 z-10">
                        <div className={cn(
                          "w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center border-2 ring-4 transition-all duration-300",
                          step.color, step.ring, step.bg, step.border,
                          "group-hover:scale-110"
                        )}>
                          <StepIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-2 flex-1 pb-2">
                        <div className={cn("text-[10px] sm:text-xs font-bold tracking-widest mb-2", step.color)}>
                          STEP {step.num}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-5">{step.desc}</p>

                        {/* Detail bullets */}
                        <ul className="space-y-2 mb-5">
                          {step.detail.map((point) => (
                            <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className={cn("w-3.5 h-3.5 shrink-0 mt-0.5", step.color)} />
                              {point}
                            </li>
                          ))}
                        </ul>

                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* CTA band */}
      <div className="bg-primary py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to secure your facility?</h3>
            <p className="text-primary-foreground/80 text-base sm:text-lg">Our engineers are available for a free consultation and site assessment.</p>
          </div>
          <a href="mailto:info@vsrt.in">
            <Button size="lg" variant="secondary" className="text-primary font-semibold h-12 sm:h-14 px-8 sm:px-10 shadow-xl hover:scale-[1.03] transition-all duration-300 shrink-0">
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
