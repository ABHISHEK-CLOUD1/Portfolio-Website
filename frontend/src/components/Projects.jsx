import React, { useState } from 'react';
import { projects, certifications } from '../mock';
import { ArrowUpRight, Github, ExternalLink, Award, Sparkles, CheckCircle2, Layers, Cpu, Server, Terminal } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Cloud & DevOps', 'CI/CD & Automation', 'Enterprise Infrastructure', 'SRE & Monitoring'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const flagship = projects.find(p => p.isFlagship) || projects[0];

  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 bg-white border-b border-[#E4E0D5]">
      <div className="max-w-7xl mx-auto">

        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">03 // ARCHITECTURE</span>
          <div className="w-10 h-px bg-[#E4E0D5]" />
          <span className="font-mono text-xs tracking-wider text-[#767A85] uppercase">Featured Deployments &amp; Projects</span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121316]">
              Featured <br />
              <span className="text-[#0052FF]">Engineering Projects</span> &amp; Systems
            </h2>
          </div>
          <p className="font-mono text-xs text-[#767A85] max-w-md uppercase tracking-wider leading-relaxed">
            Real enterprise deployments, multi-node homelabs, GitOps continuous delivery, and 400+ server infrastructure estates.
          </p>
        </div>

        {/* ========================================================= */}
        {/* ⭐ FLAGSHIP FEATURED PROJECT: DEVOPS LAB HYBRID MESH ⭐ */}
        {/* ========================================================= */}
        <div className="mb-16 p-8 md:p-10 rounded-2xl bg-[#FBF9F5] border-2 border-[#121316] shadow-[8px_8px_0px_0px_#121316] relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#FF4D00] text-white font-bold">
                  ★ Flagship Architecture
                </span>
                <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-[#E4E0D5] text-[#121316] font-semibold">
                  DevOps Lab
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#121316] tracking-tight">
                  {flagship.title}
                </h3>
                <p className="font-mono text-xs text-[#0052FF] font-semibold mt-1">
                  {flagship.subtitle}
                </p>
              </div>

              <p className="text-sm md:text-base text-[#4A4D57] leading-relaxed">
                {flagship.description}
              </p>

              {/* Key Architecture Highlights */}
              <div className="space-y-2 pt-2">
                <p className="font-mono text-xs text-[#121316] uppercase font-bold tracking-wider">
                  Live System Highlights:
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {flagship.highlights?.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#4A4D57]">
                      <CheckCircle2 size={15} className="text-[#059669] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {flagship.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white border border-[#E4E0D5] text-[#121316] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={flagship.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#121316] hover:bg-[#0052FF] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-xl transition-all flex items-center gap-2"
                >
                  <Github size={15} />
                  <span>View DevOps Lab Repository</span>
                  <ArrowUpRight size={14} />
                </a>

                <span className="font-mono text-xs text-[#767A85]">
                  github.com/ABHISHEK-CLOUD1/Devops-lab
                </span>
              </div>
            </div>

            {/* Right Architecture Preview Blueprint */}
            <div className="lg:col-span-5 bg-white border border-[#121316]/20 rounded-xl p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#E4E0D5]">
                <span className="font-mono text-xs font-bold text-[#121316] uppercase">
                  Topology Overview
                </span>
                <span className="font-mono text-[10px] text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded font-bold border border-[#059669]/20">
                  10 Nodes Synced
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#FBF9F5] border border-[#E4E0D5]">
                  <p className="text-[#767A85] text-[10px] uppercase font-bold">On-Premise Compute</p>
                  <p className="text-[#121316] font-semibold mt-0.5">Proxmox VE Cluster (CT102, CT108, CT109)</p>
                  <p className="text-[11px] text-[#4A4D57]">Hosts K3s control plane, Jenkins CI, and Nginx edge</p>
                </div>

                <div className="p-3 rounded-lg bg-[#FBF9F5] border border-[#E4E0D5]">
                  <p className="text-[#767A85] text-[10px] uppercase font-bold">Public Cloud Compute</p>
                  <p className="text-[#0052FF] font-semibold mt-0.5">Oracle Cloud Infrastructure (OCI)</p>
                  <p className="text-[11px] text-[#4A4D57]">Cloud worker nodes connected via secure mesh VPN</p>
                </div>

                <div className="p-3 rounded-lg bg-[#FBF9F5] border border-[#E4E0D5]">
                  <p className="text-[#767A85] text-[10px] uppercase font-bold">GitOps Control Engine</p>
                  <p className="text-[#FF4D00] font-semibold mt-0.5">Argo CD v3.6.1 App-of-Apps</p>
                  <p className="text-[11px] text-[#4A4D57]">Continuous state verification &amp; self-healing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-2 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-[#0052FF] text-white font-semibold shadow-xs'
                  : 'bg-[#FBF9F5] border border-[#E4E0D5] text-[#767A85] hover:text-[#121316]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E4E0D5] hover:border-[#121316] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-[#0052FF] bg-white px-2.5 py-1 rounded font-bold border border-[#E4E0D5] uppercase tracking-wider">
                    {project.badge}
                  </span>
                  <span className="font-mono text-xs text-[#767A85]">
                    0{project.id}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl text-[#121316] mb-1.5 group-hover:text-[#0052FF] transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-[#767A85] mb-3 font-medium">
                  {project.subtitle}
                </p>

                <p className="text-sm text-[#4A4D57] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-white border border-[#E4E0D5] text-[#121316]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#E4E0D5] flex items-center justify-between">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#121316] hover:text-[#0052FF] transition-colors"
                  >
                    <Github size={14} />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="font-mono text-xs text-[#767A85]">
                    Enterprise Production Workload
                  </span>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white border border-[#E4E0D5] flex items-center justify-center text-[#121316] group-hover:bg-[#0052FF] group-hover:text-white group-hover:border-[#0052FF] transition-all"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* CERTIFICATIONS & CREDENTIALS SECTION */}
        {/* ========================================================= */}
        <div id="certifications" className="pt-10 border-t border-[#E4E0D5]">
          <div className="flex items-center gap-3 mb-8">
            <Award size={20} className="text-[#0052FF]" />
            <h3 className="font-sans font-bold text-2xl text-[#121316]">
              Certifications &amp; Professional Credentials
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#FBF9F5] border border-[#E4E0D5] hover:border-[#121316] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#0052FF]/10 border border-[#0052FF]/20 text-[#0052FF] font-bold">
                      {cert.type}
                    </span>
                    <span className="font-mono text-[10px] text-[#767A85]">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-sans font-bold text-sm text-[#121316] mb-1">
                    {cert.name}
                  </h4>
                  <p className="font-sans text-xs text-[#4A4D57]">
                    {cert.issuer}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#E4E0D5] font-mono text-[10px] text-[#767A85] uppercase tracking-wider">
                  {cert.category}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
