import React from 'react';
import { Check, GraduationCap, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function SkillsAcademic() {
  useScrollReveal();

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

      {/* Background: ruler / measurement element */}
      <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent pointer-events-none" />

      {/* Construction measurement grid marks */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500/8 to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute right-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500/8 to-transparent pointer-events-none hidden lg:block" />

      {/* Floating hard hat silhouette */}
      <div className="absolute top-8 right-8 opacity-6 pointer-events-none hidden xl:block animate-float-slow">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
          <path d="M10 42 Q10 20 40 15 Q70 20 70 42 Z" fill="#F59E0B" />
          <rect x="4" y="40" width="72" height="8" rx="4" fill="#F59E0B" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">

        {/* ── 05. Professional Skills ── */}
        <div>
          <div className="mb-8 reveal">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              05. Core Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Professional Skills
            </h2>
            <div className="mt-3 w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {professionalSkills.map((skill, idx) => (
              <div
                key={idx}
                className="reveal p-3.5 sm:p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 text-slate-200 text-sm font-medium hover:border-amber-500/40 hover:bg-slate-900/80 hover:-translate-y-0.5 transition-all duration-200"
                style={{ transitionDelay: `${idx * 0.04}s` }}
              >
                <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 06. Academic Knowledge ── */}
        <div>
          <div className="mb-8 reveal">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              06. Applied Theory
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Academic Knowledge
            </h2>
            <div className="mt-3 w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {academicKnowledge.map((item, idx) => (
              <div
                key={idx}
                className="reveal p-4 sm:p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3.5 text-slate-300 text-sm leading-relaxed hover:border-amber-500/30 transition-colors"
                style={{ transitionDelay: `${idx * 0.06}s` }}
              >
                <div className="w-6 h-6 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  {idx + 1}
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 07. Education & Qualifications ── */}
        <div id="education">
          <div className="mb-8 reveal">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              07. Academic Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Education &amp; Qualifications
            </h2>
            <div className="mt-3 w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="reveal p-5 sm:p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3 hover:border-amber-500/30 hover:-translate-y-0.5 transition-all duration-200"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {edu.badge}
                    </span>
                    <span className="font-mono">{edu.period}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {edu.institution} &bull; {edu.location}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
                  <span>Status:</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
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
