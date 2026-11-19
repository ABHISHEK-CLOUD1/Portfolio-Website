import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { personalInfo } from '../mock';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);

    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    tick();
    const timer = setInterval(tick, 30000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'DevOps Lab & Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E4E0D5] shadow-xs'
            : 'bg-transparent'
        }`}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-3 cursor-pointer text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-[#121316] text-white flex items-center justify-center font-display text-lg tracking-wider group-hover:bg-[#0052FF] transition-colors shadow-2xs">
            AM
          </div>
          <div>
            <span className="font-sans font-bold text-sm tracking-tight text-[#121316] block leading-none">
              ABHISHEK MISHRA
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#0052FF] font-semibold block mt-0.5 uppercase">
              Cloud &amp; DevOps Engineer
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-mono text-xs tracking-wider text-[#4A4D57] hover:text-[#0052FF] transition-colors uppercase font-medium cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right CTA & Clock */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#767A85] border-r border-[#E4E0D5] pr-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
            <span>{time} IST</span>
          </div>

          <a
            href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-1.5 font-mono text-xs text-[#4A4D57] hover:text-[#121316] transition-colors"
          >
            <Phone size={12} className="text-[#059669]" />
            <span>{personalInfo.phone}</span>
          </a>

          <button
            onClick={() => scrollTo('contact')}
            className="px-4 py-2 bg-[#121316] hover:bg-[#0052FF] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Let's Talk</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#121316]"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-[#121316] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-[#121316] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-[#121316] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FBF9F5]/98 backdrop-blur-xl flex flex-col justify-center px-8 md:hidden">
          <nav className="flex flex-col gap-6 items-start">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-2xl font-bold uppercase tracking-tight text-[#121316] hover:text-[#0052FF] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-6 border-t border-[#E4E0D5] w-full space-y-2 font-mono text-xs text-[#4A4D57]">
              <p>Email: {personalInfo.email}</p>
              <p>Phone: {personalInfo.phone}</p>
              <p>Location: {personalInfo.location}</p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
