import React from 'react';
import { motion } from 'motion/react';
import { usePortfolioData } from '../context/DataContext';
import { 
  Download, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  Users, 
  Zap, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  Compass, 
  HeartHandshake,
  MessageSquare,
  FolderCheck
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from '../components/common/ScrollReveal';
import AnimatedCounter from '../components/common/AnimatedCounter';
import TestimonialSlider from '../components/common/TestimonialSlider';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const { data } = usePortfolioData();
  if (!data) return null;

  const { profile, education, stats, testimonials } = data;

  const funFacts = stats || [
    { id: 1, label: "Years Experience", value: "8+", highlight: "Continuous Growth" },
    { id: 2, label: "Completed Projects", value: "48+", highlight: "Enterprise & Startups" },
    { id: 3, label: "Happy Clients", value: "35+", highlight: "100% Satisfaction" }
  ];

  const coreValues = [
    {
      id: "architecture",
      title: "Clean Architecture & Quality",
      desc: "Building maintainable, robust, and scalable codebases structured for enterprise durability and long-term expansion.",
      icon: ShieldCheck,
      color: "text-amber-500 bg-amber-500/10 border-amber-500/30"
    },
    {
      id: "performance",
      title: "Blistering Speed & Performance",
      desc: "Optimizing render times, bundle budgets, and cloud resources to achieve 100/100 Lighthouse performance metrics.",
      icon: Zap,
      color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/30"
    },
    {
      id: "user-first",
      title: "User-Centric Design Systems",
      desc: "Crafting intuitive, accessible interfaces with smooth micro-interactions that engage users and drive business conversions.",
      icon: HeartHandshake,
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30"
    }
  ];

  const handleDownloadCV = (e) => {
    const resumeUrl = profile?.resumeUrl;
    if (!resumeUrl || resumeUrl === '#' || resumeUrl === '#resume-pdf') {
      e.preventDefault();
      window.print();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 font-sans">
      
      {/* Outer Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="glass-panel rounded-[36px] p-6 sm:p-12 lg:p-16 relative overflow-hidden bg-white dark:bg-[#0f172a] border border-neutral-200/80 dark:border-slate-800/90 app-frame-shadow space-y-20"
      >
        
        {/* ================================================================== */}
        {/* SECTION 1: HEADER & BREADCRUMB                                     */}
        {/* ================================================================== */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> About Me & My Journey
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white font-heading tracking-tight">
            Designing & Engineering the Future of Digital Products
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-slate-300 font-normal leading-relaxed">
            Discover my story, technical values, career milestones, and commitment to creating high-impact user experiences.
          </p>
        </ScrollReveal>

        {/* ================================================================== */}
        {/* SECTION 2: MAIN ABOUT BLOCK (IMAGE + BIO + 2 SUB-COLUMNS)          */}
        {/* ================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
          
          {/* Left Portrait Card Image (Inspired by Reference Design) */}
          <ScrollReveal variant="fadeLeft" className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-200 dark:border-slate-700 shadow-2xl group">
              <img
                src={profile?.avatar || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"}
                alt={profile?.name || "About Me"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                  {profile?.role || "Professional Specialist"}
                </span>
                <h3 className="text-xl font-extrabold text-white font-heading">
                  {profile?.name || "Alex Vance"}
                </h3>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Detailed Bio & 2 Sub-Columns */}
          <ScrollReveal variant="fadeRight" className="lg:col-span-7 space-y-8 text-neutral-700 dark:text-slate-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white font-heading leading-tight mb-4">
                Building with Precision, Speed, and Uncompromising Quality
              </h2>
              {profile?.fullBio ? (
                profile.fullBio.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base leading-relaxed mb-3">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-sm sm:text-base leading-relaxed">
                  {profile?.shortBio || "Helping ambitious clients worldwide turn their ideas into high-impact digital solutions."}
                </p>
              )}
            </div>

            {/* 2 Sub-Columns (Who I Am / What I Do) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-neutral-200 dark:border-slate-800">
              <div className="space-y-2">
                <h4 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2 font-heading">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  My Core Mission
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-slate-300 leading-relaxed">
                  Delivering scalable, high-performance web products that solve real business problems and delight end users.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2 font-heading">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  My Approach & Philosophy
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-slate-300 leading-relaxed">
                  Focusing on type-safe architecture, responsive UI components, fast load times, and continuous optimization.
                </p>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                onClick={handleDownloadCV}
                href={profile?.resumeUrl || "#"}
                target={profile?.resumeUrl && !profile.resumeUrl.startsWith('#') ? "_blank" : undefined}
                download={profile?.resumeUrl?.endsWith('.pdf') ? "Resume.pdf" : undefined}
                variant="primary"
                size="md"
                icon={Download}
              >
                Download Resume (PDF)
              </Button>
              <Button to="/contact" variant="outline" size="md">
                Let's Talk Project
              </Button>
            </div>
          </ScrollReveal>

        </div>

        {/* ================================================================== */}
        {/* SECTION 3: OUR FUN FACTS / STAT COUNTERS GRID                       */}
        {/* ================================================================== */}
        <div className="pt-10 border-t border-neutral-200 dark:border-slate-800">
          <ScrollReveal variant="fadeUp" className="text-center mb-10">
            <span className="text-xs font-mono font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest">
              By The Numbers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white font-heading">
              Key Achievements & Track Record
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {funFacts.slice(0, 3).map((item, idx) => {
              const iconsList = [Award, FolderCheck, HeartHandshake];
              const IconComponent = iconsList[idx % iconsList.length] || Award;
              return (
                <ScrollReveal key={item.id} variant="zoomIn" className="text-center">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.025 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    className="h-full"
                  >
                    <div className="card-motion-hover p-8 rounded-none bg-neutral-50/80 dark:bg-slate-800/60 border border-neutral-200/80 dark:border-slate-700/80 shadow-sm hover:border-amber-400 dark:hover:border-amber-400 transition-all flex flex-col items-center justify-between h-full space-y-3 group">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-500 dark:text-amber-400 group-hover:bg-amber-400 group-hover:text-neutral-950 group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      <div className="text-4xl sm:text-5xl font-extrabold text-amber-500 dark:text-amber-400 font-heading mb-1 group-hover:scale-105 transition-transform">
                        <AnimatedCounter value={item.value} />
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-neutral-900 dark:text-white font-heading leading-tight">
                          {item.label}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-slate-400 font-mono font-semibold uppercase tracking-wider">
                          {item.highlight}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* ================================================================== */}
        {/* SECTION 4: OVERLAPPING FEATURE HIGHLIGHT BANNER                     */}
        {/* ================================================================== */}
        <ScrollReveal variant="fadeUp" className="relative rounded-none overflow-hidden bg-neutral-900 text-white p-8 sm:p-12 border border-neutral-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                Work Together
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                Ready to Bring Your Vision to Market?
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Whether you need a custom web application, UI/UX redesign, or scalable cloud solution, I am available for new projects.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-2xl bg-amber-400 text-neutral-950 font-bold text-sm hover:bg-amber-300 transition-all shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                <span>Find Your Solution Now</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* ================================================================== */}
        {/* SECTION 5: CORE COMPETENCIES / VALUES GRID                        */}
        {/* ================================================================== */}
        <div className="space-y-10">
          <ScrollReveal variant="fadeUp" className="text-center max-w-2xl mx-auto space-y-2">
            <SectionHeading
              tag="My Pillars"
              title="Core Competencies & Standards"
              subtitle="The foundational principles that guide every line of code and interface decision."
              align="center"
            />
          </ScrollReveal>

          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val) => {
              const IconComponent = val.icon;
              return (
                <ScrollStaggerItem key={val.id}>
                  <Card padding="p-6" className="space-y-4 bg-neutral-50/70 dark:bg-slate-800/60 border border-neutral-200/80 dark:border-slate-700/80 hover:border-amber-400 transition-all h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${val.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-heading">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-slate-300 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </Card>
                </ScrollStaggerItem>
              );
            })}
          </ScrollStaggerContainer>
        </div>

        {/* ================================================================== */}
        {/* SECTION 6: EDUCATION & CERTIFICATIONS                              */}
        {/* ================================================================== */}
        {education && education.length > 0 && (
          <div className="space-y-8 pt-6 border-t border-neutral-200 dark:border-slate-800">
            <ScrollReveal variant="fadeUp">
              <SectionHeading
                tag="Background"
                title="Education & Qualifications"
                subtitle="Academic degrees and specialized industry certifications."
                align="left"
              />
            </ScrollReveal>

            <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <ScrollStaggerItem key={edu.id}>
                  <Card padding="p-6" className="space-y-3 bg-neutral-50/70 dark:bg-slate-800/60 hover:border-amber-400 border border-neutral-200/80 dark:border-slate-700/80 transition-all h-full">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white font-heading">{edu.degree}</h3>
                        <p className="text-xs text-amber-600 dark:text-amber-400 font-bold">{edu.institution} • {edu.period}</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-slate-300 pt-2 leading-relaxed">{edu.description}</p>
                  </Card>
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>
          </div>
        )}

        {/* ================================================================== */}
        {/* SECTION 7: TESTIMONIAL SLIDER                                      */}
        {/* ================================================================== */}
        {testimonials && testimonials.length > 0 && (
          <div className="pt-6 border-t border-neutral-200 dark:border-slate-800 space-y-8">
            <ScrollReveal variant="fadeUp">
              <SectionHeading
                tag="Client Feedback"
                title="What People Say About My Work"
                subtitle="Real testimonials from engineering leads, founders, and product managers."
                align="center"
              />
            </ScrollReveal>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        )}

        {/* ================================================================== */}
        {/* SECTION 8: BOTTOM FINAL CTA BANNER ("Let's Get To Work")           */}
        {/* ================================================================== */}
        <ScrollReveal variant="zoomIn" className="rounded-none p-8 sm:p-12 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-neutral-950 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-950/75">
              Start A Project
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 leading-tight">
              Let's Get to Work Together!
            </h2>
            <p className="text-xs sm:text-sm font-medium text-neutral-900/80 max-w-lg">
              Have an idea or need expert freelance support? Send a message today to discuss project scope and timelines.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-8 py-4 rounded-2xl bg-neutral-950 text-amber-400 font-extrabold text-sm hover:bg-neutral-900 transition-all shadow-xl flex items-center gap-2 group cursor-pointer"
          >
            <span>Contact Me Now</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </ScrollReveal>

      </motion.div>

    </div>
  );
}

