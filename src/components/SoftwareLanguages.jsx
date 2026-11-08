import React from 'react';
import { Laptop, Languages, Check } from 'lucide-react';
import { SOFTWARE_DATA, LANGUAGES_DATA } from '../data/portfolioData';

export default function SoftwareLanguages() {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 08. Software Proficiency */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              08. Technical Tools
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Software Proficiency
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOFTWARE_DATA.map((soft, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-bold text-white">{soft.name}</h3>
                    <span className="text-xs font-bold text-amber-400">{soft.proficiency}%</span>
                  </div>
                  <span className="text-xs text-slate-400 block mb-2">{soft.category}</span>
                  <p className="text-xs text-slate-300 leading-snug">{soft.highlight}</p>
                </div>

                <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${soft.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 09. Languages */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              09. Communication
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Languages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LANGUAGES_DATA.map((lang, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-white">{lang.language}</h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {lang.proficiency}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 block mb-2">{lang.level}</span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{lang.description}</p>
                </div>

                <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${lang.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
