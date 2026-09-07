import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { getProjectBySlug } from '../services/portfolioService';
import { ArrowLeft, ExternalLink, Code2, Calendar, User, Tag } from 'lucide-react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';
import ScrollReveal from '../components/common/ScrollReveal';
import AnimatedCounter from '../components/common/AnimatedCounter';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    let isMounted = true;
    getProjectBySlug(id).then((res) => {
      if (isMounted) {
        setProject(res);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-neutral-400">
        Loading case study...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Project Not Found</h2>
        <p className="text-sm text-neutral-500">The project you are looking for does not exist.</p>
        <Button to="/projects" variant="primary" icon={ArrowLeft}>
          Back to Projects
        </Button>
      </div>
    );
  }

  const gallery = project.gallery || [project.image];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Centered White Card Frame */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="glass-panel rounded-[36px] p-6 sm:p-12 lg:p-16 relative overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 app-frame-shadow space-y-12"
      >
        
        {/* Back Button */}
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Case Study Header Banner */}
        <ScrollReveal variant="fadeUp" className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="accent">{project.category}</Badge>
            <span className="text-xs font-mono text-neutral-400">{project.subcategory}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white font-heading">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            {project.summary}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary" icon={ExternalLink} iconPosition="right">
                View Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="secondary" icon={Code2}>
                Source Code
              </Button>
            )}
          </div>
        </ScrollReveal>

        {/* Image Gallery Showcase Slider */}
        <ScrollReveal variant="scaleIn" className="space-y-4">
          <Card padding="p-2" className="overflow-hidden bg-neutral-900 aspect-[16/9] rounded-2xl relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                src={gallery[activeImage]}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </AnimatePresence>
          </Card>

          {gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-24 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    activeImage === idx ? 'border-accent scale-105 shadow-md shadow-accent/20' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </ScrollReveal>

        {/* Metadata & Challenge / Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Challenge, Solution, Tech Stack */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Detailed Overview */}
            <ScrollReveal variant="fadeLeft" className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white font-heading">
                Overview & Objectives
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.description}
              </p>
            </ScrollReveal>

            {/* Challenge & Solution Bento */}
            <ScrollReveal variant="fadeUp" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card padding="p-6" className="space-y-3 bg-neutral-50/70 dark:bg-neutral-800/40 border border-neutral-200/80 dark:border-neutral-800">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  The Challenge
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.challenge}
                </p>
              </Card>

              <Card padding="p-6" className="space-y-3 bg-neutral-50/70 dark:bg-neutral-800/40 border border-neutral-200/80 dark:border-neutral-800">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  The Solution
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.solution}
                </p>
              </Card>
            </ScrollReveal>

            {/* Metrics Results Banner */}
            {project.metrics && (
              <ScrollReveal variant="fadeUp" className="space-y-4">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-heading">
                  Key Performance Metrics
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.metrics.map((m, idx) => (
                    <Card key={idx} padding="p-5" className="text-center bg-neutral-50/70 dark:bg-neutral-800/40 border border-neutral-200/80 dark:border-neutral-800">
                      <p className="text-2xl font-extrabold text-accent">
                        <AnimatedCounter value={m.value} />
                      </p>
                      <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">{m.label}</p>
                    </Card>
                  ))}
                </div>
              </ScrollReveal>
            )}

          </div>

          {/* Right Column: Sidebar Metadata */}
          <ScrollReveal variant="fadeRight" className="lg:col-span-4 space-y-6">
            <Card padding="p-6" className="space-y-5 bg-neutral-50/70 dark:bg-neutral-800/40 border border-neutral-200/80 dark:border-neutral-800">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-3">
                Project Details
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Client:</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">{project.client || 'Internal'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Year:</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">{project.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono flex items-center gap-1.5"><Tag className="w-3.5 h-3.5" /> Category:</span>
                  <span className="font-semibold text-accent">{project.category}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
                <span className="text-xs font-mono text-neutral-400 font-semibold block">Technologies Used:</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </ScrollReveal>

        </div>

      </motion.div>

    </div>
  );
}
