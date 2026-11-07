import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin,
  GraduationCap,
  Briefcase,
  FileText,
  FileDown
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EXPERIENCE_DATA, 
  EDUCATION_DATA, 
  SKILLS_DATA, 
  SOFTWARE_DATA, 
  LANGUAGES_DATA, 
  ABOUT_DATA 
} from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const cvText = `
MOHAMED ISSATH
${PERSONAL_INFO.title}
Location: ${PERSONAL_INFO.location}
Phone: ${PERSONAL_INFO.phone}
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY:
${ABOUT_DATA.paragraphs.join('\n\n')}

PROFESSIONAL EXPERIENCE:
${EXPERIENCE_DATA.map(exp => `
${exp.role} - ${exp.company} (${exp.location})
Period: ${exp.period}
Project: ${exp.project} | Value: ${exp.reportedValue}
Responsibilities:
${exp.highlights.map(h => `- ${h}`).join('\n')}
`).join('\n')}

EDUCATION & QUALIFICATIONS:
${EDUCATION_DATA.map(edu => `- ${edu.degree} | ${edu.institution} (${edu.period})`).join('\n')}

SOFTWARE PROFICIENCY:
${SOFTWARE_DATA.map(s => `- ${s.name}: ${s.proficiency}% (${s.category})`).join('\n')}

LANGUAGES:
${LANGUAGES_DATA.map(l => `- ${l.language}: ${l.proficiency} (${l.level})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-blueprint-950 border border-safety-500/50 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print p-4 bg-blueprint-900 border-b border-blueprint-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-safety-400 font-bold">
            <FileText className="w-4 h-4" />
            <span>MOHAMED ISSATH &bull; CURRICULUM VITAE (CV)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-blueprint-800 hover:bg-blueprint-700 text-slate-200 border border-blueprint-700 flex items-center gap-1.5 transition-colors"
              title="Copy plain text CV"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED!' : 'COPY TEXT'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-safety-500 hover:bg-safety-400 text-blueprint-950 font-bold flex items-center gap-1.5 transition-colors shadow-md"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / SAVE PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-blueprint-800 hover:bg-red-500 text-slate-300 hover:text-white transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-900 text-slate-100 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b-2 border-safety-500 pb-6 print:border-black">
            <h1 className="text-3xl sm:text-4xl font-heading font-black text-white print:text-black tracking-tight">
              MOHAMED ISSATH
            </h1>
            <p className="text-base sm:text-lg font-mono text-safety-400 print:text-slate-800 font-bold mt-1">
              Quantity Surveyor (Civil &amp; MEP) | Estimation Engineer
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono text-slate-300 print:text-slate-700 mt-4">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-safety-400 print:text-black" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-safety-400 print:text-black" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-safety-400 print:text-black" />
                <span className="break-all">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-safety-400 print:text-black" />
                <span>{PERSONAL_INFO.linkedin}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-safety-400 print:text-black border-b border-blueprint-800 print:border-slate-300 pb-1 mb-3">
              Professional Summary
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed font-sans">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-safety-400 print:text-black border-b border-blueprint-800 print:border-slate-300 pb-1 mb-4">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs">
                    <div>
                      <strong className="text-sm font-bold text-white print:text-black block">
                        {exp.company} &bull; {exp.location}
                      </strong>
                      <span className="text-safety-400 print:text-slate-700 font-bold">
                        {exp.role}
                      </span>
                    </div>
                    <span className="text-slate-400 print:text-slate-600 mt-1 sm:mt-0 font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-slate-300 print:text-slate-700 bg-blueprint-900/40 print:bg-slate-100 p-2 rounded">
                    <strong>Project:</strong> {exp.project} &nbsp;|&nbsp; <strong>Reported Value:</strong> {exp.reportedValue}
                  </div>

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Qualifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-safety-400 print:text-black border-b border-blueprint-800 print:border-slate-300 pb-1 mb-3">
              Education &amp; Qualifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-3 rounded bg-blueprint-900/30 print:bg-slate-50 border border-blueprint-800 print:border-slate-200">
                  <strong className="text-xs font-bold text-white print:text-black block">
                    {edu.degree}
                  </strong>
                  <div className="text-[11px] font-mono text-safety-400 print:text-slate-700">
                    {edu.institution} ({edu.location}) &bull; {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-safety-400 print:text-black border-b border-blueprint-800 print:border-slate-300 pb-1 mb-2">
                Software Proficiency
              </h2>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {SOFTWARE_DATA.map((s, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-blueprint-900 print:bg-slate-200 text-slate-200 print:text-black">
                    {s.name} ({s.proficiency}%)
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-safety-400 print:text-black border-b border-blueprint-800 print:border-slate-300 pb-1 mb-2">
                Languages
              </h2>
              <div className="space-y-1 font-mono text-xs text-slate-300 print:text-slate-800">
                <div>&bull; English: Fluent (Professional Working Proficiency)</div>
                <div>&bull; Arabic: Intermediate (Working Professional Interaction)</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions (Hidden when printing) */}
        <div className="no-print p-4 bg-blueprint-950 border-t border-blueprint-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Official Curriculum Vitae &bull; Mohamed Issath
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg font-mono text-xs font-bold bg-blueprint-800 hover:bg-blueprint-700 text-white transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}

