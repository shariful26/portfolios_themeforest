import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { getBlogPostBySlug } from '../services/portfolioService';
import { usePortfolioData } from '../context/DataContext';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import ScrollReveal from '../components/common/ScrollReveal';

export default function BlogPostPage() {
  const { slug } = useParams();
  const { data: globalData } = usePortfolioData();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getBlogPostBySlug(slug).then((res) => {
      if (isMounted) {
        setPost(res);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, [slug]);

  if (loading) {
    return <div className="max-w-4xl mx-auto py-20 text-center text-neutral-400">Loading article...</div>;
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Article Not Found</h2>
        <Button to="/blog" variant="primary" icon={ArrowLeft}>Back to Blog</Button>
      </div>
    );
  }

  const profile = globalData?.profile;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Centered White Card Frame */}
      <motion.article
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="glass-panel rounded-[36px] p-6 sm:p-12 relative overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 app-frame-shadow space-y-10"
      >
        
        <div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Articles</span>
          </Link>
        </div>

        <ScrollReveal variant="fadeUp" className="space-y-4">
          <Badge variant="accent">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white leading-tight font-heading">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 pt-2 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
        </ScrollReveal>

        {/* Featured Cover Image */}
        <ScrollReveal variant="scaleIn">
          <Card padding="p-2" className="overflow-hidden bg-neutral-900 aspect-[16/9] rounded-2xl">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </Card>
        </ScrollReveal>

        {/* Article Content */}
        <ScrollReveal variant="fadeUp" className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-6">
          <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed italic border-l-4 border-accent pl-4">
            {post.excerpt}
          </p>

          <div className="space-y-4 text-base">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        {/* Author Box Footer */}
        <ScrollReveal variant="fadeUp">
          <Card padding="p-6" className="flex items-center gap-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/40">
            <img src={profile?.avatar} alt={profile?.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white font-heading">{profile?.name}</h3>
              <p className="text-xs text-neutral-500">{profile?.role}</p>
            </div>
          </Card>
        </ScrollReveal>

      </motion.article>

    </div>
  );
}
