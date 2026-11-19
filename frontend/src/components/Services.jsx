import React from 'react';
import { services } from '../mock';
import { Cloud, Cpu, GitBranch, Server, Shield, Activity, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Cloud: <Cloud size={20} className="text-[#0052FF]" />,
  Cpu: <Cpu size={20} className="text-[#FF4D00]" />,
  GitBranch: <GitBranch size={20} className="text-[#7C3AED]" />,
  Server: <Server size={20} className="text-[#059669]" />,
  Shield: <Shield size={20} className="text-[#0052FF]" />,
  Activity: <Activity size={20} className="text-[#FF4D00]" />
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-16 lg:px-24 bg-[#FBF9F5] border-b border-[#E4E0D5]">
      <div className="max-w-7xl mx-auto">

        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">02 // SERVICES</span>
          <div className="w-10 h-px bg-[#E4E0D5]" />
          <span className="font-mono text-xs tracking-wider text-[#767A85] uppercase">Core Capabilities &amp; Architecture</span>
        </div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121316]">
              End-to-End <br />
              <span className="text-[#0052FF]">Cloud &amp; Infrastructure</span> Services
            </h2>
          </div>
          <p className="font-mono text-xs text-[#767A85] max-w-md uppercase tracking-wider leading-relaxed">
            Architecting production-ready cloud infrastructures, containerized platforms, and resilient 400+ server virtualization estates.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="p-7 rounded-2xl bg-white border border-[#E4E0D5] hover:border-[#121316] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#FBF9F5] border border-[#E4E0D5] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[service.icon] || <Cpu size={20} className="text-[#0052FF]" />}
                  </div>
                  <span className="font-mono text-xs text-[#767A85] tracking-widest font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="font-mono text-[10px] text-[#0052FF] bg-[#0052FF]/10 px-2 py-0.5 rounded font-semibold border border-[#0052FF]/20 uppercase tracking-wider">
                    {service.tag}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl text-[#121316] mb-2.5 group-hover:text-[#0052FF] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#4A4D57] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#E4E0D5] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#767A85] font-medium uppercase tracking-wider">
                  Production Standard
                </span>
                <ArrowUpRight size={16} className="text-[#767A85] group-hover:text-[#0052FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
