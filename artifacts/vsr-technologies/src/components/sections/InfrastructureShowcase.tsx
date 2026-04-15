import { motion } from "framer-motion";
import infraBg from "@/assets/images/infra-bg.png";
import { Server, Network, ShieldCheck } from "lucide-react";

function NetworkVisualization() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-60" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        
        {/* Paths */}
        <g stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1.5" fill="none">
          <path d="M 200 500 L 400 350 L 600 400 L 800 200" />
          <path d="M 300 100 L 400 350 L 500 150" />
          <path d="M 100 300 L 400 350 L 700 550" />
          <path d="M 600 400 L 800 500" />
        </g>

        {/* Animated glowing paths */}
        <g stroke="url(#glow)" strokeWidth="3" fill="none" filter="url(#blur)">
          <motion.path 
            d="M 200 500 L 400 350 L 600 400 L 800 200" 
            strokeDasharray="1000"
            initial={{ strokeDashoffset: 1000 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M 300 100 L 400 350 L 500 150" 
            strokeDasharray="600"
            initial={{ strokeDashoffset: 600 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
          />
        </g>

        {/* Nodes */}
        {[
          { cx: 200, cy: 500 },
          { cx: 400, cy: 350 },
          { cx: 600, cy: 400 },
          { cx: 800, cy: 200 },
          { cx: 300, cy: 100 },
          { cx: 500, cy: 150 },
          { cx: 100, cy: 300 },
          { cx: 700, cy: 550 },
          { cx: 800, cy: 500 },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.cx} cy={node.cy} r="4" fill="#38bdf8" />
            <motion.circle 
              cx={node.cx} cy={node.cy} r="12" fill="none" stroke="#38bdf8" strokeWidth="1"
              animate={{ scale: [1, 2], opacity: [0.8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function InfrastructureShowcase() {
  return (
    <section id="infrastructure" className="relative py-32 bg-[#0A1628] text-white overflow-hidden">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img src={infraBg} alt="Network Infrastructure" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-[#0A1628]/80 backdrop-blur-[2px]" />
      </div>

      <NetworkVisualization />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sky-400 font-medium text-sm mb-8 backdrop-blur-sm">
              <Server size={16} />
              <span>Core Network Architecture</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 drop-shadow-md">
              The Backbone of <br />
              <span className="text-sky-400">Intelligent Security</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              High-performance surveillance requires robust foundation. We design and deploy enterprise-grade structured cabling, fiber optic networks, and secure server environments to guarantee zero-latency transmission.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 shrink-0">
                  <Network className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Structured Cabling Systems</h4>
                  <p className="text-slate-400 leading-relaxed">End-to-end copper and fiber optic deployment certified for high-bandwidth video and data streams.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 shrink-0">
                  <ShieldCheck className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Secure Data Pathways</h4>
                  <p className="text-slate-400 leading-relaxed">Air-gapped and encrypted network designs ensuring critical security footage remains isolated and protected.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Abstract 3D CSS Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] flex items-center justify-center perspective-[1200px]"
          >
            <motion.div 
              className="relative w-64 h-64 preserve-3d"
              animate={{ rotateY: 360, rotateX: 15 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {[0, 1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="absolute inset-0 border-2 border-sky-500/30 rounded-xl bg-sky-900/10 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.2)]"
                  style={{ transform: `translateZ(${(i - 1.5) * 40}px)` }}
                >
                  <div className="w-full h-full border border-white/10 rounded-xl" />
                  {i === 3 && (
                    <motion.div 
                      className="absolute inset-x-0 h-1 bg-sky-400 shadow-[0_0_15px_#38bdf8]"
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
