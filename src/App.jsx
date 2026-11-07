import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import BlueprintViewer from './components/BlueprintViewer';
import SkillsAcademic from './components/SkillsAcademic';
import SoftwareLanguages from './components/SoftwareLanguages';
import InteractiveTakeoffCalculator from './components/InteractiveTakeoffCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blueprint-950 text-slate-100 flex flex-col font-sans selection:bg-safety-500 selection:text-blueprint-950">
      {/* Navigation */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01. Home & Hero */}
        <Hero onOpenCV={() => setIsCVOpen(true)} />

        {/* 02. About Me */}
        <About />

        {/* 03. Professional Experience */}
        <Experience />

        {/* 04. Featured Projects */}
        <Projects />

        {/* Interactive CAD Drawing & Take-Off Layer Viewer */}
        <BlueprintViewer />

        {/* 05, 06, 07. Professional Skills, Academic Knowledge & Education */}
        <SkillsAcademic />

        {/* 08, 09. Software Proficiency & Languages */}
        <SoftwareLanguages />

        {/* Extra Interactive Feature: Live Quantity Take-Off & Cost Estimator */}
        <InteractiveTakeoffCalculator />

        {/* 10. Contact Section */}
        <Contact onOpenCV={() => setIsCVOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Modal (Printable & Downloadable) */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}

