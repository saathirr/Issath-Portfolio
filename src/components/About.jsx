import React from 'react';
import { 
  Ruler, 
  TrendingUp, 
  FileCheck, 
  Layers, 
  CheckCircle2, 
  Compass, 
  ShieldAlert, 
  ArrowRight,
  ClipboardList,
  Building,
  Target,
  FileSpreadsheet
} from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Ruler: Ruler,
    TrendingUp: TrendingUp,
    FileCheck: FileCheck,
    Layers: Layers,
  };

  const workflowSteps = [
    {
      step: "01",
      title: "Drawing Audit & Verification",
      subtitle: "IFT / IFC / Shop Drawings",
      desc: "Cross-referencing architectural elevations, structural framing, and MEP schematics to identify discrepancies before takeoff."
    },
    {
      step: "02",
      title: "Digital Take-Off & QTO",
      subtitle: "POMI / NRM / CESMM",
      desc: "Detailed measurement of concrete, formwork, rebar, masonry, MEP services, and finishes with PlanSwift & CostX."
    },
    {
      step: "03",
      title: "BOQ & Cost Planning",
      subtitle: "Itemized Rate Breakdown",
      desc: "Developing comprehensive Bills of Quantities with precise unit rates, labour allowances, equipment, and market material costs."
    },
    {
      step: "04",
      title: "Interim Valuations (IPA/IPC)",
      subtitle: "Progress Measurement",
      desc: "Conducting site measurements, validating completed works, and certifying contractor/subcontractor payment applications."
    },
    {
      step: "05",
      title: "Variations & Final Accounts",
      subtitle: "FIDIC Contract Closeout",
      desc: "Substantiating claims, assessing variations from site instructions, and negotiating agreed final account settlements."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-blueprint-900/40 relative border-b border-blueprint-800">
      {/* Background blueprint marks */}
      <div className="absolute inset-0 blueprint-grid-subtle opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-safety-400 uppercase tracking-widest bg-blueprint-900/90 px-3 py-1 rounded border border-blueprint-800 mb-3">
              <Compass className="w-3.5 h-3.5 text-safety-400" />
              <span>02. PROFESSIONAL PROFILE &amp; METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
              About Mohammed Issath
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-mono mt-2">
              Jeddah, Saudi Arabia &bull; Civil &amp; MEP Quantity Surveying &bull; 6+ Years Experience
            </p>
          </div>

          {/* Quick Technical Seal */}
          <div className="bg-blueprint-950/80 p-4 rounded-xl border border-safety-500/30 font-mono text-xs flex items-center gap-4 max-w-sm">
            <div className="p-3 bg-safety-500/10 rounded-lg text-safety-400 border border-safety-500/20">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white uppercase">Professional Objective</div>
              <div className="text-slate-400 text-[11px] leading-snug mt-0.5">
                Delivering exact measurement accuracy, rigorous cost control, and contract compliance across GCC mega projects.
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: 4 In-depth Provided Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <div className="p-6 rounded-2xl bg-blueprint-950/70 border border-blueprint-800 shadow-xl space-y-4">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "text-white font-medium" : "text-slate-300"}>
                  {p}
                </p>
              ))}
            </div>

            {/* Practical Drawing Review Callout Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-safety-500/10 via-blueprint-900/70 to-blueprint-950 border border-safety-500/25 flex items-start gap-3 text-xs font-mono">
              <ClipboardList className="w-5 h-5 text-safety-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-safety-400 uppercase tracking-wide block mb-1">
                  Comprehensive Drawing Audit Capabilities
                </strong>
                <span className="text-slate-300">
                  Practical review and cross-discipline coordination of <strong>IFT (Information for Tender)</strong>, 
                  <strong> IFC (Issued for Construction)</strong>, and <strong>Shop Drawings</strong> across architectural, structural, and MEP trades to prevent cost overruns and measurement disputes.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Pillars Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {ABOUT_DATA.pillars.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon] || Ruler;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-blueprint-950/60 border border-blueprint-800 hover:border-safety-500/40 transition-all hover:bg-blueprint-900/60 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-lg bg-blueprint-900 text-safety-400 border border-blueprint-800 group-hover:bg-safety-500 group-hover:text-blueprint-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-heading font-bold text-white group-hover:text-safety-400 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Quantity Surveying Workflow Interactive Visual (Takeoff to Handover) */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs text-safety-400 uppercase tracking-widest bg-blueprint-900 px-3 py-1 rounded border border-blueprint-800">
              COMMERCIAL MANAGEMENT CYCLE
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-2">
              End-to-End Quantity Surveying Methodology
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Structured workflow ensuring continuous cost auditing from pre-tender measurements to final account certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((ws, i) => (
              <div 
                key={i} 
                className="relative p-5 rounded-xl bg-blueprint-950/80 border border-blueprint-800 hover:border-safety-500/50 transition-all group flex flex-col justify-between"
              >
                {/* Step Marker */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xl font-black text-safety-400/80 group-hover:text-safety-400 transition-colors">
                      {ws.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-safety-500/30 group-hover:bg-safety-400 transition-colors"></span>
                  </div>
                  <h4 className="text-sm font-heading font-bold text-white mb-1">
                    {ws.title}
                  </h4>
                  <div className="text-[11px] font-mono text-safety-400 mb-2">
                    {ws.subtitle}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-blueprint-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>PHASE {ws.step}</span>
                  <CheckCircle2 className="w-3 h-3 text-safety-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

