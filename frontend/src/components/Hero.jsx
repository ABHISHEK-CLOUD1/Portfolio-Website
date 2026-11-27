import React, { useState, useRef, useEffect } from 'react';
import { projects } from '../mock';
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = ({ onOpenContact }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sliderRef = useRef(null);
  const pillsRef = useRef(null);
  const isProgrammaticScroll = useRef(false);

  const current = projects[selectedIndex];

  // Programmatically slide mobile panel when pill, arrow, or dot is tapped
  const goToSlide = (idx) => {
    const clamped = Math.max(0, Math.min(projects.length - 1, idx));
    setSelectedIndex(clamped);

    if (sliderRef.current) {
      isProgrammaticScroll.current = true;
      const container = sliderRef.current;
      const targetChild = container.children[clamped];
      if (targetChild) {
        container.scrollTo({
          left: targetChild.offsetLeft - container.offsetLeft,
          behavior: 'smooth',
        });
      }
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 450);
    }
  };

  // Keep active pill centered/visible in horizontal top strip on mobile
  useEffect(() => {
    if (pillsRef.current) {
      const activePill = pillsRef.current.children[selectedIndex];
      if (activePill) {
        activePill.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [selectedIndex]);

  // Sync selectedIndex when user swipes horizontally on mobile
  const handleSliderScroll = () => {
    if (isProgrammaticScroll.current || !sliderRef.current) return;
    const container = sliderRef.current;
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIdx = 0;
    let closestDist = Infinity;
    Array.from(container.children).forEach((child, idx) => {
      const childCenter = child.offsetLeft - container.offsetLeft + child.clientWidth / 2;
      const dist = Math.abs(scrollCenter - childCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = idx;
      }
    });

    if (closestIdx !== selectedIndex) {
      setSelectedIndex(closestIdx);
    }
  };

  return (
    <section
      id="work"
      className="relative scroll-mt-24 sm:scroll-mt-20 min-h-screen pt-28 sm:pt-28 pb-10 sm:pb-16 px-4 sm:px-6 md:px-12 flex flex-col justify-between bg-[#ECECEC] text-[#181818] overflow-hidden"
    >
      {/* Background Monumental Counter (huyml.co signature white numbers) */}
      <div className="absolute top-24 right-4 lg:right-auto lg:left-8 pointer-events-none select-none z-0">
        <span className="font-mono text-[88px] sm:text-[150px] md:text-[220px] font-bold text-white leading-none tracking-tighter opacity-70 lg:opacity-80 block">
          {current.id}
        </span>
      </div>

      {/* ======================================================= */}
      {/* MOBILE & TABLET (< lg): TRUE TOUCH SLIDING PANELS       */}
      {/* ======================================================= */}
      <div className="lg:hidden relative z-10 w-full max-w-2xl mx-auto pt-4 space-y-4">
        {/* Top Control Row: Marker + Counter + Prev/Next Buttons */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="font-mono text-[10px] text-[#FF4949] font-bold uppercase tracking-widest block">
              01 // Selected Work
            </span>
            <span className="font-mono text-xs font-bold text-[#181818]">
              {current.index}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => goToSlide(selectedIndex - 1)}
              disabled={selectedIndex === 0}
              aria-label="Previous project"
              className="w-8 h-8 flex items-center justify-center border border-[#D4D4D4] bg-white text-[#181818] disabled:opacity-35 hover:border-[#181818] active:bg-[#181818] active:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={() => goToSlide(selectedIndex + 1)}
              disabled={selectedIndex === projects.length - 1}
              aria-label="Next project"
              className="w-8 h-8 flex items-center justify-center border border-[#D4D4D4] bg-white text-[#181818] disabled:opacity-35 hover:border-[#181818] active:bg-[#181818] active:text-white transition-colors cursor-pointer"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Quick Horizontal Index Pill Strip (synced with slider) */}
        <div
          ref={pillsRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1"
        >
          {projects.map((proj, idx) => {
            const isActive = selectedIndex === idx;
            return (
              <button
                key={proj.id}
                onClick={() => goToSlide(idx)}
                className={`shrink-0 px-3 py-1.5 border font-mono text-[10px] uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#181818] text-white border-[#181818] font-bold'
                    : 'bg-white/80 text-[#4A4D57] border-[#D4D4D4] hover:border-[#181818]'
                }`}
              >
                <span className={isActive ? 'text-[#FF4949]' : 'text-[#8C8C8C]'}>
                  {proj.id}
                </span>
                <span>{proj.repoName === 'enterprise-infrastructure' ? '400+ Servers' : proj.repoName}</span>
              </button>
            );
          })}
        </div>

        {/* Horizontal Swipeable Scroll-Snap Track */}
        <div
          ref={sliderRef}
          onScroll={handleSliderScroll}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-2 -mx-4 px-4"
        >
          {projects.map((proj) => (
            <article
              key={proj.id}
              className="w-[calc(100vw-32px)] max-w-[540px] shrink-0 snap-center border border-[#181818] bg-[#181818] text-white overflow-hidden shadow-lg flex flex-col justify-between"
            >
              {/* Slide Image Header */}
              <div className="relative h-48 sm:h-60 w-full overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center opacity-70 filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/50 to-transparent" />

                {/* Category + Swatches Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 font-mono text-[10px] uppercase text-white/90">
                  <span className="px-2 py-0.5 bg-black/70 backdrop-blur-sm border border-white/20 truncate">
                    {proj.category}
                  </span>
                  <div className="flex items-center gap-1 bg-black/60 px-2 py-1 border border-white/15 shrink-0">
                    {proj.swatches.map((color, cIdx) => (
                      <span
                        key={cIdx}
                        className="w-2.5 h-2.5 inline-block border border-white/30"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Index + Status Tag at bottom of image */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-[#10B981] font-semibold flex items-center gap-1.5 bg-black/70 px-2 py-0.5 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    {proj.status}
                  </span>
                  <span className="text-white/70 bg-black/70 px-2 py-0.5">
                    {proj.launch}
                  </span>
                </div>
              </div>

              {/* Slide Content Body */}
              <div className="p-4 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-sans font-bold text-xl uppercase tracking-tight text-white leading-tight">
                      {proj.title}
                    </h2>
                    <span className="font-mono text-xs text-[#FF4949] font-bold shrink-0">
                      {proj.id}
                    </span>
                  </div>

                  <p className="font-mono text-[10px] text-white/55 uppercase tracking-wider">
                    Role: <span className="text-white/85">{proj.role}</span>
                  </p>

                  <p className="font-sans text-xs text-white/75 leading-relaxed">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] px-1.5 py-0.5 bg-white/10 text-white/90 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Slide Footer (Zero collision: cleanly stacked) */}
                <div className="pt-3 mt-2 border-t border-white/10 space-y-2.5">
                  <p className="font-mono text-[10px] text-white/50 leading-snug">
                    {proj.highlights}
                  </p>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 bg-white/10 hover:bg-[#FF4949] text-white font-mono text-[11px] uppercase tracking-wider font-semibold transition-colors flex items-center justify-between"
                  >
                    <span className="inline-flex items-center gap-2 truncate">
                      <Github size={13} className="shrink-0" />
                      <span className="truncate">github/{proj.repoName}</span>
                    </span>
                    <ArrowUpRight size={13} className="shrink-0" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Dots + Swipe Hint */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Slide to ${proj.title}`}
                className={`h-1.5 transition-all cursor-pointer ${
                  selectedIndex === idx
                    ? 'w-6 bg-[#FF4949]'
                    : 'w-2 bg-[#C4C4C4] hover:bg-[#8C8C8C]'
                }`}
              />
            ))}
          </div>
          <span className="font-mono text-[10px] text-[#8C8C8C] uppercase tracking-wider">
            Swipe or tap index →
          </span>
        </div>
      </div>

      {/* ======================================================= */}
      {/* DESKTOP (lg+): HUYML.CO 3-COLUMN SPATIAL WORK REEL      */}
      {/* ======================================================= */}
      <div className="hidden lg:grid relative z-10 max-w-7xl mx-auto w-full my-auto lg:grid-cols-12 gap-10 items-center py-6">
        {/* LEFT COLUMN: ACTIVE PROJECT SWISS METADATA */}
        <div className="lg:col-span-3 space-y-6 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-[#8C8C8C] text-[10px] uppercase block tracking-wider">
              01 // Selected Work
            </span>
            <span className="font-sans font-bold text-lg text-[#181818] uppercase tracking-tight block">
              {current.title}
            </span>
            <span className="text-[11px] text-[#FF4949] font-medium block">
              {current.category}
            </span>
          </div>

          <div className="pt-3 border-t border-[#D4D4D4] space-y-3">
            <div>
              <span className="text-[#8C8C8C] text-[10px] uppercase block tracking-wider">Role</span>
              <span className="text-[#181818] font-semibold">{current.role}</span>
            </div>
            <div>
              <span className="text-[#8C8C8C] text-[10px] uppercase block tracking-wider">Timeline</span>
              <span className="text-[#181818] font-semibold">{current.launch}</span>
            </div>
            <div>
              <span className="text-[#8C8C8C] text-[10px] uppercase block tracking-wider">Repository</span>
              <a
                href={current.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#181818] hover:text-[#FF4949] underline underline-offset-2 font-semibold transition-colors"
              >
                <span>github/{current.repoName}</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
            <div>
              <span className="text-[#8C8C8C] text-[10px] uppercase block tracking-wider">System State</span>
              <span className="text-[#10B981] font-semibold flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                {current.status}
              </span>
            </div>

            {/* 3 Color Swatches */}
            <div className="pt-2">
              <span className="text-[#8C8C8C] text-[10px] uppercase block tracking-wider mb-1.5">Palette</span>
              <div className="flex items-center gap-1.5">
                {current.swatches.map((color, i) => (
                  <span
                    key={i}
                    className="w-3.5 h-3.5 border border-black/10 inline-block shadow-2xs"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Counter Indicator */}
          <div className="pt-3 border-t border-[#D4D4D4]">
            <span className="font-mono text-sm font-bold text-[#181818]">
              {current.index}
            </span>
          </div>
        </div>

        {/* CENTER STAGE: COOL BACKGROUND IMAGE CARD */}
        <div className="lg:col-span-6">
          <div className="relative w-full rounded-none border border-[#181818] bg-[#181818] text-white overflow-hidden shadow-xl group transition-all duration-500">
            <div className="relative h-96 w-full overflow-hidden">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-center opacity-65 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/60 to-transparent" />

              {/* Top Card Eyebrow */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase text-white/80">
                <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md border border-white/20">
                  {current.category}
                </span>
                <span className="text-white/60">
                  {current.launch}
                </span>
              </div>
            </div>

            {/* Card Content Overlay */}
            <div className="p-8 bg-[#181818] -mt-12 relative z-10 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-sans font-bold text-3xl uppercase tracking-tight text-white group-hover:text-[#FF4949] transition-colors">
                  {current.title}
                </h2>
                <span className="font-mono text-xs text-white/40 shrink-0">
                  {current.id}
                </span>
              </div>

              <p className="font-sans text-sm text-white/70 leading-relaxed font-normal">
                {current.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {current.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] px-2 py-0.5 bg-white/10 text-white/90 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={current.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white hover:text-[#FF4949] font-semibold transition-colors"
                >
                  <Github size={14} />
                  <span>Inspect Codebase (github/{current.repoName})</span>
                  <ArrowUpRight size={13} />
                </a>

                <span className="font-mono text-[10px] text-white/45">
                  {current.highlights}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PROJECT REEL LIST (No fade clipping on short list) */}
        <div className="lg:col-span-3">
          <div className="space-y-1">
            <span className="text-[#8C8C8C] text-[10px] font-mono uppercase tracking-wider block mb-2">
              All Projects &amp; Repositories
            </span>

            <div className="space-y-2 py-2">
              {projects.map((proj, idx) => {
                const isActive = selectedIndex === idx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedIndex(idx)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left py-2.5 px-3 border-b border-[#D4D4D4] transition-all flex items-center justify-between cursor-pointer group ${
                      isActive
                        ? 'bg-white text-[#181818] font-bold border-[#181818] shadow-xs'
                        : 'text-[#6E6E6E] hover:text-[#181818] hover:bg-white/40'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="font-mono text-[10px] text-[#8C8C8C] group-hover:text-[#FF4949] shrink-0">
                        {proj.id}
                      </span>
                      <span className="font-sans text-xs uppercase tracking-tight font-bold truncate">
                        {proj.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      {isActive && (
                        <div className="flex items-center gap-1">
                          {proj.swatches.map((color, cIdx) => (
                            <span
                              key={cIdx}
                              className="w-2 h-2 inline-block border border-black/20"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      )}
                      <span
                        className={`font-mono text-xs transition-transform ${
                          isActive
                            ? 'text-[#FF4949] translate-x-0.5'
                            : 'text-transparent group-hover:text-[#8C8C8C]'
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="font-mono text-[10px] text-[#8C8C8C] pt-3">
              *Hover or click to switch active project preview.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 mt-6 lg:mt-0 border-t border-[#D4D4D4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] text-[#8C8C8C]">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>400+ Servers Administered</span>
          <span className="text-[#C4C4C4]">/</span>
          <span>99.9% Uptime SLA</span>
          <span className="text-[#C4C4C4]">/</span>
          <span>BITS Pilani M.Tech (2027)</span>
        </div>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-[#181818] hover:text-[#FF4949] font-bold uppercase transition-colors cursor-pointer shrink-0"
        >
          Explore Philosophy &amp; Architecture ↓
        </button>
      </div>
    </section>
  );
};

export default Hero;
