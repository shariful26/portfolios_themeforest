import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePortfolioData } from '../context/DataContext';
import { Search, Grid, List, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import ScrollReveal from '../components/common/ScrollReveal';

export default function ProjectsPage() {
  const { data } = usePortfolioData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  if (!data) return null;

  const projects = data.projects || [];
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = projects.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Centered White Card Frame */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="glass-panel rounded-[36px] p-6 sm:p-12 lg:p-16 relative overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 app-frame-shadow space-y-12"
      >
        
        {/* Header */}
        <ScrollReveal variant="fadeUp">
          <SectionHeading
            tag="Portfolio"
            title="Featured Case Studies & Work"
            subtitle="Filter through client projects, web applications, open-source libraries, and mobile designs."
            align="left"
          />
        </ScrollReveal>

        {/* Controls Bar: Category Tabs + Search + View Switcher */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl glass-panel bg-neutral-100/90 dark:bg-slate-800/80 border border-neutral-200 dark:border-slate-700">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer select-none ${
                  selectedCategory === cat
                    ? 'text-neutral-950 font-extrabold'
                    : 'text-neutral-700 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400'
                }`}
              >
                {selectedCategory === cat && (
                  <motion.span
                    layoutId="active-category-pill"
                    className="absolute inset-0 bg-amber-400 rounded-xl shadow-md border border-amber-300"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Right Search Input & View Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-700 text-neutral-900 dark:text-white focus:outline-none focus:border-amber-400 font-sans"
              />
            </div>

            {/* Grid vs List Toggle */}
            <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl border border-neutral-200 dark:border-slate-700">
              <button
                onClick={() => setViewMode('grid')}
                aria-label="Grid View"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-500 dark:text-slate-300 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                aria-label="List View"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-amber-400 text-neutral-950 font-bold' : 'text-neutral-500 dark:text-slate-300 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Animated Projects Gallery Output */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Card padding="p-12" className="text-center space-y-4">
                <p className="text-lg font-semibold text-neutral-600 dark:text-slate-300">No projects found matching your filter.</p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="text-xs font-bold text-accent hover:underline cursor-pointer"
                >
                  Clear Filters
                </button>
              </Card>
            </motion.div>
          ) : viewMode === 'grid' ? (
            /* GRID VIEW */
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((p, idx) => {
                const xOffset = idx % 3 === 0 ? -45 : idx % 3 === 2 ? 45 : 0;
                return (
                  <motion.div
                    layout
                    key={p.id}
                    initial={{ opacity: 0, x: xOffset, y: 35 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    whileHover={{ y: -8, scale: 1.015 }}
                    transition={{
                      layout: { duration: 0.3 },
                      opacity: { duration: 0.4, delay: idx * 0.05 },
                      x: { duration: 0.4, delay: idx * 0.05 },
                      y: { type: "spring", stiffness: 220, damping: 20 },
                      scale: { type: "spring", stiffness: 220, damping: 20 }
                    }}
                  >
                  <Card padding="p-0" className="flex flex-col h-full overflow-hidden group bg-white dark:bg-[#0f172a] border border-neutral-200/80 dark:border-slate-800/90 shadow-sm hover:shadow-xl transition-all">
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                        src={p.image}
                        alt={p.title}
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80";
                        }}
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
                        <p className="mt-2 text-sm text-neutral-600 dark:text-slate-200 line-clamp-2 leading-relaxed font-sans">
                          {p.summary}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-1.5">
                          {p.tags.map((t) => (
                            <span key={t} className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-slate-800 text-neutral-800 dark:text-slate-100 border border-neutral-200/80 dark:border-slate-700/80">
                              {t}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/projects/${p.slug}`}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 group/btn pt-2 tracking-wide"
                        >
                          <span>View Full Case Study</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
            </motion.div>
          ) : (
            /* LIST VIEW */
            <motion.div layout className="space-y-4">
              {filteredProjects.map((p) => (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                >
                  <Card padding="p-5" className="flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-accent transition-colors bg-white dark:bg-[#0f172a] border border-neutral-200/80 dark:border-slate-800/90">
                    <div className="flex items-center gap-5 w-full sm:w-auto">
                      <img src={p.image} alt={p.title} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="bg-neutral-950 text-amber-400 font-extrabold text-[11px] px-2.5 py-0.5 rounded-full border border-amber-400/60">
                            {p.category}
                          </div>
                          <span className="text-xs text-neutral-500 dark:text-slate-300 font-mono font-semibold">{p.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mt-1 font-heading">{p.title}</h3>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-slate-200 line-clamp-1">{p.summary}</p>
                      </div>
                    </div>

                    <Link
                      to={`/projects/${p.slug}`}
                      className="px-4 py-2 rounded-xl bg-amber-400 text-neutral-950 text-xs font-bold hover:bg-amber-300 transition-all shrink-0 shadow-md flex items-center gap-1 group/btn cursor-pointer select-none"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

    </div>
  );
}
