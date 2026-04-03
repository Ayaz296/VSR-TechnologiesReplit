import { motion } from "framer-motion";
import industryAirport from "@/assets/images/ind-airport.png";
import industryCommercial from "@/assets/images/ind-commercial.png";
import industryIndustrial from "@/assets/images/ind-industrial.png";
import industryInfrastructure from "@/assets/images/ind-critical.png";

const industries = [
  {
    name: "Airports & Aviation",
    image: industryAirport,
    desc: "Strict compliance systems managing passenger flow and restricted zones. Biometric boarding and high-throughput security."
  },
  {
    name: "Commercial Real Estate",
    image: industryCommercial,
    desc: "Seamless integration of access control, visitor management, and building automation for premium corporate tenants."
  },
  {
    name: "Industrial Facilities",
    image: industryIndustrial,
    desc: "Robust perimeter defense, safety monitoring, and asset protection in harsh manufacturing environments."
  },
  {
    name: "Critical Infrastructure",
    image: industryInfrastructure,
    desc: "High-security networked solutions for power plants, utilities, and municipal systems requiring NERC CIP compliance."
  }
];

export function Industries() {
  return (
    <section id="industries" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Securing Vital Sectors
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed">
              Different environments require distinct security paradigms. We engineer tailored infrastructure optimized for the unique regulatory and physical demands of specific industries.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img 
                src={ind.image} 
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1.5 bg-primary mb-6 transform origin-left transition-all duration-500 group-hover:w-24"></div>
                <h3 className="text-3xl font-bold mb-4 text-white">{ind.name}</h3>
                <p className="text-lg text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed max-w-lg">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
