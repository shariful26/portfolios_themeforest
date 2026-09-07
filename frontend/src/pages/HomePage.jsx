import React, { useState } from 'react';
import { motion } from 'motion/react';
import { usePortfolioData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';
import { personaPresets } from '../data/presets';
import { ArrowUpRight, Sparkles, Code2, ArrowRight, Compass, Palette, Play, Cloud, Smartphone, CheckCircle2, UserCheck, MessageSquare, Check, Award, FolderCheck, HeartHandshake, GitCommit } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';
import SectionHeading from '../components/common/SectionHeading';
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from '../components/common/ScrollReveal';
import AnimatedCounter from '../components/common/AnimatedCounter';
import TestimonialSlider from '../components/common/TestimonialSlider';
import ExpertiseList from '../components/common/ExpertiseList';
import WorkflowProcess from '../components/common/WorkflowProcess';

export default function HomePage() {
  const { data } = usePortfolioData();
  const { activePreset, setActivePreset } = useTheme();
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!data) return null;

  const { profile, stats, projects, testimonials } = data;
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribeEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setSubscribeEmail('');
    }
  };

  // Upgraded 6-Card Ultra-Smooth Bento Expertise List
  const expertiseList = [
    {
      id: "strategy",
      title: "Strategy & Direction",
      subtitle: "Product Architecture & UX Research",
      desc: "Understand first. Researching user needs, market positioning, technical feasibility, and architecting scalable digital product roadmaps.",
      icon: Compass,
      metric: "14+ Projects",
      mastery: 98,
      status: "Active Architecture",
      tags: ["User Research", "Product Roadmaps", "System Architecture", "UX Audits"],
      bg: "bg-purple-100/90 dark:bg-purple-950/70 text-purple-600 dark:text-purple-300",
      accentBorder: "group-hover:border-purple-400/60"
    },
    {
      id: "branding",
      title: "Branding & Design Systems",
      subtitle: "UI Tokens & Visual Identity",
      desc: "Position the brand. Crafting memorable visual identities, scalable Figma design token systems, and cohesive UI component libraries.",
      icon: Palette,
      metric: "20+ Systems",
      mastery: 95,
      status: "Figma Token Tokens",
      tags: ["Design Tokens", "Figma Components", "Visual Identity", "Typography"],
      bg: "bg-amber-100/90 dark:bg-amber-950/70 text-amber-600 dark:text-amber-300",
      accentBorder: "group-hover:border-amber-400/60"
    },
    {
      id: "motion",
      title: "Motion & Micro-Interactions",
      subtitle: "Interactive UI & Animations",
      desc: "Communicate to all. Implementing fluid page transitions, subtle tactile micro-interactions, scroll reveal effects, and 60fps animations.",
      icon: Play,
      metric: "35+ Prototypes",
      mastery: 92,
      status: "60fps Smooth",
      tags: ["Framer Motion", "GSAP Animations", "Micro-Interactions", "Lottie"],
      bg: "bg-rose-100/90 dark:bg-rose-950/70 text-rose-600 dark:text-rose-300",
      accentBorder: "group-hover:border-rose-400/60"
    },
    {
      id: "development",
      title: "Development & Cloud APIs",
      subtitle: "Full Stack Engineering & Web Systems",
      desc: "Bringing work to life. Engineering high-performance React web applications, cloud microservices, type-safe APIs, and responsive interfaces.",
      icon: Code2,
      metric: "48+ Apps",
      mastery: 99,
      status: "React 19 & Next.js",
      tags: ["React 19", "TypeScript", "Tailwind CSS v4", "Node & PostgreSQL"],
      bg: "bg-indigo-100/90 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-300",
      accentBorder: "group-hover:border-indigo-400/60"
    },
    {
      id: "devops",
      title: "DevOps & Cloud Infrastructure",
      subtitle: "CI/CD, AWS & Containerization",
      desc: "Scaling systems securely. Managing AWS cloud infrastructure, automated Docker container deployments, CI/CD pipelines, and zero-downtime releases.",
      icon: Cloud,
      metric: "18+ Clusters",
      mastery: 94,
      status: "AWS Certified",
      tags: ["AWS S3 & EC2", "Docker Containers", "CI/CD Pipelines", "Redis Caching"],
      bg: "bg-sky-100/90 dark:bg-sky-950/70 text-sky-600 dark:text-sky-300",
      accentBorder: "group-hover:border-sky-400/60"
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      subtitle: "Cross-Platform iOS & Android Apps",
      desc: "Native quality everywhere. Building fluid cross-platform mobile apps using React Native, offline-first SQLite databases, and smooth native gestures.",
      icon: Smartphone,
      metric: "12+ Apps",
      mastery: 90,
      status: "App Store Ready",
      tags: ["React Native", "NativeWind", "SQLite Sync", "iOS & Android"],
      bg: "bg-emerald-100/90 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-300",
      accentBorder: "group-hover:border-emerald-400/60"
    }
  ];

  return (
    <div className="space-y-24 font-sans">

      {/* ==================================================================== */}
      {/* HERO SECTION — STAGGERED REVEAL & ACCENT ANIMATION                   */}
      {/* ==================================================================== */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 sm:pt-2">
        
        {/* Outer White / Dark Slate Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          className="glass-panel rounded-none p-6 sm:p-12 lg:p-16 relative overflow-hidden bg-white dark:bg-[#0f172a] border border-neutral-200/80 dark:border-slate-800/90 app-frame-shadow"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="lg:col-span-7 space-y-6 text-left"
            >

              {/* Dynamic Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15] font-heading">
                Hey, I'm <span className="text-neutral-900 dark:text-white">{profile?.name || 'Alex Vance'}</span> — a{' '}
                <span className="text-amber-500 dark:text-amber-400 font-extrabold relative inline-block">
                  {profile?.role || 'Digital Specialist'}
                  <motion.span
                    key={activePreset}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-amber-400/80 rounded-full origin-left"
                  />
                </span>.
              </h1>

              {/* Dynamic Bio Subtitle */}
              <p className="text-base sm:text-lg text-neutral-700 dark:text-slate-100 max-w-xl leading-relaxed font-normal">
                {profile?.headline || profile?.shortBio || "Helping ambitious clients turn their ideas into high-impact digital solutions."}
              </p>

              {/* Email Subscription Box */}
              <form onSubmit={handleSubscribe} className="pt-2">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center max-w-md bg-neutral-100/90 dark:bg-slate-800/90 p-1.5 sm:p-1.5 rounded-2xl border border-neutral-200/80 dark:border-slate-700/80 shadow-sm focus-within:ring-2 focus-within:ring-accent/40 transition-all gap-2 sm:gap-0">
                  <input
                    type="email"
                    required
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    placeholder="Email address..."
                    className="w-full px-4 py-2.5 text-xs bg-transparent text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-slate-400 focus:outline-none font-sans"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    className="shrink-0 w-full sm:w-auto"
                  >
                    Subscribe
                  </Button>
                </div>

                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-emerald-500 font-semibold mt-2 flex items-center gap-1.5"
                  >
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Thanks for subscribing! I'll be in touch soon.</span>
                  </motion.p>
                )}

                {/* Sub-text badge with icon */}
                <div className="flex items-center gap-2 mt-4 text-xs text-neutral-600 dark:text-slate-300">
                  <MessageSquare className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Have a project in mind? <Link to="/contact" className="text-neutral-900 dark:text-white font-semibold underline hover:text-accent">Let's talk together!</Link></span>
                </div>
              </form>

              {/* Scroll down indicator */}
              <div className="pt-4 flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-slate-400">
                <Compass className="w-4 h-4 text-amber-500 dark:text-amber-400 animate-spin-slow shrink-0" />
                <span>Explore Portfolio</span>
              </div>

            </motion.div>

            {/* Right Image Cutout inside Avatar Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 sm:-mt-10 lg:-mt-14"
            >
              
              {/* Soft Ambient Glow */}
              <motion.div
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.98, 1.04, 0.98] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
                className="absolute -inset-3 bg-gradient-to-tr from-amber-400/20 to-purple-500/20 rounded-3xl sm:rounded-tl-[220px] sm:rounded-tr-[160px] sm:rounded-bl-[220px] sm:rounded-br-[100px] blur-xl -z-10"
              />

              {/* Floating 16-Dot Grid Pattern Badge */}
              <motion.div
                animate={{ y: [-3, 4, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 sm:top-8 left-2 sm:left-4 z-20 grid grid-cols-4 gap-1.5 p-2 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-lg border border-neutral-200/80 dark:border-slate-700"
              >
                {[...Array(16)].map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-80" />
                ))}
              </motion.div>

              {/* Profile Image Wrapper — Full original spacious sizing */}
              <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-[4/5] bg-neutral-100/40 dark:bg-slate-800/40 rounded-3xl sm:rounded-tl-[220px] sm:rounded-tr-[160px] sm:rounded-bl-[220px] sm:rounded-br-[100px] border border-neutral-200/60 dark:border-slate-700/60 p-2 flex items-end justify-center overflow-hidden group shadow-xl">
                <motion.img
                  key={activePreset}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={profile?.avatar || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"}
                  alt={profile?.name || "Portfolio Owner"}
                  className="w-full h-full object-cover rounded-2xl sm:rounded-tl-[200px] sm:rounded-tr-[140px] sm:rounded-bl-[200px] sm:rounded-br-[80px] drop-shadow-md"
                />
              </div>

            </motion.div>

          </div>

        </motion.div>
      </section>

      {/* ==================================================================== */}
      {/* MY EXPERTISE SECTION — MATCHING REFERENCE DESIGN 100%               */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <ExpertiseList />
      </section>

      {/* ==================================================================== */}
      {/* 4-STEP CLIENT DEVELOPMENT WORKFLOW SECTION                           */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <WorkflowProcess />
      </section>

      {/* ==================================================================== */}
      {/* STATS HIGHLIGHTS BANNER WITH ANIMATED COUNTER & VECTOR ICONS          */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats?.map((st, idx) => {
            const statIcons = [Award, FolderCheck, HeartHandshake, GitCommit];
            const IconComp = statIcons[idx % statIcons.length] || Award;
            const statVariant = idx === 0 ? 'fadeLeft' : idx === 3 ? 'fadeRight' : 'fadeUp';

            return (
              <ScrollReveal key={st.id} variant={statVariant} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="h-full"
                >
                  <Card padding="p-6 sm:p-7" className="card-motion-hover text-center bg-white dark:bg-[#0f172a] border border-neutral-200/80 dark:border-slate-800/90 hover:border-amber-400 dark:hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-2xl group flex flex-col items-center justify-between h-full space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-500 dark:text-amber-400 group-hover:bg-amber-400 group-hover:text-neutral-950 group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <p className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white font-heading group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                      <AnimatedCounter value={st.value} />
                    </p>
                    
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-neutral-900 dark:text-white font-heading leading-tight">
                        {st.label}
                      </p>
                      <p className="text-[11px] font-mono font-semibold text-neutral-500 dark:text-slate-400 uppercase tracking-wider">
                        {st.highlight}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FEATURED PROJECTS SECTION — HOVER ZOOM & STAGGER                     */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fadeUp">
          <SectionHeading
            tag="Selected Work"
            title="Featured Case Studies & Projects"
            subtitle="A showcase of recent commercial web applications, design systems, and digital platforms."
            align="left"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p, idx) => {
            const motionVariant = idx % 3 === 0 ? 'fadeLeft' : idx % 3 === 1 ? 'fadeUp' : 'fadeRight';
            return (
              <ScrollReveal key={p.id} variant={motionVariant} delay={idx * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="h-full"
                >
                  <Card padding="p-0" className="flex flex-col h-full overflow-hidden group bg-white dark:bg-[#0f172a] border border-neutral-200/80 dark:border-slate-800/90 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all">
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-neutral-950/90 text-amber-400 font-extrabold text-xs px-3.5 py-1.5 rounded-full border border-amber-400/80 shadow-xl backdrop-blur-md flex items-center gap-1.5 select-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <span>{p.category}</span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-accent transition-colors font-heading">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm text-neutral-600 dark:text-slate-300 line-clamp-2 leading-relaxed font-sans">
                          {p.summary}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-1.5">
                          {p.tags.slice(0, 4).map((t) => (
                            <span key={t} className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-slate-800 text-neutral-800 dark:text-slate-100 border border-neutral-200/80 dark:border-slate-700/80">
                              {t}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/projects/${p.slug}`}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 group/btn pt-2 tracking-wide"
                        >
                          <span>View Case Study</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal variant="fadeUp" delay={0.2} className="mt-10 text-center">
          <Button to="/projects" variant="outline" size="md" icon={ArrowRight} iconPosition="right">
            View All Projects ({projects.length})
          </Button>
        </ScrollReveal>
      </section>

      {/* ==================================================================== */}
      {/* TESTIMONIALS SLIDER SECTION — EXACT REFERENCE DESIGN 100%           */}
      {/* ==================================================================== */}
      <section className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <ScrollReveal variant="fadeUp">
          <TestimonialSlider testimonials={testimonials} />
        </ScrollReveal>
      </section>

      {/* ==================================================================== */}
      {/* FINAL CONTACT CTA BANNER — SCALE IN                                  */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="scaleIn">
          <Card padding="p-8 sm:p-12" className="text-center relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-transparent to-transparent border border-purple-500/20 dark:border-purple-500/30 bg-white dark:bg-[#0f172a]">
            <div className="max-w-2xl mx-auto space-y-4">
              <Badge variant="accent">Let's Connect</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white font-heading">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-base text-neutral-600 dark:text-slate-300">
                Whether you need a full web application built from scratch, UI design system, or a technical consultation, I'm available to help.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <Button to="/contact" variant="primary" size="lg" icon={ArrowUpRight} iconPosition="right">
                  Get in Touch
                </Button>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </section>

    </div>
  );
}
