import { motion } from "framer-motion";
import industryAirport from "@/assets/images/ind-airport.png";
import industryCommercial from "@/assets/images/ind-commercial.png";
import industryIndustrial from "@/assets/images/ind-industrial.png";
import industryInfrastructure from "@/assets/images/ind-critical.png";
import { defaultSiteContent, type SiteContent } from "@/content/siteContent";

type IndustriesContent = SiteContent["industries"];

const industryImages = [
  industryAirport,
  industryCommercial,
  industryIndustrial,
  industryInfrastructure,
];

export function Industries({ content = defaultSiteContent.industries }: { content?: IndustriesContent }) {
  const industries = content.items.map((item, index) => ({
    ...item,
    image: item.image || industryImages[index] || industryImages[0],
  }));

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
              {content.title}
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed">
              {content.description}
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
              className="group relative h-[320px] sm:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img 
                src={ind.image} 
                alt={ind.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-5 sm:p-8 md:p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-10 sm:w-12 h-1 sm:h-1.5 bg-primary mb-3 sm:mb-5 transform origin-left transition-all duration-500 group-hover:w-20 sm:group-hover:w-24"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white">{ind.name}</h3>
                <p className="text-sm sm:text-base text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed max-w-lg">
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
