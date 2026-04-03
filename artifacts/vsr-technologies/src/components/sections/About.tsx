import { motion } from "framer-motion";
import { CheckCircle2, Shield, Wrench, Settings, Clock, Award } from "lucide-react";
import aboutUsImg from "@/assets/images/about-us.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
              <img 
                src={aboutUsImg} 
                alt="Security Operations Center" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Certified Partner</div>
                    <div className="text-xs text-slate-600 font-medium">Top Tier Security Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Engineering Trust Through Technology.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              VSR Technologies is a premier physical security infrastructure company. We specialize in designing, installing, and maintaining complex security ecosystems for organizations where safety is not optional.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We bridge the gap between physical hardware and intelligent software, providing our clients with robust, scalable systems that protect assets, ensure compliance, and streamline facility management.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Settings className="w-5 h-5" />, title: "System Design", desc: "Tailored architectural planning." },
                { icon: <Wrench className="w-5 h-5" />, title: "Installation", desc: "Precision deployment & structured cabling." },
                { icon: <CheckCircle2 className="w-5 h-5" />, title: "Commissioning", desc: "Rigorous testing and integration." },
                { icon: <Clock className="w-5 h-5" />, title: "Maintenance", desc: "24/7 support and lifecycle management." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-primary mt-1 shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-foreground">{item.title}</div>
                    <div className="text-sm text-slate-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-10 border-t border-slate-100 flex items-center gap-6">
              <Award className="w-12 h-12 text-slate-300" />
              <div className="text-sm text-slate-500 font-medium leading-relaxed">
                Trusted by Fortune 500 companies, international aviation authorities, and industrial leaders across North America.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
