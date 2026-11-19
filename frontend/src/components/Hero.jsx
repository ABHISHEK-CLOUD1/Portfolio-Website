import React, { useState } from 'react';
import { personalInfo, stats } from '../mock';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Phone, Copy, Check, Terminal, Cpu, Server, Activity, ShieldCheck, Sparkles, Layers } from 'lucide-react';

const workbenchTabs = [
  {
    id: 'gitops',
    label: 'GitOps & K3s Mesh',
    badge: 'DevOps Lab',
    badgeColor: 'bg-[#0052FF]/10 text-[#0052FF] border-[#0052FF]/20',
    title: 'Hybrid Cloud & Declarative GitOps',
    architecture: 'Proxmox VE + Oracle Cloud (OCI)',
    engine: 'Argo CD v3.6.1 (App-of-Apps)',
    telemetry: '10 Hybrid Nodes Managed • Zero-Drift Sync',
    code: 'argocd app sync devops-lab-mesh --prune=true',
    status: 'Synced & Healthy'
  },
  {
    id: 'cicd',
    label: 'Automated CI/CD',
    badge: 'Automation',
    badgeColor: 'bg-[#FF4D00]/10 text-[#FF4D00] border-[#FF4D00]/20',
    title: 'Continuous Integration & Image Distribution',
    architecture: 'Jenkins Multi-Stage Pipeline Engine',
    engine: 'Dockerized Microservice Builds',
    telemetry: 'Automated SCM Polling • Rollback on Failure',
    code: 'jenkins-cli build deploy-mesh-pipeline -s -v',
    status: 'Build #41 Verified'
  },
  {
    id: 'enterprise',
    label: '400+ Enterprise Systems',
    badge: 'Core Experience',
    badgeColor: 'bg-[#059669]/10 text-[#059669] border-[#059669]/20',
    title: 'Wintel, VMware & Endpoint Operations',
    architecture: '400+ Windows Servers (2012–2022)',
    engine: 'VMware vSphere 7.x & SCCM ConfigMgr',
    telemetry: '99.9% SLA Uptime • 95%+ Patch Compliance',
    code: 'Get-CMCompliance -Baseline "Enterprise-WSUS-Q4"',
    status: '99.9% SLA Active'
  },
  {
    id: 'sre',
    label: 'SRE Observability',
    badge: 'Telemetry',
    badgeColor: 'bg-purple-600/10 text-purple-700 border-purple-600/20',
    title: 'Centralized Metrics & Incident Triage',
    architecture: 'Prometheus TSDB + Grafana Dashboards',
    engine: 'Node Exporter & cAdvisor Scrapers',
    telemetry: '11 Hybrid Endpoints Scraped • L2 Runbooks',
    code: 'promtool check config /etc/prometheus/prometheus.yml',
    status: '11/11 Healthy'
  }
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const current = workbenchTabs[activeTab];

  return (
    <section id="hero" className="relative w-full pt-32 pb-20 px-6 md:px-16 lg:px-24 bg-[#FBF9F5] border-b border-[#E4E0D5]">
      {/* Background delicate grid */}
      <div className="absolute inset-0 bg-cream-grid pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Availability Pill & Breadcrumb */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E4E0D5] shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]"></span>
            </span>
            <span className="font-mono text-xs text-[#121316] font-medium tracking-tight">
              {personalInfo.status}
            </span>
          </div>

          <span className="hidden sm:inline-block text-[#767A85] text-xs font-mono">•</span>
          
          <span className="font-mono text-xs text-[#767A85] tracking-wider uppercase">
            Kanpur, India • 4+ Yrs Enterprise Experience
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#0052FF] font-semibold uppercase flex items-center gap-2">
              <Sparkles size={14} className="text-[#0052FF]" />
              {personalInfo.title}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#121316] leading-[1.08]">
              ABHISHEK <br />
              <span className="text-[#0052FF]">MISHRA</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4A4D57] max-w-xl leading-relaxed">
              {personalInfo.tagline} Bridging battle-tested enterprise infrastructure resilience with modern declarative cloud and automated GitOps platforms.
            </p>

            {/* CTAs and Interaction Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3.5 bg-[#0052FF] hover:bg-[#0043D6] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>View DevOps Lab &amp; Work</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3.5 bg-white hover:bg-[#F2EFE9] border border-[#121316] text-[#121316] font-mono text-xs uppercase tracking-wider font-semibold rounded-xl transition-all duration-300 cursor-pointer"
              >
                <span>Get In Touch</span>
              </button>

              {/* Direct Phone Pill */}
              <button
                onClick={handleCopyPhone}
                title="Click to copy phone number"
                className="px-4 py-3.5 bg-white border border-[#E4E0D5] hover:border-[#121316] text-[#121316] rounded-xl transition-all flex items-center gap-2 font-mono text-xs cursor-pointer shadow-2xs"
              >
                <Phone size={13} className="text-[#059669]" />
                <span>{personalInfo.phone}</span>
                {copied ? <Check size={12} className="text-[#059669]" /> : <Copy size={12} className="text-[#767A85]" />}
              </button>

              {/* Socials */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 bg-white border border-[#E4E0D5] hover:border-[#121316] text-[#121316] hover:text-[#0052FF] rounded-xl transition-all shadow-2xs"
                >
                  <Github size={16} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 bg-white border border-[#E4E0D5] hover:border-[#121316] text-[#121316] hover:text-[#0052FF] rounded-xl transition-all shadow-2xs"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Out-of-the-Box Architectural Systems Workbench */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-[#121316] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#121316] relative">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E4E0D5] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF4D00] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#059669] inline-block" />
                </div>
                <div className="font-mono text-xs text-[#767A85] flex items-center gap-1.5">
                  <Terminal size={12} className="text-[#0052FF]" />
                  <span>systems-workbench.config</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#059669]/10 text-[#059669] font-medium border border-[#059669]/20">
                  LIVE
                </span>
              </div>

              {/* Interactive Segment Buttons */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#FBF9F5] border border-[#E4E0D5] rounded-xl mb-5">
                {workbenchTabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-2 rounded-lg font-mono text-[11px] font-medium transition-all text-left cursor-pointer truncate ${
                      activeTab === idx
                        ? 'bg-white text-[#121316] border border-[#121316]/20 shadow-xs'
                        : 'text-[#767A85] hover:text-[#121316]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Active Tab Content Card */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[10px] tracking-widest uppercase px-2.5 py-0.5 rounded border font-semibold ${current.badgeColor}`}>
                    {current.badge}
                  </span>
                  <span className="font-mono text-xs text-[#059669] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                    {current.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-sans text-lg font-bold text-[#121316]">
                    {current.title}
                  </h3>
                  <p className="font-mono text-xs text-[#4A4D57] mt-1">
                    Platform: <span className="text-[#121316] font-semibold">{current.architecture}</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#E4E0D5] space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#767A85]">Orchestrator:</span>
                    <span className="text-[#121316] font-medium">{current.engine}</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#767A85]">Telemetry:</span>
                    <span className="text-[#0052FF] font-medium">{current.telemetry}</span>
                  </div>
                </div>

                {/* Code / Command line */}
                <div className="p-3 rounded-lg bg-[#121316] text-white font-mono text-xs flex items-center gap-2 overflow-x-auto">
                  <span className="text-[#059669] font-bold">❯</span>
                  <span className="text-white/90 truncate">{current.code}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Impact Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#E4E0D5]">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-[#E4E0D5] hover:border-[#121316] transition-all shadow-2xs group"
            >
              <p className="text-3xl md:text-4xl font-bold tracking-tight text-[#121316] group-hover:text-[#0052FF] transition-colors">
                {s.value}
              </p>
              <p className="font-mono text-xs text-[#767A85] uppercase tracking-wider mt-1.5 font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
