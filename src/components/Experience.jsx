import React, { useState } from 'react';
import { Calendar, MapPin, Building2, Coins, TrendingUp, CheckCircle, Award, HardHat } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  // Simplified and visually striking milestone data (NO dense paragraphs, NO long bullet lists)
  const experienceList = [
    {
      company: "AL KHALEEJ MODERN LIGHTS W.L.L.",
      role: "Quantity Surveyor",
      period: "July 2024 – October 2026",
      location: "Lusail Boulevard, Qatar",
      country: "Qatar 🇶🇦",
      project: "ABK Tower, Lusail Boulevard",
      projectType: "Commercial High-Rise & MEP Infrastructure",
      value: "QAR 218 Million",
      valueNumeric: 218,
      currency: "QAR",
      scale: "High-Rise Commercial",
      heightLevel: "Spire Level (+180m)",
      progressPercent: 100,
      scopeTags: [
        "Civil & MEP Take-Offs",
        "BOQ Preparation",
        "Interim Payment Valuations (IPA)",
        "Subcontractor Audits",
        "FIDIC Variation Claims"
      ],
      accentGlow: "from-amber-500/20 to-yellow-600/10",
      accentBorder: "border-amber-500/40"
    },
    {
      company: "ATHAM BAWA & SONS (PVT) LTD",
      role: "Quantity Surveyor",
      period: "January 2022 – June 2024",
      location: "Sri Lanka",
      country: "Sri Lanka 🇱🇰",
      project: "Residential Housing Project",
      projectType: "Multi-Unit Housing Construction",
      value: "LKR 4.97 Million",
      valueNumeric: 4.97,
      currency: "LKR",
      scale: "Residential Development",
      heightLevel: "Substructure & Superstructure",
      progressPercent: 100,
      scopeTags: [
        "Residential Building QTO",
        "Material Cost Estimation",
        "Concrete & Masonry Measurement",
        "Subcontractor Verifications",
        "Project Budget Control"
      ],
      accentGlow: "from-blue-500/20 to-cyan-600/10",
      accentBorder: "border-blue-500/40"
    },
    {
      company: "ADVENT PROJECT (PVT) LTD",
      role: "Junior Quantity Surveyor",
      period: "October 2019 – December 2021",
      location: "Sri Lanka",
      country: "Sri Lanka 🇱🇰",
      project: "Sixteen-Storey Residential Condominium",
      projectType: "16-Storey High-Rise Apartment Complex",
      value: "LKR 9.97 Million",
      valueNumeric: 9.97,
      currency: "LKR",
      scale: "16-Storey Condominium",
      heightLevel: "16 Structural Floors",
      progressPercent: 100,
      scopeTags: [
        "16-Storey Site Measurements",
        "Interim Valuations",
        "Variation Claims Administration",
        "Contract Documentation",
        "Final Account Preparation"
      ],
      accentGlow: "from-emerald-500/20 to-teal-600/10",
      accentBorder: "border-emerald-500/40"
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Animated Construction Crane Line */}
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none hidden lg:block">
        <svg width="300" height="300" viewBox="0 0 200 200" fill="none" stroke="#F59E0B" strokeWidth="1.5">
          {/* Construction Tower Crane Silhouette */}
          <path d="M40 180V40H140L170 60H40" />
          <path d="M40 40L140 40" />
          <line x1="80" y1="40" x2="80" y2="70" strokeDasharray="3 3" />
          <rect x="75" y="70" width="10" height="10" fill="#F59E0B" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              03. CAREER TIMELINE &amp; PROJECT VALUATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Work Experience
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              6+ years of commercial quantity surveying across Qatar and Sri Lanka.
            </p>
          </div>

          {/* Civil Construction Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <HardHat className="w-4 h-4 text-amber-400" />
            <span>CIVIL &bull; MEP &bull; COMMERCIAL</span>
          </div>
        </div>

        {/* Milestone Cards - Clean, Animated, Attractive (No Heavy Paragraphs) */}
        <div className="space-y-6">
          {experienceList.map((exp, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-r ${exp.accentGlow} bg-slate-900/90 border ${exp.accentBorder} shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
            >
              
              {/* Construction Structural Progress Stripe Accent */}
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-amber-400 via-amber-500 to-yellow-600"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Col 1: Company, Role & Project */}
                <div className="lg:col-span-7 space-y-3 pl-2 sm:pl-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      {exp.role}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                      {exp.country}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                    {exp.company}
                  </h3>

                  {/* Assigned Landmark Project */}
                  <div className="flex items-center gap-2 text-sm sm:text-base text-slate-200 font-medium">
                    <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Project: <strong className="text-amber-300">{exp.project}</strong></span>
                  </div>

                  <p className="text-xs text-slate-400">
                    {exp.projectType}
                  </p>

                  {/* Clean Visual Tags (Replaces long paragraphs) */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.scopeTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 font-medium hover:border-amber-500/40 transition-colors"
                      >
                        &bull; {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Col 2: Animated Project Valuation Stamp & Civil Height Meter */}
                <div className="lg:col-span-5 bg-slate-950/90 p-5 sm:p-6 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Coins className="w-4 h-4 text-amber-400 animate-bounce" style={{ animationDuration: '3s' }} />
                      Reported Project Value
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                      VERIFIED
                    </span>
                  </div>

                  {/* High Impact Animated Value */}
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-tight">
                    {exp.value}
                  </div>

                  {/* Civil Construction Height / Scale Indicator Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                      <span>Civil Scope: <strong className="text-slate-200">{exp.scale}</strong></span>
                      <span className="text-amber-400 font-bold">{exp.heightLevel}</span>
                    </div>
                    {/* Animated Progress Strip */}
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 animate-pulse"
                        style={{ width: '100%' }}
                      ></div>
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
