// Profile data for Abhishek Mishra | Cloud & DevOps Engineer

export const personalInfo = {
  name: "Abhishek Mishra",
  firstName: "Abhishek",
  lastName: "Mishra",
  title: "Cloud & DevOps Engineer",
  badge: "Cloud & DevOps Engineer • Enterprise Systems Specialist",
  tagline: "Engineering resilient hybrid cloud infrastructure, declarative GitOps automation, and high-availability enterprise environments.",
  email: "Abhishekmishra0203426@gmail.com",
  phone: "+91-7880371643",
  location: "Kanpur, U.P., India",
  status: "Available for Cloud & DevOps Roles",
  linkedin: "https://www.linkedin.com/in/abhishek-mishra-a749b3220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  github: "https://github.com/ABHISHEK-CLOUD1",
  about: "Cloud & DevOps Engineer with 4+ years of battle-tested enterprise infrastructure experience across 400+ physical and virtual servers. I specialize in bridging high-availability virtualization, automated Infrastructure as Code (Terraform, Ansible), container orchestration (Kubernetes K3s, Docker), and declarative GitOps pipelines (Argo CD, Jenkins) with enterprise-grade 99.9% uptime SLA resilience. Currently pursuing M.Tech in Computer Science at BITS Pilani."
};

export const stats = [
  { label: "Enterprise Servers Managed", value: "400+" },
  { label: "Production SLA Uptime", value: "99.9%" },
  { label: "Patch Compliance Rate", value: "95%+" },
  { label: "Hybrid Cluster Nodes", value: "10+" }
];

export const skillCategories = [
  {
    category: "Cloud & DevOps",
    skills: ["Kubernetes (K3s)", "Docker", "Terraform", "Ansible", "Argo CD (GitOps)", "Jenkins CI/CD", "Oracle Cloud (OCI)", "Proxmox VE"]
  },
  {
    category: "Virtualization & Systems",
    skills: ["VMware vSphere 7.x", "ESXi & vCenter", "vMotion & HA/DRS", "Windows Server 2012–2022", "Server Core"]
  },
  {
    category: "Identity & Security",
    skills: ["Active Directory (AD DS)", "Group Policy (GPO)", "GPO Security Hardening", "DNS & DHCP", "Domain Trusts", "RBAC"]
  },
  {
    category: "Endpoint & Patching",
    skills: ["SCCM / ConfigMgr", "WSUS Patch Automation", "Software Packaging & Distribution"]
  },
  {
    category: "Observability & SRE",
    skills: ["Prometheus", "Grafana", "Splunk", "SolarWinds"]
  },
  {
    category: "Automation & Scripting",
    skills: ["PowerShell Automation", "Bash Scripting", "Python"]
  }
];

export const services = [
  {
    id: 1,
    title: "Hybrid Cloud & Infrastructure as Code",
    description: "Designing reproducible, fault-tolerant infrastructure connecting on-premise Proxmox VE hypervisors with public Oracle Cloud Infrastructure (OCI) using Terraform and Ansible.",
    icon: "Cloud",
    tag: "IaC & Multi-Cloud"
  },
  {
    id: 2,
    title: "Kubernetes Orchestration & GitOps",
    description: "Orchestrating containerized workloads with K3s and implementing true GitOps with Argo CD App-of-Apps, declarative desired-state synchronization, and self-healing rollouts.",
    icon: "Cpu",
    tag: "GitOps Continuous Delivery"
  },
  {
    id: 3,
    title: "Continuous Integration & Delivery (CI/CD)",
    description: "Architecting automated Jenkins pipelines with multi-stage Docker builds, automated image distribution, code validation, and zero-downtime deployment workflows.",
    icon: "GitBranch",
    tag: "Automated Pipelines"
  },
  {
    id: 4,
    title: "Enterprise Wintel & VMware Virtualization",
    description: "Administering 400+ physical and virtual Windows Servers (2012–2022) with VMware vSphere 7.x, performing non-disruptive vMotion, capacity rightsizing, and HA/DRS fault-tolerance.",
    icon: "Server",
    tag: "400+ Server Estates"
  },
  {
    id: 5,
    title: "Active Directory Governance & Security",
    description: "Enterprise AD DS management: user/group lifecycle, OU hierarchies, GPO hardening, replication topologies, and proven leadership cleansing 500+ stale accounts and redundant policies.",
    icon: "Shield",
    tag: "Enterprise Identity"
  },
  {
    id: 6,
    title: "SCCM / ConfigMgr & Patch Compliance",
    description: "Building deployment packages, boundary groups, and automated maintenance rings—driving organization-wide patch compliance from ~70% to 95%+ with audit-ready dashboards.",
    icon: "Activity",
    tag: "95%+ Compliance"
  }
];

export const projects = [
  {
    id: 1,
    title: "Enterprise Hybrid Cloud & GitOps Mesh",
    subtitle: "Flagship DevOps Lab Architecture",
    description: "A production-grade 10-node hybrid cloud topology connecting on-premise Proxmox VE hypervisors with Oracle Cloud Infrastructure (OCI). Declaratively managed with K3s Kubernetes, Argo CD App-of-Apps GitOps, Jenkins automated pipelines, and Prometheus observability.",
    category: "Cloud & DevOps",
    badge: "Flagship Project",
    isFlagship: true,
    highlights: [
      "10-node hybrid cluster bridging Proxmox CTs & OCI cloud compute",
      "Argo CD App-of-Apps declarative synchronization engine",
      "Automated Jenkins CI/CD pipeline building & deploying services",
      "Full Prometheus TSDB & Grafana telemetry scraping 11 endpoints"
    ],
    technologies: ["Kubernetes (K3s)", "Argo CD", "Terraform", "Ansible", "Oracle Cloud (OCI)", "Proxmox VE", "Jenkins", "Prometheus"],
    github: "https://github.com/ABHISHEK-CLOUD1/Devops-lab"
  },
  {
    id: 2,
    title: "Automated Multi-Stage CI/CD Engine",
    subtitle: "Production Jenkins Pipeline Engine",
    description: "Production Jenkins automation engine executing Terraform infrastructure validation, multi-stage Docker builds, container image verification, and zero-downtime service deployment.",
    category: "CI/CD & Automation",
    badge: "Automation",
    isFlagship: false,
    highlights: [
      "Automated pipeline triggers on Git webhook events",
      "Multi-stage Docker builds minimizing production image footprint",
      "Automated health checks and rollback on deployment failure"
    ],
    technologies: ["Jenkins", "Docker", "Ansible", "Bash", "Linux", "Git"],
    github: "https://github.com/ABHISHEK-CLOUD1/Devops-lab"
  },
  {
    id: 3,
    title: "Enterprise 400+ Server Wintel & Virtualization Estate",
    subtitle: "Mission-Critical US & UK Workload Management",
    description: "4-year administration of 400+ physical and virtual enterprise Windows Server environments (2012–2022) hosted on VMware vSphere 6.x/7.x. Maintained 99.9% uptime SLA through proactive capacity rightsizing, vMotion, and structured L2 incident response.",
    category: "Enterprise Infrastructure",
    badge: "Enterprise Core",
    isFlagship: false,
    highlights: [
      "Administered 400+ Windows Servers with 99.9% uptime availability",
      "Executed live vMotion migrations with zero application disruption",
      "Mitigated snapshot sprawl and optimized datastore capacity headroom"
    ],
    technologies: ["VMware vSphere", "ESXi / vCenter", "Windows Server", "PowerShell", "vMotion", "HA/DRS"]
  },
  {
    id: 4,
    title: "Automated SCCM Patch Compliance & Baseline Modernization",
    subtitle: "Enterprise Patch Management System",
    description: "Architected software deployment packages, compliance baselines, and boundary groups in Microsoft Endpoint Configuration Manager (SCCM), elevating enterprise patch compliance from ~70% to 95%+ across distributed branch sites.",
    category: "Endpoint & Compliance",
    badge: "95%+ Compliance",
    isFlagship: false,
    highlights: [
      "Elevated organization patch compliance from ~70% to 95%+",
      "Established automated phased maintenance rings (Pilot -> Prod)",
      "Created executive audit-ready compliance dashboards & reports"
    ],
    technologies: ["SCCM / ConfigMgr", "WSUS", "Group Policy (GPO)", "PowerShell", "Reporting"]
  },
  {
    id: 5,
    title: "Hybrid Observability & SRE Telemetry Mesh",
    subtitle: "Real-time Metrics & Alerting",
    description: "Centralized Prometheus TSDB scraping 11 hybrid targets across local hypervisors and public cloud VMs with real-time Grafana operational dashboards and incident alerting.",
    category: "SRE & Monitoring",
    badge: "Observability",
    isFlagship: false,
    highlights: [
      "11 targets scraped across hybrid cloud environments",
      "Real-time Grafana dashboards for node, container, and cluster metrics",
      "Proactive threshold alerts preventing resource starvation"
    ],
    technologies: ["Prometheus", "Grafana", "Node Exporter", "cAdvisor", "Alertmanager"],
    github: "https://github.com/ABHISHEK-CLOUD1/Devops-lab"
  },
  {
    id: 6,
    title: "Modern Developer Portfolio & Web Platform",
    subtitle: "Production React 19 Single Page App",
    description: "High-performance React application engineered with Tailwind CSS, FormSubmit AJAX notification engine, multi-stage Docker containerization, and deployed on global edge CDN.",
    category: "Web & Platform",
    badge: "Web Platform",
    isFlagship: false,
    highlights: [
      "Clean cream/ink architectural design with interactive consoles",
      "Automated FormSubmit email notification dispatch",
      "Multi-stage Dockerized build with Nginx SPA routing"
    ],
    technologies: ["React 19", "Tailwind CSS", "Docker", "Nginx", "GitHub Pages"],
    github: "https://github.com/ABHISHEK-CLOUD1/app"
  }
];

export const experience = [
  {
    role: "Wintel & VMware Administrator – Level 2",
    company: "Enterprise IT Infrastructure (US & UK Workloads)",
    period: "4 Years Experience",
    summary: "Led L2 operations across 400+ physical and virtual enterprise Windows Server and VMware environments, maintaining 99.9% uptime SLA, elevating patch compliance to 95%+, and driving PowerShell automation.",
    points: [
      "Administered 400+ physical and virtual Windows Servers (2012–2022), maintaining 99.9% uptime SLA.",
      "Managed VMware vSphere clusters (ESXi, vCenter, vMotion, HA/DRS), optimizing VM resources and eliminating snapshot sprawl.",
      "Designed and enforced GPO security baselines; spearheaded AD cleanup removing 500+ stale accounts and redundant policies.",
      "Streamlined SCCM/ConfigMgr workflows, boundary groups, and maintenance rings, elevating patch compliance from ~70% to 95%+.",
      "Served as primary L2 escalation point; authored standardized runbooks and SOPs that significantly reduced incident MTTR."
    ]
  }
];

export const education = [
  {
    degree: "M.Tech – Computer Science",
    institution: "Birla Institute of Technology and Science (BITS), Pilani",
    period: "In Progress (Completes in 2027)",
    highlight: "Specializing in advanced distributed computing, cloud architecture, and systems engineering."
  },
  {
    degree: "B.C.A – Bachelor of Computer Applications",
    institution: "Dr. Virendra Swarup Institute of Computer Studies, Kanpur",
    period: "2019 – 2022",
    highlight: "Core computer science, operating systems, networking, database management, and programming."
  }
];

export const certifications = [
  {
    name: "Microsoft AZ-900: Azure Fundamentals",
    issuer: "Microsoft",
    category: "Cloud",
    type: "Official Certification"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud",
    type: "Official Certification"
  },
  {
    name: "AWS Architecting on AWS",
    issuer: "Trainocate Group",
    category: "Architecture",
    type: "Professional Credential"
  },
  {
    name: "AWS Digital Badge: Agentic AI Essentials",
    issuer: "AWS",
    category: "AI & Cloud",
    type: "Digital Badge"
  },
  {
    name: "AWS Digital Badge: Generative AI Essentials",
    issuer: "AWS",
    category: "AI & Cloud",
    type: "Digital Badge"
  },
  {
    name: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "AWS",
    category: "Hands-on",
    type: "Digital Badge"
  },
  {
    name: "Microsoft Digital Badges: Cloud & AI",
    issuer: "Microsoft",
    category: "Cloud & AI",
    type: "Digital Badge"
  },
  {
    name: "Google Digital Badges: Cloud & AI",
    issuer: "Google",
    category: "Cloud & AI",
    type: "Digital Badge"
  }
];
