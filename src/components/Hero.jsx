import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, FileDown, Mail, MapPin, Phone, Building2, ShieldCheck, Compass } from 'lucide-react';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';
import issathImg from '../assets/issath.png';

export default function Hero({ onOpenCV }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [ambientOffset, setAmbientOffset] = useState(0);
  const cardRef = useRef(null);

  // Ambient breathing tilt when not hovered
  useEffect(() => {
    let frame;
    let angle = 0;
    const animate = () => {
      if (!isHovered) {
        angle += 0.018;
        setAmbientOffset(Math.sin(angle) * 2.5);
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isHovered]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const mouseY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setRotate({
      x: Math.max(-14, Math.min(14, -mouseY * 14)),
      y: Math.max(-14, Math.min(14, mouseX * 14)),
    });
  };

  const handleTouchMove = (e) => {
    if (!cardRef.current || e.touches.length === 0) return;
    setIsHovered(true);
    const touch = e.touches[0];
    const rect = cardRef.current.getBoundingClientRect();
    const tx = (touch.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const ty = (touch.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setRotate({
      x: Math.max(-12, Math.min(12, -ty * 12)),
      y: Math.max(-12, Math.min(12, tx * 12)),
    });
  };

  const handleLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="relative pt-10 pb-16 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 bg-cad-pattern overflow-hidden">

      {/* ── Background Live Construction Animation Layer ── */}
      {/* Swinging tower crane (top-right) */}
      <div className="absolute top-4 right-6 sm:right-16 opacity-10 pointer-events-none hidden md:block animate-crane-swing">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" stroke="#F59E0B" strokeWidth="2">
          <line x1="50" y1="170" x2="50" y2="20" strokeWidth="3" />
          <line x1="50" y1="20" x2="160" y2="20" strokeWidth="2.5" />
          <line x1="50" y1="20" x2="10" y2="38" strokeWidth="2" />
          <line x1="50" y1="28" x2="50" y2="20" />
          <line x1="110" y1="20" x2="110" y2="68" strokeDasharray="4 3" className="animate-crane-load" />
          <rect x="104" y="68" width="12" height="10" fill="#F59E0B" opacity="0.9" />
          <path d="M104 78 L110 86 L116 78" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Measurement scan line (desktop) */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none hidden lg:block">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent animate-measure-scan" />
      </div>

      {/* Floating construction particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        <div className="absolute top-20 left-16 w-2 h-2 bg-amber-400/30 rounded-full animate-float-slow" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 left-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-float-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-amber-500/20 rounded-full animate-float-reverse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-emerald-400/25 rounded-full animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-20 w-2.5 h-2.5 bg-amber-400/20 rounded-full animate-float-reverse" style={{ animationDelay: '1.2s' }} />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-10 left-5 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/8 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-5 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Top surveying status bar */}
      <div className="absolute top-4 left-0 right-0 hidden md:flex items-center justify-between px-10 text-[11px] font-mono text-slate-600 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
          </span>
          <span>DATUM: +142.50m ELEV &bull; GRID: A-08 TO M-14</span>
        </div>
        <span className="text-amber-500/60 font-bold">POMI / NRM COMPLIANT</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── LEFT: Heading & Intro ── */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left order-2 lg:order-1">

            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-xs text-slate-300 font-medium shadow-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                {PERSONAL_INFO.title}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Building Value Through{' '}
              <span className="shimmer-text">Accurate Measurement</span>{' '}
              &amp; Cost Management.
            </h1>

            {/* Introduction */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
              {HERO_DATA.introduction}
            </p>

            {/* Contact bar */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                {PERSONAL_INFO.location}
              </span>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                {PERSONAL_INFO.phone}
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors break-all">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
              >
                View My Projects <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-amber-500/50 transition-all hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-amber-400" /> Download CV
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-transparent hover:bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-slate-400" /> Contact Me
              </a>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-5 border-t border-slate-800/80">
              {[
                { label: 'Experience', value: '6+ Years', sub: 'Qatar & Sri Lanka', color: 'text-white' },
                { label: 'Top Project', value: 'QAR 218M', sub: 'ABK Tower', color: 'text-amber-400' },
                { label: 'Discipline', value: 'Civil & MEP', sub: 'Commercial QS', color: 'text-white' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-900/70 p-2.5 sm:p-3 rounded-xl border border-slate-800 text-left hover:border-amber-500/30 transition-colors">
                  <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider block font-mono">{stat.label}</span>
                  <span className={`text-sm sm:text-xl font-bold ${stat.color} block`}>{stat.value}</span>
                  <span className="text-[10px] sm:text-[11px] text-emerald-400 block truncate">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: 3D Photo Card ── */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleLeave}
              onTouchStart={() => setIsHovered(true)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleLeave}
              style={{ perspective: '1200px' }}
              className="relative w-full max-w-[300px] sm:max-w-md flex flex-col items-center justify-center cursor-pointer select-none py-4"
            >
              {/* 3D rotating container */}
              <div
                style={{
                  transform: `rotateX(${rotate.x + ambientOffset}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.03 : 1})`,
                  transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  transformStyle: 'preserve-3d',
                }}
                className="relative flex flex-col items-center justify-center"
              >
                {/* Foundation ring */}
                <div
                  style={{ transform: 'translateZ(-40px) rotateX(65deg)' }}
                  className="absolute bottom-2 sm:bottom-4 w-56 h-56 sm:w-72 sm:h-72 rounded-full border-2 border-amber-500/40 bg-gradient-to-tr from-amber-500/15 via-slate-900/80 to-cyan-500/15 shadow-2xl animate-pulse pointer-events-none"
                >
                  <div className="absolute inset-3 sm:inset-4 rounded-full border border-dashed border-amber-400/40" />
                  <div className="absolute inset-8 sm:inset-10 rounded-full border border-slate-700/60" />
                </div>

                {/* Rotating compass ring */}
                <div
                  style={{ transform: 'translateZ(-20px)', animationDuration: '28s' }}
                  className="absolute bottom-4 sm:bottom-6 w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-amber-500/25 animate-spin pointer-events-none"
                />

                {/* Person photo */}
                <div
                  style={{ transform: 'translateZ(30px)' }}
                  className="relative z-20 flex justify-center drop-shadow-[0_24px_40px_rgba(0,0,0,0.9)]"
                >
                  <img
                    src={issathImg}
                    alt="Mohamed Issath – Quantity Surveyor"
                    className="w-auto h-[280px] sm:h-[400px] md:h-[450px] lg:h-[480px] object-contain pointer-events-none"
                  />
                </div>

                {/* Badge 1: QAR 218M */}
                <div
                  style={{ transform: 'translateZ(65px)', animationDelay: '0s' }}
                  className="absolute top-6 sm:top-10 -right-2 sm:-right-6 z-30 p-2 sm:p-3 rounded-xl bg-slate-900/95 backdrop-blur-md border border-amber-500/40 shadow-xl animate-float-slow"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950">
                      <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 block font-mono uppercase tracking-wider">Top Project</span>
                      <span className="text-xs sm:text-sm font-bold text-amber-400">QAR 218 Million</span>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-slate-300 block mt-0.5">ABK Tower &bull; Lusail</span>
                </div>

                {/* Badge 2: Civil & MEP QS — FIXED: single style prop */}
                <div
                  style={{ transform: 'translateZ(75px)', animationDelay: '1.8s' }}
                  className="absolute bottom-14 sm:bottom-20 -left-2 sm:-left-8 z-30 p-2 sm:p-3 rounded-xl bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 shadow-xl animate-float-slow"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 block font-mono uppercase tracking-wider">Role</span>
                      <span className="text-[11px] sm:text-xs font-bold text-white">Civil &amp; MEP QS</span>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-emerald-400 block mt-0.5">&bull; Jeddah, Saudi Arabia 🇸🇦</span>
                </div>

                {/* Tilt hint */}
                <div
                  style={{ transform: 'translateZ(40px)' }}
                  className="absolute -bottom-5 sm:-bottom-7 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-[10px] sm:text-[11px] text-slate-400 font-mono flex items-center gap-1.5"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Hover / touch to tilt</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
