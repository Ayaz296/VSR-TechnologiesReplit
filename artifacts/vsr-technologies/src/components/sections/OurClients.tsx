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

function ClientCard({ name, icon: Icon }: { name: string; icon: typeof Plane }) {
  return (
    <div className="flex flex-none items-center gap-3 px-6 py-4 rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm min-w-[280px]">
      <div className="p-2.5 rounded-xl bg-sky-400/15 text-sky-300 shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-sm font-medium text-slate-300 leading-snug">{name}</span>
    </div>
  );
}

export function OurClients() {
  const track = [...clients, ...clients];

  return (
    <section className="py-24 sm:py-28 relative overflow-hidden" style={{ background: "#003978" }}>
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-blue-400/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-cyan-400/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-medium mb-6">
              Our Clients
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Trusted across aviation, defence & government
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              From India's busiest airports to defence PSUs and state government bodies, organisations rely on us for mission-critical infrastructure.
            </p>
          </div>
          <Link href="/projects">
            <div className="group flex items-center gap-2 text-sm font-semibold text-sky-300 border-b-2 border-sky-300/30 hover:border-sky-300 pb-0.5 transition-colors cursor-pointer whitespace-nowrap">
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
        <div
          className="flex items-center gap-5 w-max animate-[clients-scroll_38s_linear_infinite] hover:[animation-play-state:paused]"
        >
          {track.map((c, i) => (
            <ClientCard key={`${c.name}-${i}`} name={c.name} icon={c.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
