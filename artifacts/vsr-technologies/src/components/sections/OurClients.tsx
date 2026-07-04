import { Link } from "wouter";

const clients = [
  { name: "GMR", logo: "/GRM.png" },
  { name: "WAISL", logo: "/waisl.png" },
  { name: "Tata", logo: "/Tata.png" },
  { name: "Godrej", logo: "/Godrej.png" },
  { name: "Siemens", logo: "/siemen.png" },
  { name: "Johnson Controls", logo: "/johnson.png" },
  { name: "Echelon", logo: "/Echelon.png" },
  { name: "BGI", logo: "/bgi.png" },
  { name: "Crown", logo: "/crown.png" },
  { name: "StrataCache", logo: "/stratacache.png" },
  { name: "Sindori", logo: "/sindori.png" },
  { name: "Automation", logo: "/automation.png" },
];

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex flex-none items-center justify-center px-8 py-5 rounded-2xl border border-slate-200 bg-white shadow-sm h-24 w-48">
      <img
        src={logo}
        alt={name}
        className="max-w-full max-h-full object-contain"
      />
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
            <ClientLogo key={`${c.name}-${i}`} name={c.name} logo={c.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
