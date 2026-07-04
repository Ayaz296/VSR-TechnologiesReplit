import { Plane, Shield, Factory, Landmark, Cross, Building2 } from "lucide-react";
import { Link } from "wouter";

const clients = [
  { name: "GMR International Airport, Hyderabad", icon: Plane, logo: "/logos/gmr.png" },
  { name: "GMR International Airport, Bhogapuram", icon: Plane, logo: "/logos/gmr.png" },
  { name: "Kempegowda International Airport, Bangalore", icon: Plane, logo: "/logos/kempegowda.png" },
  { name: "Bharat Dynamics Limited", icon: Shield , logo: "/logos/gmr.png" },
  { name: "Hindustan Aeronautics Limited", icon: Shield , logo: "/logos/gmr.png" },
  { name: "Tata Advanced Systems", icon: Shield, logo: "/logos/Tata.png" },
  { name: "PI Industries, Gujarat", icon: Factory, logo: "/logos/pi-industries.png" },
  { name: "Indian Oil Corporation Limited", icon: Factory, logo: "/logos/gmr.png" },
  { name: "NTPC, Ramagundam", icon: Factory , logo: "/logos/gmr.png"},
  { name: "Dr. Reddy's Laboratories", icon: Factory, logo: "/logos/gmr.png" },
  { name: "Gomti Nagar Railway Station", icon: Landmark , logo: "/logos/gmr.png"},
  { name: "Telangana Secretariat", icon: Landmark , logo: "/logos/gmr.png" },
  { name: "Municipal Corporation of Hyderabad", icon: Landmark , logo: "/logos/gmr.png" },
  { name: "AIIMS, Guntur", icon: Cross, logo: "/public/GMR.png" },
  { name: "Manappuram Finance Limited", icon: Building2, logo: "/logos/gmr.png" },
];

function ClientCard({
  name,
  icon: Icon,
  logo,
}: {
  name: string;
  icon: typeof Plane;
  logo?: string;
}) {
  return (
    <div className="flex flex-none items-center gap-3 px-6 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm min-w-[280px]">
      {logo ? (
        <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden">
          <img
            src={logo}
            alt={`${name} logo`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ) : (
        <div className="p-2.5 rounded-xl bg-primary/8 text-primary shrink-0">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <span className="text-sm font-medium text-slate-700 leading-snug">{name}</span>
    </div>
  );
}

export function OurClients() {
  const track = [...clients, ...clients];

  return (
    <section className="py-24 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#EEF4FF] to-[#EFF6FF]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/6 text-primary text-sm font-medium mb-6">
              Our Clients
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
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
        </div>
      </div>
      <div
        className="relative z-10 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="flex items-center gap-5 w-max animate-[clients-scroll_38s_linear_infinite] hover:[animation-play-state:paused]">
          {track.map((c, i) => (
            <ClientCard key={`${c.name}-${i}`} name={c.name} icon={c.icon} logo={c.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
