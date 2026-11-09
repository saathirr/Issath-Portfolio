import React, { useState } from 'react';
import { MapPin, Coins, HardHat, CheckCircle2, TrendingUp, Building2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Projects() {
  useScrollReveal();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 bg-slate-900 border-b border-slate-800 relative overflow-hidden">

      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />

      {/* Animated ambient glows */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Excavator silhouette bottom-left */}
      <div className="absolute bottom-4 left-4 opacity-7 pointer-events-none hidden lg:block">
        <svg width="140" height="100" viewBox="0 0 140 100" fill="none" stroke="#F59E0B" strokeWidth="1.5">
          <rect x="10" y="68" width="55" height="24" rx="4" fill="#0f172a" stroke="#F59E0B" strokeWidth="1.5" />
          <line x1="50" y1="68" x2="82" y2="42" strokeWidth="4" strokeLinecap="round" className="animate-crane-swing" />
          <line x1="82" y1="42" x2="118" y2="22" strokeWidth="3" strokeLinecap="round" />
          <path d="M113 22 Q128 17 132 30 Q128 38 113 35 Z" fill="#F59E0B" opacity="0.4" />
          <ellipse cx="22" cy="94" rx="18" ry="6" stroke="#F59E0B" strokeWidth="1" fill="none" />
          <ellipse cx="50" cy="94" rx="18" ry="6" stroke="#F59E0B" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Scrolling marquee ticker */}
      <div className="absolute bottom-0 left-0 right-0 h-7 bg-slate-950/80 border-t border-amber-500/10 overflow-hidden flex items-center hidden sm:flex">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-[10px] font-mono text-amber-500/50 tracking-widest uppercase">
          {['BOQ Preparation', 'Cost Estimation', 'Civil & MEP', 'Quantity Take-Off', 'FIDIC Contracts', 'Subcontractor Audit', 'Interim Valuations', 'Variation Claims', 'Commercial QS', 'ABK Tower QAR 218M'].flatMap(t => [t, '•']).concat(
            ['BOQ Preparation', 'Cost Estimation', 'Civil & MEP', 'Quantity Take-Off', 'FIDIC Contracts', 'Subcontractor Audit', 'Interim Valuations', 'Variation Claims', 'Commercial QS', 'ABK Tower QAR 218M'].flatMap(t => [t, '•'])
          ).map((txt, i) => (
            <span key={i} className={txt === '•' ? 'text-amber-500/30' : ''}>{txt}</span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 reveal">
          <div>
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1 font-mono">
              04. Major Developments &amp; Valuations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-amber-500/20 text-xs font-mono text-amber-400 w-fit animate-glow-pulse">
            <Coins className="w-4 h-4 animate-pulse" />
            <span>TOTAL: QAR 218M+</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS_DATA.map((proj, idx) => (
            <div
              key={proj.id}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className={`reveal group relative bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between transition-all duration-400 shadow-xl overflow-hidden
                ${hovered === idx ? 'border-amber-500/50 shadow-amber-500/10 -translate-y-2' : 'hover:border-amber-500/30 hover:-translate-y-1'}
              `}
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              {/* Animated glow on hover */}
              {hovered === idx && (
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none" />
              )}
              {/* Top shimmer line on hover */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent transition-opacity duration-500 ${hovered === idx ? 'opacity-100' : 'opacity-0'}`} />
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-3xl" />

              <div className="relative z-10">
                {/* Code + location */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 font-bold text-amber-400 border border-amber-500/20 font-mono">
                    {proj.code}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {proj.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors leading-tight">
                  {proj.title}
                </h3>

                <div className="text-xs text-slate-500 space-y-0.5 mb-5">
                  <div>Employer: <strong className="text-slate-300">{proj.employer}</strong></div>
                  <div>Role: <strong className="text-amber-400">{proj.position}</strong></div>
                </div>

                {/* Animated project value box */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/12 to-transparent border border-amber-500/20 mb-5 relative overflow-hidden">
                  <div className="absolute inset-0 shimmer-card opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1 relative z-10">Reported Project Value</span>
                  <span className="text-2xl font-black text-amber-400 font-mono block relative z-10">{proj.projectValue}</span>
                  <div className="flex items-center gap-1.5 mt-1.5 relative z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] text-emerald-400 font-mono">Accurately Measured &amp; Valued</span>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed">{proj.overview}</p>

                {/* Contributions */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                    <HardHat className="w-3.5 h-3.5 text-amber-400" />
                    Key Contributions
                  </h4>
                  <ul className="space-y-1.5">
                    {proj.contributions.map((item, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs group/item">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5 group-hover/item:text-amber-300 transition-colors" />
                        <span className="text-slate-400 leading-snug group-hover/item:text-slate-200 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="relative z-10 pt-5 mt-5 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                <span>{proj.type}</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> {proj.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
