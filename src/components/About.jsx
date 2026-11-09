import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Building2, Briefcase, Award, ChevronRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

function AnimatedNumber({ target, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) {
        fired.current = true;
        const n = parseFloat(target);
        const steps = 50;
        let i = 0;
        const t = setInterval(() => {
          i++;
          setVal(parseFloat(((n * i) / steps).toFixed(1)));
          if (i >= steps) clearInterval(t);
        }, 1200 / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function About() {
  useScrollReveal();

  const stats = [
    { icon: Briefcase, label: '6+', suffix: ' Yrs', sub: 'Professional Experience', color: 'text-amber-400', border: 'border-amber-500/30', glow: 'rgba(245,158,11,0.15)' },
    { icon: Building2, label: '218', suffix: 'M', sub: 'QAR Flagship Project', color: 'text-cyan-400', border: 'border-cyan-500/30', glow: 'rgba(6,182,212,0.15)' },
    { icon: MapPin, label: '2', suffix: '', sub: 'Countries — QA & LK', color: 'text-emerald-400', border: 'border-emerald-500/30', glow: 'rgba(16,185,129,0.15)' },
    { icon: Award, label: 'BSc', suffix: '', sub: 'De Montfort UK', color: 'text-purple-400', border: 'border-purple-500/30', glow: 'rgba(168,85,247,0.15)' },
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

      {/* Animated blueprint grid background */}
      <div className="absolute inset-0 bg-cad-pattern opacity-40 pointer-events-none" />

      {/* Animated measurement lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-amber-500/12 to-transparent" />
        <div className="absolute left-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/8 to-transparent hidden lg:block" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-500/8 to-transparent hidden lg:block" />
        {/* Scanning measure line */}
        <div className="absolute top-1/2 h-px w-32 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent animate-measure-scan hidden md:block" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {[
          'top-16 left-20', 'top-1/4 right-20', 'bottom-1/3 left-16',
          'bottom-16 right-32', 'top-2/3 left-1/2',
        ].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-1.5 h-1.5 rounded-full bg-amber-400/20 animate-float-slow`}
            style={{ animationDelay: `${i * 0.9}s` }} />
        ))}
      </div>

      {/* Corner SVG ruler */}
      <svg className="absolute bottom-6 right-8 opacity-8 hidden lg:block" width="90" height="90" viewBox="0 0 90 90" fill="none" stroke="#F59E0B" strokeWidth="1">
        <path d="M0 90 L0 0 L90 0" strokeDasharray="7 5" />
        {[0,20,40,60,80].map(v => (
          <g key={v}>
            <line x1={v} y1="0" x2={v} y2="6" stroke="#F59E0B" strokeWidth="1" />
            <line x1="0" y1={v} x2="6" y2={v} stroke="#F59E0B" strokeWidth="1" />
          </g>
        ))}
        <text x="4" y="84" fontSize="7" fill="#F59E0B" fontFamily="monospace">+00.00m</text>
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-12 sm:mb-16 reveal">
          <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1 font-mono">
            02. Professional Profile
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="mt-3 w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Text block */}
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
            </div>

            {/* Animated competency list */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 font-mono">Core Competencies</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-950 hover:-translate-y-0.5 transition-all duration-200 group cursor-default"
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    <span className="text-xs sm:text-sm text-slate-300 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach quote */}
            <div className="p-4 sm:p-5 rounded-2xl relative overflow-hidden border border-amber-500/20 group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/8 via-transparent to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-amber-500/60 to-transparent" />
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed relative z-10">
                "My professional approach focuses on{' '}
                <strong className="text-amber-300">measurement accuracy</strong>,{' '}
                <strong className="text-amber-300">cost efficiency</strong>,{' '}
                <strong className="text-amber-300">contract compliance</strong> and{' '}
                <strong className="text-amber-300">successful project delivery</strong>."
              </p>
            </div>
          </div>

          {/* Right: Stats + flagship card */}
          <div className="lg:col-span-5 reveal-right space-y-5">

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className={`p-5 rounded-2xl bg-slate-950 border ${s.border} flex flex-col gap-3 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 cursor-default`}
                    style={{ boxShadow: `0 0 0 0 ${s.glow}`, transition: 'all 0.3s ease' }}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-slate-900 border ${s.border} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${s.color}`} />
                    </div>
                    <div>
                      <span className={`text-2xl font-black ${s.color} font-mono block`}>
                        {typeof s.label === 'string' && !isNaN(parseFloat(s.label))
                          ? <AnimatedNumber target={s.label} suffix={s.suffix} />
                          : <>{s.label}{s.suffix}</>}
                      </span>
                      <span className="text-xs text-slate-400 block leading-tight mt-0.5">{s.sub}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Flagship project card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-500/12 via-slate-950 to-slate-950 border border-amber-500/30 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
              {/* Animated scan on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent animate-measure-scan" />

              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-3">Flagship Project Managed</span>

              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-5 h-5 text-amber-400 shrink-0 animate-pulse" />
                <span className="text-lg font-extrabold text-white">ABK Tower, Lusail</span>
              </div>
              <span className="text-base font-black text-amber-400 block mb-1 number-glow">QAR 218 Million</span>
              <span className="text-xs text-slate-400">High-Rise Commercial &amp; MEP Services &bull; Qatar 🇶🇦</span>

              {/* Animated building bars */}
              <div className="mt-4 flex items-end gap-1 h-10">
                {[0.35, 0.6, 1, 0.8, 0.55, 0.4, 0.7].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-amber-600 to-amber-300 animate-build-up opacity-70"
                    style={{ height: `${h * 100}%`, animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <div className="mt-2 w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
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
