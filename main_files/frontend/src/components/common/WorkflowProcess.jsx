import React from 'react';
import { motion } from 'motion/react';
import { Target, Layers, Cpu, Rocket, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import Card from './Card';

const workflowSteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    tagline: "Strategy & Technical Specs",
    description: "Deep dive into business goals, user personas, database schemas, and technical architecture to map out a clear, high-velocity project roadmap.",
    icon: Target,
    deliverables: ["User Journey Maps", "Tech Stack & DB Schema", "Project Scope & Milestones"],
    color: "from-amber-500/20 to-orange-500/10",
    badgeBg: "bg-amber-500/10 text-amber-500 dark:text-amber-400 border-amber-500/20"
  },
  {
    step: "02",
    title: "UI/UX & Design Systems",
    tagline: "Pixel-Perfect Prototypes",
    description: "Creating accessible Figma wireframes, design token systems, dark/light theme palettes, and interactive prototypes tailored for high conversions.",
    icon: Layers,
    deliverables: ["Figma Token Component Library", "60fps Interactive Prototypes", "Dark & Light Mode Specs"],
    color: "from-purple-500/20 to-indigo-500/10",
    badgeBg: "bg-purple-500/10 text-purple-500 dark:text-purple-400 border-purple-500/20"
  },
  {
    step: "03",
    title: "Full-Stack Engineering",
    tagline: "Clean, Scalable Code",
    description: "Building fast React 19/Next.js frontends paired with robust Node/Python REST APIs, cloud databases, microservices, and clean architecture.",
    icon: Cpu,
    deliverables: ["Type-Safe Codebase", "REST / GraphQL APIs", "Lighthouse 100/100 Speed"],
    color: "from-sky-500/20 to-blue-500/10",
    badgeBg: "bg-sky-500/10 text-sky-500 dark:text-sky-400 border-sky-500/20"
  },
  {
    step: "04",
    title: "QA, Cloud Launch & Scale",
    tagline: "Zero Downtime Deployments",
    description: "Rigorous cross-browser testing, automated CI/CD deployment pipelines on AWS/Vercel, performance monitoring, and ongoing post-launch support.",
    icon: Rocket,
    deliverables: ["Automated CI/CD Pipeline", "Security & Audit Compliance", "Ongoing Technical Support"],
    color: "from-emerald-500/20 to-teal-500/10",
    badgeBg: "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/20"
  }
];

export default function WorkflowProcess() {
  return (
    <section className="relative font-sans py-4">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-amber-500/5 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <ScrollReveal variant="fadeUp">
        <SectionHeading
          tag="Seamless Execution"
          title="4-Step Battle-Tested Product Workflow"
          subtitle="From initial concept to production cloud launch, every phase is engineered for precision, speed, and business impact."
          align="center"
        />
      </ScrollReveal>

      {/* 4-Step Bento Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {workflowSteps.map((st, idx) => {
          const IconComp = st.icon;

          return (
            <ScrollReveal key={st.step} variant="fadeUp" delay={idx * 0.12}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="h-full"
              >
                <Card
                  padding="p-6 sm:p-7"
                  className="h-full flex flex-col justify-between relative overflow-hidden bg-white dark:bg-[#0f172a] border border-neutral-200/80 dark:border-slate-800/90 hover:border-amber-400/80 dark:hover:border-amber-400/80 shadow-sm hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Subtle Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${st.color}`} />

                  <div className="space-y-5">
                    {/* Top Row: Icon + Step Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-500 dark:text-amber-400 group-hover:bg-amber-400 group-hover:text-neutral-950 group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-extrabold border ${st.badgeBg} shadow-inner`}>
                        PHASE {st.step}
                      </span>
                    </div>

                    {/* Step Title & Tagline */}
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400">
                        {st.tagline}
                      </span>
                      <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white font-heading mt-0.5 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                        {st.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-slate-300 leading-relaxed font-sans">
                      {st.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-slate-800/80 space-y-2">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 dark:text-slate-500 mb-2">
                      Key Deliverables
                    </p>
                    {st.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </Card>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
