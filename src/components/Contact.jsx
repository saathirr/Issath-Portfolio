import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Send, FileDown, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ onOpenCV }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
            10. Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Let's Discuss Your Next Construction Project
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            I am interested in professional opportunities in Quantity Surveying, Cost Estimation, Civil &amp; MEP Construction and Commercial Management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white pb-3 border-b border-slate-800">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-slate-400 block">Location</span>
                    <strong className="text-white font-medium">{PERSONAL_INFO.location}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-slate-400 block">Phone</span>
                    <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="text-white hover:text-amber-400 transition-colors font-medium">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-slate-400 block">Email</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-amber-400 transition-colors font-medium break-all">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Linkedin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
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

              {/* Call to Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenCV}
                  className="flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <FileDown className="w-4 h-4 text-amber-400" />
                  Download My CV
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Simple Message Form */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Thank You!</h4>
                <p className="text-sm text-slate-300">
                  Your message has been sent. You can also reach me directly at{' '}
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-amber-400 underline">
                    {PERSONAL_INFO.email}
                  </a>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg text-xs font-medium bg-slate-800 text-slate-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-4">Send a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Project Opportunity / Quantity Surveying"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-lg text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center gap-2 transition-colors font-medium"
                >
                  <Send className="w-4 h-4" />
                  <span>Get In Touch</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
