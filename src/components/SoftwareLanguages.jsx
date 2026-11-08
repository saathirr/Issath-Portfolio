import React, { useState } from 'react';
import { Check, Sparkles, Sliders, Layers, ArrowUpRight, Globe, MessageSquare } from 'lucide-react';
import { 
  AutoCADLogo, 
  PlanSwiftLogo, 
  CostXLogo, 
  RevitLogo, 
  SketchUpLogo, 
  ExcelLogo 
} from './SoftwareLogos';
import { LANGUAGES_DATA } from '../data/portfolioData';

export default function SoftwareLanguages() {
  const [activeTool, setActiveTool] = useState(0);

  const softwareList = [
    {
      id: 'autocad',
      name: 'AutoCAD',
      category: '2D Drafting & Drawing Review',
      proficiency: 95,
      levelText: 'Expert / Advanced',
      logo: AutoCADLogo,
      themeColor: '#E51937',
      bgGlow: 'from-red-500/20 to-orange-500/10',
      borderColor: 'border-red-500/30',
      activeBorder: 'border-red-500',
      description: 'Reviewing IFT, IFC, and shop drawings, conducting on-screen area and linear measurements, verifying section layers, and resolving site dimensional discrepancies.',
      features: ['Drawing Layer Audit', 'Area & Perimeter Take-offs', 'Shop Drawing Cross-Referencing', 'Coordinate Verification']
    },
    {
      id: 'planswift',
      name: 'PlanSwift',
      category: 'Digital Quantity Take-Off (QTO)',
      proficiency: 92,
      levelText: 'Expert Mastery',
      logo: PlanSwiftLogo,
      themeColor: '#2E7D32',
      bgGlow: 'from-emerald-500/20 to-green-500/10',
      borderColor: 'border-emerald-500/30',
      activeBorder: 'border-emerald-500',
      description: 'High-speed digital quantity takeoff software. Performing comprehensive linear, area, count, and pitch measurements with direct formula link to Excel BOQ structures.',
      features: ['Digital Measurement Scales', 'Material Part Schedules', 'Concrete & Formwork Takeoff', 'Excel BOQ Integration']
    },
    {
      id: 'costx',
      name: 'CostX',
      category: '2D & 3D BIM Cost Estimating',
      proficiency: 88,
      levelText: 'Advanced Estimator',
      logo: CostXLogo,
      themeColor: '#6A1B9A',
      bgGlow: 'from-purple-500/20 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      activeBorder: 'border-purple-500',
      description: 'Integrated 2D and 3D BIM measurement. Extracting quantities directly from Revit/IFC models, comparing drawing revisions, and establishing live rate cost workbooks.',
      features: ['3D BIM Quantification', 'Revision Auto-Comparison', 'Rate Workbooks', 'Subcontractor Trade Packages']
    },
    {
      id: 'revit',
      name: 'Revit Architecture',
      category: 'BIM & Parametric Quantification',
      proficiency: 85,
      levelText: 'Certified Specialist',
      logo: RevitLogo,
      themeColor: '#007996',
      bgGlow: 'from-cyan-500/20 to-blue-500/10',
      borderColor: 'border-cyan-500/30',
      activeBorder: 'border-cyan-500',
      description: 'Navigating 3D architectural and structural BIM models to extract parametric schedules, verify concrete element volumes, and audit spatial clashes.',
      features: ['Parametric Element Audit', 'Material Schedules', 'Clash Identification', 'Volume Extraction']
    },
    {
      id: 'sketchup',
      name: 'SketchUp',
      category: '3D Spatial Modeling',
      proficiency: 80,
      levelText: 'Working Mastery',
      logo: SketchUpLogo,
      themeColor: '#D32F2F',
      bgGlow: 'from-rose-500/20 to-red-500/10',
      borderColor: 'border-rose-500/30',
      activeBorder: 'border-rose-500',
      description: '3D spatial visualization for site logistics, checking complex architectural geometries, and assessing temporary works and staging volumes.',
      features: ['Spatial Geometry Checks', 'Site Logistics Layout', 'Volume Assessment', 'Visual Presentation']
    },
    {
      id: 'excel',
      name: 'Microsoft Office & Excel',
      category: 'Spreadsheets & Cost Modeling',
      proficiency: 98,
      levelText: 'Advanced Modeling',
      logo: ExcelLogo,
      themeColor: '#107C41',
      bgGlow: 'from-green-500/20 to-teal-500/10',
      borderColor: 'border-green-500/30',
      activeBorder: 'border-green-500',
      description: 'Advanced commercial modeling: formulating detailed BOQs, Cost Value Reconciliations (CVR), Interim Payment Applications (IPA), and executive reporting.',
      features: ['Dynamic BOQ Formulation', 'Interim Payment Schedules', 'CVR Financial Reports', 'Variation Claims Matrix']
    }
  ];

  const currentTool = softwareList[activeTool];
  const CurrentLogo = currentTool.logo;

  return (
    <section id="software" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
      
      {/* Subtle Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              08. TECHNICAL TOOLS &amp; PROFICIENCY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Software Proficiency
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Industry-standard software for digital take-offs, 2D/3D BIM estimation, and commercial modeling.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
            Click any tool to explore capabilities
          </span>
        </div>

        {/* ATTRACTIVE MODERN SHOWCASE (Not a boring plain grid!) */}
        <div className="space-y-8">
          
          {/* Interactive Floating Tool Dock Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {softwareList.map((tool, idx) => {
              const ToolLogo = tool.logo;
              const isSelected = activeTool === idx;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTool(idx)}
                  className={`p-3.5 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center text-center gap-2 group relative ${
                    isSelected
                      ? `bg-slate-950 shadow-xl ${tool.activeBorder} border-2 -translate-y-1`
                      : 'bg-slate-950/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-950'
                  }`}
                >
                  {/* Vector Logo with Glow */}
                  <div className={`p-2 rounded-xl transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`}>
                    <ToolLogo className="w-10 h-10 drop-shadow-md" />
                  </div>
                  
                  <div className="text-xs font-bold text-white truncate max-w-full">
                    {tool.name}
                  </div>
                  
                  {/* Mini Percentage Badge */}
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-amber-400'
                  }`}>
                    {tool.proficiency}%
                  </span>

                  {isSelected && (
                    <span className="absolute -bottom-1.5 w-3 h-3 bg-amber-500 rotate-45 rounded-sm"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ACTIVE EXPANDED FEATURE SPOTLIGHT CARD */}
          <div className={`p-6 sm:p-10 rounded-3xl bg-gradient-to-br ${currentTool.bgGlow} bg-slate-950 border ${currentTool.borderColor} shadow-2xl relative overflow-hidden transition-all duration-500`}>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Big Logo, Title, and Description */}
              <div className="lg:col-span-8 space-y-4">
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
                    <CurrentLogo className="w-14 h-14" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block">
                      {currentTool.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {currentTool.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
                  {currentTool.description}
                </p>

                {/* Key Technical Capabilities */}
                <div className="pt-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Core QS Workflow Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentTool.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 font-medium">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Circular Proficiency Gauge & Mastery Rating */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-3">
                
                {/* Radial Circular Progress */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#1e293b"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#f59e0b"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * currentTool.proficiency) / 100}
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-2xl font-black text-white font-mono">{currentTool.proficiency}%</span>
                    <span className="text-[10px] text-slate-400 uppercase">Proficiency</span>
                  </div>
                </div>

                <div>
                  <span className="text-sm font-bold text-amber-400 block">{currentTool.levelText}</span>
                  <span className="text-xs text-slate-400">Practical Construction Practice</span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* 09. LANGUAGES (Interactive bilingual cards) */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
              09. COMMUNICATION &amp; FLUENCY
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Languages
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LANGUAGES_DATA.map((lang, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-amber-400" />
                      <h4 className="text-lg font-bold text-white">{lang.language}</h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {lang.proficiency}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 block mb-2 font-medium">{lang.level}</span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{lang.description}</p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>Fluency</span>
                    <span className="text-amber-400 font-bold">{lang.percent}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
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
