import React from 'react';
import { MapPin, Building2, CheckCircle2, Coins, HardHat, TrendingUp } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              04. MAJOR DEVELOPMENTS &amp; VALUATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              High-rise commercial towers and residential developments measured and administered.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-amber-400">
            <Coins className="w-4 h-4" />
            <span>TOTAL VALUE: QAR 218M+</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((proj, idx) => (
            <div 
              key={proj.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-amber-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Code & Location */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 font-bold text-amber-400 border border-amber-500/20">
                    {proj.code}
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {proj.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {proj.title}
                </h3>

                <div className="text-xs text-slate-400 space-y-1 mb-5">
                  <div>Employer: <strong className="text-slate-200">{proj.employer}</strong></div>
                  <div>Role: <strong className="text-amber-400">{proj.position}</strong></div>
                </div>

                {/* Animated Project Value Box */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-slate-900 border border-amber-500/30 mb-5 relative overflow-hidden">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Reported Project Value
                  </span>
                  <span className="text-2xl font-black text-amber-400 font-mono tracking-tight mt-0.5 block">
                    {proj.projectValue}
                  </span>
                  <div className="text-[10px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Accurately Measured &amp; Valued</span>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  {proj.overview}
                </p>

                {/* My Contribution */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-1.5">
                    <HardHat className="w-3.5 h-3.5 text-amber-400" />
                    <span>Key Commercial Contribution:</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-400">
                    {proj.contributions.map((item, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="pt-6 mt-6 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
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
