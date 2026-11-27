import React from 'react';
import { personalInfo, coreSkills, education, certifications, stats } from '../mock';
import { ArrowUpRight, GraduationCap, Award, Server, Layers, Cpu, Shield } from 'lucide-react';

const About = ({ onOpenContact }) => {
  return (
    <section id="about" className="relative scroll-mt-24 sm:scroll-mt-20 py-16 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#ECECEC] text-[#181818] border-t border-[#D4D4D4] overflow-hidden">
      {/* Background Monumental White Numerals */}
      <div className="absolute top-6 right-4 sm:top-10 sm:right-10 pointer-events-none select-none z-0">
        <span className="font-mono text-[84px] sm:text-[180px] md:text-[220px] font-bold text-white leading-none tracking-tighter opacity-70 sm:opacity-90 block">
          400+
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12 sm:space-y-20">
        
        {/* Section Marker */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-mono text-xs text-[#FF4949] font-bold uppercase tracking-widest">
            02 // ABOUT &amp; LEDGER
          </span>
          <div className="hidden sm:block w-12 h-px bg-[#D4D4D4]" />
          <span className="font-mono text-[11px] sm:text-xs text-[#8C8C8C] uppercase tracking-wider">
            Architecture, Approach &amp; Credentials
          </span>
        </div>

        {/* Manifesto Lines (huyml.co signature uppercase manifesto in coral red) */}
        <div className="space-y-2 max-w-5xl">
          {personalInfo.manifesto.map((line, idx) => (
            <h2
              key={idx}
              className="font-sans font-bold text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#FF4949] leading-[1.15]"
            >
              {line}
            </h2>
          ))}
        </div>

        {/* Narrative & Bio */}
        <div className="grid md:grid-cols-12 gap-8 pt-8 border-t border-[#D4D4D4]">
          <div className="md:col-span-4 font-mono text-xs text-[#8C8C8C] uppercase tracking-wider">
            Philosophy &amp; Scope
          </div>
          <div className="md:col-span-8 space-y-4">
            <p className="font-sans text-base sm:text-lg text-[#181818] leading-relaxed font-normal">
              {personalInfo.shortBio}
            </p>
            <p className="font-sans text-sm text-[#4A4D57] leading-relaxed">
              I believe in declarative systems, continuous visibility, and zero-downtime operations. Whether architecting on-premise Proxmox VE hypervisors with Oracle Cloud Infrastructure (OCI) over Argo CD GitOps, or engineering high-availability virtualization across 400+ physical and virtual enterprise Windows Servers, the goal is always deterministic reliability.
            </p>
          </div>
        </div>

        {/* =================================================== */}
        {/* 4-COLUMN ARCHITECTURAL LEDGER (huyml.co style)     */}
        {/* =================================================== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[#D4D4D4] font-mono text-xs">
          
          {/* Col 1: Core Toolchain */}
          <div className="space-y-4">
            <div className="pb-2 border-b border-[#D4D4D4] flex items-center justify-between">
              <span className="text-[#8C8C8C] uppercase tracking-wider text-[10px]">Capabilities</span>
              <span className="text-[#181818] font-bold">14 Core</span>
            </div>
            <div className="space-y-2">
              {coreSkills.map((s, i) => (
                <div key={i} className="flex items-center justify-between py-1 border-b border-[#E4E4E4]">
                  <span className="text-[#181818] font-semibold">{s.name}</span>
                  <span className="text-[10px] text-[#8C8C8C]">{s.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Academic Credentials */}
          <div className="space-y-4">
            <div className="pb-2 border-b border-[#D4D4D4] flex items-center justify-between">
              <span className="text-[#8C8C8C] uppercase tracking-wider text-[10px]">Education</span>
              <span className="text-[#181818] font-bold">In Progress</span>
            </div>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-[10px] text-[#FF4949] font-bold block">{edu.period}</span>
                  <p className="font-sans font-bold text-sm text-[#181818]">{edu.degree}</p>
                  <p className="text-xs text-[#4A4D57]">{edu.institution}</p>
                  <p className="text-[11px] text-[#8C8C8C] leading-relaxed pt-1">{edu.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Certifications */}
          <div className="space-y-4">
            <div className="pb-2 border-b border-[#D4D4D4] flex items-center justify-between">
              <span className="text-[#8C8C8C] uppercase tracking-wider text-[10px]">Certifications</span>
              <span className="text-[#181818] font-bold">Verified</span>
            </div>
            <div className="space-y-3">
              {certifications.map((c, i) => (
                <div key={i} className="p-3 bg-white border border-[#D4D4D4] space-y-0.5">
                  <p className="font-sans font-bold text-xs text-[#181818]">{c.name}</p>
                  <p className="text-[10px] text-[#8C8C8C]">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Enterprise Track Record */}
          <div className="space-y-4">
            <div className="pb-2 border-b border-[#D4D4D4] flex items-center justify-between">
              <span className="text-[#8C8C8C] uppercase tracking-wider text-[10px]">Production Track Record</span>
              <span className="text-[#10B981] font-bold">99.9% SLA</span>
            </div>
            <div className="space-y-3 text-[#4A4D57] leading-relaxed">
              <div className="p-3 bg-white border border-[#D4D4D4]">
                <p className="font-bold text-[#181818] text-xs">400+ Server Estates</p>
                <p className="text-[11px] text-[#8C8C8C] mt-0.5">Physical &amp; virtual Windows Server administration across US &amp; UK workloads.</p>
              </div>
              <div className="p-3 bg-white border border-[#D4D4D4]">
                <p className="font-bold text-[#181818] text-xs">95%+ Patch Compliance</p>
                <p className="text-[11px] text-[#8C8C8C] mt-0.5">Automated SCCM maintenance rings and WSUS workflows (elevated from ~70%).</p>
              </div>
              <div className="p-3 bg-white border border-[#D4D4D4]">
                <p className="font-bold text-[#181818] text-xs">500+ AD Accounts Cleansed</p>
                <p className="text-[11px] text-[#8C8C8C] mt-0.5">Strengthened identity posture removing stale accounts and orphaned GPOs.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Contact CTA */}
        <div className="pt-10 border-t border-[#D4D4D4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-[#8C8C8C] uppercase tracking-wider">Next Step</span>
            <p className="font-sans font-bold text-xl sm:text-2xl text-[#181818] uppercase tracking-tight">
              Have a high-scale project or opportunity?
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 bg-[#FF4949] hover:bg-[#e03838] text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
          >
            Come Say Hi ──▶
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
