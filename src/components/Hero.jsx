import React from 'react';
import { ArrowRight, FileDown, Mail, MapPin, Phone, Building2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';
import issathImg from '../assets/issath.png';

export default function Hero({ onOpenCV }) {
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

          {/* ── RIGHT: Professional Circular Avatar (Head to Hip) with Construction Animation ── */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] flex flex-col items-center justify-center select-none py-6">

              {/* Outer Construction Technical Orbit Rings */}
              {/* Ring 1: Slow rotating dashed compass ring */}
              <div
                className="absolute inset-0 m-auto w-[114%] h-[114%] rounded-full border border-amber-500/20 pointer-events-none animate-spin-slow"
                style={{ borderStyle: 'dashed' }}
              >
                {/* 4 Cardinal crosshair indicators */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              </div>

              {/* Ring 2: Counter-rotating cyan technical ring */}
              <div
                className="absolute inset-0 m-auto w-[106%] h-[106%] rounded-full border border-cyan-500/25 pointer-events-none"
                style={{
                  borderStyle: 'dashed',
                  animation: 'rotateSlow 18s linear infinite reverse',
                }}
              />

              {/* Ambient Radial Backlight Glow */}
              <div
                className="absolute inset-0 m-auto w-[95%] h-[95%] rounded-full pointer-events-none animate-pulse-glow"
                style={{
                  background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(6,182,212,0.08) 45%, transparent 70%)',
                  boxShadow: '0 0 80px rgba(245,158,11,0.22)',
                }}
              />

              {/* ── Main Circular Clipping Frame (Head to Hip) ── */}
              <div
                className="relative z-20 w-72 h-72 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-amber-500/40 shadow-2xl shadow-black/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 transition-all duration-300 hover:border-amber-400/70 hover:shadow-amber-500/20 group"
              >
                {/* Background CAD Grid inside the circle */}
                <div className="absolute inset-0 bg-cad-pattern opacity-40 pointer-events-none" />

                {/* Subtle Inner Circular Horizon / Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-amber-500/10 pointer-events-none" />

                {/* Rotating scanning radar line inside circle */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
                  style={{ animation: 'rotateSlow 8s linear infinite' }}
                >
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/35 to-transparent" />
                </div>

                {/* Mohamed Issath Photo: Cropped cleanly from head down to hip */}
                <img
                  src={issathImg}
                  alt="Mohamed Issath - Quantity Surveyor"
                  className="absolute left-1/2 pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  style={{
                    transform: 'translateX(-50%)',
                    top: '2%',
                    height: '195%',
                    width: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'top center',
                    filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.85)) drop-shadow(0 0 15px rgba(245,158,11,0.15))',
                  }}
                />

                {/* Smooth bottom gradient overlay to blend hip into circle edge */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />
              </div>

              {/* ── Floating Badge 1: Top Project QAR 218M (Top Right) ── */}
              <div
                className="absolute -top-1 -right-2 sm:-right-4 z-30 p-2.5 sm:p-3 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-amber-500/40 shadow-xl shadow-black/60 text-left transition-transform duration-300 hover:scale-105 hover:border-amber-400 animate-float-slow"
                style={{ animationDelay: '0s' }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-bold shrink-0 shadow-md">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block font-mono uppercase tracking-wider">Top Project</span>
                    <span className="text-xs sm:text-sm font-extrabold text-amber-400 font-mono">QAR 218 Million</span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-300 block mt-1 pl-0.5">ABK Tower &bull; Lusail</span>
              </div>

              {/* ── Floating Badge 2: Civil & MEP QS (Bottom Left) ── */}
              <div
                className="absolute -bottom-2 -left-2 sm:-left-6 z-30 p-2.5 sm:p-3 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 shadow-xl shadow-black/60 text-left transition-transform duration-300 hover:scale-105 hover:border-cyan-400 animate-float-slow"
                style={{ animationDelay: '1.6s' }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold shrink-0 shadow-md">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block font-mono uppercase tracking-wider">Discipline</span>
                    <span className="text-xs sm:text-sm font-extrabold text-white">Civil &amp; MEP QS</span>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 block mt-1 pl-0.5">&bull; Jeddah, Saudi Arabia 🇸🇦</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
