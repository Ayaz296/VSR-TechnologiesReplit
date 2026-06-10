import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-slate-300 py-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="bg-primary text-white p-2 rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300">
                <Shield size={22} strokeWidth={2} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                VSR<span className="text-primary font-light">Technologies</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Premium physical security infrastructure, structured cabling, and smart building solutions for enterprise and critical environments.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/services" className="hover:text-primary transition-colors">CCTV Surveillance</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Video Analytics</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Entrance Control</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Fire Alarm Systems</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Building Management</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Our Projects</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">All Services</Link></li>
              <li><a href="/#industries" className="hover:text-primary transition-colors">Industries</a></li>
              <li><a href="mailto:procurement@vsrtech.com" className="hover:text-primary transition-colors">Contact Sales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Contact</h4>
            <ul className="space-y-5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-primary shrink-0 mt-0.5" />
                <span>6th Floor Regus, <br />GMR Aero Tower 2 ,  <br />GMR Business Park Aerocity, <br />Rajiv Gandhi International Airport,<br />Shamshabad, Hyderabad, Telangana, 500108</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="text-primary shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} className="text-primary shrink-0" />
                <span>procurement@vsrtech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} VSR Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
