import React from 'react';
import { Calendar, Building2, Coins, HardHat } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Experience() {
  useScrollReveal();

  const experienceList = [
    {
      company: 'AL KHALEEJ MODERN LIGHTS W.L.L.',
      role: 'Quantity Surveyor',
      period: 'July 2024 – October 2026',
      location: 'Lusail Boulevard, Qatar',
      country: 'Qatar 🇶🇦',
      project: 'ABK Tower, Lusail Boulevard',
      projectType: 'Commercial High-Rise & MEP Infrastructure',
      value: 'QAR 218 Million',
      scale: 'High-Rise Commercial',
      heightLevel: 'Spire Level (+180m)',
      scopeTags: [
        'Civil & MEP Take-Offs',
        'BOQ Preparation',
        'Interim Payment Valuations (IPA)',
        'Subcontractor Audits',
        'FIDIC Variation Claims',
      ],
      accentGlow: 'from-amber-500/15 via-slate-900/90 to-slate-950',
      accentBorder: 'border-amber-500/35',
      tagColor: 'text-amber-400',
      barColor: 'from-amber-400 via-amber-500 to-yellow-500',
    },
    {
      company: 'ATHAM BAWA & SONS (PVT) LTD',
      role: 'Quantity Surveyor',
      period: 'January 2022 – June 2024',
      location: 'Sri Lanka',
      country: 'Sri Lanka 🇱🇰',
      project: 'Residential Housing Project',
      projectType: 'Multi-Unit Housing Construction',
      value: 'LKR 4.97 Million',
      scale: 'Residential Development',
      heightLevel: 'Substructure & Superstructure',
      scopeTags: [
        'Residential Building QTO',
        'Material Cost Estimation',
        'Concrete & Masonry Measurement',
        'Subcontractor Verifications',
        'Project Budget Control',
      ],
      accentGlow: 'from-blue-500/12 via-slate-900/90 to-slate-950',
      accentBorder: 'border-blue-500/30',
      tagColor: 'text-cyan-400',
      barColor: 'from-cyan-400 via-blue-500 to-cyan-500',
    },
    {
      company: 'ADVENT PROJECT (PVT) LTD',
      role: 'Junior Quantity Surveyor',
      period: 'October 2019 – December 2021',
      location: 'Sri Lanka',
      country: 'Sri Lanka 🇱🇰',
      project: 'Sixteen-Storey Residential Condominium',
      projectType: '16-Storey High-Rise Apartment Complex',
      value: 'LKR 9.97 Million',
      scale: '16-Storey Condominium',
      heightLevel: '16 Structural Floors',
      scopeTags: [
        '16-Storey Site Measurements',
        'Interim Valuations',
        'Variation Claims Administration',
        'Contract Documentation',
        'Final Account Preparation',
      ],
      accentGlow: 'from-emerald-500/12 via-slate-900/90 to-slate-950',
      accentBorder: 'border-emerald-500/30',
      tagColor: 'text-emerald-400',
      barColor: 'from-emerald-400 via-emerald-500 to-teal-400',
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-28 bg-slate-950 border-b border-slate-800 relative overflow-hidden">

      {/* Background: animated tower crane */}
      <div className="absolute top-6 right-6 sm:right-16 opacity-12 pointer-events-none hidden sm:block animate-crane-swing">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="#F59E0B" strokeWidth="2">
          <line x1="60" y1="185" x2="60" y2="25" strokeWidth="3" />
          <line x1="60" y1="25" x2="175" y2="25" strokeWidth="2.5" />
          <line x1="60" y1="25" x2="20" y2="42" strokeWidth="2" />
          <line x1="60" y1="34" x2="60" y2="25" />
          {/* Trolley + load — load line animates */}
          <line x1="125" y1="25" x2="125" y2="80" strokeDasharray="4 3" className="animate-crane-load" />
          <rect x="119" y="80" width="12" height="10" fill="#F59E0B" opacity="0.9" />
          <path d="M119 90 L125 100 L131 90" strokeWidth="1.5" />
          {/* Cross braces on mast */}
          <line x1="52" y1="80" x2="68" y2="100" strokeDasharray="3 3" opacity="0.4" />
          <line x1="68" y1="80" x2="52" y2="100" strokeDasharray="3 3" opacity="0.4" />
          <line x1="52" y1="120" x2="68" y2="140" strokeDasharray="3 3" opacity="0.4" />
          <line x1="68" y1="120" x2="52" y2="140" strokeDasharray="3 3" opacity="0.4" />
        </svg>
      </div>

      {/* Background: building elevation silhouette */}
      <div className="absolute bottom-0 left-0 right-0 opacity-5 pointer-events-none hidden lg:block">
        <svg width="100%" height="120" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#F59E0B">
          <rect x="50" y="20" width="60" height="100" />
          <rect x="150" y="10" width="40" height="110" />
          <rect x="230" y="30" width="80" height="90" />
          <rect x="350" y="5" width="30" height="115" />
          <rect x="420" y="25" width="70" height="95" />
          <rect x="550" y="15" width="50" height="105" />
          <rect x="650" y="35" width="90" height="85" />
          <rect x="800" y="8" width="40" height="112" />
          <rect x="880" y="22" width="65" height="98" />
          <rect x="1000" y="18" width="55" height="102" />
          <rect x="1100" y="30" width="75" height="90" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4 reveal">
          <div>
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              03. Career Timeline &amp; Project Valuations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Work Experience
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Commercial management and site quantity surveying across landmark projects.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 w-fit">
            <HardHat className="w-4 h-4 text-amber-400 animate-bounce" style={{ animationDuration: '3s' }} />
            <span>CIVIL &bull; MEP &bull; COMMERCIAL QS</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experienceList.map((exp, idx) => (
            <div
              key={idx}
              className={`reveal p-5 sm:p-7 lg:p-8 rounded-2xl bg-gradient-to-r ${exp.accentGlow} border ${exp.accentBorder} shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Left accent bar */}
              <div className={`absolute top-0 left-0 bottom-0 w-1.5 sm:w-2 bg-gradient-to-b ${exp.barColor} rounded-l-2xl`} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                {/* Col 1: Role, company, project, tags */}
                <div className="lg:col-span-7 space-y-3 pl-3 sm:pl-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className={`px-3 py-1 rounded-full font-bold bg-amber-500/10 ${exp.tagColor} border border-amber-500/25 text-[11px] sm:text-xs`}>
                      {exp.role}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-[11px]">
                      {exp.country}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-extrabold text-white group-hover:text-amber-400 transition-colors leading-tight">
                    {exp.company}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                    <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Project: <strong className="text-amber-300">{exp.project}</strong></span>
                  </div>

                  <p className="text-xs text-slate-400">{exp.projectType}</p>

                  {/* Scope tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.scopeTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 font-medium hover:border-amber-500/40 transition-colors"
                      >
                        &bull; {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Col 2: Value stamp */}
                <div className="lg:col-span-5 bg-slate-950/90 p-4 sm:p-6 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4">

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Coins className="w-4 h-4 text-amber-400" />
                      Reported Project Value
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      VERIFIED
                    </span>
                  </div>

                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-tight">
                    {exp.value}
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono">
                      <span>Scope: <strong className="text-slate-200">{exp.scale}</strong></span>
                      <span className="text-amber-400 font-bold">{exp.heightLevel}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                      <div className={`h-full rounded-full bg-gradient-to-r ${exp.barColor} animate-pulse`} style={{ width: '100%' }} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
