import industryAirport from "@/assets/images/ind-airport.png";
import industryCommercial from "@/assets/images/ind-commercial.png";
import industryIndustrial from "@/assets/images/ind-industrial.png";
import industryInfrastructure from "@/assets/images/ind-critical.png";

export type SiteContent = {
  contact: {
    email: string;
    phone: string;
    address: string[];
  };
  hero: {
    badge: string;
    headlinePrefix: string;
    headlineSuffix: string;
    description: string;
    rotatingServices: string[];
    capabilities: string[];
    primaryCta: string;
    secondaryCta: string;
    stats: Array<{ value: string; label: string }>;
  };
  services: {
    title: string;
    titleAccent: string;
    description: string;
    cta: string;
    items: Array<{ title: string; desc: string }>;
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    features: Array<{ title: string; desc: string }>;
  };
  industries: {
    title: string;
    description: string;
    items: Array<{ name: string; desc: string; image: string }>;
  };
  about: {
    title: string;
    paragraphs: string[];
    badgeTitle: string;
    badgeSubtitle: string;
    features: Array<{ title: string; desc: string }>;
    trustNote: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    items: Array<{ q: string; a: string }>;
    contactPrompt: string;
    contactCta: string;
  };
  footer: {
    description: string;
    solutions: string[];
    company: string[];
    legal: string[];
  };
};

export const defaultSiteContent: SiteContent = {
  contact: {
    email: "procurement@vsrtech.com",
    phone: "+1 (800) 555-0199",
    address: ["1200 Infrastructure Way", "Suite 400", "Dallas, TX 75201"],
  },
  hero: {
    badge: "Full-Spectrum Physical Security Infrastructure",
    headlinePrefix: "Enterprise-Grade",
    headlineSuffix: "for Critical Infrastructure.",
    description:
      "From CCTV and fire alarm systems to structured cabling, building management, entrance control, and parking solutions — we design, install, and maintain the complete security stack for airports, commercial towers, and industrial facilities.",
    rotatingServices: [
      "CCTV Surveillance",
      "Video Analytics",
      "Networking Solutions",
      "Building Management",
      "Fire Alarm Systems",
      "Entrance Control",
      "Parking Management",
      "Smart City Solutions",
    ],
    capabilities: [
      "CCTV & Video Analytics",
      "Structured Cabling",
      "Building Management",
      "Fire Alarm Systems",
      "Entrance Control",
      "Parking Management",
    ],
    primaryCta: "Explore Services",
    secondaryCta: "View Projects",
    stats: [
      { value: "500+", label: "Enterprise Sites" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "24/7", label: "Active Monitoring" },
    ],
  },
  services: {
    title: "Integrated Security",
    titleAccent: "Ecosystems",
    description:
      "We don't install components — we architect complete security infrastructure tailored to your environment.",
    cta: "View all services",
    items: [
      { title: "CCTV Surveillance", desc: "HD networked camera systems for total site visibility." },
      { title: "Video Analytics", desc: "AI-driven threat detection and behavioral analysis." },
      { title: "Networking Solutions", desc: "Structured cabling and fiber backbone infrastructure." },
      { title: "Building Management", desc: "Unified control of HVAC, access, and security systems." },
      { title: "Smart City Solutions", desc: "Municipal-scale surveillance and public safety networks." },
      { title: "Entrance Control", desc: "Biometric and credential access for restricted zones." },
      { title: "Fire Alarm Systems", desc: "NFPA-compliant fire detection and suppression control." },
      { title: "Parking Management", desc: "ALPR-controlled vehicle flow and occupancy tracking." },
    ],
  },
  whyChooseUs: {
    eyebrow: "Why VSR",
    title: "Why Critical Facilities",
    titleAccent: "Choose VSR",
    description:
      "When security failure is not an option, organizations rely on our engineering standards and proven methodology.",
    features: [
      { title: "End-to-End Delivery", desc: "From initial CAD design to final commissioning and ongoing maintenance — we handle the entire lifecycle without third-party handoffs." },
      { title: "Tailored Architecture", desc: "No off-the-shelf packages. Every system is bespoke — engineered for your specific threat model, facility layout, and compliance requirements." },
      { title: "Enterprise Reliability", desc: "Commercial-grade hardware, redundant network designs, and failover configurations guarantee 99.9% uptime for mission-critical systems." },
      { title: "Certified Expertise", desc: "Our engineers hold NICET, BICSI, Axis, and Bosch certifications. You get specialists — not generalists — for every system we deploy." },
      { title: "Critical Experience", desc: "Proven track record securing airports, power plants, data centres, and industrial cores — environments where failure has real consequences." },
      { title: "24 / 7 Support", desc: "Round-the-clock monitoring, remote diagnostics, and on-site response — because threats don't respect business hours." },
    ],
  },
  industries: {
    title: "Securing Vital Sectors",
    description:
      "Different environments require distinct security paradigms. We engineer tailored infrastructure optimized for the unique regulatory and physical demands of specific industries.",
    items: [
      { name: "Airports & Aviation", image: industryAirport, desc: "Strict compliance systems managing passenger flow and restricted zones. Biometric boarding and high-throughput security." },
      { name: "Commercial Real Estate", image: industryCommercial, desc: "Seamless integration of access control, visitor management, and building automation for premium corporate tenants." },
      { name: "Industrial Facilities", image: industryIndustrial, desc: "Robust perimeter defense, safety monitoring, and asset protection in harsh manufacturing environments." },
      { name: "Critical Infrastructure", image: industryInfrastructure, desc: "High-security networked solutions for power plants, utilities, and municipal systems requiring NERC CIP compliance." },
    ],
  },
  about: {
    title: "Engineering Trust Through Technology.",
    paragraphs: [
      "VSR Technologies is a premier physical security infrastructure company. We specialize in designing, installing, and maintaining complex security ecosystems for organizations where safety is not optional.",
      "We bridge the gap between physical hardware and intelligent software, providing our clients with robust, scalable systems that protect assets, ensure compliance, and streamline facility management.",
    ],
    badgeTitle: "Certified Partner",
    badgeSubtitle: "Top Tier Security Systems",
    features: [
      { title: "System Design", desc: "Tailored architectural planning." },
      { title: "Installation", desc: "Precision deployment & structured cabling." },
      { title: "Commissioning", desc: "Rigorous testing and integration." },
      { title: "Maintenance", desc: "24/7 support and lifecycle management." },
    ],
    trustNote:
      "Trusted by Fortune 500 companies, international aviation authorities, and industrial leaders across North America.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked",
    titleAccent: "Questions",
    description:
      "Everything you need to know about working with VSR Technologies — from project scope to ongoing support.",
    items: [
      { q: "What types of facilities does VSR Technologies typically serve?", a: "We serve enterprise and institutional facilities that demand the highest security standards — including international airports, government complexes, data centres, industrial plants, hospital campuses, high-rise commercial towers, and smart city infrastructure. If reliability and zero-failure are non-negotiable, VSR belongs there." },
      { q: "Do you handle the full project lifecycle or just installation?", a: "We manage the complete lifecycle: site inspection and threat assessment, bespoke system design, equipment supply, certified installation, commissioning, operator training, and ongoing 24/7 monitoring and maintenance. There are no third-party handoffs — every stage is handled by our own certified engineers." },
      { q: "What certifications do your engineers hold?", a: "Our technical team holds industry-leading credentials including NICET Level III, BICSI RCDD, and vendor certifications from Axis Communications, Bosch Security Systems, Genetec, Lenel S2, Honeywell, and Milestone." },
      { q: "Can VSR integrate multiple systems into a unified platform?", a: "Absolutely. Integration is at the core of our approach. We connect CCTV, video analytics, access control, fire alarm, HVAC, and building management systems into a single unified dashboard." },
      { q: "How do you approach projects in sensitive or secure environments?", a: "All VSR personnel undergo background verification before site access. Our installations are designed to minimise operational disruption, and we coordinate closely with security and facilities teams throughout every phase." },
      { q: "What kind of ongoing support do you provide after installation?", a: "We offer 24/7 remote monitoring, proactive maintenance schedules, firmware and software update management, and rapid on-site response time agreements." },
      { q: "Do you provide systems for smaller commercial buildings?", a: "Yes. While our heritage is in large-scale enterprise deployments, we design scalable systems for commercial properties of any size." },
      { q: "How do I get a quote or schedule a site assessment?", a: "Contact our team to schedule an initial site assessment and consultation. Our engineers will survey your facility, identify requirements, and deliver a detailed proposal." },
    ],
    contactPrompt: "Still have questions? Our team is happy to help.",
    contactCta: "Contact our team →",
  },
  footer: {
    description:
      "Premium physical security infrastructure, structured cabling, and smart building solutions for enterprise and critical environments.",
    solutions: ["CCTV Surveillance", "Video Analytics", "Entrance Control", "Fire Alarm Systems", "Building Management"],
    company: ["About Us", "Our Projects", "All Services", "Industries", "Contact Sales"],
    legal: ["Privacy Policy", "Terms of Service", "Compliance"],
  },
};