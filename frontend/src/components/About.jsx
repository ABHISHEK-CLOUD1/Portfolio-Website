import React, { useState } from 'react';
import { personalInfo, skillCategories, education } from '../mock';
import { Terminal, Shield, Server, Cpu, Cloud, Layers, GraduationCap, CheckCircle2 } from 'lucide-react';

const About = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const allSkills = skillCategories.flatMap(cat => cat.skills.map(s => ({ name: s, category: cat.category })));
  const displayedSkills = activeCategory === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory);

  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24 bg-white border-b border-[#E4E0D5]">
      <div className="max-w-7xl mx-auto">

        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">01 // PROFILE</span>
          <div className="w-10 h-px bg-[#E4E0D5]" />
          <span className="font-mono text-xs tracking-wider text-[#767A85] uppercase">Background &amp; Dual-Core Engineering</span>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-14 items-start mb-16">
          {/* Left Column: Narrative & Story */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121316] leading-tight">
              Enterprise Foundations <br />
              <span className="text-[#0052FF]">Cloud &amp; GitOps</span> Innovation
            </h2>

            <p className="text-[#4A4D57] text-base md:text-lg leading-relaxed">
              {personalInfo.about}
            </p>

            <p className="text-[#4A4D57] text-sm md:text-base leading-relaxed">
              My engineering approach connects battle-tested enterprise systems with modern cloud practices: declarative GitOps workflows, Infrastructure as Code reproducibility, high observability, and rock-solid 99.9% SLA availability across both physical hypervisors and public clouds.
            </p>

            {/* Education Cards */}
            <div className="pt-6 border-t border-[#E4E0D5]">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={16} className="text-[#0052FF]" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#121316] font-bold">
                  Education &amp; Academic Credentials
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#FBF9F5] border border-[#E4E0D5] hover:border-[#121316] transition-all"
                  >
                    <span className="inline-block font-mono text-[10px] text-[#0052FF] bg-[#0052FF]/10 px-2 py-0.5 rounded font-semibold border border-[#0052FF]/20 mb-2">
                      {edu.period}
                    </span>
                    <h4 className="font-sans font-bold text-base text-[#121316]">
                      {edu.degree}
                    </h4>
                    <p className="font-sans text-xs text-[#4A4D57] font-medium mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="font-sans text-[11px] text-[#767A85] mt-2 leading-relaxed">
                      {edu.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E4E0D5] hover:border-[#0052FF] transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center font-bold">
                  <Cloud size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-[#121316] group-hover:text-[#0052FF] transition-colors">
                    Hybrid Cloud &amp; GitOps Mesh
                  </h4>
                  <span className="font-mono text-[10px] text-[#767A85] uppercase">Flagship DevOps Lab</span>
                </div>
              </div>
              <p className="text-xs text-[#4A4D57] leading-relaxed">
                Connects on-premise Proxmox VE hypervisors with Oracle Cloud Infrastructure (OCI) over declarative K3s Kubernetes and Argo CD continuous delivery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E4E0D5] hover:border-[#059669] transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#059669]/10 text-[#059669] flex items-center justify-center font-bold">
                  <Server size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-[#121316] group-hover:text-[#059669] transition-colors">
                    400+ Enterprise Wintel &amp; VMware
                  </h4>
                  <span className="font-mono text-[10px] text-[#767A85] uppercase">Production Reliability</span>
                </div>
              </div>
              <p className="text-xs text-[#4A4D57] leading-relaxed">
                Administering 400+ physical and virtual Windows Servers (2012–2022) with VMware vSphere 7.x, vMotion, and maintaining 99.9% uptime SLA.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E4E0D5] hover:border-[#FF4D00] transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FF4D00]/10 text-[#FF4D00] flex items-center justify-center font-bold">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-[#121316] group-hover:text-[#FF4D00] transition-colors">
                    Active Directory &amp; SCCM 95%+
                  </h4>
                  <span className="font-mono text-[10px] text-[#767A85] uppercase">Governance &amp; Patching</span>
                </div>
              </div>
              <p className="text-xs text-[#4A4D57] leading-relaxed">
                Spearheaded enterprise AD cleanup eliminating 500+ stale accounts and automated SCCM maintenance rings that elevated patch compliance to 95%+.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Competency Matrix */}
        <div className="pt-8 border-t border-[#E4E0D5]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-sans font-bold text-xl text-[#121316]">
                Technical Competencies &amp; Toolchain
              </h3>
              <p className="font-mono text-xs text-[#767A85] mt-1">
                Filter by specialized domains to explore technical proficiencies
              </p>
            </div>
            <span className="font-mono text-xs text-[#0052FF] font-semibold bg-[#0052FF]/10 px-3 py-1 rounded-full border border-[#0052FF]/20 self-start sm:self-auto">
              {displayedSkills.length} Skills Listed
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                activeCategory === 'All'
                  ? 'bg-[#121316] text-white font-medium shadow-xs'
                  : 'bg-[#FBF9F5] border border-[#E4E0D5] text-[#767A85] hover:text-[#121316]'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                  activeCategory === cat.category
                    ? 'bg-[#121316] text-white font-medium shadow-xs'
                    : 'bg-[#FBF9F5] border border-[#E4E0D5] text-[#767A85] hover:text-[#121316]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap gap-2">
            {displayedSkills.map((tech, i) => (
              <div
                key={i}
                className="px-3.5 py-2 rounded-lg bg-[#FBF9F5] border border-[#E4E0D5] hover:border-[#121316] transition-all flex items-center gap-2 group cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] group-hover:scale-125 transition-transform" />
                <span className="font-mono text-xs text-[#121316] font-medium">{tech.name}</span>
                <span className="font-mono text-[9px] text-[#767A85] bg-white px-1.5 py-0.5 rounded border border-[#E4E0D5]">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
