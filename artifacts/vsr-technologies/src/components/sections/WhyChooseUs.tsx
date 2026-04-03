import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Server, UserCog, Network } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "End-to-End Delivery",
      desc: "From initial CAD design to final commissioning and ongoing maintenance, we handle the entire lifecycle."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Tailored Architecture",
      desc: "No off-the-shelf packages. We build bespoke systems engineered for your specific threat model and facility layout."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Enterprise Reliability",
      desc: "We deploy commercial-grade hardware and redundant network designs to ensure 99.9% uptime for critical systems."
    },
    {
      icon: <UserCog className="w-8 h-8" />,
      title: "Certified Expertise",
      desc: "Our engineering team holds advanced certifications from top-tier security and networking manufacturers."
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Critical Experience",
      desc: "Proven track record securing highly regulated environments like airports, power plants, and industrial cores."
    }
  ];

  return (
    <section className="py-32 bg-[#F0FDFA] relative overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-teal-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Why Critical Facilities Choose VSR
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            When security failure is not an option, organizations rely on our rigorous engineering standards and proven methodology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-teal-50/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
