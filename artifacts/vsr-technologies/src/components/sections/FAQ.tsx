import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { defaultSiteContent, type SiteContent } from "@/content/siteContent";

type FAQContent = SiteContent["faq"];
type FAQEntry = FAQContent["items"][number];

function FAQItem({ item, index }: { item: FAQEntry; index: number }) {
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

export function FAQ({ content = defaultSiteContent.faq, email = defaultSiteContent.contact.email }: { content?: FAQContent; email?: string }) {
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
              {content.eyebrow}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.1]">
              {content.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-primary">
                {content.titleAccent}
              </span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {content.description}
            </p>
          </motion.div>

          {/* FAQ list */}
          <div className="rounded-3xl border border-white/8 bg-white/[0.02] backdrop-blur-sm px-6 md:px-10">
            {content.items.map((item, i) => (
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
              {content.contactPrompt}
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-semibold hover:bg-sky-400/20 hover:border-sky-400/50 transition-all duration-200"
            >
              {content.contactCta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
