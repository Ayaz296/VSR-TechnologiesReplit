import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background architectural elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Left Info Panel */}
            <div className="md:col-span-2 bg-slate-950 p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Secure Your Infrastructure.</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Contact our engineering team to discuss your facility's physical security requirements.
                  </p>
                </div>
                
                <div className="space-y-6 text-sm text-slate-300">
                  <div>
                    <div className="font-semibold text-white mb-1">Corporate HQ</div>
                    <div>1200 Infrastructure Way<br/>Dallas, TX 75201</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Direct Line</div>
                    <div>+1 (800) 555-0199</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <div>procurement@vsrtech.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="md:col-span-3 p-10">
              <h3 className="text-xl font-bold text-foreground mb-6">Request a Consultation</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-slate-50 border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" className="bg-slate-50 border-slate-200" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company / Organization</Label>
                  <Input id="company" placeholder="Acme Logistics" className="bg-slate-50 border-slate-200" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="bg-slate-50 border-slate-200" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Project Requirements</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Briefly describe your facility and security needs..." 
                    className="min-h-[100px] bg-slate-50 border-slate-200 resize-none"
                  />
                </div>
                
                <Button className="w-full h-11 text-base">Submit Request</Button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  Your information is kept strictly confidential.
                </p>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
