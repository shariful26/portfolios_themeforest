import React from 'react';
import { motion } from 'motion/react';
import { usePortfolioData } from '../context/DataContext';
import { 
  Calendar, 
  MapPin, 
  Printer, 
  CheckCircle2, 
  Download, 
  Users, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Cpu, 
  Activity, 
  GitBranch, 
  Award, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from '../components/common/ScrollReveal';
import { staggerItemUp, staggerItemDown } from '../utils/motion';

export default function ExperiencePage() {
  const { data } = usePortfolioData();
  if (!data) return null;

  const { experience, profile, impactMetrics, engineeringStandards } = data;

  const defaultImpactMetrics = impactMetrics || [
    { id: 1, metric: "1.2M+", label: "Monthly Active Users", description: "Architected micro-frontends serving global SaaS users." },
    { id: 2, metric: "65%", label: "Bug Reduction Rate", description: "Enforced automated E2E & visual regression suites." },
    { id: 3, metric: "44%", label: "Bundle Size Slash", description: "Optimized tree-shaking & dynamic chunk loading." },
    { id: 4, metric: "$4M+", label: "E-Commerce Revenue", description: "Engineered headless storefront checkout integrations." }
  ];

  const defaultStandards = engineeringStandards || [
    {
      id: "architecture",
      title: "Scalable Micro-Frontend Architecture",
      desc: "Decoupled component modules allowing independent deployment pipelines and zero cross-team friction.",
      icon: Cpu
    },
    {
      id: "performance",
      title: "100/100 Core Web Vitals & 60fps",
      desc: "Sub-second initial renders, layout shift elimination, and Web Worker background data processing.",
      icon: Activity
    },
    {
      id: "automation",
      title: "DevOps & Automated CI/CD Testing",
      desc: "Strict type safety, automated Cypress/Playwright tests, and zero-downtime Vercel/AWS deployments.",
      icon: GitBranch
    },
    {
      id: "leadership",
      title: "Cross-Functional Agile Leadership",
      desc: "Sprint planning, technical code reviews, design token handoffs, and mentoring junior engineers.",
      icon: Award
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Centered Main White Card Frame */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="glass-panel rounded-[36px] p-6 sm:p-12 lg:p-16 relative overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 app-frame-shadow space-y-16"
      >
        
        {/* ==================================================================== */}
        {/* SECTION 1: HEADER & PRINT/DOWNLOAD ACTION BAR                        */}
        {/* ==================================================================== */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-neutral-100 dark:border-slate-800 pb-8">
          <SectionHeading
            tag="Career Track"
            title="Professional Experience Timeline"
            subtitle="A comprehensive chronological history of engineering leadership roles, achievements, and technology stacks."
            align="left"
            className="mb-0"
          />

          <div className="flex flex-wrap items-center gap-3 no-print shrink-0">
            <Button
              href={profile?.resumeUrl || "/assets/Alex_Morgan_CV_Resume.pdf"}
              target="_blank"
              download="Alex_Morgan_CV_Resume.pdf"
              variant="primary"
              size="md"
              icon={Download}
            >
              Download PDF Resume
            </Button>
            <Button onClick={handlePrint} variant="outline" size="md" icon={Printer}>
              Print Resume
            </Button>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* NEW SECTION 2: CAREER IMPACT METRICS BENTO CARDS                     */}
        {/* ==================================================================== */}
        <div className="space-y-6 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> High-Impact Career Performance Metrics
            </span>
            <span className="text-xs font-mono text-neutral-400">Verified Client Results</span>
          </div>

          <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {defaultImpactMetrics.map((item, idx) => (
              <ScrollStaggerItem key={item.id} customVariant={idx % 2 === 0 ? staggerItemUp : staggerItemDown}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.025 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="h-full"
                >
                  <Card padding="p-6" className="card-motion-hover space-y-3 bg-neutral-50/80 dark:bg-slate-800/70 border border-neutral-200/80 dark:border-slate-700/80 hover:border-amber-400 dark:hover:border-amber-400 h-full shadow-sm hover:shadow-xl group">
                    <div className="text-4xl sm:text-5xl font-extrabold text-amber-500 dark:text-amber-400 font-heading group-hover:scale-105 transition-transform origin-left">
                      {item.metric}
                    </div>
                    <h4 className="text-base font-bold text-neutral-900 dark:text-white font-heading group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-slate-300 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </div>

        {/* ==================================================================== */}
        {/* SECTION 3: INTERACTIVE EXPERIENCE TIMELINE                           */}
        {/* ==================================================================== */}
        <div className="print-page space-y-10 pt-6 border-t border-neutral-100 dark:border-slate-800">
          
          {/* Print-only Resume Header */}
          <div className="hidden print:block space-y-2 pb-6 border-b border-neutral-300">
            <h1 className="text-3xl font-extrabold text-black font-heading">{profile?.name}</h1>
            <p className="text-sm font-semibold text-neutral-700">{profile?.role} • {profile?.location}</p>
            <p className="text-xs text-neutral-600">{profile?.email} • {profile?.phone}</p>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-heading flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>Career Chronology & Roles</span>
            </h3>
            <span className="text-xs font-mono text-neutral-500 dark:text-slate-400">5 Key Positions</span>
          </div>

          {/* Animated Timeline Container */}
          <div className="relative ml-2 sm:ml-6 space-y-10 pl-6 sm:pl-8">
            
            {/* Smooth Scroll Reveal Vertical Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute left-0 top-3 bottom-3 w-0.5 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600/30 origin-top pointer-events-none"
            />

            <ScrollStaggerContainer staggerDelay={0.15}>
              {experience?.map((exp, idx) => (
                <ScrollStaggerItem key={exp.id} customVariant={idx % 2 === 0 ? staggerItemUp : staggerItemDown} className="relative group mb-10 last:mb-0">
                  
                  {/* Animated Glowing Timeline Node Dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 350, damping: 20, delay: 0.1 }}
                    className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-white dark:ring-neutral-900 group-hover:scale-130 transition-transform shadow-lg shadow-amber-400/40 z-10"
                  />

                  <motion.div
                    whileHover={{ y: -8, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  >
                    <Card padding="p-6 sm:p-8" className="card-motion-hover space-y-4 bg-neutral-50/80 dark:bg-slate-800/70 border border-neutral-200/80 dark:border-slate-700/80 hover:border-amber-400 dark:hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-xl group/card">
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200/80 dark:border-slate-700/80 pb-4">
                        <div>
                          <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-heading group-hover/card:text-amber-500 dark:group-hover/card:text-amber-400 transition-colors">{exp.role}</h3>
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-amber-600 dark:text-amber-400 hover:underline">
                            {exp.company}
                          </a>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-slate-300 font-mono">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-amber-400" /> {exp.period}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-amber-400" /> {exp.location}</span>
                        </div>
                      </div>

                      <p className="text-sm text-neutral-700 dark:text-slate-200 leading-relaxed font-sans font-normal">
                        {exp.description}
                      </p>

                      {exp.achievements && (
                        <div className="space-y-2 pt-2">
                          <span className="text-xs font-mono font-semibold text-neutral-500 dark:text-slate-400 uppercase tracking-wider">Key Achievements:</span>
                          <ul className="space-y-2">
                            {exp.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-800 dark:text-slate-100 font-sans font-medium">
                                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="pt-3 border-t border-neutral-200/80 dark:border-slate-700/80 flex flex-wrap gap-1.5">
                        {exp.skills?.map((sk) => (
                          <span key={sk} className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-neutral-200/70 dark:bg-slate-900/80 text-neutral-800 dark:text-slate-200 border border-neutral-300/40 dark:border-slate-700/50">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>
          </div>

        </div>

        {/* ==================================================================== */}
        {/* NEW SECTION 4: ENGINEERING STANDARDS & METHODOLOGY BENTO MATRIX     */}
        {/* ==================================================================== */}
        <div className="space-y-8 pt-10 border-t border-neutral-100 dark:border-slate-800 font-sans">
          
          <ScrollReveal variant="fadeUp">
            <SectionHeading
              tag="Work Standards"
              title="Engineering Standards & Technical Methodology"
              subtitle="Foundational engineering practices that ensure 100/100 performance, high code quality, and fast deployments."
            />
          </ScrollReveal>

          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {defaultStandards.map((std, idx) => (
              <ScrollStaggerItem key={std.id} customVariant={idx % 2 === 0 ? staggerItemUp : staggerItemDown}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.025 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="h-full"
                >
                  <Card padding="p-6" className="card-motion-hover space-y-4 bg-neutral-50/80 dark:bg-slate-800/70 border border-neutral-200/80 dark:border-slate-700/80 hover:border-amber-400 dark:hover:border-amber-400 h-full shadow-sm hover:shadow-xl group">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-400 group-hover:text-neutral-950 flex items-center justify-center transition-all shadow-sm">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white font-heading group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                      {std.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-slate-300 leading-relaxed font-sans font-normal">
                      {std.desc}
                    </p>
                  </Card>
                </motion.div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>

        </div>

        {/* ==================================================================== */}
        {/* SECTION 5: BOTTOM CTA BANNER ("Ready to Hire?")                      */}
        {/* ==================================================================== */}
        <ScrollReveal variant="zoomIn" className="rounded-none p-8 sm:p-12 bg-neutral-900 text-white border border-neutral-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              Availability Status: Open for Hiring
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white leading-tight">
              Looking for a Senior Software Engineer?
            </h2>
            <p className="text-xs sm:text-sm font-normal text-neutral-300 max-w-lg">
              I am available for full-time senior engineering roles, contract engagements, and technical advisory positions.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-7 py-3.5 rounded-2xl bg-amber-400 text-neutral-950 font-extrabold text-xs hover:bg-amber-300 transition-all shadow-xl flex items-center gap-2 group cursor-pointer"
          >
            <span>Get in Touch Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

      </motion.div>

    </div>
  );
}
