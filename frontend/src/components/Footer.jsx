import React from 'react';
import { personalInfo } from '../mock';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ onNavigate, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#ECECEC] border-t border-[#D4D4D4] px-6 md:px-12 py-12 text-[#181818] font-mono text-[11px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Col 1: Wordmark & Statement */}
        <div className="md:col-span-4 space-y-2">
          <span className="font-sans font-bold text-sm uppercase tracking-tight text-[#181818] block">
            {personalInfo.name}
          </span>
          <p className="text-[#8C8C8C] text-xs font-sans leading-relaxed">
            Minimalist systems, cloud &amp; DevOps engineering, distributed micro-apps, and enterprise infrastructure reliability.
          </p>
          <span className="text-[10px] text-[#8C8C8C] block pt-2">
            © {new Date().getFullYear()} Abhishek Mishra. Engineered with precision.
          </span>
        </div>

        {/* Col 2: Navigation */}
        <div className="md:col-span-3 space-y-2">
          <span className="text-[#8C8C8C] uppercase text-[10px] block tracking-wider">Index</span>
          <div className="flex flex-col space-y-1.5 uppercase font-medium">
            <button
              onClick={() => onNavigate('work')}
              className="text-left text-[#181818] hover:text-[#FF4949] transition-colors cursor-pointer"
            >
              01 // Selected Work &amp; Repos
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-left text-[#181818] hover:text-[#FF4949] transition-colors cursor-pointer"
            >
              02 // About &amp; Architecture Ledger
            </button>
            <button
              onClick={onOpenContact}
              className="text-left text-[#181818] hover:text-[#FF4949] transition-colors cursor-pointer"
            >
              03 // Contact Postcard
            </button>
          </div>
        </div>

        {/* Col 3: Direct Connect */}
        <div className="md:col-span-3 space-y-2">
          <span className="text-[#8C8C8C] uppercase text-[10px] block tracking-wider">Direct Connect</span>
          <div className="flex flex-col space-y-1.5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#FF4949] transition-colors"
            >
              <Github size={12} />
              <span>GitHub / ABHISHEK-CLOUD1</span>
              <ArrowUpRight size={10} className="text-[#8C8C8C]" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#FF4949] transition-colors"
            >
              <Linkedin size={12} />
              <span>LinkedIn / Abhishek Mishra</span>
              <ArrowUpRight size={10} className="text-[#8C8C8C]" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-[#FF4949] transition-colors min-w-0"
            >
              <Mail size={12} className="shrink-0" />
              <span className="break-all">{personalInfo.email}</span>
              <ArrowUpRight size={10} className="text-[#8C8C8C] shrink-0" />
            </a>
          </div>
        </div>

        {/* Col 4: Back to Top */}
        <div className="md:col-span-2 flex md:justify-end items-start pt-2">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-[#D4D4D4] hover:border-[#181818] bg-white hover:text-[#FF4949] text-[#181818] transition-all cursor-pointer text-[10px] uppercase font-bold"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
