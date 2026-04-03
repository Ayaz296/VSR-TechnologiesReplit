import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Video, 
  Network, 
  Building2, 
  Map, 
  DoorClosed, 
  Flame, 
  Car, 
  Eye
} from "lucide-react";
import serviceCctv from "@/assets/images/service-cctv-2.png";
import serviceNetworking from "@/assets/images/service-network.png";
import serviceSmartcity from "@/assets/images/service-smartcity-2.png";
import serviceFire from "@/assets/images/service-fire-2.png";
import serviceParking from "@/assets/images/service-parking.png";
import serviceTurnstiles from "@/assets/images/service-turnstiles.png";
import serviceBuilding from "@/assets/images/service-building.png";
import serviceFiber from "@/assets/images/service-fiber.png";

const services = [
  {
    title: "CCTV Surveillance",
    description: "High-definition, networked camera systems designed for comprehensive perimeter and internal monitoring.",
    icon: <Video className="w-6 h-6" />,
    image: serviceCctv
  },
  {
    title: "Video Analytics",
    description: "AI-driven insights for automated threat detection, facial recognition, and behavioral analysis.",
    icon: <Eye className="w-6 h-6" />,
    image: serviceFiber
  },
  {
    title: "Networking Solutions",
    description: "Robust structured cabling and fiber optics forming the backbone of secure facility communications.",
    icon: <Network className="w-6 h-6" />,
    image: serviceNetworking
  },
  {
    title: "Building Management",
    description: "Integrated control systems unifying HVAC, lighting, and security into a single pane of glass.",
    icon: <Building2 className="w-6 h-6" />,
    image: serviceBuilding
  },
  {
    title: "Smart City Solutions",
    description: "Macro-scale infrastructure connecting municipal services for safer, more efficient urban environments.",
    icon: <Map className="w-6 h-6" />,
    image: serviceSmartcity
  },
  {
    title: "Entrance Control",
    description: "Biometric and credential-based access systems managing flow and restricting unauthorized entry.",
    icon: <DoorClosed className="w-6 h-6" />,
    image: serviceTurnstiles
  },
  {
    title: "Fire Alarm Systems",
    description: "Advanced detection and suppression integration compliant with stringent industrial safety standards.",
    icon: <Flame className="w-6 h-6" />,
    image: serviceFire
  },
  {
    title: "Parking Management",
    description: "Automated License Plate Recognition (ALPR) and occupancy tracking for secure vehicular flow.",
    icon: <Car className="w-6 h-6" />,
    image: serviceParking
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-[#EFF6FF] to-[#F8FAFC] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary),0.03)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Integrated Security Ecosystems
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We don't just install cameras; we architect complete physical security networks. Our solutions are designed to scale, integrate, and provide uncompromising reliability for critical environments.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="h-full overflow-hidden group relative bg-white/60 backdrop-blur-xl border border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-48 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/30 z-10 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <CardContent className="p-8 relative">
                  <div className="absolute -top-6 right-6 p-3 rounded-xl bg-white shadow-lg text-primary transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3 mt-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
