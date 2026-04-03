import { motion } from "framer-motion";
import { AlertTriangle, ScanLine, BrainCircuit, Crosshair, Radio } from "lucide-react";

function ThreatCamera() {
  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-orange-900/40"
      style={{ background: "linear-gradient(135deg, #0f0500 0%, #1a0800 50%, #150400 100%)" }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "linear-gradient(to right, #f97316 1px, transparent 1px), linear-gradient(to bottom, #f97316 1px, transparent 1px)", backgroundSize: "3rem 3rem" }}
      />

      {/* Outer vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

      {/* Orange glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-orange-600/10 blur-[60px]" />

      {/* Corner frames */}
      {[
        "top-4 left-4 border-t-2 border-l-2",
        "top-4 right-4 border-t-2 border-r-2",
        "bottom-4 left-4 border-b-2 border-l-2",
        "bottom-4 right-4 border-b-2 border-r-2",
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute ${cls} w-7 h-7 border-orange-400/60`}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
        />
      ))}

      {/* HUD Top bar */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
        <div className="text-[10px] font-mono text-orange-400/70 tracking-widest">
          CAM_04 // PERIMETER_NORTH<br />REC · 4K · 60FPS
        </div>
        <motion.div
          className="flex items-center gap-2 px-3 py-1.5 rounded border border-red-500/40 bg-red-500/15"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_6px_2px_rgba(239,68,68,0.6)]" />
          <span className="text-[10px] font-mono font-bold text-red-300 tracking-widest">THREAT ACTIVE</span>
        </motion.div>
      </div>

      {/* Detection box — Person */}
      <motion.div
        className="absolute border-2 border-red-500 bg-red-500/8 shadow-[inset_0_0_20px_rgba(239,68,68,0.2),0_0_20px_rgba(239,68,68,0.25)]"
        initial={{ width: 0, height: 0, opacity: 0 }}
        whileInView={{ width: 130, height: 290, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.7 }}
        style={{ top: "18%", left: "22%" }}
      >
        <div className="absolute -top-6 left-0 bg-red-600 text-white text-[9px] px-2 py-1 font-mono font-bold tracking-wider whitespace-nowrap">
          INTRUDER DETECTED
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <div className="w-5 h-5 border border-red-400 rounded-full" />
          <div className="absolute w-10 h-px bg-red-400" />
          <div className="absolute h-10 w-px bg-red-400" />
        </div>
        {/* Confidence */}
        <div className="absolute bottom-2 left-2 text-[9px] font-mono text-red-300">CONF: 97.3%</div>
      </motion.div>

      {/* Detection box — Vehicle */}
      <motion.div
        className="absolute border-2 border-orange-500 bg-orange-500/8 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
        initial={{ width: 0, height: 0, opacity: 0 }}
        whileInView={{ width: 200, height: 120, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.1 }}
        style={{ top: "60%", left: "52%" }}
      >
        <div className="absolute -top-6 left-0 bg-orange-600 text-white text-[9px] px-2 py-1 font-mono font-bold flex items-center gap-1 whitespace-nowrap">
          <AlertTriangle size={9} />
          UNAUTHORIZED VEHICLE
        </div>
        <div className="absolute bottom-2 right-2 text-[9px] font-mono text-orange-300">TRACKING</div>
      </motion.div>

      {/* Scanning line — orange */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-orange-400/60 shadow-[0_0_18px_4px_rgba(251,146,60,0.5)]"
        animate={{ top: ["-5%", "105%"] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
      />

      {/* Bottom status bar */}
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
        <div className="text-[9px] font-mono text-orange-400/50">AI ENGINE: ACTIVE · LATENCY 12ms</div>
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="flex items-center gap-1 text-[9px] font-mono text-orange-300"
        >
          <Radio size={9} />
          LIVE
        </motion.div>
      </div>
    </div>
  );
}

const capabilities = [
  {
    icon: <ScanLine className="w-5 h-5" />,
    title: "Perimeter Intrusion Detection",
    desc: "Virtual tripwires and AI-defined zones trigger instant alerts upon unauthorized breach — before a human operator sees it.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Suspicious Activity Recognition",
    desc: "Detects loitering, abandoned objects, and crowd anomalies through real-time behavioral pattern analysis.",
  },
  {
    icon: <Crosshair className="w-5 h-5" />,
    title: "Automated Incident Verification",
    desc: "Reduces false alarms by cross-referencing multiple sensors and verifying threats through AI pattern matching.",
  },
];

export function AiThreatDetection() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #120800 0%, #1f0d00 30%, #2a0f00 60%, #160500 100%)",
      }}
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-red-800/10 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(to right, #f97316 1px, transparent 1px), linear-gradient(to bottom, #f97316 1px, transparent 1px)", backgroundSize: "80px 80px" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Camera Mock */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <ThreatCamera />
            {/* Ambient glow behind */}
            <div className="absolute inset-0 -z-10 bg-orange-500/10 blur-[80px] scale-110 rounded-full" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <BrainCircuit size={15} />
              AI-POWERED SURVEILLANCE
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Threats don't wait.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Neither does our AI.
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-xl">
              Move from passive recording to proactive defense. Our intelligent video analytics transform standard camera feeds into active sensors that identify and escalate anomalies in real time — before they become incidents.
            </p>

            <div className="space-y-6">
              {capabilities.map((item, i) => (
                <motion.div
                  key={i}
                  className="group flex gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-orange-500/20 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                >
                  <div className="shrink-0 p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 h-fit group-hover:bg-orange-500/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1.5">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6"
            >
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
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
