import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import {
  AlertTriangle, ScanLine, BrainCircuit, Crosshair, Radio,
  Eye, Users, Car, Flame, Clock, Lock, Zap, ArrowRight,
} from "lucide-react";

/* ─── Threat camera mock (unchanged) ─── */
function ThreatCamera() {
  return (
    <div
      className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-orange-900/40"
      style={{ background: "linear-gradient(135deg,#0f0500 0%,#1a0800 50%,#150400 100%)" }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "linear-gradient(to right,#f97316 1px,transparent 1px),linear-gradient(to bottom,#f97316 1px,transparent 1px)", backgroundSize: "3rem 3rem" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-orange-600/10 blur-[60px]" />

      {["top-4 left-4 border-t-2 border-l-2","top-4 right-4 border-t-2 border-r-2","bottom-4 left-4 border-b-2 border-l-2","bottom-4 right-4 border-b-2 border-r-2"].map((cls, i) => (
        <motion.div key={i} className={`absolute ${cls} w-7 h-7 border-orange-400/60`}
          initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
        />
      ))}

      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
        <div className="text-[10px] font-mono text-orange-400/70 tracking-widest">
          CAM_04 // PERIMETER_NORTH<br />REC · 4K · 60FPS
        </div>
        <motion.div className="flex items-center gap-2 px-3 py-1.5 rounded border border-red-500/40 bg-red-500/15"
          animate={{ opacity: [1, 0.6, 1] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_6px_2px_rgba(239,68,68,0.6)]" />
          <span className="text-[10px] font-mono font-bold text-red-300 tracking-widest">THREAT ACTIVE</span>
        </motion.div>
      </div>

      <motion.div className="absolute border-2 border-red-500 bg-red-500/8 shadow-[inset_0_0_20px_rgba(239,68,68,0.2),0_0_20px_rgba(239,68,68,0.25)]"
        initial={{ width: 0, height: 0, opacity: 0 }}
        whileInView={{ width: 130, height: 290, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.7 }}
        style={{ top: "18%", left: "22%" }}>
        <div className="absolute -top-6 left-0 bg-red-600 text-white text-[9px] px-2 py-1 font-mono font-bold tracking-wider whitespace-nowrap">INTRUDER DETECTED</div>
        <div className="absolute bottom-2 left-2 text-[9px] font-mono text-red-300">CONF: 97.3%</div>
      </motion.div>

      <motion.div className="absolute border-2 border-orange-500 bg-orange-500/8 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
        initial={{ width: 0, height: 0, opacity: 0 }}
        whileInView={{ width: 200, height: 120, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.1 }}
        style={{ top: "60%", left: "52%" }}>
        <div className="absolute -top-6 left-0 bg-orange-600 text-white text-[9px] px-2 py-1 font-mono font-bold flex items-center gap-1 whitespace-nowrap">
          <AlertTriangle size={9} /> UNAUTHORIZED VEHICLE
        </div>
        <div className="absolute bottom-2 right-2 text-[9px] font-mono text-orange-300">TRACKING</div>
      </motion.div>

      <motion.div className="absolute left-0 right-0 h-px bg-orange-400/60 shadow-[0_0_18px_4px_rgba(251,146,60,0.5)]"
        animate={{ top: ["-5%", "105%"] }} transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
      />

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
        <div className="text-[9px] font-mono text-orange-400/50">AI ENGINE: ACTIVE · LATENCY 12ms</div>
        <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}
          className="flex items-center gap-1 text-[9px] font-mono text-orange-300">
          <Radio size={9} /> LIVE
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Capability cards ─── */
const cards = [
  { icon: ScanLine,   num: "01", color: "text-red-400",    bg: "bg-red-500/15",    border: "border-red-500/25",    title: "Perimeter Intrusion Detection",      desc: "Virtual tripwires and AI-defined exclusion zones trigger an alert the moment any boundary is breached — before a human operator would notice anything unusual on a live feed.", points: ["Sub-second alert dispatch", "Zone-level threat localisation", "Night-vision and thermal compatible", "Multi-camera cross-validation"] },
  { icon: Users,      num: "02", color: "text-orange-400", bg: "bg-orange-500/15", border: "border-orange-500/25", title: "Crowd Anomaly Detection",             desc: "Real-time density mapping flags dangerous surges, sudden dispersals, and abnormal crowd formations — giving operators lead time to respond before a situation escalates.", points: ["Density heat-map overlays", "Egress blockage alerts", "Panic pattern recognition", "Event mode profiles"] },
  { icon: Car,        num: "03", color: "text-amber-400",  bg: "bg-amber-500/15",  border: "border-amber-500/25",  title: "Vehicle Tracking & LPR",            desc: "Automatic License Plate Recognition identifies and tracks vehicles against watchlists across every access point — flagging unregistered, stolen, or dwell-time-exceeded plates.", points: ["Multi-lane simultaneous reads", "Watchlist synchronisation", "Dwell time monitoring", "Entry/exit logging with timestamps"] },
  { icon: Eye,        num: "04", color: "text-yellow-400", bg: "bg-yellow-500/15", border: "border-yellow-500/25", title: "Loitering & Dwell Detection",        desc: "Identifies individuals spending abnormal amounts of time in sensitive zones — loading bays, server rooms, ATM areas — and escalates before behaviour turns into an incident.", points: ["Zone-specific dwell thresholds", "Configurable time limits", "Identity-linked tracking", "Operator override options"] },
  { icon: Crosshair,  num: "05", color: "text-red-400",    bg: "bg-red-500/15",    border: "border-red-500/25",    title: "Automated Incident Verification",   desc: "Cross-references multiple camera feeds, motion sensors, and access control events simultaneously to confirm genuine threats — eliminating the alert fatigue that comes from false alarms.", points: ["97%+ verified detection rate", "Multi-sensor data fusion", "Automated evidence packaging", "SOC dashboard integration"] },
  { icon: Flame,      num: "06", color: "text-orange-400", bg: "bg-orange-500/15", border: "border-orange-500/25", title: "Smoke & Fire Detection",             desc: "Optical AI detection identifies the visual signatures of smoke and flames from existing CCTV feeds — often catching a fire earlier than conventional heat or ionisation detectors.", points: ["Works on existing cameras", "Outdoor and indoor detection", "Integration with suppression systems", "False-alarm filtered by AI"] },
  { icon: Clock,      num: "07", color: "text-amber-400",  bg: "bg-amber-500/15",  border: "border-amber-500/25",  title: "After-Hours Activity Monitoring",   desc: "Behaviour profiling creates time-based access policies — automatically flagging any presence, access attempt, or movement outside of approved schedules for each zone.", points: ["Configurable per zone and role", "Holiday calendar awareness", "Automatic alert escalation", "Full audit log of exceptions"] },
  { icon: Lock,       num: "08", color: "text-yellow-400", bg: "bg-yellow-500/15", border: "border-yellow-500/25", title: "Tailgate & Piggybacking Prevention", desc: "Detects when more than one person enters a controlled access point on a single credential — triggering immediate lockdown or alarm before the second person clears the threshold.", points: ["Sub-200ms response time", "Works with any turnstile or door", "Video evidence auto-captured", "Integrates with access control panel"] },
  { icon: Zap,        num: "09", color: "text-red-400",    bg: "bg-red-500/15",    border: "border-red-500/25",    title: "Real-Time Alert Dispatch",          desc: "Every verified incident is routed to your Security Operations Centre, mobile devices, and third-party monitoring platforms within 12 milliseconds — with full video context attached.", points: ["<12ms dispatch latency", "Push, email, and SMS alerts", "Third-party PSIM compatible", "Video clip auto-attached to alert"] },
];

/* ─── Scroll-locked card section ─── */
const SECTION_EXTRA_VH = cards.length * 50; // 450vh of scroll space for cards

function ScrollLockedCards() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll [0.05 → 0.95] to translateX [0 → -(8 × 88vw)]
  const totalShift = (cards.length - 1) * 88;
  const cardsX = useTransform(
    scrollYProgress,
    [0.05, 0.95],
    ["0vw", `-${totalShift}vw`]
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const clamped = Math.max(0, Math.min(1, (v - 0.05) / 0.9));
    setActiveCard(Math.round(clamped * (cards.length - 1)));
  });

  return (
    /* Outer — tall to create scroll space */
    <div ref={outerRef} className="fluid-grid-section fluid-to-light relative" style={{ height: `calc(100vh + ${SECTION_EXTRA_VH}vh)` }}>
      {/* Sticky inner — locks to viewport while outer scrolls */}
      <div
        className="sticky top-0 h-screen overflow-hidden flex flex-col"
        style={{ background: "linear-gradient(160deg,#0f0500 0%,#1f0d00 40%,#160500 100%)" }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right,#f97316 1px,transparent 1px),linear-gradient(to bottom,#f97316 1px,transparent 1px)", backgroundSize: "80px 80px" }}
        />
        {/* Glow */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-orange-600/8 blur-[120px] pointer-events-none" />

        {/* Header row */}
        <div className="relative z-10 pt-10 pb-6 px-8 flex items-center justify-between flex-shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-xs font-medium mb-3">
              <BrainCircuit size={12} /> DETECTION CAPABILITIES
            </div>
            <p className="text-slate-400 text-sm">
              Scroll to explore all {cards.length} AI-powered detection systems
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center gap-2">
            <span className="text-orange-400 font-bold text-2xl tabular-nums">
              {String(activeCard + 1).padStart(2, "0")}
            </span>
            <span className="text-slate-600 text-lg font-light">/</span>
            <span className="text-slate-600 text-sm">{String(cards.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Dot progress bar */}
        <div className="relative z-10 px-8 mb-6 flex-shrink-0">
          <div className="flex gap-1.5">
            {cards.map((_, i) => (
              <div
                key={i}
                className="h-0.5 flex-1 rounded-full transition-all duration-300"
                style={{ background: i <= activeCard ? "#f97316" : "rgba(255,255,255,0.1)" }}
              />
            ))}
          </div>
        </div>

        {/* Cards strip — full bleed, overflow hidden */}
        <div className="relative z-10 flex-1 overflow-hidden px-8">
          <motion.div
            className="flex h-full"
            style={{ x: cardsX }}
          >
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.num}
                  className="flex-shrink-0 h-full pr-6"
                  style={{ width: "85vw" }}
                >
                  <div
                    className={`h-full rounded-3xl border ${card.border} bg-white/[0.03] backdrop-blur-sm p-10 flex flex-col`}
                    style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))" }}
                  >
                    {/* Card top */}
                    <div className="flex items-start justify-between mb-8">
                      <div className={`p-4 rounded-2xl ${card.bg} ${card.color}`}>
                        <Icon size={28} />
                      </div>
                      <span className="text-[80px] font-black leading-none text-white/[0.04] select-none">
                        {card.num}
                      </span>
                    </div>

                    {/* Title + description */}
                    <h3 className={`text-3xl font-bold mb-4 ${card.color}`}>{card.title}</h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl">{card.desc}</p>

                    {/* Points */}
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      {card.points.map((pt) => (
                        <div key={pt} className="flex items-center gap-2.5 text-sm text-slate-400">
                          <ArrowRight size={12} className={card.color} />
                          {pt}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll cue (fades out after first scroll) */}
        <motion.div
          className="relative z-10 pb-6 text-center flex-shrink-0"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-slate-600">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export function AiThreatDetection() {
  return (
    <>
      {/* ── Part 1: Hero content — normal scroll ── */}
      <section
        className="relative py-32 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#120800 0%,#1f0d00 30%,#2a0f00 60%,#160500 100%)" }}
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-600/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-red-800/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right,#f97316 1px,transparent 1px),linear-gradient(to bottom,#f97316 1px,transparent 1px)", backgroundSize: "80px 80px" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Camera visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <ThreatCamera />
              <div className="absolute inset-0 -z-10 bg-orange-500/10 blur-[80px] scale-110 rounded-full" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm font-medium mb-8 backdrop-blur-sm">
                <BrainCircuit size={15} /> AI-POWERED SURVEILLANCE
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Threats don't wait.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  Neither does our AI.
                </span>
              </h2>

              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Move from passive recording to proactive defense. Our intelligent video analytics transform standard camera feeds into active sensors that identify and escalate anomalies in real time.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                {[
                  { v: "<12ms", l: "Alert Latency" },
                  { v: "97%+", l: "Detection Accuracy" },
                  { v: "90%", l: "False Alarm Reduction" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-bold text-orange-400">{s.v}</div>
                    <div className="text-xs text-slate-500 mt-1 leading-snug">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Part 2: Scroll-locked card explorer ── */}
      <ScrollLockedCards />
    </>
  );
}
