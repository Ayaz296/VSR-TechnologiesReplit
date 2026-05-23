import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
  Globe,
  Wrench,
  Clock,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutUsImg from "@/assets/images/about-us.png";
import industryAirportImg from "@/assets/images/industry-airport.png";

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Uncompromising Integrity",
    desc: "We design systems we would use ourselves. No shortcuts, no compromises on quality or compliance.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Engineering Excellence",
    desc: "Every deployment follows strict design standards, tested against real-world threat scenarios before handover.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Long-Term Partnership",
    desc: "We stay involved beyond installation. Lifecycle maintenance, upgrades, and 24/7 support are built into every engagement.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Scale Without Compromise",
    desc: "From a single access point to a campus-wide smart city network, our architecture scales without sacrificing reliability.",
  },
];

const milestones = [
  { year: "2010", event: "VSR Technologies founded in Dallas, TX — initial focus on commercial CCTV." },
  { year: "2013", event: "Expanded into structured cabling and networking solutions for enterprise clients." },
  { year: "2016", event: "First aviation contract — 800-camera deployment at a regional airport in Texas." },
  { year: "2018", event: "Launched Building Management Systems division; first Fortune 500 BMS client." },
  { year: "2020", event: "Smart City pilot program awarded by City of San Antonio." },
  { year: "2022", event: "Video Analytics AI platform integrated across active project portfolio." },
  { year: "2024", event: "500+ active enterprise sites under management across 5 US states." },
];

const certifications = [
  "NICET Level III Fire Alarm Systems",
  "BICSI RCDD — Registered Communications Distribution Designer",
  "Axis Communications Certified Partner",
  "Bosch Security Systems Certified Integrator",
  "Lenel S2 Authorized Dealer",
  "NFPA 72 Compliant Installations",
  "TIA-568 Certified Cabling Contractor",
  "Texas DPS Alarm Systems Contractor License",
];

const leadership = [
  { name: "Vikram S. Rajan", title: "Chief Executive Officer & Founder", bg: "from-blue-600 to-blue-800" },
  { name: "Sarah Al-Mansouri", title: "Director of Engineering", bg: "from-teal-600 to-teal-800" },
  { name: "James Okafor", title: "VP — Enterprise Projects", bg: "from-violet-600 to-purple-800" },
  { name: "Priya Nambiar", title: "Head of Smart City Solutions", bg: "from-sky-600 to-blue-700" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <div className="relative pt-36 pb-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <Users size={14} />
              About VSR Technologies
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-3xl leading-[1.1]">
              Engineering Trust<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-primary">Through Technology.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Since 2010, VSR Technologies has been the trusted physical security infrastructure partner for airports, commercial developments, and industrial facilities across the United States.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="flex-1">

        {/* Mission split */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                  <div className="aspect-[4/3]">
                    <img src={aboutUsImg} alt="VSR Technologies team" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-white px-8 py-5 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold">14+</div>
                  <div className="text-sm text-primary-foreground/80 font-medium">Years of expertise</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
                  We don't just install systems. We build lasting security ecosystems.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  VSR Technologies was founded on a simple belief: physical security infrastructure should be designed by engineers who understand how threats actually work — not just how cameras are mounted.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  Today, we bring that philosophy to every engagement — from scoping and design through to installation, commissioning, and lifelong system maintenance. Our clients include aviation authorities, Fortune 500 real estate groups, industrial operators, and municipal governments.
                </p>
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                  {[
                    { v: "500+", l: "Active Sites" },
                    { v: "40+", l: "Enterprise Clients" },
                    { v: "98%", l: "Retention Rate" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="text-3xl font-bold text-primary">{s.v}</div>
                      <div className="text-sm text-slate-500 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16"
            >
              <h2 className="text-4xl font-bold tracking-tight mb-4">Our Core Values</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                The principles that guide every decision — from system design to client relationships.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex gap-6"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-[#0A1628] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16"
            >
              <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Our Journey</h2>
              <p className="text-xl text-slate-400 leading-relaxed">Fourteen years of steady growth, earned one project at a time.</p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-white/10" />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="flex gap-8 items-start"
                  >
                    <div className="relative shrink-0 w-6 flex justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary mt-1.5 ring-4 ring-primary/20" />
                    </div>
                    <div className="pb-2">
                      <div className="text-sky-400 text-sm font-bold mb-1 tracking-widest">{m.year}</div>
                      <p className="text-slate-300 leading-relaxed">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold tracking-tight mb-6">Certifications & Partnerships</h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  Our engineering credentials and vendor certifications ensure every system we deploy meets the highest professional and regulatory standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100"
              >
                <div className="aspect-[4/3]">
                  <img src={industryAirportImg} alt="Enterprise installation" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg flex items-center gap-4 border border-white">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-foreground">Certified Partner Network</div>
                    <div className="text-xs text-slate-500 mt-0.5">Axis · Bosch · Lenel S2 · Honeywell</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16"
            >
              <h2 className="text-4xl font-bold tracking-tight mb-4">Leadership Team</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Engineers and operators who have built and run mission-critical security systems at scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((person, i) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className={`h-48 bg-gradient-to-br ${person.bg} flex items-center justify-center`}>
                    <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {person.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="font-bold text-foreground mb-1">{person.name}</div>
                    <div className="text-sm text-slate-500">{person.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* CTA */}
      <div className="bg-primary py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Ready to work with us?</h3>
            <p className="text-primary-foreground/80 text-lg">Get in touch with our team to discuss your next security project.</p>
          </div>
          <a href="mailto:procurement@vsrtech.com">
            <Button size="lg" variant="secondary" className="text-primary font-semibold h-14 px-10 shadow-xl hover:scale-[1.03] transition-all duration-300 shrink-0">
              Contact Our Team
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
