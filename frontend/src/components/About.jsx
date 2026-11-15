import React from 'react';
import { personalInfo, stats, techStack } from '../mock';
import { Terminal, ShieldCheck, Server, Cloud, Layers, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-28 px-6 md:px-16 lg:px-24 bg-[#030712] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase font-semibold">01</span>
          <div className="w-12 h-px bg-white/20" />
          <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">About Abhishek</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Background & Story */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight uppercase text-white mb-6">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white/40">
                Resilience &amp; Scale
              </span>
            </h2>

            <p className="text-white/70 text-base md:text-lg leading-relaxed font-sans">
              {personalInfo.about}
            </p>

            <p className="text-white/50 text-sm md:text-base leading-relaxed font-sans">
              I believe in declarative systems, GitOps discipline, and high observability. Whether designing on-premises virtualized clusters with Proxmox, automating multicloud resources with Terraform, or deploying reactive single-page applications, my focus is delivering rock-solid reliability with clean code.
            </p>

            {/* Core Competencies Box */}
            <div className="pt-6">
              <p className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
                <Terminal size={14} />
                Core Technology Stack
              </p>
              
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="font-mono text-xs px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-white/80 hover:text-white hover:border-cyan-400/50 hover:bg-white/[0.06] transition-all cursor-default"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Architectural Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Cloud size={18} />
                </div>
                <h3 className="font-display text-xl uppercase tracking-wider text-white">Hybrid Cloud Architecture</h3>
              </div>
              <p className="font-mono text-xs text-white/60 leading-relaxed">
                Seamlessly connecting local Proxmox VE hypervisors with public Oracle Cloud Infrastructure (OCI) instances over persistent secure networking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Cpu size={18} />
                </div>
                <h3 className="font-display text-xl uppercase tracking-wider text-white">GitOps &amp; Continuous Delivery</h3>
              </div>
              <p className="font-mono text-xs text-white/60 leading-relaxed">
                App-of-Apps architectural patterns in Argo CD syncing Kubernetes workloads alongside automated Jenkins pipeline orchestrations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Layers size={18} />
                </div>
                <h3 className="font-display text-xl uppercase tracking-wider text-white">Full-Stack Precision</h3>
              </div>
              <p className="font-mono text-xs text-white/60 leading-relaxed">
                Production-grade React &amp; TypeScript user interfaces paired with containerized microservices and automated edge CDN distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
