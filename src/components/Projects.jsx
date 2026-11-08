import React from 'react';
import { MapPin, Coins, HardHat, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Projects() {
  useScrollReveal();

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 bg-slate-900 border-b border-slate-800 relative overflow-hidden">

      {/* Background: excavator arm silhouette */}
      <div className="absolute bottom-6 left-6 opacity-8 pointer-events-none hidden lg:block" style={{ animationDelay: '0.5s' }}>
        <svg width="160" height="120" viewBox="0 0 160 120" fill="none" stroke="#F59E0B" strokeWidth="1.5">
          {/* Excavator body */}
          <rect x="10" y="80" width="60" height="30" rx="4" fill="#0f172a" stroke="#F59E0B" strokeWidth="1.5" />
          {/* Arm */}
          <line x1="55" y1="80" x2="90" y2="50" strokeWidth="4" strokeLinecap="round" className="animate-crane-swing" />
          <line x1="90" y1="50" x2="130" y2="30" strokeWidth="3" strokeLinecap="round" />
          {/* Bucket */}
          <path d="M125 30 Q140 25 145 38 Q140 45 125 42 Z" fill="#F59E0B" opacity="0.4" />
          {/* Tracks */}
          <ellipse cx="25" cy="112" rx="20" ry="8" stroke="#F59E0B" strokeWidth="1" fill="none" />
          <ellipse cx="55" cy="112" rx="20" ry="8" stroke="#F59E0B" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Background ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4 reveal">
          <div>
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              04. Major Developments &amp; Valuations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              High-rise commercial towers and residential developments measured and administered.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-amber-400 w-fit">
            <Coins className="w-4 h-4 animate-pulse" />
            <span>TOTAL VALUE: QAR 218M+</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS_DATA.map((proj, idx) => (
            <div
              key={proj.id}
              className="reveal bg-slate-950 rounded-2xl border border-slate-800 hover:border-amber-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div>
                {/* Code + location */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 font-bold text-amber-400 border border-amber-500/20">
                    {proj.code}
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {proj.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors leading-tight">
                  {proj.title}
                </h3>

                <div className="text-xs text-slate-400 space-y-1 mb-5">
                  <div>Employer: <strong className="text-slate-200">{proj.employer}</strong></div>
                  <div>Role: <strong className="text-amber-400">{proj.position}</strong></div>
                </div>

                {/* Animated value box */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-slate-900 border border-amber-500/25 mb-5 relative overflow-hidden group-hover:border-amber-500/40 transition-colors">
                  {/* Scan line animation on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity animate-measure-scan" />
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block relative z-10">
                    Reported Project Value
                  </span>
                  <span className="text-2xl font-black text-amber-400 font-mono tracking-tight mt-0.5 block relative z-10">
                    {proj.projectValue}
                  </span>
                  <div className="text-[10px] text-emerald-400 font-mono mt-1 flex items-center gap-1 relative z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Accurately Measured &amp; Valued</span>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">{proj.overview}</p>

                {/* Contributions */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-1.5">
                    <HardHat className="w-3.5 h-3.5 text-amber-400" />
                    Key Commercial Contribution:
                  </h4>
                  <ul className="space-y-2">
                    {proj.contributions.map((item, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer tag */}
              <div className="pt-5 mt-5 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>{proj.type}</span>
                <span className="text-emerald-400 font-medium">{proj.status}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
