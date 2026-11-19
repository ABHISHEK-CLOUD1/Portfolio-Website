import React, { useState } from 'react';
import { personalInfo } from '../mock';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2, Copy, Check, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [successNote, setSuccessNote] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    setSuccessNote('');

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
          _subject: `New Portfolio Message: ${formData.subject || 'Cloud & DevOps Role'} (from ${formData.name})`,
          subject: formData.subject,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success');
        setSuccessNote(`Message delivered! An instant notification has been dispatched to ${personalInfo.email}.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        setStatus('success');
        setSuccessNote(`Form Activation Notice: FormSubmit has sent a one-time activation confirmation email to ${personalInfo.email}. Once verified, all messages arrive immediately!`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Notification service responded with an error');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus('error');
      setErrorMessage(
        'Could not deliver automated notification. Please send directly via email client or phone.'
      );
    }
  };

  const inputClass = `
    w-full bg-[#FBF9F5] border border-[#E4E0D5] rounded-xl
    px-4 py-3.5 font-mono text-sm text-[#121316] placeholder-[#767A85]
    focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 transition-all
  `;

  const channels = [
    {
      icon: <Mail size={16} className="text-[#0052FF]" />,
      label: 'Direct Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}?subject=Cloud%20%26%20DevOps%20Opportunity`
    },
    {
      icon: <Phone size={16} className="text-[#059669]" />,
      label: 'Direct Phone / WhatsApp',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`,
      canCopy: true
    },
    {
      icon: <MapPin size={16} className="text-[#FF4D00]" />,
      label: 'Location',
      value: personalInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`
    },
    {
      icon: <Linkedin size={16} className="text-[#0052FF]" />,
      label: 'LinkedIn Profile',
      value: 'Connect with Abhishek Mishra',
      href: personalInfo.linkedin
    },
    {
      icon: <Github size={16} className="text-[#121316]" />,
      label: 'GitHub Profile',
      value: 'github.com/ABHISHEK-CLOUD1',
      href: personalInfo.github
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 bg-[#FBF9F5] border-b border-[#E4E0D5]">
      <div className="max-w-7xl mx-auto">

        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">04 // CONTACT</span>
          <div className="w-10 h-px bg-[#E4E0D5]" />
          <span className="font-mono text-xs tracking-wider text-[#767A85] uppercase">Start A Conversation</span>
        </div>

        {/* Headline */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121316]">
            Let's Build &amp; Scale <br />
            <span className="text-[#0052FF]">Together</span>
          </h2>
          <p className="text-sm md:text-base text-[#4A4D57] max-w-xl mt-3 leading-relaxed">
            Available for Cloud &amp; DevOps Engineering roles, hybrid cloud infrastructure design, Kubernetes deployments, and enterprise operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            {channels.map(({ icon, label, value, href, canCopy }) => (
              <div
                key={label}
                className="p-4 rounded-xl bg-white border border-[#E4E0D5] hover:border-[#121316] transition-all flex items-center justify-between group shadow-2xs"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 flex-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FBF9F5] border border-[#E4E0D5] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {icon}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-[#767A85] uppercase tracking-wider font-medium">{label}</p>
                    <p className="font-sans text-sm font-semibold text-[#121316] group-hover:text-[#0052FF] transition-colors">{value}</p>
                  </div>
                </a>

                {canCopy ? (
                  <button
                    onClick={handleCopyPhone}
                    title="Copy phone number"
                    className="p-2 text-[#767A85] hover:text-[#0052FF] transition-colors cursor-pointer"
                  >
                    {copiedPhone ? <Check size={16} className="text-[#059669]" /> : <Copy size={16} />}
                  </button>
                ) : (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight size={16} className="text-[#767A85] group-hover:text-[#0052FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                )}
              </div>
            ))}

            <div className="p-4 rounded-xl bg-white border border-[#E4E0D5] flex items-start gap-3 mt-6">
              <span className="relative flex h-2 w-2 mt-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]"></span>
              </span>
              <p className="font-mono text-xs text-[#4A4D57] leading-relaxed">
                Direct Notification Engine: Messages submitted through the form trigger an automated instant alert to <span className="font-semibold text-[#121316]">{personalInfo.email}</span>.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-[#121316] rounded-2xl p-8 md:p-10 shadow-[6px_6px_0px_0px_#121316]">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#059669]/10 text-[#059669] border border-[#059669]/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-[#121316]">
                    Message Dispatched!
                  </h3>
                  <p className="font-mono text-xs text-[#4A4D57] max-w-md mx-auto leading-relaxed">
                    {successNote || `Notification delivered directly to ${personalInfo.email}.`}
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider bg-[#121316] text-white hover:bg-[#0052FF] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-center gap-2">
                      <AlertCircle size={15} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-mono text-xs uppercase text-[#121316] font-bold block mb-1.5">
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
                      <label className="font-mono text-xs uppercase text-[#121316] font-bold block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="alex@enterprise.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs uppercase text-[#121316] font-bold block mb-1.5">
                      Subject *
                    </label>
                    <input
                      name="subject"
                      type="text"
                      placeholder="Cloud & DevOps Engineering Opportunity"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs uppercase text-[#121316] font-bold block mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Share details regarding your team, infrastructure requirements, or scheduled interviews..."
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
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#0052FF] hover:bg-[#0043D6] text-white font-mono text-xs tracking-wider uppercase font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={15} className="animate-spin" />
                          <span>Dispatching Notification...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={13} />
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${personalInfo.email}?subject=Direct%20Inquiry%20via%20Portfolio`}
                      className="font-mono text-xs text-[#767A85] hover:text-[#121316] uppercase tracking-wider transition-colors"
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
