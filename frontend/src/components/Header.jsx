import React, { useState, useEffect } from 'react';
import { personalInfo } from '../mock';

const Header = ({ activeSection, onNavigate, onOpenContact }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    tick();
    const interval = setInterval(tick, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#ECECEC]/95 backdrop-blur-md border-b border-[#D4D4D4] font-mono text-[11px] text-[#181818]">
      {/* Main Header Row */}
      <div className="px-4 sm:px-6 md:px-12 py-3 sm:py-5 flex items-center sm:items-start justify-between gap-4">
        {/* Col 1: Wordmark & Micro-data */}
        <div className="min-w-0">
          <button
            onClick={() => onNavigate('work')}
            className="font-bold tracking-tight uppercase hover:text-[#FF4949] transition-colors text-left cursor-pointer"
          >
            <span className="block font-sans font-bold text-sm tracking-tight text-[#181818] truncate">
              ABHISHEK MISHRA
            </span>
            <span className="text-[10px] text-[#8C8C8C] block mt-0.5 truncate">
              Cloud &amp; DevOps Engineer ©2026
            </span>
          </button>
        </div>

        {/* Col 2: Stacked Menu Links (sm+) */}
        <div className="hidden sm:block space-y-1">
          <span className="text-[#8C8C8C] uppercase block text-[10px]">Menu</span>
          <div className="flex flex-col space-y-1 uppercase font-semibold">
            <button
              onClick={() => onNavigate('work')}
              className={`text-left transition-colors cursor-pointer ${activeSection === 'work' ? 'text-[#FF4949]' : 'text-[#181818] hover:text-[#FF4949]'}`}
            >
              {activeSection === 'work' ? '→ ' : ''}WORK &amp; REPOS
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`text-left transition-colors cursor-pointer ${activeSection === 'about' ? 'text-[#FF4949]' : 'text-[#181818] hover:text-[#FF4949]'}`}
            >
              {activeSection === 'about' ? '→ ' : ''}ABOUT &amp; ARCHITECTURE
            </button>
            <button
              onClick={onOpenContact}
              className="text-left text-[#181818] hover:text-[#FF4949] transition-colors cursor-pointer"
            >
              CONTACT
            </button>
          </div>
        </div>

        {/* Col 3: Status (md+) */}
        <div className="hidden md:block space-y-1">
          <span className="text-[#8C8C8C] uppercase block text-[10px]">Status</span>
          <div className="flex items-center gap-1.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>Available — Roles &amp; Projects</span>
          </div>
        </div>

        {/* Col 4: Location & Time (lg+) */}
        <div className="hidden lg:block space-y-1">
          <span className="text-[#8C8C8C] uppercase block text-[10px]">Working Globally</span>
          <div className="font-semibold">
            <span>Kanpur, {time} IST</span>
          </div>
        </div>

        {/* Col 5: Inquiries & CTA (Desktop full email + CTA; Mobile clean CTA button) */}
        <div className="space-y-1 text-right shrink-0">
          <span className="hidden sm:block text-[#8C8C8C] uppercase text-[10px]">For inquiries</span>
          <div className="flex items-center justify-end gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hidden sm:inline-block underline underline-offset-2 hover:text-[#FF4949] transition-colors font-semibold"
            >
              {personalInfo.email}
            </a>
            <button
              onClick={onOpenContact}
              className="px-3 py-1.5 sm:py-1 bg-[#181818] text-[#ECECEC] hover:bg-[#FF4949] transition-colors font-sans uppercase font-bold text-[10px] tracking-wider cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Inline Navigation Bar (< sm) */}
      <div className="sm:hidden px-4 py-2 border-t border-[#DCDCDC] bg-[#E5E5E5]/70 flex items-center justify-between text-[10px] uppercase font-semibold tracking-wider">
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('work')}
            className={`cursor-pointer transition-colors ${activeSection === 'work' ? 'text-[#FF4949] font-bold' : 'text-[#181818]'}`}
          >
            {activeSection === 'work' ? '→ WORK' : 'WORK'}
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`cursor-pointer transition-colors ${activeSection === 'about' ? 'text-[#FF4949] font-bold' : 'text-[#181818]'}`}
          >
            {activeSection === 'about' ? '→ ABOUT' : 'ABOUT'}
          </button>
          <button
            onClick={onOpenContact}
            className="text-[#181818] cursor-pointer hover:text-[#FF4949] transition-colors"
          >
            CONTACT
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-[9px] text-[#4A4D57]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>Available</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
