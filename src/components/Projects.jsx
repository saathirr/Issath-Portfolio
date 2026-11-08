import React from 'react';
import { MapPin, Building2, CheckCircle2, Coins } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
            04. Key Developments
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Selected commercial high-rise and residential construction projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((proj, idx) => (
            <div 
              key={proj.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all shadow-md"
            >
              <div>
                {/* Code & Location */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="px-2 py-0.5 rounded bg-slate-900 font-semibold text-amber-400 border border-slate-800">
                    {proj.code}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {proj.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {proj.title}
                </h3>

                <div className="text-xs text-slate-400 space-y-1 mb-4">
                  <div>Employer: <strong className="text-slate-200">{proj.employer}</strong></div>
                  <div>Position: <strong className="text-amber-400">{proj.position}</strong></div>
                </div>

                {/* Project Value */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 mb-5">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                    Reported Project Value
                  </span>
                  <span className="text-xl font-bold text-amber-400">
                    {proj.projectValue}
                  </span>
                </div>

                {/* Overview */}
                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  {proj.overview}
                </p>

                {/* My Contribution */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
                    My Contribution:
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
