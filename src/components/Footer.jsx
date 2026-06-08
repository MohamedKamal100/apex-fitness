import React from "react";
import { Flame, Phone, Mail, MapPin, Compass } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-dark-border pt-20 pb-10 relative overflow-hidden">
      
      {/* Decorative glows */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-red/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-dark-border/60">
          
          {/* Logo & Intro */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <a href="#" className="flex items-center gap-2 group mb-6">
              <div className="relative">
                <Flame className="w-8 h-8 text-neon-red drop-shadow-[0_0_8px_rgba(255,62,62,0.8)]" />
                <span className="absolute -inset-1 rounded-full bg-neon-cyan opacity-20 blur-sm"></span>
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                APEX<span className="text-neon-cyan">FIT</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-sans mb-6">
              APEX Fitness is a premium high-end sports training facility engineered for body transformations, muscle building, and recovery science.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan transition-colors"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4.5 h-4.5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-red transition-colors"
                aria-label="Twitter"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4.5 h-4.5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan transition-colors"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4.5 h-4.5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-red transition-colors"
                aria-label="YouTube"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4.5 h-4.5"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                  <polyline points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">Explore</h4>
            <div className="flex flex-col gap-3.5">
              <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider font-medium text-xs">About Us</a>
              <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider font-medium text-xs">Programs</a>
              <a href="#trainers" className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider font-medium text-xs">Coaches</a>
              <a href="#results" className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider font-medium text-xs">Transformations</a>
              <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider font-medium text-xs">Memberships</a>
            </div>
          </div>

          {/* Hours & Contact */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">Contact Info</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-neon-red flex-shrink-0 mt-0.5" />
                <span>1092 Cybernetic Blvd, Suite 200, Austin, TX 78701</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                <span>+1 (512) 888-APEX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-neon-red flex-shrink-0" />
                <span>contact@apexfitness.com</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-dark-border/40">
              <h5 className="text-[10px] font-bold text-white uppercase tracking-widest mb-1.5">Hours:</h5>
              <p className="text-xs text-gray-400">Mon - Fri: 24 Hours Open</p>
              <p className="text-xs text-gray-400 mt-0.5">Sat - Sun: 5:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Stylized Futuristic Map */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">Find Us</h4>
            <div className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border border-neon-cyan/25 glassmorphic p-4 flex flex-col items-center justify-center text-center shadow-inner group">
              {/* Futuristic Map BG Lines Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(0,229,255,0.06)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
              
              <Compass className="w-8 h-8 text-neon-cyan mb-2 group-hover:rotate-45 transition-transform duration-500" />
              <span className="font-display font-bold text-white text-sm tracking-wide uppercase">Interactive Cyber Map</span>
              <p className="text-[10px] text-gray-500 max-w-[160px] mt-1.5 font-sans leading-relaxed">
                Click map to load custom GPS navigation to our Downtown Austin location.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 rounded-lg bg-neon-cyan/10 hover:bg-neon-cyan/20 border border-neon-cyan/35 text-[10px] font-bold uppercase tracking-wider text-neon-cyan transition-all"
              >
                Launch GPS
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <div>
            © {currentYear} APEX FITNESS. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
