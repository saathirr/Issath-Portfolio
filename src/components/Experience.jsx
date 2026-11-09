import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Building2, Coins, HardHat, TrendingUp, MapPin } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

/* Animated number counter */
function CountUp({ end, suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const numeric = parseFloat(end);
        const steps = 60;
        const inc = numeric / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += inc;
          if (current >= numeric) { setCount(numeric); clearInterval(timer); }
          else setCount(parseFloat(current.toFixed(1)));
        }, duration / steps);
      }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Experience() {
  useScrollReveal();

  const experienceList = [
    {
      company: 'AL KHALEEJ MODERN LIGHTS W.L.L.',
      shortName: 'Al Khaleej, Qatar',
      role: 'Quantity Surveyor',
      period: 'July 2024 – Oct 2026',
      country: 'Qatar 🇶🇦',
      project: 'ABK Tower, Lusail Boulevard',
      projectType: 'Commercial High-Rise & MEP Infrastructure',
      value: 'QAR 218 Million',
      valueNum: '218',
      valueSuffix: 'M',
      valueCurrency: 'QAR',
      scale: 'High-Rise Commercial',
      heightLevel: '+180m Spire',
      scopeTags: ['Civil & MEP Take-Offs', 'BOQ Preparation', 'IPA Valuations', 'Subcontractor Audits', 'FIDIC Claims'],
      accentGlow: 'from-amber-500/15 via-slate-900/90 to-slate-950',
      accentBorder: 'border-amber-500/40',
      barColor: 'from-amber-400 via-amber-500 to-yellow-400',
      tagColor: 'text-amber-400',
      glowColor: 'rgba(245,158,11,0.3)',
    },
    {
      company: 'ATHAM BAWA & SONS (PVT) LTD',
      shortName: 'Atham Bawa, Sri Lanka',
      role: 'Quantity Surveyor',
      period: 'Jan 2022 – June 2024',
      country: 'Sri Lanka 🇱🇰',
      project: 'Residential Housing Project',
      projectType: 'Multi-Unit Residential Construction',
      value: 'LKR 4.97 Million',
      valueNum: '4.97',
      valueSuffix: 'M',
      valueCurrency: 'LKR',
      scale: 'Residential Development',
      heightLevel: 'Ground + Upper Floors',
      scopeTags: ['Residential QTO', 'Material Estimation', 'Masonry Measurement', 'Subcontractor Verification', 'Budget Control'],
      accentGlow: 'from-cyan-500/12 via-slate-900/90 to-slate-950',
      accentBorder: 'border-cyan-500/35',
      barColor: 'from-cyan-400 via-blue-500 to-cyan-400',
      tagColor: 'text-cyan-400',
      glowColor: 'rgba(6,182,212,0.25)',
    },
    {
      company: 'ADVENT PROJECT (PVT) LTD',
      shortName: 'Advent Project, Sri Lanka',
      role: 'Junior Quantity Surveyor',
      period: 'Oct 2019 – Dec 2021',
      country: 'Sri Lanka 🇱🇰',
      project: 'Sixteen-Storey Residential Condominium',
      projectType: '16-Storey High-Rise Apartment Complex',
      value: 'LKR 9.97 Million',
      valueNum: '9.97',
      valueSuffix: 'M',
      valueCurrency: 'LKR',
      scale: '16-Storey Condominium',
      heightLevel: '16 Structural Floors',
      scopeTags: ['Site Measurements', 'Interim Valuations', 'Variation Claims', 'Contract Documentation', 'Final Accounts'],
      accentGlow: 'from-emerald-500/12 via-slate-900/90 to-slate-950',
      accentBorder: 'border-emerald-500/35',
      barColor: 'from-emerald-400 via-emerald-500 to-teal-400',
      tagColor: 'text-emerald-400',
      glowColor: 'rgba(16,185,129,0.25)',
    },
  ];

  /* Building "rise" heights for each card */
  const buildingHeights = [180, 60, 110];

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-28 bg-slate-950 border-b border-slate-800 relative overflow-hidden">

      {/* ── Animated Background ── */}

      {/* Tower crane swinging */}
      <div className="absolute top-4 right-6 sm:right-16 opacity-12 pointer-events-none hidden sm:block animate-crane-swing">
        <svg width="210" height="210" viewBox="0 0 210 210" fill="none" stroke="#F59E0B" strokeWidth="2">
          <line x1="65" y1="195" x2="65" y2="22" strokeWidth="3.5" />
          <line x1="65" y1="22" x2="185" y2="22" strokeWidth="3" />
          <line x1="65" y1="22" x2="20" y2="42" strokeWidth="2" />
          {/* Cable + load */}
          <line x1="135" y1="22" x2="135" y2="85" strokeDasharray="5 3" className="animate-crane-load" />
          <rect x="128" y="85" width="14" height="12" fill="#F59E0B" opacity="0.9" rx="1" />
          <path d="M128 97 L135 108 L142 97" strokeWidth="1.5" />
          {/* Mast braces */}
          <line x1="56" y1="80"  x2="74" y2="102" strokeDasharray="3 3" opacity="0.35" />
          <line x1="74" y1="80"  x2="56" y2="102" strokeDasharray="3 3" opacity="0.35" />
          <line x1="56" y1="120" x2="74" y2="142" strokeDasharray="3 3" opacity="0.35" />
          <line x1="74" y1="120" x2="56" y2="142" strokeDasharray="3 3" opacity="0.35" />
          <line x1="56" y1="155" x2="74" y2="177" strokeDasharray="3 3" opacity="0.35" />
          <line x1="74" y1="155" x2="56" y2="177" strokeDasharray="3 3" opacity="0.35" />
        </svg>
      </div>

      {/* Animated city skyline at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none hidden lg:block" style={{ opacity: 0.06 }}>
        <svg width="100%" height="130" viewBox="0 0 1400 130" preserveAspectRatio="none">
          {[
            [40,20,70,110],[150,8,45,122],[240,32,85,98],[370,4,32,126],[450,28,75,102],
            [570,12,55,118],[670,38,95,92],[810,6,42,124],[890,24,68,106],[1010,16,58,114],
            [1110,34,78,96],[1240,10,50,120],[1330,26,62,104],
          ].map(([x,y,w,h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill="#F59E0B" />
          ))}
        </svg>
      </div>

      {/* Floating measurement particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        {['top-16 left-24', 'top-1/3 left-10', 'bottom-1/4 left-32', 'top-20 right-1/3', 'bottom-1/3 right-24'].map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-1.5 h-1.5 rounded-full bg-amber-400/25 animate-float-slow`}
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 reveal">
          <div>
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1 font-mono">
              03. Career Timeline &amp; Project Valuations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Work Experience
            </h2>
            <div className="mt-3 h-1 w-20 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-amber-500/20 text-xs font-mono text-slate-300 w-fit animate-glow-pulse">
            <HardHat className="w-4 h-4 text-amber-400 animate-bounce" style={{ animationDuration: '2.5s' }} />
            <span>CIVIL &bull; MEP &bull; COMMERCIAL QS</span>
          </div>
        </div>

        {/* ── Experience Cards ── */}
        <div className="space-y-6 sm:space-y-8">
          {experienceList.map((exp, idx) => (
            <div
              key={idx}
              className={`reveal group relative rounded-2xl overflow-hidden border ${exp.accentBorder} shadow-2xl transition-all duration-500 hover:shadow-amber-500/10 hover:-translate-y-1`}
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              {/* Card shimmer overlay on hover */}
              <div className="absolute inset-0 shimmer-card opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.accentGlow} bg-slate-950`} />

              {/* Left glowing accent bar */}
              <div className={`absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b ${exp.barColor}`} />

              {/* Pulsing corner dot */}
              <div
                className="absolute top-5 right-5 w-2 h-2 rounded-full animate-ping opacity-60"
                style={{ backgroundColor: exp.glowColor }}
              />

              <div className="relative z-20 p-5 sm:p-7 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                  {/* Left column */}
                  <div className="lg:col-span-7 space-y-4 pl-2 sm:pl-3">

                    {/* Badges row */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-amber-500/10 ${exp.tagColor} border border-amber-500/25`}>
                        {exp.role}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700 text-[11px] font-medium">
                        {exp.country}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Company name */}
                    <h3 className={`text-lg sm:text-2xl font-extrabold text-white group-hover:${exp.tagColor} transition-colors leading-tight`}>
                      {exp.company}
                    </h3>

                    {/* Project */}
                    <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                      <Building2 className={`w-4 h-4 ${exp.tagColor} shrink-0`} />
                      <span>Project: <strong className="text-amber-300">{exp.project}</strong></span>
                    </div>

                    <p className="text-xs text-slate-500 italic">{exp.projectType}</p>

                    {/* Animated scope tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.scopeTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-950/90 border border-slate-800 text-[11px] text-slate-300 font-medium hover:border-amber-500/50 hover:text-amber-300 transition-all duration-200 cursor-default"
                          style={{ animationDelay: `${tIdx * 0.07}s` }}
                        >
                          &bull; {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right column: animated value card */}
                  <div className="lg:col-span-5">
                    <div
                      className="rounded-xl border border-slate-800 p-5 sm:p-6 space-y-4 relative overflow-hidden"
                      style={{ background: 'rgba(2,6,23,0.95)' }}
                    >
                      {/* Scan line */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent animate-measure-scan pointer-events-none" />

                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                          <Coins className="w-3.5 h-3.5 text-amber-400" />
                          Project Value
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          VERIFIED
                        </span>
                      </div>

                      {/* Animated counter */}
                      <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tracking-tight number-glow">
                        {exp.valueCurrency}{' '}
                        <CountUp end={exp.valueNum} suffix={exp.valueSuffix} duration={1800} />
                      </div>

                      {/* Animated progress bar */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono">
                          <span className="text-slate-200 font-medium">{exp.scale}</span>
                          <span className={`${exp.tagColor} font-bold`}>{exp.heightLevel}</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-slate-800/80 overflow-hidden border border-slate-700/50">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${exp.barColor} animate-pulse`}
                            style={{ width: '100%' }}
                          />
                        </div>
                      </div>

                      {/* Animated building icon */}
                      <div className="flex items-end gap-1 pt-1">
                        {[0.4, 0.65, 1, 0.75, 0.5].map((h, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-t bg-gradient-to-t ${exp.barColor} opacity-60 animate-build-up`}
                            style={{
                              height: `${h * 32}px`,
                              animationDelay: `${i * 0.1 + idx * 0.3}s`,
                            }}
                          />
                        ))}
                        <TrendingUp className={`w-5 h-5 ${exp.tagColor} ml-2 mb-0.5 shrink-0`} />
                      </div>
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
