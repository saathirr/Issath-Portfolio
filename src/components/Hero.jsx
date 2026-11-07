import React, { useState } from 'react';
import { 
  Building2, 
  Ruler, 
  FileSpreadsheet, 
  Calculator, 
  ArrowRight, 
  FileDown, 
  PhoneCall, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  ShieldCheck,
  Compass,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';

export default function Hero({ onOpenCV }) {
  const [coords, setCoords] = useState({ x: 284, y: 145 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setCoords({ x, y });
  };

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex items-center justify-center blueprint-bg border-b border-blueprint-800 overflow-hidden py-16 lg:py-24"
    >
      {/* CAD Construction Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40 blueprint-grid-subtle"></div>
      
      {/* Architectural Laser Scanner Beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-safety-400 to-transparent opacity-70 animate-scanline pointer-events-none"></div>

      {/* Floating CAD Crosshair Coordinates Indicator */}
      <div className="absolute top-6 right-6 hidden md:flex flex-col items-end font-mono text-[11px] text-slate-400 bg-blueprint-900/80 backdrop-blur-md px-3 py-2 rounded border border-blueprint-800 pointer-events-none z-10">
        <div className="flex items-center space-x-2 text-safety-400">
          <span className="w-1.5 h-1.5 rounded-full bg-safety-400 animate-ping"></span>
          <span className="font-bold">CAD POSITION TRACKER</span>
        </div>
        <div>STATION: X={coords.x}.00m | Y={coords.y}.00m</div>
        <div>DATUM: +142.50m ELEV | SCALE 1:100</div>
        <div className="text-[10px] text-slate-500">SYSTEM: WGS84 / JEDDAH-LUSAIL</div>
      </div>

      {/* Background Architectural Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-safety-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Engineering Status Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blueprint-900/90 border border-safety-500/30 text-safety-400 font-mono text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safety-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-safety-500"></span>
              </span>
              <span className="tracking-wider uppercase font-semibold">
                QUANTITY SURVEYOR &bull; CIVIL & MEP
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">ESTIMATION ENGINEER</span>
            </div>

            {/* Main Title / Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-[1.12]">
              Building Value Through{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-safety-400 via-amber-300 to-yellow-500">
                Accurate Measurement
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-safety-500/40 rounded-full"></span>
              </span>{' '}
              <span className="text-slate-100">& Cost Management.</span>
            </h1>

            {/* Technical Dimension Callout Ruler */}
            <div className="flex items-center gap-3 py-1 text-xs font-mono text-slate-400">
              <span className="text-safety-500 font-bold">[ 01. INTRO ]</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-safety-500/40 via-blueprint-700 to-transparent"></div>
              <span className="text-slate-500">FIDIC &bull; POMI &bull; NRM &bull; CESMM</span>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {HERO_DATA.introduction}
            </p>

            {/* Core Location & Contact Quick Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-blueprint-900/60 px-3 py-1.5 rounded border border-blueprint-800">
                <MapPin className="w-3.5 h-3.5 text-safety-400" />
                <span>Current Base: <strong className="text-slate-200">Jeddah, Saudi Arabia</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-blueprint-900/60 px-3 py-1.5 rounded border border-blueprint-800">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Track Record: <strong className="text-slate-200">Qatar &amp; Sri Lanka</strong></span>
              </div>
            </div>

            {/* Three User-Specified CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Button 1: View My Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-mono font-bold bg-safety-500 hover:bg-safety-400 text-blueprint-950 shadow-xl shadow-safety-500/20 hover:shadow-safety-500/35 hover:-translate-y-0.5 transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Button 2: Download CV */}
              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-mono font-bold bg-blueprint-850 hover:bg-blueprint-800 text-white border border-slate-700 hover:border-safety-500/50 shadow-lg hover:-translate-y-0.5 transition-all group"
              >
                <FileDown className="w-4 h-4 text-safety-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </button>

              {/* Button 3: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-mono font-bold bg-transparent hover:bg-blueprint-900 text-slate-200 border border-blueprint-700 hover:border-slate-500 transition-all hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Badges Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-blueprint-800/80 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-safety-400 shrink-0" />
                <span>Take-off &amp; BOQ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-safety-400 shrink-0" />
                <span>Cost Estimation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-safety-400 shrink-0" />
                <span>Interim Claims (IPA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-safety-400 shrink-0" />
                <span>FIDIC Contracts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Architectural / QS Blueprint Dashboard Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Blueprint Technical Frame */}
            <div className="relative glass-panel rounded-2xl p-6 sm:p-7 border border-safety-500/30 shadow-2xl shadow-black/60 overflow-hidden">
              
              {/* Top Card Header with Technical Specs */}
              <div className="flex items-center justify-between pb-4 border-b border-blueprint-800 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-safety-500"></span>
                  <span className="font-bold text-white tracking-wider">PROJECT SHEET: MI-QS-2026</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-safety-500/10 text-safety-400 border border-safety-500/20 text-[10px]">
                  VERIFIED ACCURACY
                </span>
              </div>

              {/* Central Architectural Blueprint Hero Graphic */}
              <div className="my-5 p-5 rounded-xl bg-blueprint-900/80 border border-blueprint-800 relative overflow-hidden group">
                {/* Background CAD Blueprint SVG graphics */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="cadGridSmall" width="20" height="20" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="20" y2="0" stroke="#00F0FF" strokeWidth="0.5" />
                      <line x1="0" y1="0" x2="0" y2="20" stroke="#00F0FF" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#cadGridSmall)" />
                  </svg>
                </div>

                {/* Simulated High-Rise & MEP Isometric Blueprint Iconography */}
                <div className="relative z-10 flex flex-col items-center justify-center py-6 text-center">
                  <div className="relative mb-3">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blueprint-800 via-blueprint-700 to-safety-500/20 border-2 border-safety-500/40 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      <Building2 className="w-10 h-10 text-safety-400" />
                    </div>
                    {/* Dimension Caliper lines */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] text-cyan-400 bg-blueprint-950 px-2 rounded border border-cyan-500/30">
                      H: +180.50m
                    </div>
                  </div>

                  <span className="text-xl font-heading font-black text-white tracking-wide">
                    ABK TOWER &bull; LUSAIL
                  </span>
                  <span className="text-xs font-mono text-safety-400 tracking-wider mt-0.5">
                    FLAGSHIP PROJECT &bull; QATAR
                  </span>

                  {/* Value Stamp */}
                  <div className="mt-4 px-4 py-2 rounded-lg bg-blueprint-950/90 border border-safety-500/40 font-mono">
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest">Reported Project Value</div>
                    <div className="text-2xl font-bold text-safety-400">
                      QAR 218,000,000
                    </div>
                  </div>
                </div>

                {/* Sub-discipline tags inside card */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-blueprint-800/80 font-mono text-[11px]">
                  <div className="bg-blueprint-950/70 p-2 rounded border border-blueprint-800 text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>Civil &amp; Concrete QTO</span>
                  </div>
                  <div className="bg-blueprint-950/70 p-2 rounded border border-blueprint-800 text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>MEP Trade Estimation</span>
                  </div>
                  <div className="bg-blueprint-950/70 p-2 rounded border border-blueprint-800 text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Interim Valuations (IPA)</span>
                  </div>
                  <div className="bg-blueprint-950/70 p-2 rounded border border-blueprint-800 text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    <span>Subcontractor Audit</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric Pillars */}
              <div className="grid grid-cols-2 gap-3 pt-2 font-mono">
                <div className="bg-blueprint-900/60 p-3 rounded-lg border border-blueprint-800 text-left">
                  <div className="text-[10px] text-slate-400 uppercase">Core Experience</div>
                  <div className="text-xl font-bold text-white mt-0.5">6+ Years</div>
                  <div className="text-[10px] text-safety-400">Qatar &amp; Sri Lanka</div>
                </div>
                <div className="bg-blueprint-900/60 p-3 rounded-lg border border-blueprint-800 text-left">
                  <div className="text-[10px] text-slate-400 uppercase">Current Residence</div>
                  <div className="text-xl font-bold text-white mt-0.5">Jeddah, KSA</div>
                  <div className="text-[10px] text-emerald-400">Available Locally</div>
                </div>
              </div>

              {/* Architectural Stamp Watermark */}
              <div className="mt-4 pt-3 border-t border-blueprint-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>CERTIFIED QUANTITY SURVEYOR</span>
                <span>DE MONTFORT UNIVERSITY (UK) (R)</span>
              </div>
            </div>

            {/* Decorative Floating Blueprint Badge */}
            <div className="absolute -bottom-4 -left-4 bg-safety-500 text-blueprint-950 font-mono font-bold text-xs px-3.5 py-1.5 rounded-md shadow-xl flex items-center gap-1.5 border border-amber-300">
              <Calculator className="w-4 h-4" />
              <span>100% PRECISE BOQ &amp; ESTIMATION</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

