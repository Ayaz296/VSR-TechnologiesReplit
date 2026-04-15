import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0F1E3C] relative overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_70%)] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-5">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Connect with our engineering team to architect a solution tailored to your facility's exact requirements.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left Info Panel */}
            <div className="md:col-span-2 bg-slate-900/50 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
              <div className="relative z-10">
                <div className="mb-8 sm:mb-10">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-sky-400 mb-4 sm:mb-5" />
                  <h3 className="text-lg sm:text-xl font-bold mb-3">Direct Access to Engineering.</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Skip the generic sales pitch. Talk directly with the experts who design and deploy critical security systems.
                  </p>
                </div>

                <div className="space-y-5 sm:space-y-6 text-sm text-slate-300">
                  <div>
                    <div className="font-semibold text-sky-400 mb-1 text-xs uppercase tracking-wider">Corporate HQ</div>
                    <div className="leading-snug">1200 Infrastructure Way<br />Dallas, TX 75201</div>
                  </div>
                  <div>
                    <div className="font-semibold text-sky-400 mb-1 text-xs uppercase tracking-wider">Direct Line</div>
                    <div>+1 (800) 555-0199</div>
                  </div>
                  <div>
                    <div className="font-semibold text-sky-400 mb-1 text-xs uppercase tracking-wider">Email</div>
                    <div>procurement@vsrtech.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="md:col-span-3 p-6 sm:p-8 md:p-10">
              <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-300 text-xs sm:text-sm">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 h-10 sm:h-11 text-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-slate-300 text-xs sm:text-sm">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 h-10 sm:h-11 text-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-300 text-xs sm:text-sm">Company / Organization</Label>
                  <Input id="company" placeholder="Acme Logistics" className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 h-10 sm:h-11 text-sm" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300 text-xs sm:text-sm">Work Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 h-10 sm:h-11 text-sm" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-300 text-xs sm:text-sm">Project Requirements</Label>
                  <Textarea
                    id="message"
                    placeholder="Briefly describe your facility and security needs..."
                    className="min-h-[100px] sm:min-h-[120px] bg-white/5 border-white/20 text-white placeholder:text-slate-500 resize-none text-sm"
                  />
                </div>

                <Button className="w-full h-11 sm:h-12 text-sm sm:text-base bg-sky-500 hover:bg-sky-400 text-white border-none shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300">
                  Submit Request
                </Button>
                <p className="text-xs text-center text-slate-500">
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
