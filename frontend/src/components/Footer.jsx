import React from 'react';
import { personalInfo } from '../mock';
import { Linkedin, Instagram, Github, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const socials = [
    { href: personalInfo.github, icon: <Github size={15} />, label: 'GitHub' },
    { href: personalInfo.linkedin, icon: <Linkedin size={15} />, label: 'LinkedIn' },
    { href: personalInfo.instagram, icon: <Instagram size={15} />, label: 'Instagram' },
    { href: `mailto:${personalInfo.email}`, icon: <Mail size={15} />, label: 'Email' },
  ];

  return (
    <footer className="relative bg-[#02050e] border-t border-white/10 px-6 md:px-16 lg:px-24 py-12 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-display text-base text-white">
            AM
          </div>
          <div>
            <span className="font-display text-base tracking-wider text-white block">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-white/40 block">
              Cloud, DevOps &amp; Full-Stack Engineering
            </span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-mono text-xs tracking-wider text-white/40 hover:text-cyan-300 transition-colors uppercase cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-white/30 tracking-wider">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <p className="font-mono text-[11px] text-white/30 tracking-wider">
          Direct Inquiries: <a href={`mailto:${personalInfo.email}`} className="text-white/60 hover:text-cyan-400 transition-colors">{personalInfo.email}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
