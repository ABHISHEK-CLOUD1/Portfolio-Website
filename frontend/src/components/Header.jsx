import React, { useState, useEffect } from 'react';
import { personalInfo } from '../mock';
import { ArrowUpRight } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-5 bg-[#ECECEC]/90 backdrop-blur-md border-b border-[#D4D4D4] flex items-start justify-between font-mono text-[11px] text-[#181818]">
      {/* Col 1: Wordmark & Micro-data */}
      <div className="flex items-start gap-4">
        <button
          onClick={() => onNavigate('work')}
          className="font-bold tracking-tight uppercase hover:text-[#FF4949] transition-colors text-left cursor-pointer"
        >
          <span className="block font-sans font-bold text-sm tracking-tight text-[#181818]">
            ABHISHEK MISHRA
          </span>
          <span className="text-[10px] text-[#8C8C8C] block mt-0.5">
            Cloud &amp; DevOps Engineer ©2026
          </span>
        </button>
      </div>

      {/* Col 2: Stacked Menu Links */}
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

      {/* Col 3: Status */}
      <div className="hidden md:block space-y-1">
        <span className="text-[#8C8C8C] uppercase block text-[10px]">Status</span>
        <div className="flex items-center gap-1.5 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>Available — Roles &amp; Projects</span>
        </div>
      </div>

      {/* Col 4: Location & Time */}
      <div className="hidden lg:block space-y-1">
        <span className="text-[#8C8C8C] uppercase block text-[10px]">Working Globally</span>
        <div className="font-semibold">
          <span>Kanpur, {time} IST</span>
        </div>
      </div>

      {/* Col 5: Inquiries & CTA */}
      <div className="space-y-1 text-right">
        <span className="text-[#8C8C8C] uppercase block text-[10px]">For inquiries</span>
        <div className="flex items-center justify-end gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="underline underline-offset-2 hover:text-[#FF4949] transition-colors font-semibold"
          >
            {personalInfo.email}
          </a>
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-block px-3 py-1 bg-[#181818] text-[#ECECEC] rounded hover:bg-[#FF4949] transition-colors font-sans uppercase font-bold text-[10px] cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
