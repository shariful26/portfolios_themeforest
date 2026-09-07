import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import DemoSwitcherBar from '../demo/DemoSwitcherBar';
import ScrollProgress from '../common/ScrollProgress';
import { usePortfolioData } from '../../context/DataContext';
import { pageTransitionVariants } from '../../utils/motion';

export default function Layout() {
  const { data, loading } = usePortfolioData();
  const location = useLocation();
  const showDemoSwitcher = data?.config?.demoSettings?.showDemoSwitcher !== false;

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center gap-4 text-white font-sans">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="font-mono text-sm text-neutral-400">Loading Nexus Pro Motion System...</p>
      </div>
    );
  }

  // Instant scroll to top on route change to eliminate black background scroll bleed
  React.useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200/80 dark:from-[#070a10] dark:via-[#0c1220] dark:to-[#070a10] text-neutral-900 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden font-sans">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Premium Live Animated Mesh Background Glow System */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Top-Left Glowing Ambient Orb */}
        <div className="live-glow-orb-1 absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-400/20 via-purple-500/15 to-indigo-500/20 dark:from-amber-400/15 dark:via-purple-600/20 dark:to-indigo-600/25 blur-[120px]" />

        {/* Top-Right Glowing Ambient Orb */}
        <div className="live-glow-orb-2 absolute top-1/4 -right-24 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-purple-600/20 dark:from-cyan-500/15 dark:via-blue-600/20 dark:to-purple-900/30 blur-[140px]" />

        {/* Bottom-Left Glowing Ambient Orb */}
        <div className="live-glow-orb-3 absolute bottom-10 left-10 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-emerald-400/15 via-amber-400/15 to-indigo-500/20 dark:from-emerald-500/15 dark:via-amber-500/10 dark:to-indigo-900/25 blur-[130px]" />

        {/* Subtle Ambient Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.12] dark:opacity-[0.18]" />
      </div>


      <Navbar />

      <main className="flex-1 pt-20 sm:pt-22 pb-20 relative z-10 w-full">
        <Outlet />
      </main>

      <Footer />

      {showDemoSwitcher && <DemoSwitcherBar />}
    </div>
  );
}
