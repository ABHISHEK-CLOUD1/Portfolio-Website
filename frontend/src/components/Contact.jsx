import React, { useState, useEffect } from 'react';
import { personalInfo } from '../mock';
import { Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2, Copy, Check, X, Mail } from 'lucide-react';

const Contact = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'activation' | 'error'
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusNote, setStatusNote] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const buildMailtoHref = () => {
    const subj = encodeURIComponent(
      formData.subject
        ? `${formData.subject} — via Portfolio`
        : `Portfolio Inquiry from ${formData.name || 'Visitor'}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name || 'N/A'}\nReply Email: ${formData.email || 'N/A'}\n\n${formData.message || ''}`
    );
    return `mailto:${personalInfo.email}?subject=${subj}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setStatusNote('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Portfolio Inquiry: ${formData.subject || 'Direct Message'} (from ${formData.name})`,
          subject: formData.subject || 'Direct Message',
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();
      const isSuccess = data.success === 'true' || data.success === true;
      const needsActivation =
        typeof data.message === 'string' && data.message.toLowerCase().includes('activation');

      if (response.ok && isSuccess) {
        setStatus('success');
        setStatusNote(`Message dispatched directly to ${personalInfo.email}.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (needsActivation) {
        setStatus('activation');
        setStatusNote(
          `One-time verification needed: FormSubmit sent an "Activate Form" link to ${personalInfo.email}. Meanwhile, tap below to send directly via your Email app.`
        );
      } else {
        throw new Error(data.message || 'Service response error');
      }
    } catch (err) {
      console.error('Contact form submit error:', err);
      setStatus('error');
      setStatusNote('Automatic web dispatch failed or was blocked. Tap below to send directly via Email app.');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Direct Dispatch Contact Form"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-50 bg-[#181818]/70 backdrop-blur-md flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Container holding overlapping physical postcard style (huyml.co signature) */}
      <div className="relative max-w-4xl w-full my-2 sm:my-auto">
        
        {/* Background Decorative Paper Card (Tilted Behind on sm+) */}
        <div className="hidden sm:block absolute -top-4 -right-4 w-full h-full bg-[#ECECEC] border border-[#D4D4D4] transform rotate-1 rounded-none pointer-events-none shadow-lg opacity-90 p-8">
          <div className="flex justify-between items-start font-mono text-[10px] text-[#8C8C8C]">
            <span>CREDITS &amp; STUDIO</span>
            <span>ABHISHEK MISHRA ©2026</span>
          </div>
        </div>

        {/* Foreground Matte Ink Card (Single clean outer scroll container avoids iOS scroll traps) */}
        <div className="relative z-10 bg-[#181818] text-[#ECECEC] border border-black p-5 sm:p-10 shadow-2xl rounded-none space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="flex items-start justify-between pb-4 sm:pb-6 border-b border-white/10 font-mono text-xs">
            <div>
              <span className="text-[#8C8C8C] uppercase text-[10px] tracking-wider block">03 // DIRECT DISPATCH</span>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mt-0.5 sm:mt-1">
                COME SAY HI
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-white/75 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1.5 font-mono text-xs shrink-0"
            >
              <span>Close</span>
              <X size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left Rail: Direct Info */}
            <div className="md:col-span-5 space-y-5 font-mono text-xs text-white/80">
              <p className="font-sans text-sm text-white/70 leading-relaxed font-normal">
                Available for Cloud &amp; DevOps Engineering roles, high-scale virtualization architecture, and ambitious technical projects.
              </p>

              <div className="space-y-3 pt-1">
                <div>
                  <span className="text-[#8C8C8C] text-[10px] uppercase block tracking-wider">Email</span>
                  <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-[#FF4949] underline underline-offset-2 font-semibold transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email"
                      className="text-[#8C8C8C] hover:text-white transition-colors cursor-pointer shrink-0"
                    >
                      {copiedEmail ? <Check size={13} className="text-[#10B981]" /> : <Copy size={13} />}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-[#8C8C8C] text-[10px] uppercase block tracking-wider">Direct Phone / WhatsApp</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-white hover:text-[#FF4949] font-semibold"
                    >
                      {personalInfo.phone}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      title="Copy phone"
                      className="text-[#8C8C8C] hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedPhone ? <Check size={13} className="text-[#10B981]" /> : <Copy size={13} />}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-[#8C8C8C] text-[10px] uppercase block tracking-wider">Location</span>
                  <span className="text-white">{personalInfo.location}</span>
                </div>

                <div>
                  <span className="text-[#8C8C8C] text-[10px] uppercase block tracking-wider">Network</span>
                  <div className="flex items-center gap-4 pt-1">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-white hover:text-[#FF4949] transition-colors"
                    >
                      <Github size={13} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-white hover:text-[#FF4949] transition-colors"
                    >
                      <Linkedin size={13} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Rail: Minimal Contact Form */}
            <div className="md:col-span-7 bg-[#202020] p-4 sm:p-6 border border-white/10 font-mono text-xs">
              {status === 'success' ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-sans font-bold text-lg text-white">Dispatched!</h4>
                  <p className="text-[#8C8C8C] text-[11px] max-w-xs mx-auto leading-relaxed">
                    {statusNote}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-4 py-1.5 bg-white text-black hover:bg-[#FF4949] hover:text-white transition-colors cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              ) : status === 'activation' ? (
                <div className="py-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                    <AlertCircle size={24} />
                  </div>
                  <h4 className="font-sans font-bold text-lg text-white">Activation Required</h4>
                  <p className="text-white/75 text-xs max-w-sm mx-auto leading-relaxed font-sans">
                    {statusNote}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={buildMailtoHref()}
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#FF4949] hover:bg-[#e03838] text-white font-mono text-xs uppercase font-bold inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      <Mail size={14} />
                      <span>Send via Email App</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="w-full sm:w-auto px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase cursor-pointer transition-colors"
                    >
                      Back to Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3 bg-red-950/60 border border-red-500/50 text-red-200 text-[11px] space-y-2">
                      <div className="flex items-start gap-2">
                        <AlertCircle size={14} className="shrink-0 mt-0.5 text-red-400" />
                        <span>{statusNote}</span>
                      </div>
                      <a
                        href={buildMailtoHref()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FF4949] text-white font-bold uppercase text-[10px]"
                      >
                        <Mail size={12} />
                        <span>Open Email App with Message</span>
                      </a>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="contact-name" className="text-[10px] text-[#8C8C8C] uppercase block mb-1">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#181818] border border-white/20 p-2.5 text-base sm:text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF4949] rounded-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="text-[10px] text-[#8C8C8C] uppercase block mb-1">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="alex@enterprise.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#181818] border border-white/20 p-2.5 text-base sm:text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF4949] rounded-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="text-[10px] text-[#8C8C8C] uppercase block mb-1">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="Role / Infrastructure Scope / Collaboration"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#181818] border border-white/20 p-2.5 text-base sm:text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF4949] rounded-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-[10px] text-[#8C8C8C] uppercase block mb-1">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      placeholder="Share details regarding your team, infrastructure scope, or ideas..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#181818] border border-white/20 p-2.5 text-base sm:text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF4949] resize-none rounded-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3 bg-[#FF4949] hover:bg-[#e03838] text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={13} className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Dispatch Message</span>
                          <Send size={12} />
                        </>
                      )}
                    </button>

                    <div className="text-center pt-1">
                      <a
                        href={buildMailtoHref()}
                        className="font-mono text-[10px] text-[#8C8C8C] hover:text-white underline underline-offset-2 transition-colors"
                      >
                        Or open directly in your email client →
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-[#8C8C8C]">
            <span>Kanpur, India • BITS Pilani M.Tech (2027)</span>
            <span className="text-white/40">Press ESC or click Close</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
