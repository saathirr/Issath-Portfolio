import React from 'react';
import { 
  Laptop, 
  Languages, 
  FileSpreadsheet, 
  Crosshair, 
  Database, 
  Cuboid, 
  Shapes, 
  SquareDashedBottomCode,
  CheckCircle2,
  Globe,
  Sliders
} from 'lucide-react';
import { SOFTWARE_DATA, LANGUAGES_DATA } from '../data/portfolioData';

export default function SoftwareLanguages() {
  const softwareIconMap = {
    SquareDashedBottomCode: SquareDashedBottomCode,
    Crosshair: Crosshair,
    Database: Database,
    Cuboid: Cuboid,
    Shapes: Shapes,
    FileSpreadsheet: FileSpreadsheet,
  };

  return (
    <section id="software" className="py-20 lg:py-28 bg-blueprint-900/40 relative border-b border-blueprint-800">
      <div className="absolute inset-0 blueprint-grid-subtle opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-safety-400 uppercase tracking-widest bg-blueprint-900/90 px-3 py-1 rounded border border-blueprint-800 mb-3">
            <Laptop className="w-3.5 h-3.5 text-safety-400" />
            <span>08 &amp; 09. DIGITAL TOOLKIT &amp; COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Software &amp; Languages
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-mono mt-2">
            Modern digital measurement tools, 2D/3D BIM estimation software, and bilingual professional fluency.
          </p>
        </div>

        {/* Part 1: Software Proficiency (6 Core Tools) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-blueprint-800">
            <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-safety-400" />
              Software Proficiency for Quantity Surveying
            </h3>
            <span className="font-mono text-xs text-slate-400">
              6 Core Industry Tools
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOFTWARE_DATA.map((soft, idx) => {
              const Icon = softwareIconMap[soft.icon] || Laptop;
              return (
                <div 
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-blueprint-800 hover:border-safety-500/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-blueprint-900 text-safety-400 border border-blueprint-800 group-hover:bg-safety-500 group-hover:text-blueprint-950 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-lg font-bold text-safety-400">
                        {soft.proficiency}%
                      </span>
                    </div>

                    <h4 className="text-xl font-heading font-black text-white mb-1">
                      {soft.name}
                    </h4>
                    <span className="text-xs font-mono text-cyan-300 block mb-3">
                      {soft.category}
                    </span>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {soft.highlight}
                    </p>
                  </div>

                  {/* Proficiency Meter Bar */}
                  <div className="mt-6 pt-4 border-t border-blueprint-800/80">
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1.5">
                      <span>Proficiency</span>
                      <span className="text-slate-200">
                        {soft.proficiency >= 90 ? 'Advanced / Expert' : 'Working Mastery'}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-blueprint-950 border border-blueprint-800 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-safety-500 to-amber-300 transition-all duration-1000"
                        style={{ width: `${soft.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Languages (English & Arabic) */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-blueprint-800">
            <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <Languages className="w-5 h-5 text-safety-400" />
              Language Fluency &amp; Communication Scope
            </h3>
            <span className="font-mono text-xs text-slate-400">
              International &amp; GCC Bilingual
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LANGUAGES_DATA.map((lang, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-blueprint-800 hover:border-safety-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-safety-400 font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-safety-500/10 border border-safety-500/30">
                      {lang.proficiency}
                    </span>
                    <span className="font-heading font-bold text-2xl text-slate-400">
                      {lang.nativeName}
                    </span>
                  </div>

                  <h4 className="text-2xl font-heading font-black text-white mt-1">
                    {lang.language}
                  </h4>
                  <div className="text-xs font-mono text-cyan-300 mt-0.5">
                    {lang.level}
                  </div>

                  <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                    {lang.description}
                  </p>
                </div>

                {/* Progress Bar & Badges */}
                <div className="mt-6 pt-4 border-t border-blueprint-800">
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>Working Fluency</span>
                    <span className="text-safety-400 font-bold">{lang.percent}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-blueprint-950 border border-blueprint-800 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-safety-500 to-amber-300"
                      style={{ width: `${lang.percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

