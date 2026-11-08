import React from 'react';
import { Ruler, TrendingUp, FileCheck, Layers } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      title: "Measurement Accuracy",
      desc: "Detailed quantity take-offs from architectural, structural, and MEP shop drawings.",
      icon: Ruler
    },
    {
      title: "Cost Control & Valuations",
      desc: "BOQ preparation, project expenditure tracking, and interim payment applications (IPA).",
      icon: TrendingUp
    },
    {
      title: "Contract Administration",
      desc: "FIDIC contract compliance, variation orders evaluation, and subcontractor claim audits.",
      icon: FileCheck
    },
    {
      title: "Civil & MEP Coordination",
      desc: "Multi-disciplinary experience across reinforced concrete, finishes, and complex MEP services.",
      icon: Layers
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
            02. Professional Summary
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 4 Paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {ABOUT_DATA.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "text-white font-medium text-base sm:text-lg" : ""}>
                {p}
              </p>
            ))}
          </div>

          {/* Right Column: 4 Focus Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
