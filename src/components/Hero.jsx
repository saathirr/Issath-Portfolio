import React from 'react';
import { ArrowRight, FileDown, Mail, MapPin, Phone, Building2, CheckCircle, Shield } from 'lucide-react';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';

export default function Hero({ onOpenCV }) {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Intro, Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-amber-400 font-semibold">{PERSONAL_INFO.title}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Building Value Through{' '}
              <span className="text-amber-400">Accurate Measurement</span>{' '}
              &amp; Cost Management.
            </h1>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {HERO_DATA.introduction}
            </p>

            {/* Quick Contact Details */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                {PERSONAL_INFO.location}
              </span>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                {PERSONAL_INFO.phone}
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Three User-Specified Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 transition-all"
              >
                <FileDown className="w-4 h-4 text-amber-400" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-transparent hover:bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean, Balanced Summary Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">Professional Profile</h3>
                  <p className="text-xs text-slate-400">Jeddah, Saudi Arabia &bull; GCC Experience</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold">
                  6+ Years
                </span>
              </div>

              {/* Highlight Project Metric */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-xs text-slate-400 block mb-1">Flagship Project Managed</span>
                <div className="text-xl font-bold text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-400" />
                  ABK Tower, Lusail
                </div>
                <div className="text-sm text-amber-400 font-semibold mt-1">
                  Project Value: QAR 218 Million
                </div>
                <p className="text-xs text-slate-400 mt-1">High-Rise Commercial &amp; MEP Services</p>
              </div>

              {/* Key Pillars Checklist */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Quantity Take-Offs &amp; Detailed BOQs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Cost Estimation &amp; Project Valuations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Interim Payment Applications (IPA / IPC)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Subcontractor Audit &amp; Variation Orders</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>FIDIC Contract Administration</span>
                </div>
              </div>

              {/* Academic qualification note */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Education:</span>
                <span className="text-slate-200 font-medium">BSc (Hons) QS (R) &bull; De Montfort UK</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
