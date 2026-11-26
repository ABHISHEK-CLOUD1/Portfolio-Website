import React, { useState } from 'react';
import { projects } from '../mock';
import { ArrowUpRight, Github, ExternalLink, ChevronRight, Layers, Terminal, Sparkles } from 'lucide-react';

const Hero = ({ onOpenContact }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const current = projects[selectedIndex];

  return (
    <section id="work" className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 flex flex-col justify-between bg-[#ECECEC] text-[#181818] overflow-hidden">
      {/* Background Monumental Counter (huyml.co signature white numbers) */}
      <div className="absolute top-24 left-8 pointer-events-none select-none z-0">
        <span className="font-mono text-[120px] sm:text-[180px] md:text-[220px] font-bold text-white leading-none tracking-tighter opacity-80 block">
          {current.id}
        </span>
      </div>

      {/* Main Grid: 3-column layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto grid lg:grid-cols-12 gap-10 items-center py-6">
        
        {/* ========================================= */}
        {/* LEFT COLUMN: ACTIVE PROJECT SWISS METADATA */}
        {/* ========================================= */}
        <div className="lg:col-span-3 space-y-6 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-[#8C8C8C] text-[10px] uppercase block tracking-wider">01 // Selected Work</span>
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

            {/* 3 Color Swatches (huyml.co signature detail) */}
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

        {/* ========================================= */}
        {/* CENTER STAGE: COOL BACKGROUND IMAGE CARD  */}
        {/* ========================================= */}
        <div className="lg:col-span-6">
          <div className="relative w-full rounded-none border border-[#181818] bg-[#181818] text-white overflow-hidden shadow-xl group transition-all duration-500">
            {/* Background Image Layer with subtle contrast blend */}
            <div className="relative h-72 sm:h-96 w-full overflow-hidden">
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
            <div className="p-6 sm:p-8 bg-[#181818] -mt-12 relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-sans font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white group-hover:text-[#FF4949] transition-colors">
                  {current.title}
                </h2>
                <span className="font-mono text-xs text-white/40">
                  {current.id}
                </span>
              </div>

              {/* Punchy 1-2 line summary conveying clear understanding */}
              <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                {current.summary}
              </p>

              {/* Technologies in minimalist micro-format */}
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

              {/* Card Action Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
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

                <span className="font-mono text-[10px] text-white/40">
                  {current.highlights}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* RIGHT COLUMN: PROJECT REEL LIST           */}
        {/* ========================================= */}
        <div className="lg:col-span-3">
          <div className="space-y-1">
            <span className="text-[#8C8C8C] text-[10px] font-mono uppercase tracking-wider block mb-2">
              All Projects &amp; Repositories
            </span>

            <div className="space-y-2 py-2 mask-fade-y">
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
                        : 'text-[#8C8C8C] hover:text-[#181818] hover:bg-white/40'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[10px] text-[#8C8C8C] group-hover:text-[#FF4949]">
                        {proj.id}
                      </span>
                      <span className="font-sans text-xs uppercase tracking-tight font-bold">
                        {proj.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
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
                      <span className={`font-mono text-xs transition-transform ${isActive ? 'text-[#FF4949] translate-x-0.5' : 'text-transparent group-hover:text-[#8C8C8C]'}`}>
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
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-[#D4D4D4] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] text-[#8C8C8C]">
        <div className="flex items-center gap-4">
          <span>Enterprise Systems • 400+ Servers Administered</span>
          <span>•</span>
          <span>99.9% Uptime SLA</span>
          <span>•</span>
          <span>BITS Pilani M.Tech (2027)</span>
        </div>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-[#181818] hover:text-[#FF4949] font-bold uppercase transition-colors cursor-pointer"
        >
          Explore Philosophy &amp; Architecture ↓
        </button>
      </div>
    </section>
  );
};

export default Hero;
