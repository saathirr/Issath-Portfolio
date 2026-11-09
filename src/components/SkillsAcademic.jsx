import React, { useState } from 'react';
import { Check, GraduationCap, Zap } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

const skillLevels = [98, 92, 95, 90, 88, 85, 93, 87, 90, 86, 84, 92];

export default function SkillsAcademic() {
  useScrollReveal();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const professionalSkills = [
    'Quantity Surveying',
    'Quantity Take-Off & Measurement',
    'BOQ Preparation & Analysis',
    'Cost Estimation & Cost Control',
    'Tendering & Tender Analysis',
    'Interim Payment Applications (IPA/IPC)',
    'Commercial Management',
    'Variation Orders & Claims Management',
    'Contract Administration (FIDIC)',
    'Subcontractor Management',
    'Final Account Negotiation',
    'Drawing & Specification Review',
  ];

  const academicKnowledge = [
    'Quantity Surveying Principles and Construction Measurement.',
    'BOQ Preparation, Cost Estimation and Cost Planning.',
    'Construction Technology and Building Materials.',
    'Contract Administration, Tendering and Procurement.',
    'Construction Project Management and Cost Control.',
    'Architectural and Structural Drawing Interpretation.',
    'AutoCAD Drafting and Revit Architecture.',
    'Microsoft Office and Professional Documentation.',
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-28 bg-slate-950 border-b border-slate-800 relative overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 bg-cad-pattern opacity-30 pointer-events-none" />

      {/* Animated left/right rulers */}
      <div className="absolute top-0 left-3 bottom-0 w-px pointer-events-none hidden lg:flex flex-col justify-around">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex items-center gap-1">
            <div className="w-2 h-px bg-amber-500/20" />
            <span className="text-[8px] font-mono text-amber-500/15">{(i + 1) * 10}</span>
          </div>
        ))}
      </div>

      {/* Hard hat silhouette */}
      <div className="absolute top-6 right-8 opacity-6 hidden xl:block animate-float-slow">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
          <path d="M8 42 Q8 16 40 10 Q72 16 72 42 Z" fill="#F59E0B" />
          <rect x="2" y="40" width="76" height="8" rx="4" fill="#F59E0B" />
        </svg>
      </div>

      {/* Animated ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/4 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">

        {/* ── 05. Professional Skills ── */}
        <div>
          <div className="mb-10 reveal">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1 font-mono">
              05. Core Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Skills
            </h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
          </div>

          {/* Animated skill cards with mini bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {professionalSkills.map((skill, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`reveal group relative p-4 rounded-xl bg-slate-900 border transition-all duration-300 cursor-default overflow-hidden
                  ${hoveredSkill === idx ? 'border-amber-500/60 bg-slate-800 shadow-lg shadow-amber-500/10 -translate-y-1' : 'border-slate-800 hover:border-amber-500/30 hover:-translate-y-0.5'}
                `}
                style={{ transitionDelay: `${idx * 0.04}s` }}
              >
                {/* Shimmer on hover */}
                {hoveredSkill === idx && (
                  <div className="absolute inset-0 shimmer-card pointer-events-none" />
                )}
                {/* Top glow line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent transition-opacity duration-300 ${hoveredSkill === idx ? 'opacity-100' : 'opacity-0'}`} />

                <div className="flex items-center gap-3 mb-2.5 relative z-10">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${hoveredSkill === idx ? 'bg-amber-500 text-slate-950' : 'bg-amber-500/10 text-amber-400'}`}>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-sm font-medium transition-colors duration-200 ${hoveredSkill === idx ? 'text-white' : 'text-slate-200'}`}>
                    {skill}
                  </span>
                </div>

                {/* Animated skill bar */}
                <div className="relative z-10 w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-700`}
                    style={{ width: hoveredSkill === idx ? `${skillLevels[idx]}%` : '30%' }}
                  />
                </div>
                <div className={`text-[10px] font-mono text-right mt-0.5 transition-opacity duration-300 ${hoveredSkill === idx ? 'text-amber-400 opacity-100' : 'opacity-0'}`}>
                  {skillLevels[idx]}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 06. Academic Knowledge ── */}
        <div>
          <div className="mb-10 reveal">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1 font-mono">
              06. Applied Theory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Academic Knowledge
            </h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {academicKnowledge.map((item, idx) => (
              <div
                key={idx}
                className="reveal group flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 hover:-translate-y-0.5 hover:bg-slate-800/80 transition-all duration-200"
                style={{ transitionDelay: `${idx * 0.06}s` }}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-black text-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-200">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <span className="text-sm text-slate-300 leading-relaxed group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 07. Education ── */}
        <div id="education">
          <div className="mb-10 reveal">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1 font-mono">
              07. Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Education &amp; Qualifications
            </h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="reveal group relative p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 overflow-hidden cursor-default"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                {/* Top glow line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/60 via-amber-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-amber-500/10 to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-amber-400 font-bold flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {edu.badge}
                    </span>
                    <span className="font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">{edu.degree}</h3>
                  <p className="text-xs text-slate-400">{edu.institution} &bull; {edu.location}</p>
                </div>

                <div className="relative z-10 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>Status</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {edu.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
