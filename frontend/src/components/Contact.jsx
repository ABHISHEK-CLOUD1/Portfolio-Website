import React, { useState } from 'react';
import { personalInfo } from '../mock';
import { Mail, Linkedin, Instagram, Github, ArrowUpRight, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [successNote, setSuccessNote] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    setSuccessNote('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/abhishek010601@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Portfolio Contact: ${formData.subject || 'Inquiry'} (from ${formData.name})`,
          subject: formData.subject,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();
      
      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success');
        setSuccessNote("Message delivered! An instant email notification has been dispatched to abhishek010601@gmail.com.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        setStatus('success');
        setSuccessNote("Form Activation Required: FormSubmit has sent a one-time 'Activate Form' confirmation email to abhishek010601@gmail.com. Click the link in your email once, and all messages will arrive directly in your inbox!");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Notification service responded with an error');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus('error');
      setErrorMessage(
        'Could not deliver automated notification. Please send directly via email client using the link below.'
      );
    }
  };

  const inputClass = `
    w-full bg-white/[0.03] border border-white/10 rounded-lg
    px-4 py-3.5 font-mono text-sm text-white placeholder-white/30
    focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/50 transition-all
    tracking-wide
  `;

  const channels = [
    { 
      icon: <Mail size={16} />, 
      label: 'Direct Email', 
      value: personalInfo.email, 
      href: `mailto:${personalInfo.email}?subject=Project%20Inquiry%20via%20Portfolio` 
    },
    { 
      icon: <Linkedin size={16} />, 
      label: 'LinkedIn', 
      value: 'Connect with Abhishek', 
      href: personalInfo.linkedin 
    },
    { 
      icon: <Github size={16} />, 
      label: 'GitHub', 
      value: 'Explore Repositories', 
      href: personalInfo.github 
    },
    { 
      icon: <Instagram size={16} />, 
      label: 'Instagram', 
      value: 'Follow Updates', 
      href: personalInfo.instagram 
    },
  ];

  return (
    <section id="contact" className="relative py-28 px-6 md:px-16 lg:px-24 bg-[#030712] border-t border-white/10 text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase font-semibold">04</span>
          <div className="w-12 h-px bg-white/20" />
          <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">Get In Touch</span>
        </div>

        {/* Headline */}
        <div className="mb-16">
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-tight uppercase text-white mb-2">
            Let's Start A
          </h2>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white/40">
            Conversation
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-white/60 leading-relaxed text-base">
              Whether you need to architect scalable cloud infrastructure, automate deployment pipelines, or build modern web platforms, I'd love to hear from you.
            </p>

            <div className="space-y-3">
              {channels.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                      {icon}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-white/35 tracking-wider uppercase">{label}</p>
                      <p className="font-sans text-sm text-white/80 group-hover:text-white font-medium transition-colors">{value}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-white/20 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>

            {/* Notification Guarantee Note */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
              <span className="relative flex h-2 w-2 mt-1.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="font-mono text-xs text-white/50 leading-relaxed">
                Direct Email Dispatch: Form submissions trigger an instant email alert to <span className="text-white/80 font-medium">{personalInfo.email}</span>.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0a0f1d]/70 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-xl shadow-xl">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-display text-3xl uppercase tracking-wider text-white">
                    Message Delivered!
                  </h3>
                  <p className="font-mono text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                    {successNote || `An email notification was dispatched directly to ${personalInfo.email}.`}
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-3 font-mono text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-300 text-xs font-mono">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-mono text-xs text-white/50 tracking-wider uppercase block mb-2">
                        Your Name *
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs text-white/50 tracking-wider uppercase block mb-2">
                        Your Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-white/50 tracking-wider uppercase block mb-2">
                      Subject *
                    </label>
                    <input
                      name="subject"
                      type="text"
                      placeholder="Cloud Architecture / Project Collaboration"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-white/50 tracking-wider uppercase block mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Share details about your requirements, project timeline, or goals..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto px-8 py-4 bg-white text-black font-mono text-xs tracking-wider uppercase font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-white/10 hover:shadow-cyan-400/25 disabled:opacity-50 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={15} className="animate-spin" />
                          <span>Delivering Notification...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={14} />
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${personalInfo.email}?subject=Direct%20Inquiry&body=Hi%20Abhishek,%0A%0A`}
                      className="w-full sm:w-auto px-6 py-4 font-mono text-xs tracking-wider uppercase text-white/40 hover:text-white text-center transition-colors"
                    >
                      Or open email client directly
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
