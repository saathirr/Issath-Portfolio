import React from 'react';
import { Check, GraduationCap, BookOpen, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function SkillsAcademic() {
  const professionalSkills = [
    "Quantity Surveying",
    "Quantity Take-Off & Measurement",
    "BOQ Preparation & Analysis",
    "Cost Estimation & Cost Control",
    "Tendering & Tender Analysis",
    "Interim Payment Applications (IPA/IPC)",
    "Commercial Management",
    "Variation Orders & Claims Management",
    "Contract Administration (FIDIC)",
    "Subcontractor Management",
    "Final Account Negotiation",
    "Drawing & Specification Review",
  ];

  const academicKnowledge = [
    "Quantity Surveying Principles and Construction Measurement.",
    "BOQ Preparation, Cost Estimation and Cost Planning.",
    "Construction Technology and Building Materials.",
    "Contract Administration, Tendering and Procurement.",
    "Construction Project Management and Cost Control.",
    "Architectural and Structural Drawing Interpretation.",
    "AutoCAD Drafting and Revit Architecture.",
    "Microsoft Office and Professional Documentation.",
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 05. Professional Skills */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              05. Core Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Professional Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {professionalSkills.map((skill, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 text-slate-200 text-sm font-medium hover:border-amber-500/40 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 06. Academic Knowledge */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              06. Applied Theory
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Academic Knowledge
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {academicKnowledge.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3.5 text-slate-300 text-sm leading-relaxed"
              >
                <div className="w-6 h-6 rounded bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  {idx + 1}
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 07. Education & Qualifications */}
        <div id="education" className="pt-4">
          <div className="mb-8">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              07. Academic Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Education &amp; Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EDUCATION_DATA.map((edu, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="text-amber-400 font-semibold">{edu.badge}</span>
                    <span>{edu.period}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {edu.institution} &bull; {edu.location}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400 flex justify-between">
                  <span>Status:</span>
                  <span className="text-emerald-400 font-medium">{edu.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
