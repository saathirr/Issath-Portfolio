import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Building, 
  Coins, 
  CheckCircle2, 
  Layers, 
  Eye, 
  X, 
  FileSpreadsheet, 
  ShieldCheck, 
  ExternalLink,
  Briefcase,
  FolderGit2,
  Maximize2
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'COMMERCIAL') return project.type.includes('Commercial') || project.type.includes('High-Rise');
    if (filter === 'RESIDENTIAL') return project.type.includes('Residential');
    return true;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 bg-blueprint-900/40 relative border-b border-blueprint-800">
      <div className="absolute inset-0 blueprint-grid-subtle opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-safety-400 uppercase tracking-widest bg-blueprint-900/90 px-3 py-1 rounded border border-blueprint-800 mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-safety-400" />
              <span>04. PORTFOLIO SHOWCASE // MAJOR DEVELOPMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-mono mt-2">
              High-rise commercial towers, complex MEP infrastructure, and multi-unit residential developments.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 font-mono text-xs bg-blueprint-950 p-1.5 rounded-lg border border-blueprint-800">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                filter === 'ALL'
                  ? 'bg-safety-500 text-blueprint-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ALL (3)
            </button>
            <button
              onClick={() => setFilter('COMMERCIAL')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                filter === 'COMMERCIAL'
                  ? 'bg-safety-500 text-blueprint-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              HIGH-RISE / COMMERCIAL
            </button>
            <button
              onClick={() => setFilter('RESIDENTIAL')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                filter === 'RESIDENTIAL'
                  ? 'bg-safety-500 text-blueprint-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              RESIDENTIAL
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl border border-blueprint-800 hover:border-safety-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-safety-500/10"
            >
              {/* Card Blueprint Header Visual */}
              <div className="p-6 bg-gradient-to-b from-blueprint-900 to-blueprint-950 border-b border-blueprint-800 relative overflow-hidden">
                <div className="flex items-center justify-between font-mono text-xs mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-safety-500/10 text-safety-400 border border-safety-500/30 font-bold">
                    {project.code}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-safety-400" />
                    {project.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-black text-white group-hover:text-safety-400 transition-colors">
                  {project.title}
                </h3>

                <div className="text-xs font-mono text-slate-400 mt-1">
                  Employer: <span className="text-slate-200">{project.employer}</span>
                </div>

                {/* Prominent Value Banner */}
                <div className="mt-5 p-3 rounded-xl bg-blueprint-950/90 border border-safety-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Reported Project Value
                    </span>
                    <span className="text-xl font-mono font-bold text-safety-400">
                      {project.projectValue}
                    </span>
                  </div>
                  <span className="px-2 py-1 rounded bg-blueprint-850 text-cyan-300 font-mono text-[11px] border border-blueprint-700">
                    {project.position}
                  </span>
                </div>
              </div>

              {/* Card Body & Scope Preview */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.overview}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      My Contribution:
                    </div>
                    {project.contributions.slice(0, 4).map((contrib, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-safety-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{contrib}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inspect Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 rounded-lg font-mono text-xs font-bold bg-blueprint-900 hover:bg-safety-500 hover:text-blueprint-950 text-slate-200 border border-blueprint-700 hover:border-safety-500 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Eye className="w-4 h-4 text-safety-400 group-hover/btn:text-blueprint-950 transition-colors" />
                  <span>INSPECT FULL BOQ &amp; SCOPE</span>
                </button>
              </div>

              {/* Card Bottom Meta Bar */}
              <div className="px-6 py-3 bg-blueprint-950/90 border-t border-blueprint-800 flex items-center justify-between font-mono text-[11px] text-slate-500">
                <span>{project.type}</span>
                <span className="text-emerald-400">{project.status}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-safety-500/40 p-6 sm:p-8 shadow-2xl">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-blueprint-900 text-slate-300 hover:text-white hover:bg-blueprint-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-12">
              <span className="px-2.5 py-1 rounded bg-safety-500/10 text-safety-400 border border-safety-500/30 font-mono text-xs font-bold uppercase">
                {selectedProject.code} &bull; {selectedProject.type}
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mt-2">
                {selectedProject.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-safety-400" />
                  {selectedProject.location}
                </span>
                <span>&bull;</span>
                <span>Employer: <strong className="text-white">{selectedProject.employer}</strong></span>
                <span>&bull;</span>
                <span>Role: <strong className="text-safety-400">{selectedProject.position}</strong></span>
              </div>
            </div>

            {/* Project Valuation Banner */}
            <div className="my-6 p-4 rounded-xl bg-blueprint-900/90 border border-safety-500/30 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                  Reported Project Valuation
                </span>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-safety-400">
                  {selectedProject.projectValue}
                </span>
              </div>
              <div className="text-right font-mono text-xs text-slate-300">
                <div>Status: <span className="text-emerald-400 font-bold">{selectedProject.status}</span></div>
                <div className="text-slate-500">Commercial Standard: FIDIC</div>
              </div>
            </div>

            {/* Scope Overview */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono font-bold text-safety-400 uppercase tracking-widest mb-1">
                  Project Description &amp; Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.overview}
                </p>
              </div>

              {/* Complete Contribution List */}
              <div className="pt-2">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-safety-400" />
                  Detailed Responsibilities &amp; QS Contributions
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.contributions.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-blueprint-950/80 border border-blueprint-800 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-safety-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-blueprint-800 font-mono text-xs">
                {selectedProject.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="bg-blueprint-900/70 p-3 rounded-lg border border-blueprint-800">
                    <span className="text-[10px] text-slate-400 uppercase block">{m.label}</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-blueprint-800 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-400">
                Verified Quantity Surveying Record
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-lg font-mono text-xs font-bold bg-safety-500 text-blueprint-950 hover:bg-safety-400 transition-colors"
              >
                Close Inspector
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

