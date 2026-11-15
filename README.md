# Abhishek Mishra — Software Engineer Portfolio Website

A modern, responsive, high-performance personal portfolio web application built for showcasing software engineering projects, technical skillsets, and digital experiences.

---

## 🚀 Live Deployments & Infrastructure

| Environment | Platform | Access Endpoint | Architecture |
|---|---|---|---|
| **Cloud (Production)** | Netlify Edge | [Netlify Live](https://netlify.com) | Global Edge CDN Serverless |
| **On-Prem (Docker Node)** | Proxmox VE (`CT108`) | [http://192.168.155.139:8080/](http://192.168.155.139:8080/) | Docker Alpine Container on CT108 |
| **GitOps Control Plane** | Argo CD & K3s (`CT109`) | [https://192.168.155.142:30443](https://192.168.155.142:30443) | Declarative K3s Deployment & Service |
| **CI/CD Pipeline** | Jenkins (`CT102`) | [http://10.10.10.102:8080/](http://10.10.10.102:8080/) | Automated Git polling, Docker build & Argo CD sync |

---

## 🛠️ Technology Stack

- **Core Framework**: [React 19](https://react.dev/)
- **Build Tooling**: [CRACO](https://craco.js.org/) (Create React App Configuration Override) + Yarn 1.22
- **Styling & Design**: [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **UI Components & Icons**:
  - [Radix UI](https://www.radix-ui.com/) accessible component primitives (Dialogs, Dropdowns, Tabs, Tooltips)
  - [Lucide React](https://lucide.dev/) modern iconography
  - [Sonner](https://sonner.emilkowal.ski/) toast notifications
  - [Recharts](https://recharts.org/) charting library
- **Production Web Server**: [Nginx Alpine](https://nginx.org/) with Single-Page Application (SPA) routing
- **Containerization**: Multi-stage Docker image (`abhis01/abhi-web-app:latest`)

---

## 📁 Repository Structure

```
.
├── Dockerfile                  # Multi-stage production build (Node 22 Alpine + Nginx)
├── nginx.conf                  # Nginx server configuration with SPA routing fallback
├── netlify.toml                # Netlify deployment configuration
├── package.json                # Root package configuration
├── frontend/                   # React Frontend Application
│   ├── package.json            # React dependencies & CRACO build scripts
│   ├── craco.config.js         # CRACO Webpack configuration
│   ├── tailwind.config.js      # Tailwind design system configuration
│   ├── public/                 # Static assets & index.html
│   └── src/                    # React components, pages, hooks, and lib
│       ├── App.js              # Primary layout & routing
│       ├── index.js            # React 19 root entrypoint
│       ├── index.css           # Tailwind directives & global styling
│       ├── components/         # Reusable UI component library
│       └── hooks/              # Custom React hooks
└── README.md                   # Project documentation
```

---

## 💻 Local Development

### Prerequisites
- Node.js 20 or Node.js 22
- Yarn (`corepack enable && corepack prepare yarn@1.22.22 --activate`)

### Setup & Run
```bash
# Clone the repository
git clone https://github.com/ABHISHEK-CLOUD1/app.git
cd app/frontend

# Install dependencies
yarn install

# Start development server
yarn start
```
The application will open automatically at [http://localhost:3000](http://localhost:3000).

---

## 🐳 Docker Production Build & Deployment

The application features a production-ready, multi-stage `Dockerfile`:
1. **Build Stage (`node:22-alpine`)**: Uses Yarn to compile optimized static assets with gzip compression.
2. **Runtime Stage (`nginx:alpine`)**: Serves compiled assets with immutable cache headers and SPA route fallbacks.

### 1. Build Docker Image
```bash
docker build -t abhis01/abhi-web-app:latest .
```

### 2. Run Container
```bash
docker run -d \
  --name my-custom-website \
  -p 8080:80 \
  --restart unless-stopped \
  abhis01/abhi-web-app:latest
```

### 3. Verify Health
```bash
curl -I http://localhost:8080/
# HTTP/1.1 200 OK
```

---

## 🔄 CI/CD & GitOps Integration

This repository is deeply integrated with the [Devops-lab](https://github.com/ABHISHEK-CLOUD1/Devops-lab) hybrid infrastructure:

```
[Developer Push to ABHISHEK-CLOUD1/app]
           │
           ▼
[Jenkins SCM Polling on CT102]
           │
           ▼
[Ansible deploy-app.yml playbook]
 ├── 1. Clones/pulls latest code to Docker Host (CT108)
 ├── 2. Runs docker build -t abhis01/abhi-web-app:latest
 ├── 3. Deploys container on port 8080 (my-custom-website)
 ├── 4. Streams image to K3s containerd runtime (CT109)
 └── 5. Triggers argocd app sync portfolio-website
           │
           ▼
[Argo CD confirms Health: Synced & Healthy]
```

---

## 👤 Author

**Abhishek Mishra**
- Software Engineer & DevOps Enthusiast
- GitHub: [@ABHISHEK-CLOUD1](https://github.com/ABHISHEK-CLOUD1)
