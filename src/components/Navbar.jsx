import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenCV }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'About',      href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects',   href: '#projects' },
    { name: 'Skills',     href: '#skills' },
    { name: 'Education',  href: '#education' },
    { name: 'Contact',    href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-amber-500/15 shadow-xl shadow-black/40'
          : 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60'
      }`}
    >
      {/* Top animated progress line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 opacity-80 animate-shimmer-text" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <a href="#" className="flex flex-col group">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors duration-200">
              MOHAMED ISSATH
            </span>
            <span className="text-xs text-amber-400 font-medium tracking-wide">
              Quantity Surveyor &bull; Civil &amp; MEP
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative hover:text-amber-400 transition-colors duration-200 group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 right-0 h-px bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-amber-500/50 transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-amber-400" />
              Download CV
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all btn-glow font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              Contact Me
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenCV}
              className="p-2 rounded-lg bg-slate-900 text-amber-400 border border-slate-800 hover:border-amber-500/40 transition-colors"
              title="Download CV"
            >
              <FileDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-slate-800 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenCV(); }}
                className="w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-900 text-slate-200 border border-slate-700 flex items-center justify-center gap-2 hover:border-amber-500/40 transition-colors"
              >
                <FileDown className="w-4 h-4 text-amber-400" />
                Download CV
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
