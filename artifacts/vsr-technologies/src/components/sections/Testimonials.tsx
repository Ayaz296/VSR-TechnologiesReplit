import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

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
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <section className="py-24 sm:py-28 bg-gradient-to-br from-[#EEF4FF] to-[#E8F0FE] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-blue-400/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-indigo-400/15 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
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

        <div className="relative max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl border border-blue-100 shadow-lg px-6 sm:px-16 py-12 sm:py-16 min-h-[320px] flex items-center">
            <Quote className="absolute top-8 left-6 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 text-primary/10" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 text-center w-full"
              >
                <p className="text-lg sm:text-2xl text-slate-700 leading-relaxed font-medium mb-8">
                  "{active.quote}"
                </p>
                <div className="font-semibold text-foreground text-base">{active.role}</div>
                <div className="text-primary text-sm mt-1">{active.company}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
