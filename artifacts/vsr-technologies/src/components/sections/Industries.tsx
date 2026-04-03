import { motion } from "framer-motion";
import industryAirport from "@/assets/images/industry-airport.png";
import industryCommercial from "@/assets/images/industry-commercial.png";
import industryIndustrial from "@/assets/images/industry-industrial.png";
import industryInfrastructure from "@/assets/images/industry-infrastructure.png";

const industries = [
  {
    name: "Airports & Aviation",
    image: industryAirport,
    desc: "Strict compliance systems managing passenger flow and restricted zones."
  },
  {
    name: "Commercial Real Estate",
    image: industryCommercial,
    desc: "Seamless integration of access control and building management."
  },
  {
    name: "Industrial Facilities",
    image: industryIndustrial,
    desc: "Robust perimeter defense and internal safety monitoring."
  },
  {
    name: "Critical Infrastructure",
    image: industryInfrastructure,
    desc: "High-security networked solutions for power and utility plants."
  }
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Securing Vital Sectors
            </h2>
            <p className="text-slate-400 text-lg">
              Different environments require distinct security paradigms. We engineer tailored infrastructure optimized for the unique regulatory and physical demands of specific industries.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
            >
              <img 
                src={ind.image} 
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-8 h-1 bg-primary mb-4 transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold mb-2">{ind.name}</h3>
                <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
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
