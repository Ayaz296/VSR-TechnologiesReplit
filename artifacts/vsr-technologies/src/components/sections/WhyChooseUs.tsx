import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Server, UserCog, Network, Clock } from "lucide-react";
import { defaultSiteContent, type SiteContent } from "@/content/siteContent";

type WhyChooseUsContent = SiteContent["whyChooseUs"];

const featureStyles = [
  { num: "01", icon: Network,    color: "text-blue-700",   bg: "bg-blue-50",    border: "border-blue-100",    accent: "from-primary to-blue-600" },
  { num: "02", icon: Server,     color: "text-indigo-700", bg: "bg-indigo-50",  border: "border-indigo-100",  accent: "from-indigo-500 to-violet-600" },
  { num: "03", icon: ShieldCheck,color: "text-cyan-700",   bg: "bg-cyan-50",    border: "border-cyan-100",    accent: "from-cyan-500 to-teal-600" },
  { num: "04", icon: UserCog,    color: "text-blue-700",   bg: "bg-blue-50",    border: "border-blue-100",    accent: "from-primary to-blue-600" },
  { num: "05", icon: HardHat,    color: "text-indigo-700", bg: "bg-indigo-50",  border: "border-indigo-100",  accent: "from-indigo-500 to-violet-600" },
  { num: "06", icon: Clock,      color: "text-cyan-700",   bg: "bg-cyan-50",    border: "border-cyan-100",    accent: "from-cyan-500 to-teal-600" },
];

export function WhyChooseUs({ content = defaultSiteContent.whyChooseUs }: { content?: WhyChooseUsContent }) {
  const features = featureStyles.map((style, index) => ({
    ...style,
    ...content.features[index],
  }));

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#EEF4FF] to-[#EFF6FF] relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-indigo-400/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-medium mb-5 sm:mb-6">
            {content.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-5 leading-[1.1]">
            {content.title}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
              {content.titleAccent}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-5 sm:p-7 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-default"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              >
                {/* Number watermark */}
                <div className="absolute -top-2 -right-2 text-[72px] sm:text-[90px] font-black text-slate-50 leading-none select-none group-hover:text-slate-100/80 transition-colors duration-300">
                  {f.num}
                </div>

                {/* Top accent line */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${f.accent}`}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 + 0.2 }}
                />

                {/* Icon */}
                <div className={`inline-flex p-2.5 sm:p-3 rounded-xl ${f.bg} ${f.color} mb-4 sm:mb-5 relative z-10`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 sm:mb-3 relative z-10">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed relative z-10">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
