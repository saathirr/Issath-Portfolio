import React from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin,
  FileText
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-white font-semibold">
            <FileText className="w-4 h-4 text-amber-400" />
            <span>MOHAMED ISSATH &bull; CURRICULUM VITAE</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-100 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b-2 border-amber-500 pb-6 print:border-black">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
              MOHAMED ISSATH
            </h1>
            <p className="text-base sm:text-lg text-amber-400 print:text-slate-800 font-semibold mt-1">
              Quantity Surveyor (Civil &amp; MEP) | Estimation Engineer
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-400 print:text-slate-700 mt-4">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 print:text-black" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400 print:text-black" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400 print:text-black" />
                <span className="break-all">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-amber-400 print:text-black" />
                <span>{PERSONAL_INFO.linkedin}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-slate-300 pb-1 mb-3">
              Professional Summary
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-slate-300 pb-1 mb-4">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <strong className="text-sm font-bold text-white print:text-black block">
                        {exp.company} &bull; {exp.location}
                      </strong>
                      <span className="text-amber-400 print:text-slate-700 font-semibold">
                        {exp.role}
                      </span>
                    </div>
                    <span className="text-slate-400 print:text-slate-600 mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 print:text-slate-700 bg-slate-900 print:bg-slate-100 p-2 rounded">
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
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-slate-300 pb-1 mb-3">
              Education &amp; Qualifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-3 rounded bg-slate-900 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                  <strong className="text-xs font-bold text-white print:text-black block">
                    {edu.degree}
                  </strong>
                  <div className="text-[11px] text-amber-400 print:text-slate-700">
                    {edu.institution} ({edu.location}) &bull; {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
                Software Proficiency
              </h2>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {SOFTWARE_DATA.map((s, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 print:bg-slate-200 text-slate-300 print:text-black border border-slate-800">
                    {s.name} ({s.proficiency}%)
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
                Languages
              </h2>
              <div className="space-y-1 text-xs text-slate-300 print:text-slate-800">
                <div>&bull; English: Fluent</div>
                <div>&bull; Arabic: Intermediate</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions (Hidden when printing) */}
        <div className="no-print p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Official Curriculum Vitae &bull; Mohamed Issath
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
