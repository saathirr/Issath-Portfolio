import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Send, FileDown, CheckCircle2, HardHat, Building2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact({ onOpenCV }) {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 bg-slate-950 relative overflow-hidden">

      {/* Background: construction glow + pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        {/* Hard hat silhouette top-left */}
        <div className="absolute top-8 left-8 opacity-6 hidden xl:block animate-float-slow">
          <svg width="70" height="55" viewBox="0 0 70 55" fill="none">
            <path d="M8 38 Q8 16 35 10 Q62 16 62 38 Z" fill="#F59E0B" />
            <rect x="2" y="36" width="66" height="8" rx="4" fill="#F59E0B" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16 reveal">
          <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
            10. Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Let's Discuss Your Next Construction Project
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            I am interested in professional opportunities in Quantity Surveying, Cost Estimation, Civil &amp; MEP Construction and Commercial Management.
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-5 reveal-left">

            {/* Contact card */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-400" />
                Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                {[
                  { Icon: MapPin, label: 'Location', value: PERSONAL_INFO.location, href: null },
                  { Icon: Phone, label: 'Phone', value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}` },
                  { Icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                ].map(({ Icon, label, value, href }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">{label}</span>
                      {href ? (
                        <a href={href} className="text-white hover:text-amber-400 transition-colors font-medium break-all">
                          {value}
                        </a>
                      ) : (
                        <strong className="text-white font-medium">{value}</strong>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">LinkedIn</span>
                    <a
                      href={PERSONAL_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-amber-400 transition-colors font-medium"
                    >
                      {PERSONAL_INFO.linkedin}
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenCV}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <FileDown className="w-4 h-4 text-amber-400" />
                  Download My CV
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </div>
            </div>

            {/* Availability badge */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-slate-900 border border-emerald-500/25 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div>
                <span className="text-xs font-bold text-emerald-400 block">Open to Opportunities</span>
                <span className="text-xs text-slate-400">Civil & MEP QS roles — Saudi Arabia / GCC</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 reveal-right">
            {submitted ? (
              <div className="py-14 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-scale-in" />
                <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. You can also contact me directly at{' '}
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-amber-400 underline">
                    {PERSONAL_INFO.email}
                  </a>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <HardHat className="w-5 h-5 text-amber-400" />
                  Send a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Project Opportunity / QS Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg shadow-amber-500/20"
                >
                  <Send className="w-4 h-4" />
                  Get In Touch
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
