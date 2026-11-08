import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsAcademic from './components/SkillsAcademic';
import SoftwareLanguages from './components/SoftwareLanguages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 01. Home / Hero */}
        <Hero onOpenCV={() => setIsCVOpen(true)} />

        {/* 02. About Me */}
        <About />

        {/* 03. Professional Experience */}
        <Experience />

        {/* 04. Featured Projects */}
        <Projects />

        {/* 05, 06, 07. Skills, Academic & Education */}
        <SkillsAcademic />

        {/* 08, 09. Software & Languages */}
        <SoftwareLanguages />

        {/* 10. Contact Me */}
        <Contact onOpenCV={() => setIsCVOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Clean CV Viewer / Download Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
