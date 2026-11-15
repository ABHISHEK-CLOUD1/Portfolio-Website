import React, { useEffect, useState } from 'react';
import { personalInfo, stats } from '../mock';
import { ArrowRight, Github, Instagram, Linkedin, Terminal, Sparkles, Server, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-[#030712] text-white flex flex-col justify-between pt-28 pb-12 px-6 md:px-16 lg:px-24"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[500px] h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Cyber subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        {/* Availability Badge */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs text-white/80 tracking-wider uppercase">
            {personalInfo.status}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline" />
          <span className="font-mono text-xs text-cyan-400/90 tracking-wider uppercase hidden sm:inline">
            Hybrid Cloud • GitOps
          </span>
        </div>

        {/* Hero Title & Typography */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs md:text-sm tracking-[0.25em] text-cyan-400 uppercase mb-3 flex items-center gap-2">
              <Sparkles size={14} className="text-cyan-400" />
              Cloud &amp; DevOps Engineer • Full-Stack Developer
            </p>
            
            <h1 className="font-display text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.92] tracking-tight uppercase text-white mb-4">
              ABHISHEK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                MISHRA
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed mb-8">
              {personalInfo.tagline}. Bridging the gap between automated distributed infrastructure, declarative GitOps workflows, and clean web engineering.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 bg-white text-black font-mono text-xs tracking-wider uppercase font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-white/10 hover:shadow-cyan-400/25 group cursor-pointer"
              >
                Get In Touch
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 bg-white/[0.04] border border-white/15 text-white font-mono text-xs tracking-wider uppercase rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
              >
                View Work
              </button>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 bg-white/[0.03] border border-white/10 text-white/50 hover:text-white hover:border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Github size={16} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 bg-white/[0.03] border border-white/10 text-white/50 hover:text-white hover:border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 bg-white/[0.03] border border-white/10 text-white/50 hover:text-white hover:border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="w-full bg-[#0a0f1d]/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-cyan-500/30 group">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-white/40">
                  <Terminal size={12} className="text-cyan-400" />
                  <span>abhishek@hybrid-mesh:~</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  LIVE
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-5 font-mono text-xs space-y-3">
                <div>
                  <p className="text-white/40">// Hybrid Infrastructure Overview</p>
                  <p className="text-cyan-300">
                    <span className="text-emerald-400 font-bold">❯</span> cluster.status()
                  </p>
                </div>

                <div className="space-y-1.5 pl-2 border-l border-white/10 text-white/70">
                  <div className="flex items-center justify-between">
                    <span>Hypervisor Platform:</span>
                    <span className="text-white font-medium">Proxmox VE + OCI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Orchestration:</span>
                    <span className="text-cyan-300 font-medium">K3s Kubernetes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>GitOps Engine:</span>
                    <span className="text-emerald-400 font-medium">Argo CD v3.6.1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Continuous Integration:</span>
                    <span className="text-amber-300 font-medium">Jenkins Automated</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Scrape Targets:</span>
                    <span className="text-emerald-400 font-medium">11/11 Healthy</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <p className="text-white/40">// Core Philosophy</p>
                  <p className="text-white/90 italic">
                    "Automate repetitiveness. Architect for resilience. Design for clarity."
                  </p>
                </div>

                <div className="pt-1 flex items-center gap-2 text-emerald-400 text-[11px]">
                  <CheckCircle2 size={13} />
                  <span>System operational &amp; fully synced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, idx) => (
          <div key={idx} className="group">
            <p className="font-display text-3xl md:text-4xl text-white tracking-wide group-hover:text-cyan-400 transition-colors">
              {s.value}
            </p>
            <p className="font-mono text-[10px] md:text-xs text-white/40 tracking-wider uppercase mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
