# Abhishek Mishra — Cloud, DevOps & Full-Stack Developer Platform

[![Production Status](https://img.shields.io/badge/Status-Operational%20%2F%20Live-brightgreen)](https://abhishek-cloud1.github.io/app/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20To-GitHub%20Pages-blue?logo=github)](https://abhishek-cloud1.github.io/app/)
[![Docker Host](https://img.shields.io/badge/Docker%20Node-CT108%20Proxmox-E57000?logo=docker)](http://192.168.155.139:8080/)
[![GitOps Engine](https://img.shields.io/badge/GitOps-Argo%20CD%20v3.6.1-EF7B4D?logo=argo)](https://192.168.155.142:30443)
[![CI/CD Pipeline](https://img.shields.io/badge/CI%2FCD-Jenkins%20Automated-D24939?logo=jenkins)](http://10.10.10.102:8080/)
[![Frontend](https://img.shields.io/badge/Frontend-React%2019%20%2B%20Tailwind%203.4-61DAFB?logo=react)](https://react.dev)
[![Email Engine](https://img.shields.io/badge/Notification-FormSubmit%20AJAX-008080)](https://formsubmit.co)

A high-performance personal portfolio and developer platform built with **React 19**, **Tailwind CSS**, and modern web engineering standards. The platform is continuously deployed across both global cloud edge CDNs and a private, self-hosted **Proxmox VE** hybrid homelab.

---

## 🌐 Live Endpoints & Multi-Channel Deployment Mesh

| Environment / Channel | Platform & Routing | Endpoint URL | Status / Description |
|---|---|---|---|
| **Global Edge (Recommended)** | **GitHub Pages** (Fastly Global CDN) | [https://abhishek-cloud1.github.io/app/](https://abhishek-cloud1.github.io/app/) | 🟢 **Live & Verified** — Zero gates, permanent, instant load |
| **Local Homelab (Docker)** | **Proxmox VE CT108** (`10.10.10.108`) | [http://192.168.155.139:8080/](http://192.168.155.139:8080/) | 🟢 **Live** — Self-hosted on 2GB RAM container with Nginx SPA |
| **Cloudflare Zero-Trust Edge** | **Cloudflare Tunnel** (`cloudflared`) | [Cloudflare Live Tunnel](https://necessary-lauderdale-behaviour-profits.trycloudflare.com) | 🟢 **Live** — Direct HTTPS reverse tunnel into CT108 container |
| **Named Quick Tunnel** | **Localtunnel** (`loca.lt`) | [https://abhishekmishra.loca.lt](https://abhishekmishra.loca.lt) | 🟢 **Live** — Custom name tunnel (requires one-time IP click) |
| **GitOps Control Plane** | **Argo CD & K3s (`CT109`)** | [https://192.168.155.142:30443](https://192.168.155.142:30443) | 🟢 **Healthy / Synced** — Application `portfolio-website` |
| **Continuous Integration** | **Jenkins Engine (`CT102`)** | [http://10.10.10.102:8080/](http://10.10.10.102:8080/) | 🟢 **Build #41 SUCCESS** — Automated SCM polling & sync |

---

## 🎨 Architectural & UI/UX Design System

### 1. Aesthetic Design Language
* **Color Palette**: Deep space obsidian theme (`#030712`) paired with dynamic cyan (`#22d3ee`) and violet (`#a855f7`) atmospheric radial glows.
* **Hero Section**:
  * Removed all legacy full-bleed user photos for a modern, high-contrast, developer-first presentation.
  * **Interactive Unix Telemetry Card**: A macOS-styled terminal window rendering live system telemetry (`abhishek@hybrid-mesh:~`), status (`10/10 nodes healthy`, K3s, Argo CD v3.6.1, Jenkins, Prometheus), and engineering philosophy.
  * **Live Availability Badge**: Animated pulsing radar pill (`🟢 Available for Projects & Full-Time Roles • Hybrid Cloud • GitOps`).
  * **Impact Metrics Banner**: Highlights 10+ Hybrid Nodes Managed, 100% GitOps Automation, 25+ Completed Projects, and 99.9% Uptime Reliability.
* **Ergonomic Cursor**: Restored native responsive pointer controls (removed blocking `cursor: none` hacks) for crisp interaction on desktop, tablet, and mobile.

### 2. Automated Contact & Email Notification Engine
* **FormSubmit Integration**: Submissions in the **"Get In Touch"** section make asynchronous AJAX `POST` requests to `https://formsubmit.co/ajax/abhishek010601@gmail.com`.
* **Structured Payload**: Form data is packaged as a structured email template including sender Name, Email, Subject, and detailed Message.
* **One-Time Activation Handling**: Intelligent UI detection informs the administrator when an activation link is dispatched.
* **Direct Fallback**: Secondary one-click direct `mailto:` client button and direct social cards (LinkedIn, GitHub, Instagram).

### 3. Subpath Portability (`/app` and `/`)
* Configured `"homepage": "https://abhishek-cloud1.github.io/app"` in `package.json`.
* Nginx configured with `location /app/` alias and root rewrite, ensuring identical assets resolve properly whether accessed on GitHub Pages, Netlify, or local Docker.
* Includes `.nojekyll` and `404.html` SPA routing fallbacks.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | React 19, JavaScript (ES6+), React DOM |
| **Build System** | CRACO (Create React App Configuration Override), Webpack 5, Corepack + Yarn 1.22 |
| **Styling & Theme** | Tailwind CSS 3.4, PostCSS, Autoprefixer, Google Fonts (*Space Grotesk*, *Space Mono*, *Bebas Neue*) |
| **Component Primitives** | Radix UI (Dialogs, Dropdowns, Tabs, Tooltips, Navigation Menus, Toasters) |
| **Iconography & Graphics** | Lucide React |
| **Production Runtime** | Nginx 1.31 Alpine (Multi-stage build) |
| **Delivery & Edge** | GitHub Pages CDN, Cloudflare Tunnel, Localtunnel, Netlify |

---

## 📂 Repository File Structure

```
├── Dockerfile                  # Multi-stage build (Node 22 Alpine builder -> Nginx Alpine runtime)
├── nginx.conf                  # Nginx production configuration with SPA routing & /app alias
├── netlify.toml                # Netlify deployment configuration
├── package.json                # Project root manifest
├── README.md                   # Comprehensive platform documentation
├── frontend/                   # Frontend React Application
│   ├── package.json            # React dependencies, homepage config & build scripts
│   ├── craco.config.js         # CRACO build customization
│   ├── tailwind.config.js      # Tailwind CSS theme tokens & utility extensions
│   ├── public/
│   │   ├── index.html          # HTML entry point with metadata, preconnects & SEO tags
│   │   └── _redirects          # SPA fallback rules
│   └── src/
│       ├── App.js              # Application root, architectural vertical grid & components
│       ├── index.css           # Global Tailwind tokens, animations, custom scrollbar
│       ├── mock.js             # Structured portfolio datasets, tech stack & projects
│       └── components/
│           ├── Header.jsx      # Fixed glassmorphic navigation with live IST clock
│           ├── Hero.jsx        # Editorial typography, telemetry terminal & stats grid
│           ├── About.jsx       # Technical narrative, competency pills & architecture cards
│           ├── Services.jsx    # 5 structured production capability cards with Lucide icons
│           ├── Projects.jsx    # Featured real-world architectures with repository links
│           ├── Contact.jsx     # FormSubmit email notification engine & direct channels
│           ├── Footer.jsx      # Global footer, copyright, and back-to-top button
│           └── ui/             # Accessible Radix UI design primitives
```

---

## 🚀 Build & Deployment Instructions

### 1. Local Development
```bash
# Navigate to frontend
cd frontend

# Enable Corepack and install dependencies
corepack enable
yarn install

# Start development server
yarn start
# Application runs at http://localhost:3000
```

### 2. Production Build
```bash
cd frontend
yarn build
# Compiled static assets output to frontend/build/
```

### 3. Docker Container Build & Execution
```bash
# Build multi-stage production Docker image
docker build -t abhis01/abhi-web-app:latest .

# Run container on port 8080
docker run -d \
  --name my-custom-website \
  -p 8080:80 \
  --restart always \
  abhis01/abhi-web-app:latest

# Verify container health
curl -I http://localhost:8080/
```

### 4. GitHub Pages Deployment (`gh-pages` branch)
```bash
# From compiled build directory
cd frontend/build
touch .nojekyll
cp index.html 404.html

git init
git checkout -b gh-pages
git add .
git commit -m "Deploy production build to GitHub Pages"
git remote add origin https://github.com/ABHISHEK-CLOUD1/app.git
git push -f origin gh-pages
```

---

## 🔐 Contact & Email Pipeline Verification

To test the automated email dispatch:
1. Open [https://abhishek-cloud1.github.io/app/#contact](https://abhishek-cloud1.github.io/app/#contact).
2. Enter your Name, Email, Subject, and Message.
3. Click **Send Message**.
4. The system sends an AJAX POST to FormSubmit. Upon first run, click the **"Activate Form"** email sent to `abhishek010601@gmail.com`. All subsequent submissions will be delivered instantly to Abhishek's inbox.
