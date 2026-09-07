/**
 * ============================================================================
 * NEXUS PRO — MASTER PORTFOLIO & AGENCY CONFIGURATION
 * ============================================================================
 * 
 * ThemeForest Customer Customization Guide:
 * Edit this single file to customize 100% of your portfolio content!
 * You do NOT need to edit any React code or components.
 */

export const portfolioConfig = {
  // Demo Switcher Settings (Set showDemoSwitcher to false before submitting/deploying)
  demoSettings: {
    showDemoSwitcher: true,
    defaultPreset: "developer", // "developer" | "designer" | "freelancer" | "agency" | "executive"
    defaultTheme: "dark",      // "dark" | "light" | "system"
    defaultAccent: "violet",   // "emerald" | "violet" | "cyan" | "amber" | "rose"
  },

  // Personal / Agency Core Profile Information
  personal: {
    name: "Alex Morgan",
    headline: "Building Scalable Digital Products & Creative Web Experiences",
    role: "Senior Full Stack Engineer & Creative Developer",
    status: {
      available: true,
      text: "Available for Q3/Q4 Contracts & Remote Roles",
    },
    location: "San Francisco, CA (Open to Worldwide Remote)",
    email: "alex.morgan@example.com",
    phone: "+1 (555) 234-5678",
    avatar: "/assets/profile_portrait.jpg",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    resumeUrl: "/assets/Alex_Morgan_CV_Resume.pdf",
    shortBio: "Architecting high-performance web applications, cloud microservices, and modern user interfaces with modern React ecosystems.",
    fullBio: [
      "I am a Senior Full Stack Engineer with over 8 years of experience building resilient web applications, developer tools, and high-converting creative web experiences.",
      "My work focuses on clean architectural patterns, type safety, modular design systems, and blistering 100/100 performance across mobile and desktop interfaces.",
      "When I'm not coding, I contribute to open-source tools, write technical insights on modern web development, and mentor junior engineers."
    ],
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "Twitter / X", url: "https://twitter.com", icon: "twitter" },
      { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
      { name: "WhatsApp", url: "https://wa.me/15552345678", icon: "whatsapp" },
      { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
      { name: "GitHub", url: "https://github.com", icon: "github" }
    ]
  },

  // Statistics Highlights Counter Cards
  stats: [
    { id: 1, label: "Years Experience", value: "8+", highlight: "Continuous Growth" },
    { id: 2, label: "Completed Projects", value: "48+", highlight: "Enterprise & Startups" },
    { id: 3, label: "Happy Clients", value: "35+", highlight: "100% Satisfaction" },
    { id: 4, label: "Code Commits", value: "14.2k", highlight: "Active Contributor" }
  ],

  // Skills Bento Categories & Badges
  skillCategories: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: "Code2",
      skills: [
        { name: "React 19 / Next.js", level: "Expert", years: "7 yrs", icon: "Atom" },
        { name: "TypeScript", level: "Expert", years: "6 yrs", icon: "FileCode" },
        { name: "Tailwind CSS v4", level: "Expert", years: "5 yrs", icon: "Palette" },
        { name: "Vue.js / Nuxt", level: "Advanced", years: "4 yrs", icon: "Layers" },
        { name: "Three.js / WebGL", level: "Intermediate", years: "2 yrs", icon: "Box" },
        { name: "HTML5 / CSS3 / SASS", level: "Expert", years: "8 yrs", icon: "Globe" }
      ]
    },
    {
      id: "backend",
      title: "Backend & Systems",
      icon: "Server",
      skills: [
        { name: "Node.js / Express", level: "Expert", years: "7 yrs", icon: "Server" },
        { name: "Python / FastApi", level: "Advanced", years: "4 yrs", icon: "Terminal" },
        { name: "PostgreSQL / Prisma", level: "Expert", years: "6 yrs", icon: "Database" },
        { name: "GraphQL & REST APIs", level: "Expert", years: "6 yrs", icon: "Network" },
        { name: "Redis & Caching", level: "Advanced", years: "4 yrs", icon: "Zap" },
        { name: "Go (Golang)", level: "Intermediate", years: "2 yrs", icon: "Cpu" }
      ]
    },
    {
      id: "devops",
      title: "Cloud & DevOps",
      icon: "Cloud",
      skills: [
        { name: "AWS (S3, Lambda, EC2)", level: "Advanced", years: "5 yrs", icon: "Cloud" },
        { name: "Docker & Containers", level: "Advanced", years: "4 yrs", icon: "Container" },
        { name: "Vercel / Netlify", level: "Expert", years: "6 yrs", icon: "Globe" },
        { name: "CI/CD Pipelines", level: "Advanced", years: "5 yrs", icon: "GitBranch" },
        { name: "Supabase & Firebase", level: "Expert", years: "5 yrs", icon: "Database" }
      ]
    },
    {
      id: "design",
      title: "UI/UX & Product Design",
      icon: "Figma",
      skills: [
        { name: "Figma / Design Systems", level: "Expert", years: "6 yrs", icon: "Figma" },
        { name: "User Research & Wireframing", level: "Advanced", years: "5 yrs", icon: "Layout" },
        { name: "Prototyping & Motion", level: "Advanced", years: "4 yrs", icon: "Sparkles" },
        { name: "Accessibility (WCAG 2.1)", level: "Expert", years: "5 yrs", icon: "Eye" }
      ]
    }
  ],

  // Featured Projects & Full Portfolio Data
  projects: [
    {
      id: "nexus-analytics",
      slug: "nexus-analytics-platform",
      title: "Nexus Enterprise AI Analytics",
      category: "Web App",
      subcategory: "SaaS / Fintech",
      featured: true,
      popular: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80"
      ],
      summary: "A real-time financial analytics dashboard powered by AI forecasting, custom web sockets, and high-frequency charts.",
      description: "Nexus Analytics is a high-speed data intelligence platform designed for fintech institutions and quantitative traders. Features live WebSocket streaming, drag-and-drop bento widgets, exportable PDF reports, and real-time anomaly detection.",
      challenge: "Processing over 50,000 live data events per second while maintaining 60fps chart rendering and zero UI freeze on mobile browser targets.",
      solution: "Implemented Web Workers for off-main-thread data parsing, coupled with Canvas 2D charting routines and strict React memoization.",
      metrics: [
        { label: "Performance Score", value: "99/100" },
        { label: "Data Processing", value: "50k ms/sec" },
        { label: "User Retention", value: "+42%" }
      ],
      tags: ["React 19", "TypeScript", "Tailwind CSS", "Chart.js", "WebSockets", "Node.js"],
      liveUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/example/nexus-analytics",
      date: "2026",
      client: "Fintech Global Corp"
    },
    {
      id: "aura-design-system",
      slug: "aura-design-system",
      title: "Aura UI & Token System",
      category: "Design System",
      subcategory: "UI / Open Source",
      featured: true,
      popular: false,
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80"
      ],
      summary: "An accessible, themeable UI component library with 60+ React components, Tailwind tokens, and Figma variants.",
      description: "Aura Design System was created to bridge design and engineering workflows. Built with strict WCAG AA standards, dark mode persistence, and seamless copy-paste component snippets.",
      challenge: "Creating a flexible component API that supports custom brand tokens without causing bundle size inflation.",
      solution: "Utilized zero-runtime CSS custom variables combined with Tailwind utility composition.",
      metrics: [
        { label: "Downloads", value: "120k+" },
        { label: "GitHub Stars", value: "3.4k" },
        { label: "WCAG Compliance", value: "AA Pass" }
      ],
      tags: ["React", "Tailwind CSS", "Figma", "Storybook", "Radix UI"],
      liveUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/example/aura-ui",
      date: "2025",
      client: "Open Source Community"
    },
    {
      id: "hyper-ecommerce",
      slug: "hyper-ecommerce-storefront",
      title: "HyperShop Headless Commerce",
      category: "Web App",
      subcategory: "E-Commerce",
      featured: true,
      popular: true,
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80"
      ],
      summary: "Ultra-fast headless commerce platform with instant search, multi-currency support, and smooth page transitions.",
      description: "HyperShop delivers sub-second page loads for high-volume luxury retail brands. Features instant search via Algolia, dynamic multi-currency cart state, and seamless Stripe checkout integration.",
      challenge: "Optimizing image loading and dynamic product inventory state across 10,000 SKUs.",
      solution: "Implemented incremental static regeneration, next-gen AVIF image formatting, and optimistic UI cart updates.",
      metrics: [
        { label: "Page Load", value: "0.4s" },
        { label: "Conversion Lift", value: "+28%" }
      ],
      tags: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Stripe", "GraphQL"],
      liveUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/example/hypershop",
      date: "2025",
      client: "Luxury Attire Co."
    },
    {
      id: "quantum-mobile-app",
      slug: "quantum-fitness-mobile",
      title: "Quantum AI Fitness Tracker",
      category: "Mobile",
      subcategory: "iOS & Android App",
      featured: false,
      popular: true,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
      ],
      summary: "Cross-platform health and activity tracker featuring custom biometric motion tracking algorithms.",
      description: "Quantum Fitness helps athletes track biomechanics and recovery metrics in real time. Includes offline data synchronization and social workout challenges.",
      challenge: "Ensuring low battery consumption during continuous background GPS tracking.",
      solution: "Developed an adaptive sensor polling engine in Native C++ bridges for React Native.",
      metrics: [
        { label: "Active Users", value: "85k" },
        { label: "App Store Rating", value: "4.9 / 5.0" }
      ],
      tags: ["React Native", "TypeScript", "Tailwind / NativeWind", "SQLite"],
      liveUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/example/quantum-app",
      date: "2025",
      client: "Quantum Labs"
    },
    {
      id: "zenith-agency-site",
      slug: "zenith-agency-redesign",
      title: "Zenith Creative Agency",
      category: "Design",
      subcategory: "Brand & Web",
      featured: false,
      popular: false,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
      ],
      summary: "Interactive award-winning website for a global design & advertising agency with smooth scroll animations.",
      description: "Designed and engineered an immersive portfolio site for Zenith Agency, featuring smooth GSAP scroll triggers, custom cursor interactions, and responsive video showcases.",
      challenge: "Maintaining smooth 60fps animations across low-powered mobile devices.",
      solution: "Implemented CSS hardware-accelerated transforms and dynamic animation throttling.",
      metrics: [
        { label: "Site Awards", value: "3x Awwwards" },
        { label: "Avg Session", value: "4m 12s" }
      ],
      tags: ["React", "Framer Motion", "GSAP", "Tailwind CSS"],
      liveUrl: "https://example.com/demo5",
      githubUrl: "https://github.com/example/zenith-site",
      date: "2024",
      client: "Zenith Global"
    }
  ],

  // Professional Experience & Career Timeline
  experience: [
    {
      id: 1,
      role: "Lead Full Stack Engineer",
      company: "Vanguard Tech Solutions",
      companyUrl: "https://example.com",
      location: "San Francisco, CA",
      period: "2023 — Present",
      type: "Full-Time",
      description: "Leading frontend architecture and cloud integrations for enterprise client applications. Managing a cross-functional team of 6 engineers.",
      achievements: [
        "Architected core React micro-frontends serving over 1.2M monthly active users.",
        "Reduced initial bundle sizes by 44% through code splitting and tree-shaking optimizations.",
        "Established automated E2E and visual regression test suites reducing regression bugs by 65%."
      ],
      skills: ["React 19", "TypeScript", "AWS", "Next.js", "GraphQL", "Docker"]
    },
    {
      id: 2,
      role: "Senior Frontend Engineer",
      company: "Apex Digital Product Studio",
      companyUrl: "https://example.com",
      location: "New York, NY (Remote)",
      period: "2021 — 2023",
      type: "Full-Time",
      description: "Designed and built high-performance web applications and design systems for Series A and B tech startups.",
      achievements: [
        "Spearheaded the development of 8 custom SaaS client platforms from zero to production launch.",
        "Built internal reusable React UI component library used across 12 product teams.",
        "Mentored junior developers and conducted technical code reviews."
      ],
      skills: ["React", "Tailwind CSS", "Redux Toolkit", "Node.js", "Figma", "Jest"]
    },
    {
      id: 3,
      role: "Full Stack Software Developer",
      company: "Orbit Interactive Agency",
      companyUrl: "https://example.com",
      location: "Austin, TX",
      period: "2019 — 2021",
      type: "Full-Time",
      description: "Built custom client web portals, e-commerce storefronts, and RESTful API backends.",
      achievements: [
        "Developed custom e-commerce integrations generating over $4M in online revenue.",
        "Migrated legacy jQuery codebase to modern React SPA architecture."
      ],
      skills: ["JavaScript (ES6+)", "React", "Node.js", "PostgreSQL", "SASS", "Git"]
    },
    {
      id: 4,
      role: "UI/UX & Product Design Specialist",
      company: "Aura Design Labs",
      companyUrl: "https://example.com",
      location: "San Francisco, CA",
      period: "2018 — 2019",
      type: "Full-Time",
      description: "Created user flows, interactive prototypes, and design systems for enterprise SaaS products.",
      achievements: [
        "Designed accessible WCAG 2.1 design systems used by over 30 external client teams.",
        "Conducted over 50 qualitative user research sessions improving conversion rates by 35%."
      ],
      skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Tokens", "Design Systems"]
    },
    {
      id: 5,
      role: "Junior Web Application Engineer",
      company: "PixelCraft Studios",
      companyUrl: "https://example.com",
      location: "Berkeley, CA",
      period: "2017 — 2018",
      type: "Full-Time",
      description: "Engineered responsive client websites, interactive web animations, and CMS templates.",
      achievements: [
        "Built 15+ responsive client marketing portals with sub-second page load times.",
        "Collaborated closely with design team to convert PSD/Figma wireframes into clean HTML/CSS/JS."
      ],
      skills: ["JavaScript", "HTML5", "CSS3 / SASS", "Git", "REST APIs", "Bootstrap"]
    }
  ],

  // High-Impact Career Performance Metrics
  impactMetrics: [
    { id: 1, metric: "1.2M+", label: "Monthly Active Users", description: "Architected micro-frontends serving global SaaS users.", icon: "Users" },
    { id: 2, metric: "65%", label: "Bug Reduction Rate", description: "Enforced automated E2E & visual regression suites.", icon: "ShieldCheck" },
    { id: 3, metric: "44%", label: "Bundle Size Slash", description: "Optimized tree-shaking & dynamic chunk loading.", icon: "Zap" },
    { id: 4, metric: "$4M+", label: "E-Commerce Revenue", description: "Engineered headless storefront checkout integrations.", icon: "TrendingUp" }
  ],

  // Engineering Standards & Methodology Matrix
  engineeringStandards: [
    {
      id: "architecture",
      title: "Scalable Micro-Frontend Architecture",
      desc: "Decoupled component modules allowing independent deployment pipelines and zero cross-team friction.",
      icon: "Cpu"
    },
    {
      id: "performance",
      title: "100/100 Core Web Vitals & 60fps",
      desc: "Sub-second initial renders, layout shift elimination, and Web Worker background data processing.",
      icon: "Activity"
    },
    {
      id: "automation",
      title: "DevOps & Automated CI/CD Testing",
      desc: "Strict type safety, automated Cypress/Playwright tests, and zero-downtime Vercel/AWS deployments.",
      icon: "GitBranch"
    },
    {
      id: "leadership",
      title: "Cross-Functional Agile Leadership",
      desc: "Sprint planning, technical code reviews, design token handoffs, and mentoring junior engineers.",
      icon: "Award"
    }
  ],

  // Education & Certifications
  education: [
    {
      id: 1,
      degree: "B.S. in Computer Science & Software Engineering",
      institution: "University of California, Berkeley",
      period: "2015 — 2019",
      description: "Graduated with Honors. Focused on Distributed Systems, Algorithms, and Human-Computer Interaction (HCI)."
    },
    {
      id: 2,
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      period: "Issued 2024",
      description: "Certified in cloud infrastructure design, security compliance, and microservice deployment."
    }
  ],

  // Commercial Services Grid
  services: [
    {
      id: "web-development",
      title: "Full Stack Web Development",
      icon: "Code",
      summary: "Custom React web apps, SaaS platforms, and enterprise web solutions built for speed and scaling.",
      deliverables: [
        "React / Next.js Web Applications",
        "RESTful & GraphQL API Integration",
        "Database Architecture & Optimization",
        "Performance Tuning & Core Web Vitals"
      ],
      startingPrice: "$2,500"
    },
    {
      id: "ui-ux-design",
      title: "UI/UX & Product Design",
      icon: "Layout",
      summary: "User-centered interface design, interactive prototypes, and scalable design token systems.",
      deliverables: [
        "Wireframing & User Journey Mapping",
        "Figma Design Systems & Tokens",
        "Interactive Clickable Prototypes",
        "Accessibility (WCAG 2.1) Audits"
      ],
      startingPrice: "$1,800"
    },
    {
      id: "mobile-development",
      title: "Cross-Platform Mobile Apps",
      icon: "Smartphone",
      summary: "Native-quality mobile applications for iOS and Android built with React Native and clean state management.",
      deliverables: [
        "iOS & Android Mobile Applications",
        "Offline-first SQLite / Realm Data Sync",
        "App Store & Google Play Publishing",
        "Push Notifications & Analytics Integration"
      ],
      startingPrice: "$3,200"
    },
    {
      id: "technical-consulting",
      title: "Technical Audits & Advisory",
      icon: "ShieldCheck",
      summary: "Code reviews, security & performance audits, and modernizing legacy codebases for growth.",
      deliverables: [
        "Comprehensive Frontend Code Audits",
        "Lighthouse & Core Web Vitals Optimization",
        "Developer Team Workflow & CI/CD Setup",
        "Architectural Migration Roadmaps"
      ],
      startingPrice: "$1,200"
    }
  ],

  // Client Testimonials
  testimonials: [
    {
      id: 1,
      quote: "Alex transformed our complex SaaS dashboard concept into a sleek, lightning-fast React application. Our users constantly praise the intuitive UI and rapid response time.",
      author: "Sarah Jenkins",
      title: "VP of Product",
      company: "Fintech Global",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      id: 2,
      quote: "Working with Alex was a dream. Code quality is top-notch, communication was crystal clear, and the final deliverable exceeded our expectations on time and budget.",
      author: "Marcus Chen",
      title: "Founder & CEO",
      company: "Nexus Labs",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      id: 3,
      quote: "Alex has a rare dual talent: deep technical engineering precision combined with a keen eye for high-end UI design. Will definitely hire again!",
      author: "Elena Rostova",
      title: "Design Director",
      company: "Aura Creative Studio",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      id: 4,
      quote: "Financial planners help people knowledge about how to invest and save money in the most efficient way ever. Exceptional attention to detail and 60fps animations!",
      author: "Theresa Webb",
      title: "UI/UX Specialist",
      company: "Horizon Systems",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      id: 5,
      quote: "The micro-frontend architecture built by Alex reduced our page latency by 60% and allowed our engineering teams to deploy independently with confidence.",
      author: "David Miller",
      title: "CTO",
      company: "CloudScale Systems",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      id: 6,
      quote: "Our e-commerce conversion rates jumped 32% within 3 weeks of launching the new headless Next.js storefront. Outstanding craftsmanship and delivery.",
      author: "Jessica Vance",
      title: "Head of Growth",
      company: "Zenith Commerce",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ],

  // Blog Posts & Technical Articles
  blog: [
    {
      id: 1,
      slug: "building-performant-react-19-apps",
      title: "Mastering React 19: Performance Patterns for Enterprise Web Apps",
      category: "Engineering",
      date: "May 12, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Explore practical strategies for optimizing React 19 applications, leveraging Server Components, dynamic imports, and memory-safe state management.",
      content: `
### Introduction

Building enterprise React applications requires balancing rich interactive UI with fast load speeds and minimal memory overhead. In this guide, we dive into proven architectural patterns that keep your Lighthouse scores at 100.

### 1. Code Splitting Beyond Page Routes

Most developers stop at splitting routes using React.lazy. However, component-level lazy loading for heavy modals, charts, and syntax highlighters can slash your initial bundle size by over 40%.

### 2. Eliminating Unnecessary Re-renders

Use memoization strategically. Avoid passing inline arrow functions into deeply nested list components to preserve virtual DOM diffing efficiency.

### Conclusion

Performance isn't an afterthought—it's a core feature. By enforcing bundle budgets and measuring render metrics during CI/CD, you ensure long-term stability.
      `
    },
    {
      id: 2,
      slug: "bento-grid-design-system-guide",
      title: "Designing Bento Grids: Aesthetic & Layout Architecture",
      category: "UI/UX Design",
      date: "April 28, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Why Bento Grid layouts are dominating modern web design and how to construct flexible 12-column responsive bento boxes with CSS Grid.",
      content: `
### The Rise of Bento UI

Bento grids organize modular content cards into visually compelling, digestible chunks inspired by Japanese bento boxes.

### Key Rules for Great Bento Layouts

1. Varied Visual Hierarchy: Mix 1x1, 2x1, and 2x2 grid spans.
2. Consistent Gap Ratios: Standardize on fluid spacing tokens like gap-4 md:gap-6.
3. Interactive Illumination: Add subtle hover borders that react to cursor position.
      `
    },
    {
      id: 3,
      slug: "clean-architecture-in-react-apps",
      title: "Clean Architecture in Modern React Applications",
      category: "Architecture",
      date: "March 15, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Decoupling business logic from React components using custom hooks, domain models, and API service providers.",
      content: `
### Why Decouple React Components?

Tightly coupling API fetching logic directly inside visual components creates brittle codebases that are painful to refactor.

By encapsulating data access inside clean service interfaces, your components remain focused purely on presentation.
      `
    },
    {
      id: 4,
      slug: "building-ai-powered-web-applications",
      title: "Architecting Real-Time AI Web Interfaces with WebSockets & LLMs",
      category: "AI & Cloud",
      date: "June 02, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Engineering responsive streaming AI interfaces with Server-Sent Events, WebSockets, and zero-latency client state UI updates.",
      content: `
### Streaming AI Responses in Modern Web Apps

Traditional HTTP POST polling fails to deliver the fluid typing experience users expect from modern AI copilots.

Using Server-Sent Events (SSE) and chunked text streaming, we can render generated tokens in real-time at 60fps.
      `
    },
    {
      id: 5,
      slug: "sub-second-lighthouse-performance-guide",
      title: "Achieving 100/100 Core Web Vitals: A Complete Engineering Guide",
      category: "Performance",
      date: "June 18, 2026",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Eliminating layout shifts (CLS), reducing interaction to next paint (INP), and optimizing largest contentful paint (LCP).",
      content: `
### The 3 Golden Rules of Web Vitals Optimization

1. Preload critical hero assets and inline essential typography fonts.
2. Eliminate main thread blocking JavaScript by offloading heavy computations to Web Workers.
3. Reserve explicit image and container aspect ratios to prevent cumulative layout shifts.
      `
    },
    {
      id: 6,
      slug: "cross-platform-react-native-architecture",
      title: "Scalable State Management in Cross-Platform React Native Apps",
      category: "Mobile",
      date: "July 04, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Building unified mobile state architectures for iOS and Android with SQLite offline sync and optimistic UI updates.",
      content: `
### Offline-First Architecture

Mobile users operate in fluctuating network environments. Designing an offline-first data layer ensures zero data loss during intermittent internet access.
      `
    }
  ],

  // Contact Page & Form Configuration
  contact: {
    title: "Let's Build Something Exceptional Together",
    subtitle: "Have a project idea, contract position, or technical question? Feel free to reach out directly.",
    formspreeEndpoint: "https://formspree.io/f/xbjnqpkz", // Replace with buyer's Formspree endpoint
    directEmail: "alex.morgan@example.com",
    location: "San Francisco, CA (PST / UTC-7)",
    availability: "Accepting new client projects for Q3/Q4 2026",
    socialLinksTitle: "Connect on Social Media"
  }
};
