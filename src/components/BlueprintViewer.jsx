import React, { useState } from 'react';
import { 
  Layers, 
  Ruler, 
  Eye, 
  Maximize2, 
  Box, 
  CheckCircle2, 
  Compass, 
  Sliders, 
  Info,
  Grid,
  FileCheck,
  Zap,
  Building2
} from 'lucide-react';

export default function BlueprintViewer() {
  const [activeLayer, setActiveLayer] = useState('qto'); // 'arch', 'struct', 'mep', 'qto'
  const [selectedElement, setSelectedElement] = useState({
    id: 'TB-01',
    name: 'Transfer Girder Beam (TB-01)',
    trade: 'Structural Concrete & Rebar',
    dimensions: '1200mm (W) x 1800mm (D) x 14.50m (L)',
    concreteVolume: '31.32 m³ (C50/60 High-Strength)',
    rebarTonnage: '4.85 Metric Tons (T25/T32 High-Tensile)',
    formworkArea: '73.95 m²',
    boqRef: 'DIV-03 / 03.14.02',
    rateEstimate: 'QAR 1,280 / m³',
    totalValuation: 'QAR 40,089.60'
  });

  const elementsData = [
    {
      id: 'TB-01',
      name: 'Transfer Girder Beam (TB-01)',
      trade: 'Structural Concrete & Rebar',
      dimensions: '1200mm (W) x 1800mm (D) x 14.50m (L)',
      concreteVolume: '31.32 m³ (C50/60 High-Strength)',
      rebarTonnage: '4.85 Metric Tons (T25/T32 High-Tensile)',
      formworkArea: '73.95 m²',
      boqRef: 'DIV-03 / 03.14.02',
      rateEstimate: 'QAR 1,280 / m³',
      totalValuation: 'QAR 40,089.60',
      x: 28,
      y: 35,
      w: 44,
      h: 8
    },
    {
      id: 'COL-C1',
      name: 'Mega Column C-01 (ABK Tower Core)',
      trade: 'Reinforced Concrete Superstructure',
      dimensions: '1400mm x 1400mm x 4.20m (Clear Height)',
      concreteVolume: '8.23 m³ (Self-Compacting Concrete)',
      rebarTonnage: '1.42 Metric Tons (Grade 500B)',
      formworkArea: '23.52 m²',
      boqRef: 'DIV-03 / 03.12.01',
      rateEstimate: 'QAR 1,450 / m³',
      totalValuation: 'QAR 11,933.50',
      x: 24,
      y: 28,
      w: 8,
      h: 12
    },
    {
      id: 'COL-C2',
      name: 'Perimeter Column C-02',
      trade: 'Reinforced Concrete Superstructure',
      dimensions: '1200mm x 1200mm x 4.20m',
      concreteVolume: '6.05 m³',
      rebarTonnage: '0.98 Metric Tons',
      formworkArea: '20.16 m²',
      boqRef: 'DIV-03 / 03.12.02',
      rateEstimate: 'QAR 1,450 / m³',
      totalValuation: 'QAR 8,772.50',
      x: 68,
      y: 28,
      w: 8,
      h: 12
    },
    {
      id: 'HVAC-D04',
      name: 'Primary Supply Air Duct (AHU-04)',
      trade: 'MEP - Mechanical HVAC',
      dimensions: '1400mm x 600mm GI Sheet (Class C)',
      concreteVolume: 'N/A (Galvanized Steel 1.2mm)',
      rebarTonnage: 'N/A',
      formworkArea: 'Insulation: 58.40 m² (Acoustic Lined)',
      boqRef: 'DIV-23 / 23.31.13',
      rateEstimate: 'QAR 285 / m²',
      totalValuation: 'QAR 16,644.00',
      x: 18,
      y: 52,
      w: 64,
      h: 6
    },
    {
      id: 'SLAB-S01',
      name: 'Post-Tensioned Floor Slab Zone A',
      trade: 'Civil / Concrete',
      dimensions: '280mm Thickness x 420.00 m² Area',
      concreteVolume: '117.60 m³ (C40/50)',
      rebarTonnage: '9.40 MT Conventional + PT Strands',
      formworkArea: '420.00 m² Soffit Formwork',
      boqRef: 'DIV-03 / 03.15.01',
      rateEstimate: 'QAR 920 / m²',
      totalValuation: 'QAR 386,400.00',
      x: 20,
      y: 20,
      w: 60,
      h: 58
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-blueprint-950 relative border-b border-blueprint-800">
      <div className="absolute inset-0 blueprint-grid-subtle opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-safety-400 uppercase tracking-widest bg-blueprint-900/90 px-3 py-1 rounded border border-blueprint-800 mb-3">
              <Layers className="w-3.5 h-3.5 text-safety-400" />
              <span>PRACTICAL AUDIT // IFT &bull; IFC &bull; SHOP DRAWINGS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
              Interactive Blueprint &amp; Take-Off Inspector
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-mono mt-2">
              Experience how I audit architectural, structural, and MEP shop drawings to extract zero-discrepancy BOQ measurements.
            </p>
          </div>

          {/* Layer Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs bg-blueprint-900/80 p-1.5 rounded-xl border border-blueprint-800">
            <button
              onClick={() => setActiveLayer('arch')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeLayer === 'arch'
                  ? 'bg-safety-500 text-blueprint-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1. ARCH GRID (IFC)
            </button>
            <button
              onClick={() => setActiveLayer('struct')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeLayer === 'struct'
                  ? 'bg-safety-500 text-blueprint-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2. STRUCTURAL (REBAR)
            </button>
            <button
              onClick={() => setActiveLayer('mep')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeLayer === 'mep'
                  ? 'bg-safety-500 text-blueprint-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3. MEP SERVICES
            </button>
            <button
              onClick={() => setActiveLayer('qto')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeLayer === 'qto'
                  ? 'bg-cyan-400 text-blueprint-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              4. FULL QTO OVERLAY
            </button>
          </div>
        </div>

        {/* Blueprint Visual Inspector Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Center: Interactive CAD Blueprint Canvas */}
          <div className="lg:col-span-8 glass-panel rounded-2xl border border-safety-500/30 p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            
            {/* Top Canvas Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-blueprint-800 font-mono text-xs text-slate-400 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-white font-bold">DRAWING REF: DWG-ABK-ST-L14-002 [REV C]</span>
              </div>
              <div className="flex items-center gap-4 text-[11px]">
                <span className="text-safety-400 font-bold">SCALE: 1:50</span>
                <span>TOLERANCE: &plusmn;0.00%</span>
                <span className="hidden sm:inline">COORD: GRID A-04 TO C-08</span>
              </div>
            </div>

            {/* Simulated CAD Canvas Workspace */}
            <div className="relative w-full h-[400px] sm:h-[480px] bg-blueprint-950 rounded-xl border border-blueprint-800 overflow-hidden select-none">
              
              {/* CAD Grid Background */}
              <div className="absolute inset-0 opacity-25">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="cadGridLarge" width="40" height="40" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="40" y2="0" stroke="#00F0FF" strokeWidth="0.5" />
                      <line x1="0" y1="0" x2="0" y2="40" stroke="#00F0FF" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#cadGridLarge)" />
                </svg>
              </div>

              {/* Grid Axis Markers */}
              <div className="absolute top-2 left-6 right-6 flex justify-between font-mono text-[10px] text-cyan-400/80">
                <span>GRID 01</span>
                <span>GRID 02</span>
                <span>GRID 03</span>
                <span>GRID 04</span>
                <span>GRID 05</span>
              </div>

              {/* Layer 1: Architectural Walls & Perimeter */}
              {(activeLayer === 'arch' || activeLayer === 'qto') && (
                <div className="absolute inset-0 pointer-events-none">
                  {/* Outer Building Perimeter */}
                  <div className="absolute top-[15%] left-[10%] right-[10%] bottom-[15%] border-2 border-slate-500/60 rounded-sm"></div>
                  {/* Internal Partitions */}
                  <div className="absolute top-[35%] left-[10%] right-[50%] h-[2px] bg-slate-600/70"></div>
                  <div className="absolute top-[35%] left-[50%] bottom-[15%] w-[2px] bg-slate-600/70"></div>
                  <div className="absolute top-[18%] left-[12%] font-mono text-[10px] text-slate-500">
                    ZONE A: HIGH-RISE CORE &bull; 420.00 m²
                  </div>
                </div>
              )}

              {/* Layer 2: Structural Columns & Beams */}
              {(activeLayer === 'struct' || activeLayer === 'qto') && (
                <div className="absolute inset-0">
                  {/* Beam TB-01 (Interactive clickable) */}
                  <div
                    onClick={() => setSelectedElement(elementsData[0])}
                    className={`absolute cursor-pointer transition-all border-2 flex items-center justify-center font-mono text-[11px] font-bold ${
                      selectedElement.id === 'TB-01'
                        ? 'bg-amber-500/30 border-safety-400 text-safety-300 shadow-lg shadow-safety-500/30'
                        : 'bg-amber-500/10 border-amber-500/40 text-amber-400 hover:bg-amber-500/25'
                    }`}
                    style={{
                      top: `${elementsData[0].y}%`,
                      left: `${elementsData[0].x}%`,
                      width: `${elementsData[0].w}%`,
                      height: `${elementsData[0].h}%`
                    }}
                  >
                    <span>TB-01 [1200x1800] &bull; 31.32 m³</span>
                  </div>

                  {/* Column COL-C1 */}
                  <div
                    onClick={() => setSelectedElement(elementsData[1])}
                    className={`absolute cursor-pointer transition-all border-2 flex items-center justify-center font-mono text-[10px] font-bold ${
                      selectedElement.id === 'COL-C1'
                        ? 'bg-cyan-500/40 border-cyan-300 text-white shadow-lg'
                        : 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30'
                    }`}
                    style={{
                      top: `${elementsData[1].y}%`,
                      left: `${elementsData[1].x}%`,
                      width: `${elementsData[1].w}%`,
                      height: `${elementsData[1].h}%`
                    }}
                  >
                    <span>C-01</span>
                  </div>

                  {/* Column COL-C2 */}
                  <div
                    onClick={() => setSelectedElement(elementsData[2])}
                    className={`absolute cursor-pointer transition-all border-2 flex items-center justify-center font-mono text-[10px] font-bold ${
                      selectedElement.id === 'COL-C2'
                        ? 'bg-cyan-500/40 border-cyan-300 text-white shadow-lg'
                        : 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30'
                    }`}
                    style={{
                      top: `${elementsData[2].y}%`,
                      left: `${elementsData[2].x}%`,
                      width: `${elementsData[2].w}%`,
                      height: `${elementsData[2].h}%`
                    }}
                  >
                    <span>C-02</span>
                  </div>
                </div>
              )}

              {/* Layer 3: MEP HVAC Ducting & Electrical Conduits */}
              {(activeLayer === 'mep' || activeLayer === 'qto') && (
                <div className="absolute inset-0">
                  {/* HVAC Supply Duct */}
                  <div
                    onClick={() => setSelectedElement(elementsData[3])}
                    className={`absolute cursor-pointer transition-all border-2 border-dashed flex items-center justify-center font-mono text-[10px] font-bold ${
                      selectedElement.id === 'HVAC-D04'
                        ? 'bg-indigo-500/40 border-indigo-300 text-white shadow-lg'
                        : 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/30'
                    }`}
                    style={{
                      top: `${elementsData[3].y}%`,
                      left: `${elementsData[3].x}%`,
                      width: `${elementsData[3].w}%`,
                      height: `${elementsData[3].h}%`
                    }}
                  >
                    <span>AHU-04 DUCT [1400x600] &bull; 58.4 m²</span>
                  </div>

                  {/* Pipe routes */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="20%" y1="55%" x2="20%" y2="78%" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="20%" y1="78%" x2="80%" y2="78%" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="20%" cy="55%" r="4" fill="#38BDF8" />
                    <circle cx="80%" cy="78%" r="4" fill="#38BDF8" />
                  </svg>
                </div>
              )}

              {/* Caliper Measurement Marker Lines (QTO Active) */}
              {activeLayer === 'qto' && (
                <div className="absolute inset-0 pointer-events-none">
                  {/* Horizontal Dimension Caliper */}
                  <div className="absolute top-[28%] left-[28%] w-[44%] flex flex-col items-center">
                    <div className="w-full flex items-center">
                      <div className="w-2 h-2 border-l border-t border-cyan-400"></div>
                      <div className="flex-1 h-[1px] bg-cyan-400"></div>
                      <div className="w-2 h-2 border-r border-t border-cyan-400"></div>
                    </div>
                    <span className="font-mono text-[10px] text-cyan-300 bg-blueprint-950 px-2 rounded -mt-2.5 border border-cyan-500/30">
                      14,500 mm SPAN (CLEAR)
                    </span>
                  </div>

                  {/* Crosshair target overlay */}
                  <div className="absolute bottom-3 left-4 font-mono text-[10px] text-slate-400 bg-blueprint-950/80 px-2 py-1 rounded border border-blueprint-800">
                    CLICK ANY HIGHLIGHTED ELEMENT TO AUDIT BOQ DATA
                  </div>
                </div>
              )}

              {/* Canvas Watermark */}
              <div className="absolute bottom-3 right-4 font-mono text-[10px] text-slate-600 pointer-events-none">
                MOHAMMED ISSATH &bull; DIGITAL QUANTITY TAKE-OFF (QTO)
              </div>
            </div>

            {/* Bottom Quick Switch Bar */}
            <div className="mt-4 pt-3 border-t border-blueprint-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified against IFC Structural Specs &amp; POMI standard</span>
              </span>
              <span className="text-safety-400 font-semibold">
                Selected: {selectedElement.name}
              </span>
            </div>
          </div>

          {/* Right: Audited BOQ & Rate Valuation Sheet */}
          <div className="lg:col-span-4 glass-panel rounded-2xl border border-blueprint-800 p-6 space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-blueprint-800">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-safety-400" />
                Audited Element BOQ Sheet
              </span>
              <span className="font-mono text-[10px] text-cyan-300 bg-blueprint-900 px-2 py-0.5 rounded border border-blueprint-700">
                {selectedElement.id}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-heading font-black text-white leading-snug">
                {selectedElement.name}
              </h3>
              <span className="text-xs font-mono text-safety-400 mt-0.5 block">
                Trade: {selectedElement.trade}
              </span>
            </div>

            {/* Dimensional & Take-Off Data Table */}
            <div className="space-y-2.5 font-mono text-xs">
              <div className="bg-blueprint-950/80 p-2.5 rounded-lg border border-blueprint-800 flex justify-between">
                <span className="text-slate-400">Section Dimensions:</span>
                <span className="text-slate-200 font-bold">{selectedElement.dimensions}</span>
              </div>
              <div className="bg-blueprint-950/80 p-2.5 rounded-lg border border-blueprint-800 flex justify-between">
                <span className="text-slate-400">Concrete Volume:</span>
                <span className="text-white font-bold">{selectedElement.concreteVolume}</span>
              </div>
              <div className="bg-blueprint-950/80 p-2.5 rounded-lg border border-blueprint-800 flex justify-between">
                <span className="text-slate-400">Rebar Tonnage:</span>
                <span className="text-cyan-300 font-bold">{selectedElement.rebarTonnage}</span>
              </div>
              <div className="bg-blueprint-950/80 p-2.5 rounded-lg border border-blueprint-800 flex justify-between">
                <span className="text-slate-400">Formwork / Insulation:</span>
                <span className="text-slate-200 font-bold">{selectedElement.formworkArea}</span>
              </div>
              <div className="bg-blueprint-950/80 p-2.5 rounded-lg border border-blueprint-800 flex justify-between">
                <span className="text-slate-400">BOQ Division Ref:</span>
                <span className="text-amber-400 font-bold">{selectedElement.boqRef}</span>
              </div>
            </div>

            {/* Commercial Valuation Highlight */}
            <div className="p-4 rounded-xl bg-blueprint-900/90 border border-safety-500/40 text-center font-mono">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">
                Item Valuation (Measured &amp; Priced)
              </span>
              <span className="text-2xl font-bold text-safety-400 mt-1 block">
                {selectedElement.totalValuation}
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5 block">
                Rate Basis: {selectedElement.rateEstimate}
              </span>
            </div>

            <div className="text-[11px] text-slate-400 leading-relaxed font-sans pt-1">
              * Measurements extracted directly from IFC drawings following POMI / NRM principles to ensure zero site quantity variance during Interim Valuations (IPA).
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
