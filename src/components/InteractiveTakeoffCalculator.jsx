import React, { useState } from 'react';
import { 
  Calculator, 
  Building2, 
  Sliders, 
  Coins, 
  Layers, 
  CheckCircle2, 
  FileSpreadsheet, 
  ArrowRight,
  Sparkles,
  RefreshCw,
  TrendingUp,
  Percent,
  Compass
} from 'lucide-react';

export default function InteractiveTakeoffCalculator() {
  const [projectType, setProjectType] = useState('commercial');
  const [area, setArea] = useState(12500); // in m²
  const [currency, setCurrency] = useState('SAR');
  const [mepLevel, setMepLevel] = useState('advanced'); // standard, advanced, premium
  const [contingencyRate, setContingencyRate] = useState(7); // %

  // Base unit rates per m² according to GCC market benchmarking
  const rates = {
    commercial: { baseCivil: 1850, mepFactor: { standard: 650, advanced: 980, premium: 1450 }, finishes: 750, pgRate: 0.10 },
    condo: { baseCivil: 1450, mepFactor: { standard: 500, advanced: 720, premium: 1100 }, finishes: 600, pgRate: 0.08 },
    residential: { baseCivil: 1200, mepFactor: { standard: 420, advanced: 600, premium: 850 }, finishes: 550, pgRate: 0.07 }
  };

  const currentRate = rates[projectType];
  const mepRate = currentRate.mepFactor[mepLevel];
  
  // Calculate element costs
  const civilCost = area * currentRate.baseCivil;
  const mepCost = area * mepRate;
  const finishesCost = area * currentRate.finishes;
  const directWorksTotal = civilCost + mepCost + finishesCost;

  const pgCost = directWorksTotal * currentRate.pgRate;
  const subtotalWithPG = directWorksTotal + pgCost;
  const contingencyCost = subtotalWithPG * (contingencyRate / 100);
  const totalEstimatedCost = subtotalWithPG + contingencyCost;

  // Key QS estimated quantities
  const estimatedConcreteM3 = Math.round(area * 0.42); // avg 0.42 m³ per m² GFA
  const estimatedRebarTons = Math.round(estimatedConcreteM3 * 0.11); // ~110 kg/m³
  const estimatedMepPoints = Math.round(area * 1.8);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(Math.round(num));
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 blueprint-bg relative border-b border-blueprint-800">
      <div className="absolute inset-0 blueprint-grid-subtle opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-safety-400 uppercase tracking-widest bg-blueprint-900/90 px-3 py-1 rounded border border-blueprint-800 mb-3">
            <Calculator className="w-3.5 h-3.5 text-safety-400" />
            <span>INTERACTIVE QUANTITY SURVEYING MINI-SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Live Take-Off &amp; Cost Estimator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-mono mt-2">
            Simulate an elemental Bill of Quantities (BOQ) cost model. Adjust project variables to see real-time Civil, MEP, Preliminaries, and Contingency allocations.
          </p>
        </div>

        {/* Main Interactive Tool Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Inputs & Controls */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-7 rounded-2xl border border-blueprint-800 space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-blueprint-800">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sliders className="w-4 h-4 text-safety-400" />
                Project Parameter Controls
              </span>
              <span className="text-[10px] font-mono text-safety-400 bg-safety-500/10 px-2 py-0.5 rounded border border-safety-500/20">
                BENCHMARK: GCC 2026
              </span>
            </div>

            {/* 1. Project Type Selector */}
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                1. Project Development Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'commercial', label: 'Commercial High-Rise' },
                  { id: 'condo', label: '16-Storey Condo' },
                  { id: 'residential', label: 'Housing Villa' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`py-2 px-2 rounded-lg text-xs font-mono font-medium text-center transition-all border ${
                      projectType === type.id
                        ? 'bg-safety-500 text-blueprint-950 border-amber-300 font-bold'
                        : 'bg-blueprint-950/70 text-slate-300 border-blueprint-800 hover:border-slate-600'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Gross Floor Area (GFA) Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-slate-300 uppercase tracking-wider">
                  2. Gross Floor Area (GFA)
                </span>
                <span className="text-safety-400 font-bold bg-blueprint-950 px-2 py-0.5 rounded border border-blueprint-800">
                  {formatNumber(area)} m²
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-blueprint-950 rounded-lg appearance-none cursor-pointer accent-safety-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>1,000 m²</span>
                <span>25,000 m²</span>
                <span>50,000 m²</span>
              </div>
            </div>

            {/* 3. MEP Complexity Level */}
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                3. MEP Systems Complexity (HVAC, Electrical, Plumbing)
              </label>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                {[
                  { id: 'standard', name: 'Standard MEP' },
                  { id: 'advanced', name: 'Advanced / BMS' },
                  { id: 'premium', name: 'Premium Heavy' },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setMepLevel(lvl.id)}
                    className={`py-2 rounded-lg text-center transition-all border ${
                      mepLevel === lvl.id
                        ? 'bg-cyan-500 text-blueprint-950 border-cyan-300 font-bold'
                        : 'bg-blueprint-950/70 text-slate-300 border-blueprint-800 hover:border-slate-600'
                    }`}
                  >
                    {lvl.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Contingency Percentage */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-slate-300 uppercase tracking-wider">
                  4. Risk &amp; Variation Contingency
                </span>
                <span className="text-cyan-400 font-bold bg-blueprint-950 px-2 py-0.5 rounded border border-blueprint-800">
                  {contingencyRate}%
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="15"
                step="1"
                value={contingencyRate}
                onChange={(e) => setContingencyRate(Number(e.target.value))}
                className="w-full h-2 bg-blueprint-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* 5. Currency Selection */}
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                5. Currency Display
              </label>
              <div className="flex gap-2 font-mono text-xs">
                {['SAR', 'QAR', 'USD'].map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`flex-1 py-1.5 rounded-lg border text-center font-bold transition-all ${
                      currency === c
                        ? 'bg-blueprint-800 text-safety-400 border-safety-500'
                        : 'bg-blueprint-950 text-slate-400 border-blueprint-800'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Panel: Live BOQ Breakdown & Cost Valuation Display */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-safety-500/40 space-y-6 relative overflow-hidden">
            
            {/* Top Total Output Card */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-blueprint-900 via-blueprint-950 to-blueprint-900 border border-safety-500/30 text-center relative overflow-hidden">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Total Estimated Project Cost (BOQ Summary)
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-black text-safety-400 mt-2 tracking-tight">
                {currency} {formatNumber(totalEstimatedCost)}
              </div>
              <div className="text-xs font-mono text-cyan-300 mt-1">
                Average Unit Cost: {currency} {formatNumber(totalEstimatedCost / area)} / m² GFA
              </div>
            </div>

            {/* Elemental Cost Breakdown Bars */}
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between font-bold text-white uppercase pb-1 border-b border-blueprint-800">
                <span>Elemental Package</span>
                <span>Subtotal ({currency})</span>
              </div>

              {/* Civil & Substructure */}
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-safety-500"></span>
                    Civil, Earthworks &amp; Superstructure Concrete
                  </span>
                  <span className="font-bold text-white">{formatNumber(civilCost)}</span>
                </div>
                <div className="w-full h-2 rounded bg-blueprint-950 overflow-hidden">
                  <div 
                    className="h-full bg-safety-500 rounded" 
                    style={{ width: `${(civilCost / totalEstimatedCost) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* MEP Services */}
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400"></span>
                    MEP Services (HVAC, Electrical, Plumbing, Fire)
                  </span>
                  <span className="font-bold text-white">{formatNumber(mepCost)}</span>
                </div>
                <div className="w-full h-2 rounded bg-blueprint-950 overflow-hidden">
                  <div 
                    className="h-full bg-cyan-400 rounded" 
                    style={{ width: `${(mepCost / totalEstimatedCost) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Architectural Finishes */}
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-indigo-400"></span>
                    Architectural Finishes, Facade &amp; Fit-Out
                  </span>
                  <span className="font-bold text-white">{formatNumber(finishesCost)}</span>
                </div>
                <div className="w-full h-2 rounded bg-blueprint-950 overflow-hidden">
                  <div 
                    className="h-full bg-indigo-400 rounded" 
                    style={{ width: `${(finishesCost / totalEstimatedCost) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Preliminaries & General (P&G) */}
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400"></span>
                    Preliminaries &amp; General (P&amp;G, Plant, Site Mgmt)
                  </span>
                  <span className="font-bold text-white">{formatNumber(pgCost)}</span>
                </div>
                <div className="w-full h-2 rounded bg-blueprint-950 overflow-hidden">
                  <div 
                    className="h-full bg-emerald-400 rounded" 
                    style={{ width: `${(pgCost / totalEstimatedCost) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Contingency */}
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-amber-400"></span>
                    Contingency &amp; Variations Allowance ({contingencyRate}%)
                  </span>
                  <span className="font-bold text-white">{formatNumber(contingencyCost)}</span>
                </div>
                <div className="w-full h-2 rounded bg-blueprint-950 overflow-hidden">
                  <div 
                    className="h-full bg-amber-400 rounded" 
                    style={{ width: `${(contingencyCost / totalEstimatedCost) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Derived Physical Quantity Take-Off Estimates */}
            <div className="pt-4 border-t border-blueprint-800">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                Key Physical Take-Off Quantities Generated:
              </div>
              <div className="grid grid-cols-3 gap-3 font-mono text-center">
                <div className="bg-blueprint-950/80 p-3 rounded-lg border border-blueprint-800">
                  <div className="text-[10px] text-slate-400">CONCRETE VOLUME</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    ~{formatNumber(estimatedConcreteM3)} m³
                  </div>
                </div>
                <div className="bg-blueprint-950/80 p-3 rounded-lg border border-blueprint-800">
                  <div className="text-[10px] text-slate-400">ESTIMATED REBAR</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    ~{formatNumber(estimatedRebarTons)} MT
                  </div>
                </div>
                <div className="bg-blueprint-950/80 p-3 rounded-lg border border-blueprint-800">
                  <div className="text-[10px] text-slate-400">MEP SERVICE POINTS</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    ~{formatNumber(estimatedMepPoints)} pts
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400 text-center sm:text-left">
                Need a certified BOQ or exact tender estimation for your upcoming project?
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-bold bg-safety-500 text-blueprint-950 hover:bg-safety-400 transition-colors shadow-lg shadow-safety-500/20 shrink-0"
              >
                <span>REQUEST DETAILED ESTIMATE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

