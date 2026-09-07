import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePortfolioData } from '../context/DataContext';
import { 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  TrendingUp, 
  Send, 
  Check, 
  User 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from '../components/common/ScrollReveal';
import { staggerItemUp, staggerItemDown } from '../utils/motion';

export default function BlogPage() {
  const { data } = usePortfolioData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  if (!data) return null;
  const posts = data.blog || [];
  const profile = data.profile || {};
  const categories = ['All', ...new Set(posts.map(b => b.category))];

  const featuredPost = posts[0];
  const gridPosts = posts.slice(1);

  const filteredPosts = posts.filter(b => {
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 font-sans">
      
      {/* Outer Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="glass-panel rounded-[36px] p-6 sm:p-12 lg:p-16 relative overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 app-frame-shadow space-y-16"
      >
        
        {/* ==================================================================== */}
        {/* SECTION 1: HEADER & TITLE                                            */}
        {/* ==================================================================== */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> Editorial Magazine & Engineering Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white font-heading tracking-tight">
            Technical Perspectives, Architecture & Guides
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-slate-300 font-normal leading-relaxed">
            In-depth articles covering React 19 performance, UI/UX design systems, cloud architecture, and modern web development.
          </p>
        </ScrollReveal>

        {/* ==================================================================== */}
        {/* SECTION 2: SPOTLIGHT FEATURED HERO ARTICLE                           */}
        {/* ==================================================================== */}
        {featuredPost && (
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden bg-neutral-950 dark:bg-slate-900 text-white border border-neutral-800 dark:border-slate-700 shadow-2xl group">
              
              {/* Background Glow */}
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 relative z-10">
                
                {/* Left Cutout Image */}
                <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-neutral-950/90 text-amber-400 font-extrabold text-xs px-3.5 py-1.5 rounded-full border border-amber-400/60 shadow-lg backdrop-blur-md flex items-center gap-1.5 select-none">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                    <span>Featured Article</span>
                  </div>
                </div>

                {/* Right Hero Details */}
                <div className="lg:col-span-6 space-y-5 text-left">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-300">
                    <span className="px-3 py-1 rounded-full bg-amber-400/15 text-amber-400 font-bold border border-amber-400/30 uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1 text-amber-400"><Calendar className="w-3.5 h-3.5 text-amber-400" /> {featuredPost.date}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="flex items-center gap-1 text-amber-400"><Clock className="w-3.5 h-3.5 text-amber-400" /> {featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white dark:text-white font-heading leading-tight group-hover:text-amber-400 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-neutral-200 dark:text-slate-200 text-sm sm:text-base leading-relaxed line-clamp-3 font-sans font-normal">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={profile.avatar || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"}
                        alt={profile.name || "Author"}
                        className="w-10 h-10 rounded-full object-cover border border-amber-400/40"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-white dark:text-white font-heading">{profile.name || "Alex Morgan"}</h4>
                        <p className="text-[10px] font-mono text-amber-400 dark:text-amber-400 font-semibold">{profile.role || "Lead Architect"}</p>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="px-5 py-2.5 rounded-xl bg-amber-400 text-neutral-950 font-bold text-xs hover:bg-amber-300 transition-all shadow-md flex items-center gap-2 group/btn cursor-pointer select-none"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>

                </div>

              </div>

            </div>
          </ScrollReveal>
        )}

        {/* ==================================================================== */}
        {/* SECTION 3: FILTER TABS & SEARCH BAR                                  */}
        {/* ==================================================================== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl glass-panel bg-neutral-50/80 dark:bg-slate-800/60 border border-neutral-200/80 dark:border-slate-700/80 shadow-sm">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer select-none ${
                  selectedCategory === cat
                    ? 'text-neutral-950 font-extrabold'
                    : 'text-neutral-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400'
                }`}
              >
                {selectedCategory === cat && (
                  <motion.span
                    layoutId="active-blog-pill"
                    className="absolute inset-0 bg-amber-400 rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles by title, topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-slate-400 focus:outline-none focus:border-amber-400 font-sans shadow-inner"
            />
          </div>
        </div>

        {/* ==================================================================== */}
        {/* SECTION 4: MAGAZINE ARTICLES GRID WITH LIVE TOP-BOTTOM MOTION        */}
        {/* ==================================================================== */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-neutral-50/70 dark:bg-slate-800/40 border border-neutral-200 dark:border-slate-700 space-y-3">
            <p className="text-base font-bold text-neutral-800 dark:text-white">No articles match your search criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-xs font-bold text-amber-500 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <ScrollStaggerItem key={post.id} customVariant={idx % 2 === 0 ? staggerItemUp : staggerItemDown}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="h-full"
                >
                  <Card padding="p-0" className="card-motion-hover flex flex-col h-full overflow-hidden group bg-white dark:bg-slate-800/70 border border-neutral-200/80 dark:border-slate-700/80 hover:border-amber-400 dark:hover:border-amber-400 shadow-sm hover:shadow-2xl transition-all">
                    
                    {/* Thumbnail Frame */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3 bg-neutral-950/90 text-amber-400 font-extrabold text-[11px] px-3 py-1 rounded-full border border-amber-400/50 shadow-md backdrop-blur-md flex items-center gap-1.5 select-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <span>{post.category}</span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-3 text-left">
                        
                        <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-slate-400 font-mono">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-amber-500" /> {post.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-amber-500" /> {post.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors font-heading leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-slate-300 line-clamp-3 leading-relaxed font-sans font-normal">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-neutral-200/70 dark:border-slate-700/70 flex items-center justify-between">
                        <span className="text-[11px] font-mono font-semibold text-neutral-400 dark:text-slate-400">
                          By {profile.name || "Alex Morgan"}
                        </span>
                        
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 group/btn hover:underline"
                        >
                          <span>Read Full Story</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>

                    </div>
                  </Card>
                </motion.div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        )}

        {/* ==================================================================== */}
        {/* SECTION 5: WEEKLY DIGEST NEWSLETTER SUBSCRIPTION BOX                 */}
        {/* ==================================================================== */}
        <ScrollReveal variant="zoomIn" className="rounded-3xl p-8 sm:p-12 bg-neutral-900 text-white border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-3 text-left">
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                Weekly Digest
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
                Stay Ahead of Modern Web & AI Tech Trends
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-lg font-sans">
                Subscribe to get curated insights on React 19, web performance optimization, and UI/UX design systems delivered directly to your inbox. No spam.
              </p>
            </div>

            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center gap-2 font-bold text-xs"
                  >
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Thank you for subscribing to our digest!</span>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row items-center gap-2 bg-neutral-800/90 p-2 rounded-2xl border border-neutral-700 shadow-inner"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full px-4 py-3 text-xs rounded-xl bg-transparent text-white placeholder-neutral-400 focus:outline-none font-sans"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 text-neutral-950 font-extrabold text-xs hover:bg-amber-300 transition-all shadow-md shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Subscribe</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </ScrollReveal>

      </motion.div>

    </div>
  );
}
