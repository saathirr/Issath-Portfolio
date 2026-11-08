import React from 'react';
import { Calendar, MapPin, Building2, Coins, Check } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
            03. Career History
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Over 6 years of commercial and site quantity surveying experience across Qatar and Sri Lanka.
          </p>
        </div>

        {/* Experience List - Clean Vertical Flow */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div 
              key={idx}
              className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {exp.role}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                    <span className="text-xs text-slate-500">&bull;</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white pt-1">
                    {exp.company}
                  </h3>

                  <div className="text-sm text-slate-300 flex items-center gap-1.5 pt-0.5">
                    <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Project: <strong>{exp.project}</strong></span>
                  </div>
                </div>

                {/* Project Value Badge */}
                <div className="bg-slate-950 px-4 py-3 rounded-xl border border-slate-800 shrink-0">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                    Reported Project Value
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-amber-400">
                    {exp.reportedValue}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
                  Key Responsibilities:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                  {exp.highlights.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
