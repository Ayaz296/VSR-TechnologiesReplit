import { motion } from "framer-motion";
import infraBg from "@/assets/images/infra-bg.png";
import { Server, Network, ShieldCheck, Cpu } from "lucide-react";

function NetworkVisualization() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-50" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="glow2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Static base paths */}
        <g stroke="rgba(56,189,248,0.12)" strokeWidth="1.5" fill="none">
          <path d="M 150 600 L 450 420 L 700 480 L 950 250 L 1100 300" />
          <path d="M 350 80 L 450 420 L 600 180 L 800 320" />
          <path d="M 80 350 L 450 420 L 750 650 L 1050 580" />
          <path d="M 700 480 L 950 600 L 1100 550" />
          <path d="M 200 200 L 450 420 L 300 550" />
        </g>

        {/* Animated glowing paths */}
        <g stroke="url(#glow)" strokeWidth="3" fill="none" filter="url(#blur)">
          <motion.path
            d="M 150 600 L 450 420 L 700 480 L 950 250 L 1100 300"
            strokeDasharray="1400"
            initial={{ strokeDashoffset: 1400 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 350 80 L 450 420 L 600 180 L 800 320"
            strokeDasharray="800"
            initial={{ strokeDashoffset: 800 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1.2 }}
          />
        </g>
        <g stroke="url(#glow2)" strokeWidth="2" fill="none" filter="url(#blur)">
          <motion.path
            d="M 80 350 L 450 420 L 750 650 L 1050 580"
            strokeDasharray="1100"
            initial={{ strokeDashoffset: 1100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 0.7 }}
          />
        </g>

        {/* Nodes */}
        {[
          { cx: 150, cy: 600 }, { cx: 450, cy: 420 }, { cx: 700, cy: 480 },
          { cx: 950, cy: 250 }, { cx: 350, cy: 80 }, { cx: 600, cy: 180 },
          { cx: 80, cy: 350 }, { cx: 750, cy: 650 }, { cx: 950, cy: 600 },
          { cx: 1100, cy: 300 }, { cx: 200, cy: 200 }, { cx: 800, cy: 320 },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.cx} cy={node.cy} r="4" fill="#38bdf8" opacity="0.8" />
            <motion.circle
              cx={node.cx} cy={node.cy} r="14" fill="none"
              stroke={i % 3 === 0 ? "#818cf8" : "#38bdf8"} strokeWidth="1"
              animate={{ scale: [1, 2.5], opacity: [0.7, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.22 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

const features = [
  {
    icon: Network,
    title: "Structured Cabling Systems",
    desc: "End-to-end copper and fiber optic deployment certified for high-bandwidth video and data streams.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Pathways",
    desc: "Air-gapped and encrypted network designs ensuring critical security footage remains isolated and protected.",
  },
  {
    icon: Cpu,
    title: "Edge Computing & Storage",
    desc: "On-site NVR and edge AI processing clusters eliminate single points of failure and cloud dependencies.",
  },
];

export function InfrastructureShowcase() {
  return (
    <section id="infrastructure" className="fluid-grid-section fluid-to-ai relative py-24 sm:py-32 lg:py-44 bg-[#0A1628] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={infraBg}
          alt="Network Infrastructure"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[#0A1628]/82 backdrop-blur-[1px]" />
      </div>

      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-sky-500/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-violet-500/5 rounded-full blur-[140px] pointer-events-none" />

      <NetworkVisualization />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 text-sky-300 font-medium text-xs sm:text-sm mb-8 sm:mb-10 backdrop-blur-sm">
              <Server size={14} className="shrink-0" />
              <span>Core Network Architecture</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 leading-[1.05] drop-shadow-md">
              The Backbone of
              <br />
              <span className="text-sky-400">Intelligent Security</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-10 sm:mb-14 leading-relaxed max-w-xl">
              High-performance surveillance requires a robust foundation. We design and deploy enterprise-grade structured cabling, fiber optic networks, and secure server environments to guarantee zero-latency transmission across your entire facility.
            </p>

            <div className="space-y-6 sm:space-y-8">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-4 sm:gap-5">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-1.5">{f.title}</h4>
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — 3D visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[420px] sm:h-[520px] lg:h-[600px] flex items-center justify-center"
            style={{ perspective: "1400px" }}
          >
            {/* Outer glow ring */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-sky-500/5 border border-sky-400/10 blur-xl" />

            <motion.div
              animate={{ rotateY: 360, rotateX: 18 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: "preserve-3d" }}
              className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]"
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 border-2 border-sky-500/25 rounded-2xl bg-sky-900/8 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_rgba(56,189,248,0.15)]"
                  style={{ transform: `translateZ(${(i - 2) * 44}px)` }}
                >
                  <div className="w-full h-full border border-white/8 rounded-2xl" />
                  {i === 4 && (
                    <motion.div
                      className="absolute inset-x-0 h-[2px] bg-sky-400 shadow-[0_0_20px_6px_rgba(56,189,248,0.5)]"
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  {i === 2 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Server className="w-16 h-16 sm:w-20 sm:h-20 text-sky-400/20" />
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Floating stat badges */}
            {[
              { label: "99.9% Uptime", sub: "SLA Guaranteed", x: "-right-4 sm:-right-8", y: "top-16 sm:top-24" },
              { label: "10 Gbps", sub: "Fiber Backbone", x: "-left-4 sm:-left-8", y: "bottom-16 sm:bottom-24" },
            ].map((badge) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                animate={{ y: [0, -6, 0] }}
                className={`absolute ${badge.x} ${badge.y} px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white/8 border border-white/15 backdrop-blur-md shadow-lg`}
              >
                <div className="text-white font-bold text-xs sm:text-sm leading-none mb-0.5">{badge.label}</div>
                <div className="text-slate-400 text-[10px] sm:text-xs">{badge.sub}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
