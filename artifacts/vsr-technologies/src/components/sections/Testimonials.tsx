import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "VSR Technologies delivered our project with outstanding technical expertise, professionalism, and on-time execution. A dependable partner for critical infrastructure projects.",
    role: "Assistant Manager",
    company: "Johnson Controls India Pvt. Ltd.",
  },
  {
    quote:
      "Their team demonstrated excellent technical capability, maintained high safety standards, and completed the project efficiently. We highly appreciate their commitment.",
    role: "Assistant Manager",
    company: "Johnson Controls India Pvt. Ltd.",
  },
  {
    quote:
      "The VSR team ensured uninterrupted operations with exceptional support, quick response times, and reliable maintenance services.",
    role: "Senior Manager – IT Operations",
    company: "WAISL Limited",
  },
  {
    quote:
      "Professional, reliable, and proactive in every aspect. Their commitment to operational excellence has made them a trusted technology partner.",
    role: "Senior Manager – IT Operations",
    company: "WAISL Limited",
  },
  {
    quote:
      "VSR Technologies successfully delivered the project with quality, professionalism, and timely execution. Their expertise exceeded our expectations.",
    role: "Assistant Director",
    company: "Bureau of Civil Aviation Security, Ministry of Civil Aviation, Government of India",
  },
  {
    quote:
      "The project was completed efficiently with excellent technical execution and adherence to quality standards. We confidently recommend VSR Technologies.",
    role: "Project Manager",
    company: "Johnson Controls India Pvt. Ltd.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            What our clients say
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            Trusted by aviation authorities, defence organisations, industrial operators, and government bodies across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/25 mb-4 shrink-0" />
              <p className="text-slate-700 leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div className="pt-5 border-t border-slate-200">
                <div className="font-semibold text-foreground text-sm">{t.role}</div>
                <div className="text-slate-500 text-sm mt-0.5">{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
