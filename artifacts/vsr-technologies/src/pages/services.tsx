import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Video, Eye, Network, Building2, Map, DoorClosed, Flame, Car,
  ArrowRight, CheckCircle2, Search, ClipboardList, Wrench, Gauge, Radio,
  ShieldCheck, Cpu, Globe2, Users, BarChart3, Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FAQ } from "@/components/sections/FAQ";

/* ─── service data ─── */
const services = [
  {
    id: "cctv",
    icon: Video,
    title: "CCTV Surveillance",
    tagline: "Advanced video monitoring for total site visibility",
    gradient: "from-blue-500 to-blue-700",
    glow: "rgba(59,130,246,0.15)",
    description:
      "Our CCTV systems deliver enterprise-grade, high-definition video coverage for every corner of your facility. From perimeter surveillance to internal zone monitoring, we design multi-camera networks tailored to your site's specific threat profile and operational requirements.",
    features: [
      "4K and HD IP camera deployment",
      "Night vision and thermal imaging options",
      "Centralised NVR/DVR management",
      "Redundant recording infrastructure",
      "Pan-Tilt-Zoom remote control",
      "Long-range perimeter coverage",
    ],
  },
  {
    id: "analytics",
    icon: Eye,
    title: "Video Analytics",
    tagline: "AI-driven insights for proactive threat response",
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(139,92,246,0.15)",
    description:
      "Move beyond passive recording with AI-powered video analytics. Our systems automatically detect anomalies, track objects, identify patterns, and issue real-time alerts — dramatically reducing response times and operator burden.",
    features: [
      "AI-driven threat detection",
      "Facial and object recognition",
      "Crowd density & flow analysis",
      "Behavioural anomaly detection",
      "License plate recognition (LPR)",
      "Automated alert management",
    ],
  },
  {
    id: "networking",
    icon: Network,
    title: "Networking Solutions",
    tagline: "Robust cabling infrastructure for seamless connectivity",
    gradient: "from-teal-500 to-cyan-700",
    glow: "rgba(20,184,166,0.15)",
    description:
      "A security system is only as strong as its network. We architect and deploy structured cabling, fiber optic backbones, and secure VLANs that provide zero-latency video transmission and isolated security data pathways.",
    features: [
      "Cat6A & fiber optic structured cabling",
      "Network switch & PoE deployment",
      "Isolated security VLANs",
      "Redundant uplink configuration",
      "TIA-568 certified installations",
      "End-to-end cable documentation",
    ],
  },
  {
    id: "bms",
    icon: Building2,
    title: "Building Management",
    tagline: "Unified control for optimal building operations",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.15)",
    description:
      "We integrate HVAC, lighting, access control, and security into a unified Building Management System — giving facility managers a single pane of glass to oversee, control, and automate all critical building functions.",
    features: [
      "Unified BMS dashboard",
      "HVAC and lighting integration",
      "Energy optimisation controls",
      "Elevator and door automation",
      "Remote management access",
      "Audit trails and reporting",
    ],
  },
  {
    id: "smartcity",
    icon: Map,
    title: "Smart City Solutions",
    tagline: "Municipal-scale technology for safer urban environments",
    gradient: "from-sky-500 to-blue-600",
    glow: "rgba(14,165,233,0.15)",
    description:
      "VSR Technologies extends its expertise to macro-scale urban deployments — connecting traffic monitoring, public safety cameras, emergency communication networks, and smart lighting into cohesive city-wide platforms.",
    features: [
      "Wide-area surveillance networks",
      "Traffic flow and incident detection",
      "Public safety command centres",
      "Emergency communication systems",
      "Smart street lighting controls",
      "IoT sensor network integration",
    ],
  },
  {
    id: "entrance",
    icon: DoorClosed,
    title: "Entrance Control",
    tagline: "Secure access management for regulated entry",
    gradient: "from-green-500 to-emerald-700",
    glow: "rgba(34,197,94,0.15)",
    description:
      "Control who enters your facility, when, and where. Our entrance control systems combine biometric readers, smart card access, turnstiles, and intercom solutions into a seamless workflow enforcing security policy without friction.",
    features: [
      "Biometric fingerprint and facial readers",
      "Smart card / RFID access systems",
      "Turnstile and speed lane integration",
      "Visitor management software",
      "Anti-tailgate sensor technology",
      "Multi-door controller networks",
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
    id: "parking",
    icon: Car,
    title: "Parking Management",
    tagline: "Intelligent solutions for optimised vehicle flow",
    gradient: "from-slate-500 to-slate-700",
    glow: "rgba(100,116,139,0.15)",
    description:
      "From ALPR-controlled barriers to real-time occupancy dashboards, our parking management systems bring order and accountability to vehicle flow — reducing unauthorised access and providing actionable analytics.",
    features: [
      "ALPR (license plate recognition) barriers",
      "Real-time occupancy sensors",
      "Parking guidance display systems",
      "Permit and validation management",
      "CCTV-integrated ticketing",
      "Revenue control systems",
    ],
  },
];

/* ─── process steps ─── */
const steps = [
  {
    num: "01",
    icon: Search,
    title: "Site Inspection",
    desc: "Our engineers conduct a full on-site survey — mapping facility zones, identifying blind spots, evaluating existing infrastructure, and assessing threat vectors specific to your environment.",
    color: "text-sky-400",
    ring: "ring-sky-400/20",
    bg: "bg-sky-400/10",
    border: "border-sky-400/30",
    lineBg: "bg-sky-400",
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "Custom Solution Design",
    desc: "Using site data, we architect a bespoke system: camera placement diagrams, cabling schematics, equipment schedules, and a phased deployment plan — all reviewed with you before work begins.",
    color: "text-violet-400",
    ring: "ring-violet-400/20",
    bg: "bg-violet-400/10",
    border: "border-violet-400/30",
    lineBg: "bg-violet-400",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Installation",
    desc: "Certified field engineers deploy every component precisely to the approved design — cabling, mounting, networking, and software configuration — with zero disruption to your ongoing operations.",
    color: "text-amber-400",
    ring: "ring-amber-400/20",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30",
    lineBg: "bg-amber-400",
  },
  {
    num: "04",
    icon: Gauge,
    title: "Testing & Optimisation",
    desc: "Full commissioning follows: every camera angle validated, every alert threshold stress-tested, every integration verified end-to-end. We don't hand over until every system passes.",
    color: "text-green-400",
    ring: "ring-green-400/20",
    bg: "bg-green-400/10",
    border: "border-green-400/30",
    lineBg: "bg-green-400",
  },
  {
    num: "05",
    icon: Radio,
    title: "Ongoing Monitoring",
    desc: "Post-deployment, we provide 24/7 remote monitoring, proactive maintenance schedules, firmware update management, and rapid on-site response — keeping your system performing at peak.",
    color: "text-orange-400",
    ring: "ring-orange-400/20",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
    lineBg: "bg-orange-400",
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
        <a href="/#contact">
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
      <div className="relative pt-32 sm:pt-36 pb-20 sm:pb-24 bg-[#0A1628] overflow-hidden">
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
              We design, install, and maintain the complete stack of physical security and building infrastructure — from a single access point to a campus-wide smart city deployment.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="flex-1">

        {/* ── Tabbed Services Explorer ── */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Our Services</h2>
              <p className="text-slate-500 text-base sm:text-lg">Select a service to explore its scope, capabilities, and deliverables.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4 sm:gap-6">
              {/* Left nav — horizontal scroll on mobile, vertical on desktop */}
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
        <section className="py-16 sm:py-24 bg-white">
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
                These aren't add-ons — they're built into how we engineer every system we deploy.
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

        {/* ── Process Timeline — VERTICAL ── */}
        <section className="py-16 sm:py-24 bg-[#0A1628] relative overflow-hidden">
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
                      <div className="pt-2 flex-1">
                        <div className={cn("text-[10px] sm:text-xs font-bold tracking-widest mb-2", step.color)}>
                          STEP {step.num}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">{step.desc}</p>

                        {/* Connector card */}
                        {i < steps.length - 1 && (
                          <div className={cn("mt-4 inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full", step.bg, step.color)}>
                            <div className={cn("w-1.5 h-1.5 rounded-full", step.lineBg)} />
                            Next: {steps[i + 1].title}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQ />

      </main>

      {/* CTA band */}
      <div className="bg-primary py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to secure your facility?</h3>
            <p className="text-primary-foreground/80 text-base sm:text-lg">Our engineers are available for a free consultation and site assessment.</p>
          </div>
          <a href="/#contact">
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
