import React, { useEffect, useRef } from 'react';
import { MapPin, Building2, GraduationCap, Briefcase, Wrench, Award } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  useScrollReveal();

  const stats = [
    { icon: Briefcase, label: '6+ Years', sub: 'Professional Experience', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
    { icon: Building2, label: 'QAR 218M', sub: 'Flagship Project Value', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/30' },
    { icon: MapPin, label: '2 Countries', sub: 'Qatar & Sri Lanka', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
    { icon: Award, label: 'BSc (Hons)', sub: 'De Montfort University UK', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
  ];

  const highlights = [
    'Quantity take-offs, BOQ preparation and cost estimation',
    'Interim payment applications and project valuations',
    'Subcontractor assessments and contract administration',
    'Civil, structural and MEP drawing review (IFT/IFC/Shop)',
    'Cost control, variation management and commercial reporting',
    'Coordination with consultants, engineers and project teams',
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 bg-slate-900 border-b border-slate-800 relative overflow-hidden">

      {/* Background construction animation: blueprint lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Horizontal measurement ruler marks */}
        <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-amber-500/8 to-transparent" />
        <div className="absolute left-0 top-3/4 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/8 to-transparent" />
        {/* Vertical column markers */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/6 to-transparent hidden lg:block" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/6 to-transparent hidden lg:block" />
        {/* Corner measurement ticks */}
        <svg className="absolute bottom-6 right-6 opacity-10 hidden sm:block" width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="#F59E0B" strokeWidth="1">
          <path d="M0 80 L0 0 L80 0" strokeDasharray="6 4" />
          <text x="4" y="74" fontSize="8" fill="#F59E0B" fontFamily="monospace">+00.00</text>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section label */}
        <div className="mb-10 sm:mb-14 reveal">
          <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
            02. Professional Profile
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-6 reveal-left">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a dedicated <strong className="text-white">Quantity Surveyor</strong> with over{' '}
                <strong className="text-amber-400">6 years of experience</strong> in residential, commercial,
                high-rise and MEP construction projects across <strong className="text-white">Qatar and Sri Lanka</strong>.
              </p>
              <p>
                My professional experience covers quantity take-offs, BOQ preparation, cost estimation,
                interim payment applications, project valuations, subcontractor assessments and contract
                administration across landmark construction projects.
              </p>
              <p>
                I have practical experience reviewing architectural, structural and MEP drawings —
                including IFT, IFC and shop drawings — to ensure accurate measurements and cost assessments,
                coordinating with consultants, engineers and project teams for effective commercial management.
              </p>
            </div>

            {/* Highlight list */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Core Competencies</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/30 transition-colors text-xs sm:text-sm text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0 animate-pulse" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach badge */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/20">
              <p className="text-xs text-slate-400 italic leading-relaxed">
                "My professional approach focuses on{' '}
                <strong className="text-amber-300">measurement accuracy</strong>,{' '}
                <strong className="text-amber-300">cost efficiency</strong>,{' '}
                <strong className="text-amber-300">contract compliance</strong> and{' '}
                <strong className="text-amber-300">successful project delivery</strong>."
              </p>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-5 reveal-right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className={`p-5 sm:p-6 rounded-2xl bg-slate-950 border ${s.bg} flex flex-col items-start gap-3 hover:-translate-y-1 transition-transform duration-300 shadow-lg`}
                    style={{ animationDelay: `${i * 0.12}s` }}
                  >
                    <div className={`w-10 h-10 rounded-xl ${s.bg} border flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${s.color}`} />
                    </div>
                    <div>
                      <span className={`text-xl sm:text-2xl font-extrabold ${s.color} block font-mono`}>{s.label}</span>
                      <span className="text-xs text-slate-400 mt-0.5 block leading-tight">{s.sub}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Flagship project card */}
            <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-amber-500/15 via-slate-950 to-slate-950 border border-amber-500/30 shadow-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2">Flagship Project Managed</span>
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-lg font-extrabold text-white">ABK Tower, Lusail</span>
              </div>
              <span className="text-sm font-bold text-amber-400 block mb-1">Project Value: QAR 218 Million</span>
              <span className="text-xs text-slate-400">High-Rise Commercial &amp; MEP Services</span>
              <div className="mt-3 w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full animate-pulse" style={{ width: '95%' }} />
              </div>
              <span className="text-[10px] text-slate-500 mt-1 block font-mono">Project completion: 95%+</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
