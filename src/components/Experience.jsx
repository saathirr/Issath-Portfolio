import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  Coins, 
  CheckCircle, 
  ChevronRight, 
  FileText, 
  TrendingUp, 
  Layers, 
  ShieldCheck,
  Building,
  Hammer
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20 lg:py-28 blueprint-bg relative border-b border-blueprint-800">
      <div className="absolute inset-0 blueprint-grid-subtle opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-safety-400 uppercase tracking-widest bg-blueprint-900/90 px-3 py-1 rounded border border-blueprint-800 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-safety-400" />
            <span>03. CAREER TIMELINE &amp; SITE COMMERCIAL PRACTICE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-mono mt-2">
            Proven track record of managing multi-million commercial portfolios, high-rise developments, and site measurements across Qatar and Sri Lanka.
          </p>
        </div>

        {/* Company Selection Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-2 border-b border-blueprint-800">
          {EXPERIENCE_DATA.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 sm:px-6 py-3 rounded-t-lg font-mono text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 relative ${
                activeTab === index
                  ? 'bg-blueprint-850 text-safety-400 border-t-2 border-x-2 border-safety-500 shadow-lg'
                  : 'bg-blueprint-950/60 text-slate-400 hover:text-slate-200 hover:bg-blueprint-900 border-t-2 border-transparent'
              }`}
            >
              <span>{exp.countryBadge}</span>
              <span className="truncate max-w-[200px] sm:max-w-xs">{exp.company}</span>
              {activeTab === index && (
                <span className="w-1.5 h-1.5 rounded-full bg-safety-400 animate-ping"></span>
              )}
            </button>
          ))}
        </div>

        {/* Active Experience Card Detailed Showcase */}
        {EXPERIENCE_DATA[activeTab] && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 border border-blueprint-700/80 shadow-2xl relative overflow-hidden">
            {/* Background watermark */}
            <div className="absolute top-0 right-0 p-8 text-blueprint-800/20 font-mono text-8xl font-black select-none pointer-events-none">
              0{activeTab + 1}
            </div>

            {/* Experience Card Header */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-8 border-b border-blueprint-800">
              <div className="lg:col-span-8 space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-safety-500/10 text-safety-400 border border-safety-500/30 font-mono text-xs font-bold uppercase tracking-wider">
                    {EXPERIENCE_DATA[activeTab].role}
                  </span>
                  <span className="px-3 py-1 rounded-md bg-blueprint-800/80 text-cyan-300 font-mono text-xs border border-blueprint-700">
                    {EXPERIENCE_DATA[activeTab].category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white pt-1">
                  {EXPERIENCE_DATA[activeTab].company}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-safety-400" />
                    {EXPERIENCE_DATA[activeTab].period}
                  </span>
                  <span className="text-slate-600">&bull;</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-safety-400" />
                    {EXPERIENCE_DATA[activeTab].location}
                  </span>
                </div>

                {/* Primary Project Name Callout */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Assigned Landmark Project:
                  </div>
                  <div className="text-lg font-heading font-bold text-white flex items-center gap-2 text-safety-300">
                    <Building2 className="w-5 h-5 text-safety-400" />
                    {EXPERIENCE_DATA[activeTab].project}
                  </div>
                </div>
              </div>

              {/* Reported Project Value Highlight Stamp */}
              <div className="lg:col-span-4 bg-blueprint-900/90 p-5 rounded-xl border border-safety-500/30 text-left lg:text-right font-mono">
                <div className="text-xs text-slate-400 uppercase tracking-widest flex items-center lg:justify-end gap-1.5 mb-1">
                  <Coins className="w-4 h-4 text-safety-400" />
                  <span>Reported Project Value</span>
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-safety-400 tracking-tight">
                  {EXPERIENCE_DATA[activeTab].reportedValue}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Valued, measured &amp; commercially administered
                </div>
              </div>
            </div>

            {/* Core Responsibilities Breakdown */}
            <div className="pt-8 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-base font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-safety-400" />
                  Key Responsibilities &amp; Commercial Scope
                </h4>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  {EXPERIENCE_DATA[activeTab].highlights.length} Core Disciplines
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EXPERIENCE_DATA[activeTab].highlights.map((resp, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-xl bg-blueprint-950/70 border border-blueprint-800/90 hover:border-safety-500/30 transition-all flex items-start gap-3 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-safety-500/10 border border-safety-500/30 flex items-center justify-center text-safety-400 shrink-0 mt-0.5 group-hover:bg-safety-500 group-hover:text-blueprint-950 transition-colors">
                      <span className="font-mono text-[10px] font-bold">{i + 1}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags / Sub-disciplines */}
            <div className="pt-8 mt-8 border-t border-blueprint-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2">Discipline Badges:</span>
              {EXPERIENCE_DATA[activeTab].tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded bg-blueprint-900 border border-blueprint-700/80 text-[11px] font-mono text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

