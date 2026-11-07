import React, { useState, useEffect } from 'react';
import { 
  HardHat, 
  Menu, 
  X, 
  FileDown, 
  PhoneCall, 
  MapPin, 
  ExternalLink,
  Calculator,
  Layers,
  Briefcase,
  Compass,
  FolderGit2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenCV }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    // Live Jeddah / AST Clock
    const updateTime = () => {
      const now = new Date();
      // Format time in AST / Saudi Arabia
      const options = { 
        timeZone: 'Asia/Riyadh', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { name: '01. Home', href: '#home' },
    { name: '02. About', href: '#about' },
    { name: '03. Experience', href: '#experience' },
    { name: '04. Projects', href: '#projects' },
    { name: '05. Blueprint Audit', href: '#blueprint' },
    { name: '06. Skills', href: '#skills' },
    { name: '07. Software', href: '#software' },
    { name: '08. Estimator', href: '#calculator' },
    { name: '09. Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Technical Bar */}
      <div className="bg-blueprint-950 border-b border-blueprint-800 text-xs text-slate-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-mono">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-safety-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-2"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 -ml-4"></span>
              {PERSONAL_INFO.status}
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center text-slate-400">
              <MapPin className="w-3 h-3 mr-1 text-safety-500" />
              {PERSONAL_INFO.location}
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-slate-400">
              JEDDAH (AST / UTC+3): <span className="text-safety-400 font-semibold">{currentTime || '12:00:00 PM'}</span>
            </span>
            <span className="text-slate-600">|</span>
            <a 
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
              className="hover:text-safety-400 transition-colors flex items-center"
            >
              <PhoneCall className="w-3 h-3 mr-1.5 text-safety-500" />
              {PERSONAL_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Floating Navigation */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-blueprint-950/90 backdrop-blur-md border-b border-safety-500/20 shadow-xl shadow-black/30 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Architectural CAD Stamp Logo */}
            <a href="#home" className="group flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-safety-500 to-amber-600 flex items-center justify-center shadow-lg shadow-safety-500/20 group-hover:scale-105 transition-transform">
                <HardHat className="w-6 h-6 text-blueprint-950" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full border-2 border-blueprint-950 animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-heading font-black tracking-wider text-white group-hover:text-safety-400 transition-colors flex items-center gap-1.5">
                  M. ISSATH
                  <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-safety-500/10 text-safety-400 border border-safety-500/30">
                    QS
                  </span>
                </span>
                <span className="text-[11px] font-mono text-slate-400 tracking-tight">
                  CIVIL & MEP ESTIMATION
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 font-mono text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-slate-300 hover:text-safety-400 hover:bg-blueprint-900/60 rounded-md transition-all relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-safety-400 transition-all duration-300 group-hover:w-4/5"></span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold bg-blueprint-850 hover:bg-blueprint-800 text-slate-200 border border-slate-700 hover:border-safety-500/50 transition-all shadow-sm group"
                title="View & Download Curriculum Vitae"
              >
                <FileDown className="w-3.5 h-3.5 text-safety-400 group-hover:translate-y-0.5 transition-transform" />
                <span>DOWNLOAD CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold bg-safety-500 hover:bg-safety-400 text-blueprint-950 transition-all shadow-lg shadow-safety-500/25 hover:shadow-safety-500/40 hover:-translate-y-0.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>CONTACT</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={onOpenCV}
                className="p-2 rounded-lg text-xs font-mono bg-blueprint-850 text-safety-400 border border-blueprint-700"
                title="CV"
              >
                <FileDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-blueprint-900 text-slate-300 hover:text-white border border-blueprint-800 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-blueprint-950/98 border-b border-safety-500/30 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-fadeIn">
            <div className="py-2 px-3 rounded bg-blueprint-900/60 border border-blueprint-800 text-xs font-mono text-safety-400 mb-3 flex items-center justify-between">
              <span>{PERSONAL_INFO.location}</span>
              <span className="text-slate-400">{currentTime}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-mono text-slate-200 hover:text-safety-400 hover:bg-blueprint-900 border border-transparent hover:border-blueprint-800 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full py-3 rounded-lg text-center font-mono text-xs font-bold bg-blueprint-850 hover:bg-blueprint-800 text-white border border-safety-500/40 flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4 text-safety-400" />
                VIEW & DOWNLOAD CV
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg text-center font-mono text-xs font-bold bg-safety-500 text-blueprint-950 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                GET IN TOUCH
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

