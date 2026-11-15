import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-[#030712]/90 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
        }`}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-3 cursor-pointer text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center font-display text-lg tracking-wider text-white group-hover:border-cyan-400 group-hover:text-cyan-400 transition-all">
            AM
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-base tracking-wider text-white block leading-none">
              ABHISHEK MISHRA
            </span>
            <span className="font-mono text-[10px] tracking-wider text-white/40 block mt-0.5">
              CLOUD &amp; DEVOPS
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-mono text-xs tracking-wider text-white/60 hover:text-cyan-300 transition-colors uppercase cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right CTA & Clock */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2 font-mono text-[11px] text-white/40 border-r border-white/10 pr-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{time} IST</span>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="px-4 py-2 bg-white/[0.06] border border-white/15 hover:border-cyan-400/50 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Let's Talk</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#030712]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-display text-4xl tracking-widest text-white uppercase hover:text-cyan-300 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-6">
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3.5 bg-cyan-400 text-black font-mono text-xs uppercase tracking-wider font-semibold rounded-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
