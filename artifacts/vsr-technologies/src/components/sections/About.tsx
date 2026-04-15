import { motion } from "framer-motion";
import { CheckCircle2, Shield, Wrench, Settings, Clock, Award } from "lucide-react";
import aboutUsImg from "@/assets/images/about-team.png";

export function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <div className="aspect-[4/3] w-full">
                <img 
                  src={aboutUsImg} 
                  alt="Security Engineering Team" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Badge overlay */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white flex items-center gap-5 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">Certified Partner</div>
                  <div className="text-sm text-slate-500 font-medium mt-1">Top Tier Security Systems</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
              Engineering Trust <br/> Through Technology.
            </h2>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              VSR Technologies is a premier physical security infrastructure company. We specialize in designing, installing, and maintaining complex security ecosystems for organizations where safety is not optional.
            </p>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              We bridge the gap between physical hardware and intelligent software, providing our clients with robust, scalable systems that protect assets, ensure compliance, and streamline facility management.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <Settings className="w-6 h-6" />, title: "System Design", desc: "Tailored architectural planning." },
                { icon: <Wrench className="w-6 h-6" />, title: "Installation", desc: "Precision deployment & structured cabling." },
                { icon: <CheckCircle2 className="w-6 h-6" />, title: "Commissioning", desc: "Rigorous testing and integration." },
                { icon: <Clock className="w-6 h-6" />, title: "Maintenance", desc: "24/7 support and lifecycle management." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-primary mt-1 shrink-0 bg-primary/5 p-2 rounded-lg">{item.icon}</div>
                  <div>
                    <div className="text-lg font-semibold text-foreground mb-1">{item.title}</div>
                    <div className="text-slate-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-12 border-t border-slate-100 flex items-center gap-8">
              <Award className="w-16 h-16 text-primary/40 shrink-0" />
              <div className="text-base text-slate-500 font-medium leading-relaxed">
                Trusted by Fortune 500 companies, international aviation authorities, and industrial leaders across North America.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
