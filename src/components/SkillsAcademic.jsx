import React, { useState } from 'react';
import { 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Compass, 
  Calculator, 
  HardHat, 
  FileSpreadsheet, 
  BarChart3, 
  PenTool, 
  Box, 
  Files,
  Layers,
  FileCheck,
  ShieldCheck,
  Building
} from 'lucide-react';
import { SKILLS_DATA, ACADEMIC_KNOWLEDGE, EDUCATION_DATA } from '../data/portfolioData';

export default function SkillsAcademic() {
  const [activeTab, setActiveTab] = useState('skills');

  const academicIconMap = {
    Compass: Compass,
    Calculator: Calculator,
    HardHat: HardHat,
    FileSpreadsheet: FileSpreadsheet,
    BarChart3: BarChart3,
    PenTool: PenTool,
    Box: Box,
    Files: Files,
  };

  return (
    <section id="skills" className="py-20 lg:py-28 blueprint-bg relative border-b border-blueprint-800">
      <div className="absolute inset-0 blueprint-grid-subtle opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-safety-400 uppercase tracking-widest bg-blueprint-900/90 px-3 py-1 rounded border border-blueprint-800 mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-safety-400" />
              <span>05, 06 &amp; 07. COMPETENCIES, KNOWLEDGE &amp; CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
              Skills &amp; Qualifications
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-mono mt-2">
              Combining practical on-site commercial mastery with formal UK-accredited academic training.
            </p>
          </div>

          {/* Section Switcher Tabs */}
          <div className="flex items-center gap-2 font-mono text-xs bg-blueprint-950 p-1.5 rounded-lg border border-blueprint-800">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${
                activeTab === 'skills'
                  ? 'bg-safety-500 text-blueprint-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>PROFESSIONAL SKILLS</span>
            </button>
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${
                activeTab === 'academic'
                  ? 'bg-safety-500 text-blueprint-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>ACADEMIC KNOWLEDGE</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-safety-500 text-blueprint-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>EDUCATION &amp; DEGREES</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Professional Skills */}
        {activeTab === 'skills' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {SKILLS_DATA.map((group, gIdx) => (
                <div 
                  key={gIdx}
                  className="glass-panel rounded-2xl p-6 border border-blueprint-800 hover:border-safety-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-blueprint-800 mb-5">
                      <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-safety-400"></span>
                        {group.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 bg-blueprint-900 px-2 py-0.5 rounded">
                        {group.items.length} Skills
                      </span>
                    </div>

                    <div className="space-y-4">
                      {group.items.map((skill, sIdx) => (
                        <div 
                          key={sIdx}
                          className="p-3.5 rounded-xl bg-blueprint-950/80 border border-blueprint-800/80 hover:border-blueprint-700 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-heading font-bold text-slate-100">
                              {skill.name}
                            </span>
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                              skill.level === 'Expert' 
                                ? 'bg-safety-500/10 text-safety-400 border border-safety-500/30' 
                                : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                            }`}>
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-snug">
                            {skill.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-blueprint-800/80 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                    <span>STANDARD: FIDIC / NRM / POMI</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-safety-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Academic Knowledge */}
        {activeTab === 'academic' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-fadeIn">
            {ACADEMIC_KNOWLEDGE.map((item, idx) => {
              const Icon = academicIconMap[item.icon] || Compass;
              return (
                <div 
                  key={idx}
                  className="glass-panel p-5 rounded-xl border border-blueprint-800 hover:border-safety-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blueprint-900 text-safety-400 border border-blueprint-800 flex items-center justify-center mb-4 group-hover:bg-safety-500 group-hover:text-blueprint-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-heading font-bold text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-blueprint-800 text-[10px] font-mono text-safety-400 flex items-center justify-between">
                    <span>DOMAIN 0{idx + 1}</span>
                    <span className="text-slate-500">&bull; Applied</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Education & Qualifications */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {EDUCATION_DATA.map((edu, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-blueprint-800 hover:border-safety-500/40 transition-all flex flex-col justify-between relative overflow-hidden"
              >
                {/* Degree Badge */}
                <div className="flex items-center justify-between font-mono text-xs mb-4">
                  <span className="px-2.5 py-1 rounded bg-safety-500/10 text-safety-400 border border-safety-500/30 font-bold">
                    {edu.badge}
                  </span>
                  <span className="text-slate-400 font-bold">
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-mono text-safety-400 mt-2 font-semibold">
                    {edu.institution}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    {edu.location}
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="mt-6 pt-4 border-t border-blueprint-800 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-400">Current Status:</span>
                  <span className={`font-bold ${
                    edu.status.includes('Enrolled') || edu.status.includes('Reading')
                      ? 'text-safety-400'
                      : 'text-emerald-400'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

