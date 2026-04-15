import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { AlertTriangle, Clock, Eye, ShieldCheck, Zap, Globe } from "lucide-react";

const stats = [
  {
    icon: Eye,
    value: "4K",
    unit: "Ultra HD",
    title: "Crystal-Clear Surveillance",
    detail: "Every camera in our deployments supports 4K Ultra HD resolution with H.265 compression — delivering forensic-quality footage without straining your network.",
    accent: "from-sky-500 to-blue-600",
    glow: "rgba(14,165,233,0.2)",
  },
  {
    icon: Clock,
    value: "<12",
    unit: "ms latency",
    title: "Real-Time Threat Alerts",
    detail: "Our AI analytics pipeline processes video frames and issues threat alerts in under 12 milliseconds — faster than any human operator can react to a monitor.",
    accent: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    unit: "uptime",
    title: "Enterprise-Grade Reliability",
    detail: "Redundant network paths, failover recording, and UPS-backed power keep your security systems online even during grid failures and network disruptions.",
    accent: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.2)",
  },
  {
    icon: AlertTriangle,
    value: "97%",
    unit: "accuracy",
    title: "AI Detection Precision",
    detail: "Our video analytics engine achieves 97%+ true positive detection rates, dramatically reducing false alarms while maintaining zero-miss threat response standards.",
    accent: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.2)",
  },
  {
    icon: Zap,
    value: "500+",
    unit: "sites secured",
    title: "Proven at Scale",
    detail: "More than 500 enterprise sites worldwide rely on VSR-installed systems — from 20-camera office buildings to 800-camera airport complexes.",
    accent: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.2)",
  },
  {
    icon: Globe,
    value: "24/7",
    unit: "monitoring",
    title: "Always-On Protection",
    detail: "Our Network Operations Centre monitors client systems around the clock, proactively identifying performance degradation and dispatching field teams before failures become incidents.",
    accent: "from-red-500 to-rose-600",
    glow: "rgba(239,68,68,0.2)",
  },
];

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = stat.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, type: "spring", stiffness: 200, damping: 20 }}
      onClick={() => setExpanded((v) => !v)}
      className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm cursor-pointer overflow-hidden"
      style={{
        boxShadow: expanded ? `0 0 40px ${stat.glow}` : "none",
        transition: "box-shadow 0.4s ease",
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background glow on expand */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-[0.08] pointer-events-none`}
          />
        )}
      </AnimatePresence>

      <div className="p-7 relative z-10">
        {/* Top row */}
        <div className="flex items-start justify-between mb-5">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.accent} shadow-lg`}>
            <Icon className="w-5 h-5 text-white" />
          </div>

          {/* Explode indicator */}
          <motion.div
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/40 text-xs"
          >
            +
          </motion.div>
        </div>

        {/* Stat value */}
        <div className="mb-1">
          <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${stat.accent}`}>
            {stat.value}
          </span>
          <span className="text-sm text-slate-500 ml-2 font-medium">{stat.unit}</span>
        </div>

        <h4 className="text-base font-bold text-white mb-1">{stat.title}</h4>

        {/* Expandable detail */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.p
              key="detail"
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 12 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-slate-400 text-sm leading-relaxed overflow-hidden"
            >
              {stat.detail}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Tap hint */}
        <AnimatePresence>
          {!expanded && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[11px] text-slate-600 mt-3 font-medium"
            >
              Tap to learn more →
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom accent bar */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${stat.accent}`}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: expanded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

export function ExplodingStats() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="fluid-grid-section fluid-to-network py-28 bg-[#0A1628] relative overflow-hidden">
      {/* Parallax bg grid */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-600/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-medium mb-8">
            By The Numbers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-[1.1]">
            Performance you can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-primary">
              measure.
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Tap any metric to see the engineering behind the number.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.title} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
