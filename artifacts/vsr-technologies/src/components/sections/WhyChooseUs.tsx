import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    "End-to-End Execution — From initial design to final commissioning and ongoing maintenance.",
    "Tailored System Architecture — No off-the-shelf packages. We build for your specific threat model.",
    "Uncompromising Reliability — Enterprise-grade hardware and redundant network design.",
    "Certified Expertise — Highly trained technicians certified in top-tier security platforms.",
    "Future-Proof Scalability — IP-based systems ready for tomorrow's AI integrations."
  ];

  return (
    <section className="py-24 bg-[#F7F8FA] border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Why Critical Facilities Choose VSR
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            When security failure is not an option, organizations rely on our rigorous engineering standards and proven methodology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">
            {reasons.map((reason, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{reason}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
