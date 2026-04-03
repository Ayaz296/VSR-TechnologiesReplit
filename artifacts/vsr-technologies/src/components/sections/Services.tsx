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
import serviceCctv from "@/assets/images/service-cctv.png";
import serviceNetworking from "@/assets/images/service-networking.png";
import serviceSmartcity from "@/assets/images/service-smartcity.png";
import serviceFire from "@/assets/images/service-fire.png";
import React from "react";

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
    image: null
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
    image: null
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
    image: null
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
    image: null
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Integrated Security Ecosystems
          </h2>
          <p className="text-lg text-slate-600">
            We don't just install cameras; we architect complete physical security networks. Our solutions are designed to scale, integrate, and provide uncompromising reliability for critical environments.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="h-full overflow-hidden group border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-white">
                {service.image && (
                  <div className="h-40 w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                {!service.image && (
                  <div className="h-2 w-full bg-slate-100"></div>
                )}
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/5 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
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
