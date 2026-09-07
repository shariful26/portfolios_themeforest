import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { usePortfolioData } from '../../context/DataContext';
import SocialLinks from '../common/SocialLinks';
import { Phone, MapPin, Mail, ArrowRight, ArrowUp, Check } from 'lucide-react';

export default function Footer() {
  const { data } = usePortfolioData();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const profile = data?.profile;

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0f19] text-white pt-16 pb-10 border-t border-slate-800/80 relative overflow-hidden font-sans">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/90 items-start">
          
          {/* Column 1: Brand & Tagline & Social Icons */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 text-neutral-950 flex items-center justify-center font-extrabold text-xl shadow-lg group-hover:scale-105 transition-transform">
                {profile?.name ? profile.name.charAt(0) : 'N'}
              </div>
              <span className="font-heading font-extrabold text-2xl text-white tracking-tight group-hover:text-amber-400 transition-colors">
                {profile?.name || 'Nexus Pro'}
              </span>
            </Link>

            {/* Tagline / Bio */}
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-normal">
              {profile?.headline || profile?.shortBio || 'Engineering high-performance web products, modern user interfaces, and scalable digital experiences.'}
            </p>

            {/* Circular Social Icons (LinkedIn, Twitter/X, Facebook, WhatsApp, Instagram, GitHub) */}
            <div className="pt-2">
              <SocialLinks socials={profile?.socials} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white font-heading tracking-wide border-b border-slate-800 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-300 font-medium">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">About Me</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition-colors">Portfolio Projects</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">Services & Pricing</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-amber-400 transition-colors">Experience Timeline</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Me</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white font-heading tracking-wide border-b border-slate-800 pb-2 inline-block">
              Get In Touch
            </h3>
            <div className="space-y-4 text-sm text-slate-200 font-sans">
              {/* Phone */}
              <div className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center shrink-0 group-hover:border-amber-400 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-semibold text-slate-200">{profile?.phone || '+1 (555) 234-5678'}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center shrink-0 group-hover:border-amber-400 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium text-slate-200">{profile?.location || 'San Francisco, CA (Remote)'}</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center shrink-0 group-hover:border-amber-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-semibold text-amber-400 truncate">{profile?.email || 'alex.morgan@example.com'}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Card Box */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <h3 className="text-base font-bold text-white font-heading">
                  Newsletter
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Subscribe to receive case study updates, technical insights, and project availability.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="pt-1 space-y-3">
                <div className="relative flex items-center bg-slate-950 border border-slate-800 rounded-2xl p-1.5 focus-within:border-amber-400 transition-colors">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none font-sans"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="w-9 h-9 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 flex items-center justify-center shrink-0 shadow-md cursor-pointer transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 font-bold" />
                  </motion.button>
                </div>

                {subscribed && (
                  <p className="text-xs text-emerald-400 font-semibold pl-1 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Subscribed successfully! Thank you.</span>
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} {profile?.name || 'Nexus Pro'}. All Rights Reserved.</p>

          <div className="flex items-center gap-6 text-slate-300 font-semibold">
            <Link to="/contact" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link>
            <Link to="/contact" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Support</Link>
          </div>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-slate-900/90 text-amber-400 hover:bg-amber-400 hover:text-neutral-950 transition-all cursor-pointer border border-slate-700 shadow-2xl backdrop-blur-md"
        title="Scroll to Top"
      >
        <ArrowUp className="w-5 h-5 font-bold" />
      </motion.button>

    </footer>
  );
}

