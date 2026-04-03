import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, ScanLine, BrainCircuit } from "lucide-react";

export function AiThreatDetection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800">
              {/* Simulated Camera Feed Background - Dark minimal gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
              
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
              
              {/* Fake UI Overlay */}
              <div className="absolute top-4 left-4 text-[10px] font-mono text-white/50 tracking-widest">
                CAM_04_PERIMETER_NORTH // REC // 1080P // 60FPS
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-white/70">LIVE</span>
              </div>

              {/* Detection Box 1 - Person */}
              <motion.div 
                className="absolute border border-primary/60 bg-primary/10"
                initial={{ width: 0, height: 0, opacity: 0 }}
                whileInView={{ width: 120, height: 280, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ top: '30%', left: '20%' }}
              >
                <div className="absolute -top-6 left-0 bg-primary/80 text-white text-[9px] px-1 py-0.5 font-mono">
                  PERSON 98%
                </div>
                {/* Corner markers */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-primary"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-primary"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-primary"></div>
              </motion.div>

              {/* Detection Box 2 - Vehicle */}
              <motion.div 
                className="absolute border border-amber-500/60 bg-amber-500/10"
                initial={{ width: 0, height: 0, opacity: 0 }}
                whileInView={{ width: 200, height: 120, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                style={{ top: '60%', left: '55%' }}
              >
                <div className="absolute -top-6 left-0 bg-amber-500/80 text-white text-[9px] px-1 py-0.5 font-mono flex items-center gap-1">
                  <AlertTriangle size={10} />
                  UNAUTHORIZED_VEHICLE
                </div>
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-amber-500"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-amber-500"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-amber-500"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-amber-500"></div>
              </motion.div>

              {/* Scanning Line */}
              <motion.div 
                className="absolute left-0 right-0 h-px bg-primary/30 shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -inset-4 border border-slate-100 -z-10 rounded-2xl"></div>
            <div className="absolute -inset-8 border border-slate-50 -z-20 rounded-3xl"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4 tracking-wide">
              <BrainCircuit size={18} />
              ADVANCED ANALYTICS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Smarter Surveillance with Real-Time Threat Awareness.
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Move from passive recording to proactive defense. Our intelligent video analytics transform standard camera feeds into active sensors capable of identifying anomalies before they escalate.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <ScanLine className="w-5 h-5 text-primary" />,
                  title: "Perimeter Intrusion Detection",
                  desc: "Virtual tripwires and zones that trigger instant alerts upon breach."
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-primary" />,
                  title: "Suspicious Activity Recognition",
                  desc: "Algorithmic detection of loitering, abandoned objects, or unusual crowd movement."
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                  title: "Automated Incident Verification",
                  desc: "Reduces false alarms by verifying threats through AI pattern matching."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 mt-1 bg-primary/5 p-2 rounded-full h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
