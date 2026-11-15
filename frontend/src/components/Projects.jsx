import React, { useState } from 'react';
import { projects } from '../mock';
import { ArrowUpRight, Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 px-6 md:px-16 lg:px-24 bg-[#030712] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase font-semibold">03</span>
          <div className="w-12 h-px bg-white/20" />
          <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">Featured Architecture</span>
        </div>

        {/* Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight uppercase text-white mb-2">
              Featured <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white/40">
                Projects
              </span>
            </h2>
          </div>
          <p className="font-mono text-xs text-white/40 tracking-wider uppercase max-w-sm leading-relaxed">
            Real enterprise deployments, multi-node homelabs, GitOps workflows, and web platforms built for scale.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-cyan-400/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Preview with Overlay */}
                <div className="relative aspect-[16/9] overflow-hidden bg-black/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded-full bg-black/70 border border-white/15 text-cyan-300 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-display text-2xl md:text-3xl tracking-wide uppercase text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Links */}
              <div className="px-8 pb-8 pt-2 flex items-center justify-between border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors"
                >
                  <Github size={14} />
                  <span>View Repository</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 transition-all duration-300"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Code2 size={24} />
            </div>
            <div>
              <p className="font-display text-xl uppercase tracking-wider text-white">Explore All Repositories</p>
              <p className="font-mono text-xs text-white/40 mt-0.5">Check out open-source infrastructure manifests, Ansible playbooks, and web apps.</p>
            </div>
          </div>
          
          <a
            href="https://github.com/ABHISHEK-CLOUD1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/[0.06] border border-white/15 hover:bg-white/10 hover:border-white/30 text-white font-mono text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 flex-shrink-0"
          >
            <Github size={15} />
            <span>GitHub @ABHISHEK-CLOUD1</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
