import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0F1E3C] relative overflow-hidden text-white">
      {/* Abstract light beam / grid pattern background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_70%)] pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-xl text-slate-300">
            Connect with our engineering team to architect a solution tailored to your facility's exact requirements.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Left Info Panel */}
            <div className="md:col-span-2 bg-slate-900/50 p-12 flex flex-col justify-between relative overflow-hidden border-r border-white/10">
              <div className="relative z-10">
                <div className="mb-12">
                  <Shield className="w-12 h-12 text-sky-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Direct Access to Engineering.</h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    Skip the generic sales pitch. Talk directly with the experts who design and deploy critical security systems.
                  </p>
                </div>
                
                <div className="space-y-8 text-base text-slate-300">
                  <div>
                    <div className="font-semibold text-white mb-2 text-sm uppercase tracking-wider text-sky-400">Corporate HQ</div>
                    <div>1200 Infrastructure Way<br/>Dallas, TX 75201</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-2 text-sm uppercase tracking-wider text-sky-400">Direct Line</div>
                    <div>+1 (800) 555-0199</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-2 text-sm uppercase tracking-wider text-sky-400">Email</div>
                    <div>procurement@vsrtech.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="md:col-span-3 p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-slate-300">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 h-12" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-slate-300">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 h-12" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="company" className="text-slate-300">Company / Organization</Label>
                  <Input id="company" placeholder="Acme Logistics" className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 h-12" />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-slate-300">Work Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 h-12" />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-slate-300">Project Requirements</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Briefly describe your facility and security needs..." 
                    className="min-h-[120px] bg-white/5 border-white/20 text-white placeholder:text-slate-500 resize-none"
                  />
                </div>
                
                <Button className="w-full h-14 text-lg bg-sky-500 hover:bg-sky-400 text-white mt-4 border-none shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300">
                  Submit Request
                </Button>
                <p className="text-sm text-center text-slate-500 mt-6">
                  Your information is kept strictly confidential.
                </p>
              </form>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
