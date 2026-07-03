import { motion } from "framer-motion";

const milestones = [
  { year: "2017", event: "VSR Technologies founded in Hyderabad with a focus on CCTV surveillance and security solutions." },
  { year: "2019", event: "Expanded into structured cabling, networking, and integrated infrastructure services for commercial clients." },
  { year: "2021", event: "Successfully delivered large-scale security and networking projects across multiple industries." },
  { year: "2023", event: "Strengthened expertise in access control systems, video management, and enterprise security solutions." },
  { year: "2024", event: "Executed critical infrastructure projects, including airport and industrial sector deployments." },
  { year: "2026", event: "Recognized as a trusted partner for security, networking, and technology infrastructure solutions across India." },
];

export function Milestones() {
  return (
    <section className="py-24 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            Milestones
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">Our Journey</h2>
          <p className="text-xl text-slate-500 leading-relaxed">Nearly a decade of steady growth, earned one project at a time.</p>
        </motion.div>

        <div className="relative max-w-3xl">
          <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-slate-200" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex gap-8 items-start"
              >
                <div className="relative shrink-0 w-6 flex justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5 ring-4 ring-primary/15" />
                </div>
                <div className="pb-2">
                  <div className="text-primary text-sm font-bold mb-1 tracking-widest">{m.year}</div>
                  <p className="text-slate-600 leading-relaxed">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
