// Profile data for Abhishek Mishra's Portfolio

export const personalInfo = {
  name: "Abhishek Mishra",
  firstName: "Abhishek",
  lastName: "Mishra",
  title: "Cloud & DevOps Engineer | Full-Stack Developer",
  tagline: "Engineering resilient hybrid cloud infrastructure, GitOps automation & modern digital experiences",
  email: "abhishek010601@gmail.com",
  instagram: "https://www.instagram.com/abhishek_x64.exe?igsh=azMwbmJ1Y2J5end2&utm_source=qr",
  linkedin: "https://www.linkedin.com/in/abhishek-mishra-a749b3220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  github: "https://github.com/ABHISHEK-CLOUD1",
  location: "India • Available Worldwide",
  status: "Available for Projects & Opportunities",
  about: "I am a Cloud & DevOps Engineer and Full-Stack Developer specializing in building resilient, fault-tolerant infrastructure and high-performance digital platforms. My expertise spans automated Infrastructure as Code (Terraform, Ansible), container orchestration (Kubernetes K3s, Docker), and declarative GitOps pipelines (Argo CD, Jenkins), combined with clean, modern web engineering in React, TypeScript, Python, and Node.js."
};

export const techStack = [
  { name: "Kubernetes (K3s)", category: "Cloud & DevOps" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "Argo CD", category: "GitOps" },
  { name: "Jenkins CI/CD", category: "Automation" },
  { name: "Terraform", category: "IaC" },
  { name: "Ansible", category: "IaC" },
  { name: "Proxmox VE", category: "Virtualization" },
  { name: "Oracle Cloud (OCI)", category: "Cloud" },
  { name: "Prometheus", category: "Observability" },
  { name: "Grafana", category: "Observability" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Python / FastAPI", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Nginx", category: "Networking" }
];

export const services = [
  {
    id: 1,
    title: "Cloud & Infrastructure as Code",
    description: "Designing and deploying production-ready hybrid cloud clusters with Proxmox, OCI, and Terraform, ensuring reproducibility, automated provisioning, and high availability.",
    icon: "Cloud"
  },
  {
    id: 2,
    title: "Kubernetes & GitOps Automation",
    description: "Orchestrating containerized workloads with K3s and implementing true GitOps with Argo CD App-of-Apps, declarative state management, and self-healing rollouts.",
    icon: "Cpu"
  },
  {
    id: 3,
    title: "Continuous Integration & Delivery",
    description: "Building automated end-to-end CI/CD pipelines with Jenkins and Docker for fast, reliable testing, automated builds, and zero-downtime deployment.",
    icon: "GitBranch"
  },
  {
    id: 4,
    title: "Full-Stack Web Development",
    description: "Creating responsive, aesthetic, and lightning-fast web applications using React, modern JavaScript/TypeScript, and scalable backend APIs.",
    icon: "Layout"
  },
  {
    id: 5,
    title: "Observability & SRE Telemetry",
    description: "Architecting full-stack monitoring meshes with Prometheus metrics collection, Grafana visualization dashboards, and proactive system health alerts.",
    icon: "Activity"
  }
];

export const projects = [
  {
    id: 1,
    title: "Enterprise Hybrid Cloud & GitOps Mesh",
    description: "10-node hybrid cloud topology connecting on-premise Proxmox VE hypervisors with Oracle Cloud Infrastructure. Managed declaratively using K3s, Argo CD App-of-Apps, and automated Jenkins CI/CD.",
    category: "Cloud & DevOps",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    technologies: ["Kubernetes", "Argo CD", "Terraform", "Ansible", "OCI", "Proxmox", "Prometheus"],
    github: "https://github.com/ABHISHEK-CLOUD1/Devops-lab"
  },
  {
    id: 2,
    title: "Automated Multi-Stage CI/CD Engine",
    description: "Production Jenkins automation engine executing Terraform infrastructure validation, multi-stage Docker builds, image distribution, and zero-downtime service synchronization.",
    category: "CI/CD & Automation",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
    technologies: ["Jenkins", "Docker", "Ansible", "Bash", "Linux"],
    github: "https://github.com/ABHISHEK-CLOUD1/Devops-lab"
  },
  {
    id: 3,
    title: "Modern Developer Portfolio & Web Platform",
    description: "Production React single-page application with automated FormSubmit notification engine, Cloudflare zero-trust edge delivery, and Dockerized multi-stage container build.",
    category: "Full Stack & Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "Tailwind CSS", "Docker", "Cloudflare", "Nginx"],
    github: "https://github.com/ABHISHEK-CLOUD1/app"
  },
  {
    id: 4,
    title: "Hybrid Observability & Telemetry Mesh",
    description: "Centralized Prometheus TSDB scraping 11 hybrid targets across local hypervisors and public cloud VMs with real-time Grafana dashboards.",
    category: "SRE & Monitoring",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Prometheus", "Grafana", "cAdvisor", "Node Exporter"],
    github: "https://github.com/ABHISHEK-CLOUD1/Devops-lab"
  }
];

export const stats = [
  { label: "Hybrid Nodes Managed", value: "10+" },
  { label: "GitOps Automated", value: "100%" },
  { label: "Completed Projects", value: "25+" },
  { label: "Uptime Reliability", value: "99.9%" }
];
