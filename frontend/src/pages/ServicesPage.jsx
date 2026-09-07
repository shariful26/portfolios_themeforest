import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePortfolioData } from '../context/DataContext';
import { RenderIcon } from '../utils/helpers';
import { CheckCircle2, ArrowRight, ChevronDown, Users, Sparkles } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from '../components/common/ScrollReveal';
import { staggerItemUp, staggerItemDown } from '../utils/motion';

export default function ServicesPage() {
  const { data } = usePortfolioData();
  const [openFaq, setOpenFaq] = useState(0);

  if (!data) return null;
  const services = data.services || [];

  const teamMembers = [
    {
      id: "alex",
      name: "Alex Morgan",
      role: "Lead Software Architect",
      experience: "8+ Yrs Exp",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      bio: "Specializing in distributed React applications, Node microservices, and high-performance cloud APIs.",
      skills: ["React 19", "Next.js", "AWS Cloud", "Node.js"]
    },
    {
      id: "sophia",
      name: "Sophia Vance",
      role: "Lead Product Designer",
      experience: "7+ Yrs Exp",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      bio: "Crafting scalable Figma design systems, WCAG accessible components, and interactive prototypes.",
      skills: ["Figma Systems", "UI/UX Research", "WCAG AA", "Prototyping"]
    },
    {
      id: "julian",
      name: "Julian Cross",
      role: "Senior Creative Developer",
      experience: "6+ Yrs Exp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      bio: "Engineered 35+ high-converting landing pages with 60fps Framer Motion & GSAP animations.",
      skills: ["Motion Design", "Three.js", "Tailwind CSS", "GSAP"]
    },
    {
      id: "elena",
      name: "Elena Rostova",
      role: "Digital Growth Lead",
      experience: "5+ Yrs Exp",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      bio: "Driving conversion optimization, technical SEO audits, and revenue-focused marketing roadmaps.",
      skills: ["Technical SEO", "Growth Audit", "Analytics", "PPC"]
    }
  ];

  const studioGallery = [
    {
      id: 1,
      title: "Collaborative Product Architecture Workshops",
      tag: "Strategy Studio",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "High-Performance Engineering Workstation",
      tag: "Code & Build Lab",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Product Wireframing & Design Tokens Review",
      tag: "Design Studio",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Commercial Media & Video Production Studio",
      tag: "Media Production",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const processSteps = [
    { step: "01", title: "Discovery & Strategy", desc: "Understanding scope, target audience, core deliverables, and technical requirements." },
    { step: "02", title: "Architecture & Design", desc: "Wireframing, design token definition, system architecture design, and clickable prototypes." },
    { step: "03", title: "Development & Testing", desc: "Clean React component engineering, API integrations, responsive testing, and accessibility audits." },
    { step: "04", title: "Launch & Support", desc: "Production build deployment, Lighthouse optimization, handoff documentation, and post-launch maintenance." }
  ];

  const faqs = [
    { q: "What is your typical project turnaround time?", a: "Most full-stack React projects range from 2 to 6 weeks depending on feature complexity and scope." },
    { q: "Do you offer post-launch support and maintenance?", a: "Yes, I offer ongoing retainers for code updates, security patches, and performance optimizations." },
    { q: "Can I customize the services to fit my budget?", a: "Absolutely! Every engagement can be tailored with specific milestones and deliverables." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Centered White Card Frame */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="glass-panel rounded-[36px] p-6 sm:p-12 lg:p-16 relative overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 app-frame-shadow space-y-16"
      >
        
        {/* Header */}
        <ScrollReveal variant="fadeUp">
          <SectionHeading
            tag="Offerings"
            title="Services & Pricing Packages"
            subtitle="Specialized digital services crafted for startups, growing businesses, and digital agencies."
            align="left"
          />
        </ScrollReveal>

        {/* Services Grid */}
        <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <ScrollStaggerItem key={srv.id} customVariant={idx % 2 === 0 ? staggerItemUp : staggerItemDown}>
              <motion.div
                whileHover={{ y: -10, scale: 1.018 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="h-full"
              >
                <Card padding="p-8" className="card-motion-hover flex flex-col justify-between space-y-6 bg-neutral-50/70 dark:bg-slate-800/60 hover:bg-gradient-to-br hover:from-amber-400/15 hover:via-purple-500/10 hover:to-transparent dark:hover:from-amber-500/20 dark:hover:via-purple-950/40 dark:hover:to-slate-900 border border-neutral-200/80 dark:border-slate-700/80 hover:border-amber-400 dark:hover:border-amber-400 h-full shadow-sm hover:shadow-[0_20px_50px_rgba(245,158,11,0.22)] group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-400 group-hover:text-neutral-950 group-hover:scale-110 group-hover:rotate-3 flex items-center justify-center transition-all duration-300 shadow-sm">
                        <RenderIcon name={srv.icon} className="w-6 h-6" />
                      </div>
                      <Badge variant="accent">Starting from {srv.startingPrice}</Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-heading group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">{srv.title}</h3>
                    <p className="text-base text-neutral-700 dark:text-slate-200 leading-relaxed font-sans">{srv.summary}</p>
                    
                    <div className="pt-4 border-t border-neutral-200 dark:border-slate-700/80 space-y-2.5">
                      <span className="text-xs sm:text-sm font-mono font-semibold text-neutral-500 dark:text-slate-300 uppercase">Key Deliverables:</span>
                      <ul className="space-y-2">
                        {srv.deliverables.map((d, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800 dark:text-slate-100">
                            <CheckCircle2 className="w-4 h-4 text-amber-500 group-hover:text-amber-400 shrink-0 transition-colors" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button to="/contact" variant="primary" size="md" icon={ArrowRight} iconPosition="right" className="w-full group-hover:bg-amber-400 group-hover:text-neutral-950 transition-all">
                    Inquire About Service
                  </Button>
                </Card>
              </motion.div>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>

        {/* ================================================================== */}
        {/* OUR TEAM & STUDIO GALLERY SECTION                                 */}
        {/* ================================================================== */}
        <div className="space-y-12 pt-10 border-t border-neutral-100 dark:border-slate-800 font-sans">
          
          {/* Header */}
          <ScrollReveal variant="fadeUp">
            <SectionHeading
              tag="Our Team & Studio"
              title="Meet Our Specialized Team & Studio Gallery"
              subtitle="A dedicated collective of senior engineers, product designers, and growth specialists behind every successful client delivery."
            />
          </ScrollReveal>

          {/* Team Member Cards Grid */}
          <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <ScrollStaggerItem key={member.id} customVariant={idx % 2 === 0 ? staggerItemUp : staggerItemDown}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.025 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="h-full"
                >
                  <Card padding="p-5" className="card-motion-hover flex flex-col justify-between space-y-4 bg-neutral-50/80 dark:bg-slate-800/70 border border-neutral-200/80 dark:border-slate-700/80 hover:border-amber-400 dark:hover:border-amber-400 h-full shadow-sm hover:shadow-xl group">
                    <div className="space-y-3">
                      {/* Image Cutout */}
                      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-slate-900 border border-neutral-200/60 dark:border-slate-700/60 shadow-inner">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex items-end p-3">
                          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-neutral-950/80 px-2 py-0.5 rounded border border-amber-400/40">
                            {member.experience}
                          </span>
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div>
                        <h4 className="text-lg font-bold text-neutral-900 dark:text-white font-heading group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 mt-0.5">
                          {member.role}
                        </p>
                      </div>

                      <p className="text-xs text-neutral-600 dark:text-slate-300 leading-relaxed font-sans">
                        {member.bio}
                      </p>
                    </div>

                    {/* Skill Tags */}
                    <div className="pt-3 border-t border-neutral-200/60 dark:border-slate-700/60 flex flex-wrap gap-1">
                      {member.skills.map((skill) => (
                        <span key={skill} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-neutral-200/70 dark:bg-slate-900/80 text-neutral-800 dark:text-slate-200 border border-neutral-300/40 dark:border-slate-700/50">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </div>

        {/* Workflow Process Section */}
        <div className="space-y-10 pt-6 border-t border-neutral-100 dark:border-slate-800">
          <ScrollReveal variant="fadeUp">
            <SectionHeading
              tag="Workflow"
              title="My 4-Step Production Process"
              subtitle="Structured methodology ensuring zero friction and high quality from kick-off to launch."
            />
          </ScrollReveal>

          <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p, idx) => (
              <ScrollStaggerItem key={p.step} customVariant={idx % 2 === 0 ? staggerItemUp : staggerItemDown}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="h-full"
                >
                  <Card padding="p-6" className="card-motion-hover space-y-3 relative bg-neutral-50/70 dark:bg-slate-800/60 hover:bg-gradient-to-br hover:from-amber-400/15 hover:via-purple-500/10 hover:to-transparent dark:hover:from-amber-500/20 dark:hover:via-purple-950/40 dark:hover:to-slate-900 border border-neutral-200/80 dark:border-slate-700/80 hover:border-amber-400 dark:hover:border-amber-400 h-full shadow-sm hover:shadow-[0_20px_45px_rgba(245,158,11,0.2)] group">
                    <span className="text-4xl font-extrabold text-amber-500 dark:text-amber-400 font-heading group-hover:scale-110 group-hover:translate-x-1 inline-block transition-transform duration-300">{p.step}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white font-heading group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">{p.title}</h3>
                    <p className="text-sm text-neutral-700 dark:text-slate-100 leading-relaxed font-sans font-normal">{p.desc}</p>
                  </Card>
                </motion.div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </div>

        {/* Studio Photo Gallery Grid */}
        <div className="space-y-6 pt-6 border-t border-neutral-100 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-heading flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Our Creative Studio & Workspace Gallery</span>
            </h3>
            <span className="text-xs font-mono text-neutral-500 dark:text-slate-400">4 Studio Highlights</span>
          </div>

          <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {studioGallery.map((item, idx) => (
              <ScrollStaggerItem key={item.id} customVariant={idx % 2 === 0 ? staggerItemDown : staggerItemUp}>
                <motion.div
                  whileHover={{ scale: 1.035, y: -8 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="relative group rounded-2xl overflow-hidden border border-neutral-200 dark:border-slate-700 shadow-md aspect-[4/3] bg-neutral-900 cursor-pointer h-full"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent flex flex-col justify-end p-4 transition-opacity">
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest mb-0.5">
                      {item.tag}
                    </span>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </div>

        {/* Animated FAQ Accordion Section */}
        <div className="space-y-8 max-w-3xl mx-auto pt-6 border-t border-neutral-100 dark:border-slate-800">
          <ScrollReveal variant="fadeUp">
            <SectionHeading
              tag="FAQ"
              title="Frequently Asked Questions"
            />
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card
                key={idx}
                padding="p-6"
                className="cursor-pointer bg-neutral-50/70 dark:bg-slate-800/60 hover:bg-gradient-to-r hover:from-amber-400/10 hover:to-transparent hover:border-amber-400 transition-all border border-neutral-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md"
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white font-heading">{faq.q}</h4>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-neutral-400 dark:text-slate-300" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm sm:text-base text-neutral-700 dark:text-slate-100 border-t border-neutral-200 dark:border-slate-700/80 pt-3 leading-relaxed font-sans font-medium">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            ))}
          </div>
        </div>

      </motion.div>

    </div>
  );
}
