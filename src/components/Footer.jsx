import React from 'react';
import { 
  HardHat, 
  ArrowUp, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Linkedin,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blueprint-950 border-t border-blueprint-800 text-slate-400 font-mono text-xs relative overflow-hidden">
      
      {/* Top Hazard Accent Stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-safety-500 via-amber-400 to-yellow-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-safety-500 flex items-center justify-center text-blueprint-950 shadow-md">
                <HardHat className="w-5 h-5" />
              </div>
              <span className="text-base font-heading font-black text-white tracking-wider">
                MOHAMMED ISSATH
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              Quantity Surveyor specializing in Civil and MEP construction, cost estimation, interim valuations, and FIDIC contract administration.
            </p>
            <div className="text-[11px] text-safety-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Available in Jeddah &amp; across Saudi Arabia</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-safety-400 transition-colors">01. Home &bull; Overview</a></li>
              <li><a href="#about" className="hover:text-safety-400 transition-colors">02. About Me &bull; Methodology</a></li>
              <li><a href="#experience" className="hover:text-safety-400 transition-colors">03. Professional Experience</a></li>
              <li><a href="#projects" className="hover:text-safety-400 transition-colors">04. Featured Projects (QAR 218M)</a></li>
              <li><a href="#skills" className="hover:text-safety-400 transition-colors">05. Skills &amp; Academic Knowledge</a></li>
              <li><a href="#software" className="hover:text-safety-400 transition-colors">06. Software &amp; Languages</a></li>
              <li><a href="#calculator" className="hover:text-safety-400 transition-colors">07. Interactive Cost Estimator</a></li>
            </ul>
          </div>

          {/* Col 3: Standards & Methodology */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Technical Standards
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-safety-400"></span>
                <span>FIDIC Contract Conditions</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-safety-400"></span>
                <span>POMI &bull; NRM &bull; CESMM &bull; SMM7</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-safety-400"></span>
                <span>Interim Payment Applications (IPA)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-safety-400"></span>
                <span>IFT, IFC &amp; Shop Drawing Audits</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-safety-400"></span>
                <span>2D/3D BIM Cost Take-Off</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Point */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Official Contact
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-safety-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-safety-400" />
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-safety-400">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-safety-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-safety-400 break-all">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-safety-400" />
                <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-safety-400">
                  {PERSONAL_INFO.linkedin}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Required Copyright & Title */}
        <div className="pt-8 border-t border-blueprint-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-white font-semibold">
              &copy; 2026 Mohammed Issath. All Rights Reserved.
            </div>
            <div className="text-safety-400 text-[11px] mt-0.5">
              Quantity Surveyor | Civil &amp; MEP | Estimation Engineer
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-blueprint-900 hover:bg-safety-500 hover:text-blueprint-950 text-slate-300 transition-colors border border-blueprint-800 flex items-center gap-2"
            title="Return to top"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

