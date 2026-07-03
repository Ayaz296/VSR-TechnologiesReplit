import { motion } from "framer-motion";
import { Plane, Shield, Factory, Landmark, Cross, Building2 } from "lucide-react";
import { Link } from "wouter";

const clients = [
  { name: "GMR International Airport, Hyderabad", icon: Plane },
  { name: "GMR International Airport, Bhogapuram", icon: Plane },
  { name: "Kempegowda International Airport, Bangalore", icon: Plane },
  { name: "Bharat Dynamics Limited", icon: Shield },
  { name: "Hindustan Aeronautics Limited", icon: Shield },
  { name: "Tata Advanced Systems", icon: Shield },
  { name: "PI Industries, Gujarat", icon: Factory },
  { name: "Indian Oil Corporation Limited", icon: Factory },
  { name: "NTPC, Ramagundam", icon: Factory },
  { name: "Dr. Reddy's Laboratories", icon: Factory },
  { name: "Gomti Nagar Railway Station", icon: Landmark },
  { name: "Telangana Secretariat", icon: Landmark },
  { name: "Municipal Corporation of Hyderabad", icon: Landmark },
  { name: "AIIMS, Guntur", icon: Cross },
  { name: "Manappuram Finance Limited", icon: Building2 },
];

export function OurClients() {
  return (
    <section className="py-24 sm:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
              Our Clients
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Trusted across aviation, defence & government
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              From India's busiest airports to defence PSUs and state government bodies, organisations rely on us for mission-critical infrastructure.
            </p>
          </div>
          <Link href="/projects">
            <div className="group flex items-center gap-2 text-sm font-semibold text-primary border-b-2 border-primary/30 hover:border-primary pb-0.5 transition-colors cursor-pointer whitespace-nowrap">
              View all projects
            </div>
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {clients.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="flex flex-col items-center justify-center text-center gap-3 p-5 rounded-2xl border border-slate-100 bg-[#F8FAFC] hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-slate-600 leading-snug">{c.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
