import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-2 rounded-sm">
                <Shield size={24} strokeWidth={2} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                VSR<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Advanced physical security infrastructure, structured cabling, and smart building solutions for critical environments.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-primary transition-colors">CCTV Surveillance</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Video Analytics</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Access Control</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Fire Alarm Systems</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Building Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Industries</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#industries" className="hover:text-primary transition-colors">Aviation & Airports</a></li>
              <li><a href="#industries" className="hover:text-primary transition-colors">Commercial Real Estate</a></li>
              <li><a href="#industries" className="hover:text-primary transition-colors">Industrial & Manufacturing</a></li>
              <li><a href="#industries" className="hover:text-primary transition-colors">Critical Infrastructure</a></li>
              <li><a href="#industries" className="hover:text-primary transition-colors">Smart Cities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>1200 Infrastructure Way<br />Suite 400<br />Dallas, TX 75201</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
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
