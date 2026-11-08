import React, { useState, useRef } from 'react';
import { ArrowRight, FileDown, Mail, MapPin, Phone, Building2, Award, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';
import issathImg from '../assets/issath.png';

export default function Hero({ onOpenCV }) {
  // Interactive 3D Rotation / Tilt State
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalize coordinates (-1 to 1)
    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);
    
    // Calculate rotation angles (max 18 degrees for realistic 3D feel)
    const rotateY = mouseX * 18;
    const rotateX = -mouseY * 18;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="relative pt-10 pb-20 sm:pt-16 sm:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 overflow-hidden">
      
      {/* Background Architectural Subtle Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Intro, Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Engineering Status Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-xs text-slate-300 font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-amber-400 font-bold uppercase tracking-wider">{PERSONAL_INFO.title}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Building Value Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                Accurate Measurement
              </span>{' '}
              &amp; Cost Management.
            </h1>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {HERO_DATA.introduction}
            </p>

            {/* Contact Details Bar */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                {PERSONAL_INFO.location}
              </span>
              <a 
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                {PERSONAL_INFO.phone}
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Three User-Specified Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-amber-500/50 transition-all hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-amber-400" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-transparent hover:bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-left">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">Experience</span>
                <span className="text-xl font-bold text-white">6+ Years</span>
                <span className="text-[11px] text-amber-400 block">Qatar &amp; Sri Lanka</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-left">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">Top Project</span>
                <span className="text-xl font-bold text-amber-400">QAR 218M</span>
                <span className="text-[11px] text-slate-300 block">ABK Tower, Lusail</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-left">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">Discipline</span>
                <span className="text-xl font-bold text-white">Civil &amp; MEP</span>
                <span className="text-[11px] text-emerald-400 block">Commercial &amp; High-Rise</span>
              </div>
            </div>

          </div>

          {/* Right Column: Rotatable 3D Animated Person Stand */}
          <div className="lg:col-span-5 flex justify-center items-center">
            
            {/* Interactive 3D Perspective Canvas */}
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: '1200px',
              }}
              className="relative w-full max-w-md flex flex-col items-center justify-center cursor-pointer select-none py-4"
            >
              
              {/* Dynamic Rotatable Container */}
              <div 
                style={{
                  transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.04 : 1})`,
                  transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  transformStyle: 'preserve-3d',
                }}
                className="relative flex flex-col items-center justify-center"
              >
                
                {/* 3D Circular Pedestal / Construction Foundation Ring */}
                <div 
                  style={{ transform: 'translateZ(-40px) rotateX(65deg)' }}
                  className="absolute bottom-4 w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-amber-500/40 bg-gradient-to-tr from-amber-500/20 via-slate-900/80 to-cyan-500/20 shadow-2xl shadow-amber-500/20 animate-pulse pointer-events-none"
                >
                  <div className="absolute inset-4 rounded-full border border-dashed border-amber-400/50"></div>
                  <div className="absolute inset-10 rounded-full border border-slate-700/80"></div>
                </div>

                {/* Rotating Compass Tick Marks (Ambient Animation) */}
                <div 
                  style={{ transform: 'translateZ(-20px)', animationDuration: '30s' }}
                  className="absolute bottom-6 w-64 h-64 rounded-full border border-amber-500/30 animate-spin"
                ></div>

                {/* Mohamed Issath's Main Person Photo */}
                <div 
                  style={{ transform: 'translateZ(30px)' }}
                  className="relative z-20 flex justify-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter"
                >
                  <img
                    src={issathImg}
                    alt="Mohamed Issath - Quantity Surveyor"
                    className="w-auto h-[440px] sm:h-[500px] object-contain pointer-events-none transition-transform duration-300"
                  />
                </div>

                {/* Floating 3D Badge 1: QAR 218M (Top Right) */}
                <div 
                  style={{ transform: 'translateZ(65px)' }}
                  className="absolute top-8 -right-2 sm:-right-4 z-30 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-amber-500/40 shadow-xl shadow-black/50 text-left transition-transform group hover:scale-105"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono uppercase tracking-wider">Flagship Value</span>
                      <span className="text-sm font-bold text-amber-400">QAR 218 Million</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-300 block mt-1">ABK Tower &bull; Lusail, Qatar</span>
                </div>

                {/* Floating 3D Badge 2: Certified Quantity Surveyor (Bottom Left) */}
                <div 
                  style={{ transform: 'translateZ(75px)' }}
                  className="absolute bottom-20 -left-2 sm:-left-6 z-30 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 shadow-xl shadow-black/50 text-left transition-transform group hover:scale-105"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono uppercase tracking-wider">Specialization</span>
                      <span className="text-xs font-bold text-white">Civil &amp; MEP Quantity Surveyor</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 block mt-1">&bull; Available in Jeddah, KSA</span>
                </div>

                {/* Interactive Drag / Hover Indicator */}
                <div 
                  style={{ transform: 'translateZ(40px)' }}
                  className="absolute -bottom-6 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-[11px] text-slate-400 font-mono flex items-center gap-1.5 shadow-md"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Interactive 3D View (Move cursor to tilt)</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
