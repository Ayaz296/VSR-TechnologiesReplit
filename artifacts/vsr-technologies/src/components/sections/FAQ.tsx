import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of facilities does VSR Technologies typically serve?",
    a: "We serve enterprise and institutional facilities that demand the highest security standards — including international airports, government complexes, data centres, industrial plants, hospital campuses, high-rise commercial towers, and smart city infrastructure. If reliability and zero-failure are non-negotiable, VSR belongs there.",
  },
  {
    q: "Do you handle the full project lifecycle or just installation?",
    a: "We manage the complete lifecycle: site inspection and threat assessment, bespoke system design (with full CAD documentation), equipment supply, certified installation, commissioning, operator training, and ongoing 24/7 monitoring and maintenance. There are no third-party handoffs — every stage is handled by our own certified engineers.",
  },
  {
    q: "What certifications do your engineers hold?",
    a: "Our technical team holds industry-leading credentials including NICET Level III (Fire Alarm Systems), BICSI RCDD (Registered Communications Distribution Designer), and vendor certifications from Axis Communications, Bosch Security Systems, Genetec, Lenel S2, Honeywell, and Milestone. We are also NFPA 72 and TIA-568 compliant installers.",
  },
  {
    q: "Can VSR integrate multiple systems into a unified platform?",
    a: "Absolutely. Integration is at the core of our approach. We connect CCTV, video analytics, access control, fire alarm, HVAC, and building management systems into a single unified dashboard — giving your operators one pane of glass for total situational awareness and control.",
  },
  {
    q: "How do you approach projects in sensitive or secure environments?",
    a: "All VSR personnel undergo background verification before any site access. We carry full professional liability and general liability insurance. Our installations are designed to minimise operational disruption, and we coordinate closely with your security and facilities teams throughout every phase.",
  },
  {
    q: "What kind of ongoing support do you provide after installation?",
    a: "We offer 24/7 remote monitoring, proactive maintenance schedules, firmware and software update management, and guaranteed rapid on-site response time agreements. Our support contracts are structured to keep your system performing at peak — not just functional.",
  },
  {
    q: "Do you provide systems for smaller commercial buildings?",
    a: "Yes. While our heritage is in large-scale enterprise deployments, we design scalable systems for commercial properties of any size. Every client receives the same engineering rigour and bespoke approach — scaled appropriately to their environment and budget.",
  },
  {
    q: "How do I get a quote or schedule a site assessment?",
    a: "Use our Contact form on this page or call our team directly. We offer a complimentary initial site assessment and consultation for all qualified enquiries. Our engineers will survey your facility, identify requirements, and deliver a detailed proposal — at no cost and with no obligation.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`border-b border-white/8 last:border-0 overflow-hidden`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group focus:outline-none"
      >
        <span className={`text-base md:text-lg font-semibold leading-snug transition-colors duration-200 ${open ? "text-sky-300" : "text-white group-hover:text-sky-200"}`}>
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className={`shrink-0 mt-0.5 p-1.5 rounded-full border transition-colors duration-200 ${open ? "border-sky-400/50 bg-sky-400/15 text-sky-400" : "border-white/15 bg-white/5 text-slate-400 group-hover:border-sky-400/40 group-hover:text-sky-300"}`}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <p className="text-slate-400 text-base leading-relaxed pb-7 pr-12">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section className="py-28 bg-[#060E1E] relative overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-600/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-medium mb-8">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.1]">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-primary">
                Questions
              </span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about working with VSR Technologies — from project scope to ongoing support.
            </p>
          </motion.div>

          {/* FAQ list */}
          <div className="rounded-3xl border border-white/8 bg-white/[0.02] backdrop-blur-sm px-6 md:px-10">
            {faqs.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-slate-500 text-base mb-4">
              Still have questions? Our team is happy to help.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-semibold hover:bg-sky-400/20 hover:border-sky-400/50 transition-all duration-200"
            >
              Contact our team →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
