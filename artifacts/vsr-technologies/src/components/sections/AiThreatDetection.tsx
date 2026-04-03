import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, ScanLine, BrainCircuit } from "lucide-react";

export function AiThreatDetection() {
  return (
    <section className="py-32 bg-[#F1F5F9] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative perspective-[1000px]"
          >
            <motion.div 
              className="aspect-[4/3] rounded-2xl bg-slate-900 relative overflow-hidden shadow-2xl border-4 border-slate-800 preserve-3d"
              whileHover={{ rotateY: 5, rotateX: 2 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {/* Simulated Camera Feed Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
              
              {/* Corner brackets */}
              {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
                <motion.div 
                  key={i}
                  className={`absolute ${pos} w-8 h-8 border-white/30`}
                  style={{
                    borderTopWidth: pos.includes('top') ? 2 : 0,
                    borderBottomWidth: pos.includes('bottom') ? 2 : 0,
                    borderLeftWidth: pos.includes('left') ? 2 : 0,
                    borderRightWidth: pos.includes('right') ? 2 : 0,
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                />
              ))}

              {/* Fake UI Overlay */}
              <div className="absolute top-6 left-6 text-[12px] font-mono text-white/60 tracking-widest">
                CAM_04_PERIMETER_NORTH <br/> REC // 4K // 60FPS
              </div>
              <div className="absolute top-6 right-6 flex items-center gap-3 bg-red-500/20 px-3 py-1 rounded border border-red-500/30">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_red]"></div>
                <span className="text-[11px] font-mono text-red-50 font-bold">ALERT ACTIVE</span>
              </div>

              {/* Detection Box 1 - Person */}
              <motion.div 
                className="absolute border-2 border-red-500 bg-red-500/10 shadow-[inset_0_0_15px_rgba(239,68,68,0.3),0_0_15px_rgba(239,68,68,0.3)]"
                initial={{ width: 0, height: 0, opacity: 0 }}
                whileInView={{ width: 140, height: 320, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                style={{ top: '20%', left: '25%' }}
              >
                <div className="absolute -top-7 left-0 bg-red-500 text-white text-[10px] px-2 py-1 font-mono font-bold tracking-wider">
                  MOTION DETECTED: PERSON
                </div>
                {/* Targeting crosshair */}
                <div className="absolute inset-0 flex items-center justify-center opacity-50">
                  <div className="w-4 h-4 border border-red-500 rounded-full" />
                  <div className="absolute w-8 h-px bg-red-500" />
                  <div className="absolute h-8 w-px bg-red-500" />
                </div>
              </motion.div>

              {/* Detection Box 2 - Vehicle */}
              <motion.div 
                className="absolute border-2 border-orange-500 bg-orange-500/10 shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                initial={{ width: 0, height: 0, opacity: 0 }}
                whileInView={{ width: 220, height: 140, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
                style={{ top: '65%', left: '55%' }}
              >
                <div className="absolute -top-7 left-0 bg-orange-500 text-white text-[10px] px-2 py-1 font-mono font-bold flex items-center gap-1">
                  <AlertTriangle size={12} />
                  TRACKING: VEHICLE
                </div>
              </motion.div>

              {/* Scanning Line */}
              <motion.div 
                className="absolute left-0 right-0 h-1 bg-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                animate={{ top: ['-10%', '110%', '-10%'] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
            </motion.div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 border border-slate-300 text-primary font-medium text-sm mb-6 tracking-wide shadow-sm">
              <BrainCircuit size={18} />
              AI-POWERED SURVEILLANCE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
              Smarter Surveillance with Real-Time Threat Awareness.
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Move from passive recording to proactive defense. Our intelligent video analytics transform standard camera feeds into active sensors capable of identifying anomalies before they escalate.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: <ScanLine className="w-6 h-6 text-primary" />,
                  title: "Perimeter Intrusion Detection",
                  desc: "Virtual tripwires and intelligent zones that trigger instant alerts upon unauthorized breach."
                },
                {
                  icon: <AlertTriangle className="w-6 h-6 text-primary" />,
                  title: "Suspicious Activity Recognition",
                  desc: "Algorithmic detection of loitering, abandoned objects, or unusual crowd movement patterns."
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
                  title: "Automated Incident Verification",
                  desc: "Reduces false alarms by verifying threats through AI pattern matching and human-in-the-loop validation."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex gap-5 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                >
                  <div className="shrink-0 bg-white shadow-sm border border-slate-200 p-3 rounded-xl h-fit group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
