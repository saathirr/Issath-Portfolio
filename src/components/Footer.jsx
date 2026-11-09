import React from 'react';
import { ArrowUp, Building2, MapPin, Phone, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const links = [
    { name: 'About',      href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects',   href: '#projects' },
    { name: 'Skills',     href: '#skills' },
    { name: 'Contact',    href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 relative overflow-hidden">

      {/* Animated top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      {/* Background city silhouette */}
      <div className="absolute bottom-0 left-0 right-0 opacity-5 pointer-events-none">
        <svg width="100%" height="60" viewBox="0 0 1200 60" preserveAspectRatio="none" fill="#F59E0B">
          {[[0,10,50,50],[80,5,25,55],[140,20,40,40],[220,2,20,58],[270,15,35,45],[340,8,28,52],[410,22,45,38]].map(([x,y,w,h],i) => (
            <rect key={i} x={x} y={y} width={w} height={h} />
          ))}
          {[[500,12,55,48],[600,4,30,56],[680,18,42,42],[770,1,22,59],[830,16,38,44],[920,7,32,53],[1010,24,48,36],[1110,10,52,50]].map(([x,y,w,h],i) => (
            <rect key={i+10} x={x} y={y} width={w} height={h} />
          ))}
        </svg>
      </div>

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-slate-800/60">

          {/* Brand */}
          <div className="space-y-3">
            <div>
              <span className="text-white font-extrabold text-base tracking-tight block">MOHAMED ISSATH</span>
              <span className="text-xs text-amber-400 font-medium">Quantity Surveyor &bull; Civil &amp; MEP</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              Delivering accurate measurement, cost control and commercial management across landmark construction projects.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-medium">Open to Opportunities</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono block mb-3">Navigation</span>
            <div className="grid grid-cols-2 gap-1.5">
              {links.map(l => (
                <a key={l.name} href={l.href} className="text-xs text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-amber-500/40" />
                  {l.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono block mb-3">Contact</span>
            <div className="space-y-2">
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g,'')}`} className="flex items-center gap-2 text-xs text-slate-400 hover:text-amber-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {PERSONAL_INFO.phone}
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 text-xs text-slate-400 hover:text-amber-400 transition-colors break-all">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {PERSONAL_INFO.email}
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {PERSONAL_INFO.location}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="text-xs text-slate-500">
            &copy; 2026 Mohammed Issath. All Rights Reserved. &bull; Quantity Surveyor | Civil &amp; MEP
          </div>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-amber-500 text-slate-300 hover:text-slate-950 transition-all duration-300 border border-slate-800 hover:border-amber-500 flex items-center gap-1.5 text-xs font-medium group"
            title="Back to top"
          >
            <span className="hidden sm:block">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
