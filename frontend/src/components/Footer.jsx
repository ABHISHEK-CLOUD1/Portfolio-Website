import React from 'react';
import { personalInfo } from '../mock';
import { Linkedin, Github, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'DevOps Lab', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  const socials = [
    { href: personalInfo.github, icon: <Github size={15} />, label: 'GitHub' },
    { href: personalInfo.linkedin, icon: <Linkedin size={15} />, label: 'LinkedIn' },
    { href: `mailto:${personalInfo.email}`, icon: <Mail size={15} />, label: 'Email' },
    { href: `tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`, icon: <Phone size={15} />, label: 'Phone' },
  ];

  return (
    <footer className="bg-white border-t border-[#E4E0D5] px-6 md:px-16 lg:px-24 py-12 text-[#121316]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#121316] text-white flex items-center justify-center font-display text-base">
            AM
          </div>
          <div>
            <span className="font-sans font-bold text-sm tracking-tight text-[#121316] block">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#0052FF] font-semibold block uppercase">
              {personalInfo.title}
            </span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-mono text-xs tracking-wider text-[#767A85] hover:text-[#0052FF] transition-colors uppercase font-medium cursor-pointer"
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
                className="w-8 h-8 rounded-lg bg-[#FBF9F5] border border-[#E4E0D5] flex items-center justify-center text-[#4A4D57] hover:text-[#121316] hover:border-[#121316] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 rounded-lg bg-[#FBF9F5] border border-[#E4E0D5] flex items-center justify-center text-[#767A85] hover:text-[#0052FF] hover:border-[#0052FF] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* Bottom Copyright & Contacts */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#E4E0D5] flex flex-col sm:flex-row items-center justify-between gap-3 text-[#767A85] font-mono text-xs">
        <p>
          &copy; {currentYear} {personalInfo.name} • {personalInfo.location}
        </p>
        <p>
          Direct: <a href={`mailto:${personalInfo.email}`} className="text-[#121316] hover:text-[#0052FF] transition-colors font-medium">{personalInfo.email}</a> • <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-[#121316] hover:text-[#0052FF] transition-colors font-medium">{personalInfo.phone}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
