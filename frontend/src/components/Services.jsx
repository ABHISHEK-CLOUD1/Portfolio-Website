import React from 'react';
import { services } from '../mock';
import { Cloud, Cpu, GitBranch, Layout, Activity, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Cloud: <Cloud size={22} />,
  Cpu: <Cpu size={22} />,
  GitBranch: <GitBranch size={22} />,
  Layout: <Layout size={22} />,
  Activity: <Activity size={22} />,
};

const Services = () => {
  return (
    <section id="services" className="relative py-28 px-6 md:px-16 lg:px-24 bg-[#030712] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase font-semibold">02</span>
          <div className="w-12 h-px bg-white/20" />
          <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">What I Provide</span>
        </div>

        {/* Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight uppercase text-white mb-2">
              Services &amp;
            </h2>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white/40">
              Capabilities
            </h2>
          </div>
          <p className="font-mono text-xs text-white/40 tracking-wider uppercase max-w-sm leading-relaxed">
            End-to-end engineering from physical hypervisors and cloud VPCs to modern frontends and automated deployments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                    {iconMap[service.icon] || <Cpu size={22} />}
                  </div>
                  <span className="font-mono text-xs text-white/20 tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl tracking-wide uppercase text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/30 tracking-wider uppercase">
                  Production Grade
                </span>
                <ArrowUpRight size={16} className="text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
