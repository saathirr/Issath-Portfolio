import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Linkedin, 
  Send, 
  FileDown, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  Building2,
  Clock,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ onOpenCV }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full-Time / Contract Role (KSA)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate inquiry submission
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/966568159465?text=${encodeURIComponent(
    "Hello Mohammed Issath, I came across your Quantity Surveying portfolio and would like to discuss a project / professional opportunity."
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 blueprint-bg relative border-b border-blueprint-800">
      <div className="absolute inset-0 blueprint-grid-subtle opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-safety-400 uppercase tracking-widest bg-blueprint-900/90 px-3 py-1 rounded border border-blueprint-800 mb-3">
            <PhoneCall className="w-3.5 h-3.5 text-safety-400" />
            <span>10. INITIATE ENGAGEMENT // JEDDAH &amp; GCC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Let's Discuss Your Next Construction Project
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            I am interested in professional opportunities in <strong>Quantity Surveying, Cost Estimation, Civil &amp; MEP Construction and Commercial Management</strong> across Saudi Arabia and the GCC region.
          </p>
        </div>

        {/* Main Grid: Contact Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Profile Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-safety-500/30 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-blueprint-800">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-safety-500 to-amber-600 flex items-center justify-center font-black text-blueprint-950 font-heading text-xl shadow-lg">
                  MI
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                  <div className="text-xs font-mono text-safety-400">
                    {PERSONAL_INFO.title}
                  </div>
                </div>
              </div>

              {/* Direct Details List */}
              <div className="space-y-4 font-mono text-xs">
                
                {/* Location */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-blueprint-950/70 border border-blueprint-800">
                  <MapPin className="w-4 h-4 text-safety-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase block">Location</span>
                    <span className="text-slate-200 font-bold">{PERSONAL_INFO.location}</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">Available for transfer / immediate start in KSA</span>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-blueprint-950/70 border border-blueprint-800">
                  <PhoneCall className="w-4 h-4 text-safety-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-slate-400 text-[10px] uppercase block">Phone / Mobile</span>
                    <a 
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
                      className="text-slate-200 hover:text-safety-400 font-bold block"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[11px] text-emerald-400 hover:underline inline-flex items-center gap-1 mt-1 font-bold"
                    >
                      <MessageSquare className="w-3 h-3" />
                      Chat directly on WhatsApp &rarr;
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-blueprint-950/70 border border-blueprint-800">
                  <Mail className="w-4 h-4 text-safety-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-slate-400 text-[10px] uppercase block">Email Address</span>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      className="text-slate-200 hover:text-safety-400 font-bold break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-blueprint-950/70 border border-blueprint-800">
                  <Linkedin className="w-4 h-4 text-safety-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-slate-400 text-[10px] uppercase block">Professional Network</span>
                    <a 
                      href={PERSONAL_INFO.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-200 hover:text-safety-400 font-bold flex items-center gap-1"
                    >
                      <span>{PERSONAL_INFO.linkedin}</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Action Buttons: Download CV & Send Email */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenCV}
                  className="flex-1 py-3 px-4 rounded-xl font-mono text-xs font-bold bg-blueprint-900 hover:bg-blueprint-850 text-white border border-safety-500/40 hover:border-safety-500 transition-all flex items-center justify-center gap-2 group shadow-sm"
                >
                  <FileDown className="w-4 h-4 text-safety-400 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download My CV</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 py-3 px-4 rounded-xl font-mono text-xs font-bold bg-safety-500 hover:bg-safety-400 text-blueprint-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-safety-500/20"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Strategic Location Banner */}
            <div className="p-4 rounded-xl bg-blueprint-950/60 border border-blueprint-800 text-xs font-mono text-slate-400 flex items-center gap-3">
              <Clock className="w-5 h-5 text-safety-400 shrink-0" />
              <div>
                <span className="text-white font-bold block">Current Location: Jeddah, Saudi Arabia 🇸🇦</span>
                <span className="text-[11px] text-slate-400">Readily available for interviews, site audits, and full-time mobilization.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Engagement Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-blueprint-800 relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-blueprint-800 mb-6">
              <div>
                <h3 className="text-xl font-heading font-black text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Inquire about full-time placement, freelance estimating, or BOQ preparation.
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                ACTIVE INBOX
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-heading font-bold text-white">
                  Message Prepared Successfully!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. You can also send this inquiry directly to{' '}
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-safety-400 underline font-mono">
                    {PERSONAL_INFO.email}
                  </a>{' '}
                  or ping Mohammed on WhatsApp.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg font-mono text-xs font-bold bg-emerald-500 text-blueprint-950 flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Open WhatsApp Chat
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-lg font-mono text-xs bg-blueprint-900 text-slate-300 border border-blueprint-700"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Red Sea Global / Contractor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-blueprint-950/80 border border-blueprint-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-safety-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-blueprint-950/80 border border-blueprint-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-safety-500 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="+966 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-blueprint-950/80 border border-blueprint-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-safety-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Subject / Service Area *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-blueprint-950/80 border border-blueprint-700 text-white text-sm focus:outline-none focus:border-safety-500 font-sans"
                    >
                      <option value="Full-Time / Contract Role (KSA)">Full-Time / Contract Role (Saudi Arabia)</option>
                      <option value="BOQ Preparation & Quantity Take-Off">BOQ Preparation &amp; Quantity Take-Off</option>
                      <option value="Tender Cost Estimation & Analysis">Tender Cost Estimation &amp; Analysis</option>
                      <option value="Interim Payment Applications (IPA)">Interim Payment Applications (IPA)</option>
                      <option value="Subcontractor Claims & Variations">Subcontractor Claims &amp; Variations</option>
                      <option value="Drawing Audit (IFT / IFC / Shop)">Drawing Audit (IFT / IFC / Shop)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Project Details / Inquiry *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your project location, scope, building trades (Civil/MEP), or position opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-blueprint-950/80 border border-blueprint-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-safety-500 font-sans"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-mono text-sm font-bold bg-safety-500 hover:bg-safety-400 text-blueprint-950 transition-all flex items-center justify-center gap-2 shadow-xl shadow-safety-500/25 hover:shadow-safety-500/40"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get In Touch</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

