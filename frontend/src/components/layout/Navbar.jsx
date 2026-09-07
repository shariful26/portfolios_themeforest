import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';
import { usePortfolioData } from '../../context/DataContext';
import { personaPresets } from '../../data/presets';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles, CheckCircle2, UserCheck, ChevronDown, Settings } from 'lucide-react';
import Button from '../common/Button';

export default function Navbar() {
  const { theme, toggleTheme, accent, setAccent, activePreset, setActivePreset } = useTheme();
  const { data } = usePortfolioData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const profile = data?.profile;

  const accentColors = [
    { id: 'emerald', name: 'Emerald', bg: 'bg-emerald-500' },
    { id: 'violet', name: 'Violet', bg: 'bg-indigo-500' },
    { id: 'cyan', name: 'Cyan', bg: 'bg-cyan-500' },
    { id: 'amber', name: 'Amber', bg: 'bg-amber-500' },
    { id: 'rose', name: 'Rose', bg: 'bg-rose-500' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile drawer is open to prevent background bleed/scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Experience', path: '/experience' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Full Screen Dimmed Backdrop Overlay when Mobile Drawer is Open */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none"
      >
        <div
          className={`pointer-events-auto transition-all duration-300 border-x border-b border-t-0 rounded-none ${
            mobileMenuOpen
              ? 'p-5 sm:p-6 bg-white dark:bg-neutral-900 shadow-2xl border-neutral-200/90 dark:border-neutral-800/90'
              : scrolled
              ? 'py-3.5 px-6 sm:px-8 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl border-neutral-200/80 dark:border-neutral-800/80 shadow-xl ring-1 ring-black/5 dark:ring-white/10'
              : 'py-4.5 px-6 sm:px-8 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border-neutral-200/60 dark:border-neutral-800/60 shadow-md'
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand & Logo */}
            <NavLink to="/" className="flex items-center gap-2 group min-w-0">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                className="p-[2px] rounded-2xl bg-gradient-to-tr from-amber-400 via-accent to-purple-600 shadow-md group-hover:shadow-accent/40 transition-all duration-300 shrink-0"
              >
                {profile?.avatar ? (
                  <img
                    src={profile.avatar}
                    alt={profile?.name || "Portfolio Owner"}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-[14px] object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[14px] bg-neutral-900 dark:bg-neutral-950 flex items-center justify-center font-extrabold text-amber-400 text-sm sm:text-lg tracking-wider">
                    {profile?.name ? profile.name.charAt(0) : 'N'}
                  </div>
                )}
              </motion.div>
              <div className="flex items-center gap-1 min-w-0">
                <span className="font-heading font-extrabold text-xs sm:text-base text-neutral-900 dark:text-white tracking-tight group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors truncate max-w-[110px] sm:max-w-none">
                  {profile?.name || 'Nexus Pro'}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
              </div>
            </NavLink>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className="relative px-4 py-1.5 text-xs font-semibold transition-colors duration-200 rounded-lg select-none"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-neutral-900 dark:bg-amber-400 rounded-lg shadow-md"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors ${
                        isActive
                          ? 'text-white dark:text-neutral-950 font-bold'
                          : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                      }`}
                    >
                      {link.name}
                    </span>
                  </NavLink>
                );
              })}
            </nav>

            {/* Action Area (Role Dropdown + Status + Theme + Hire CTA + Mobile Toggle) */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              
              {/* Quick Profession / Role Switcher Dropdown (Desktop Only) */}
              <div className="hidden sm:block relative">
                <button
                  onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                  className="px-2.5 sm:px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-slate-800 text-neutral-800 dark:text-slate-100 hover:border-amber-400 border border-neutral-200/80 dark:border-slate-700/80 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                  title="Switch Profession Preset"
                >
                  {(() => {
                    const IconComp = personaPresets[activePreset]?.icon || UserCheck;
                    return <IconComp className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />;
                  })()}
                  <span className="hidden sm:inline-block max-w-[110px] truncate">
                    {personaPresets[activePreset]?.name || 'Profession'}
                  </span>
                  <ChevronDown className={`w-3 h-3 text-neutral-400 transition-transform ${roleDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {roleDropdownOpen && (
                    <>
                      {/* Backdrop click listener */}
                      <div className="fixed inset-0 z-40" onClick={() => setRoleDropdownOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-700 shadow-2xl p-2 z-50 overflow-hidden"
                      >
                        <div className="text-[10px] font-mono font-bold text-neutral-400 dark:text-slate-400 px-3 py-1.5 uppercase tracking-wider flex items-center justify-between">
                          <span>Select Profession Preset</span>
                          <Sparkles className="w-3 h-3 text-amber-400 animate-spin" />
                        </div>
                        <div className="max-h-72 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                          {Object.values(personaPresets).map((preset) => {
                            const IconComp = preset.icon || UserCheck;
                            return (
                              <button
                                key={preset.id}
                                onClick={() => {
                                  setActivePreset(preset.id);
                                  setRoleDropdownOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-left ${
                                  activePreset === preset.id
                                    ? 'bg-amber-400 text-neutral-950 font-extrabold shadow-sm'
                                    : 'text-neutral-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-slate-800'
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <IconComp className="w-3.5 h-3.5 opacity-80" />
                                  <span>{preset.name}</span>
                                </span>
                                <span className="text-[10px] opacity-75 font-mono bg-neutral-200/60 dark:bg-slate-800/80 px-1.5 py-0.5 rounded">
                                  {preset.badge}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Dark / Light Mode Switcher (Desktop Only) */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={toggleTheme}
                aria-label="Toggle Dark or Light Mode"
                className="hidden sm:flex p-2 sm:p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:border-accent hover:text-accent border border-neutral-200/80 dark:border-neutral-700/80 shadow-sm hover:shadow-md transition-all cursor-pointer items-center justify-center shrink-0"
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-indigo-600" />
                  )}
                </motion.div>
              </motion.button>

              {/* Hire Me CTA Button */}
              <div className="hidden sm:block">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <NavLink
                    to="/contact"
                    className="px-5 py-2 text-xs font-bold rounded-full bg-neutral-900 hover:bg-neutral-800 text-amber-400 dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-neutral-950 shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span>Hire Me</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </NavLink>
                </motion.div>
              </div>

              {/* Mobile Drawer Hamburger Button */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Drawer"
                className="lg:hidden p-2 sm:p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-accent border border-neutral-200 dark:border-neutral-700 cursor-pointer flex items-center justify-center shrink-0"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Drawer Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden overflow-hidden pt-3 border-t border-neutral-200/80 dark:border-neutral-800/80 max-h-[80vh] overflow-y-auto space-y-4"
              >
                {/* Navigation Links */}
                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-neutral-900 text-amber-400 dark:bg-amber-400 dark:text-neutral-950 font-bold shadow-sm'
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <CheckCircle2 className="w-4 h-4 opacity-80" />}
                      </NavLink>
                    );
                  })}
                </nav>

                {/* Collapsible Demo & Theme Controls Toggle System */}
                <div className="pt-1">
                  <button
                    onClick={() => setShowControls(!showControls)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-bold text-xs flex items-center justify-between border border-neutral-200/80 dark:border-neutral-700/80 cursor-pointer transition-all hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  >
                    <div className="flex items-center gap-2 font-heading">
                      <Settings className="w-4 h-4 text-amber-500" />
                      <span>Theme & Persona Controls</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <span className="text-[10px] font-mono font-semibold uppercase">{showControls ? 'Hide' : 'Show'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showControls ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {showControls && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden space-y-3 pt-3"
                      >
                        {/* Theme & Accent Color Controls Box */}
                        <div className="p-3.5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700/80 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                              Theme Mode
                            </span>
                            <button
                              onClick={toggleTheme}
                              className="px-3 py-1.5 rounded-xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
                            >
                              {theme === 'dark' ? (
                                <>
                                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                                  <span>Light Mode</span>
                                </>
                              ) : (
                                <>
                                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                                  <span>Dark Mode</span>
                                </>
                              )}
                            </button>
                          </div>

                          {/* Accent Color Palette Switcher */}
                          <div className="pt-2 border-t border-neutral-200/80 dark:border-neutral-700/80 flex items-center justify-between">
                            <span className="text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                              Accent Color
                            </span>
                            <div className="flex items-center gap-2">
                              {accentColors.map((c) => (
                                <button
                                  key={c.id}
                                  onClick={() => setAccent(c.id)}
                                  title={c.name}
                                  className={`w-6 h-6 rounded-full ${c.bg} flex items-center justify-center transition-transform cursor-pointer ${
                                    accent === c.id ? 'ring-2 ring-offset-2 ring-amber-400 scale-110' : 'opacity-80'
                                  }`}
                                >
                                  {accent === c.id && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Profession Persona Presets Grid */}
                        <div className="p-3.5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700/80 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                              Switch Profession Persona
                            </span>
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            {Object.values(personaPresets).map((preset) => {
                              const IconComp = preset.icon || UserCheck;
                              const isActive = activePreset === preset.id;
                              return (
                                <button
                                  key={preset.id}
                                  onClick={() => setActivePreset(preset.id)}
                                  className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all text-left flex items-center gap-2 cursor-pointer ${
                                    isActive
                                      ? 'bg-amber-400 text-neutral-950 font-extrabold shadow-sm'
                                      : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:border-amber-400 border border-neutral-200/60 dark:border-neutral-700/60'
                                  }`}
                                >
                                  <IconComp className="w-3.5 h-3.5 shrink-0" />
                                  <span className="truncate">{preset.name}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Let's Work Together CTA */}
                <div className="pt-1">
                  <NavLink
                    to="/contact"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 font-extrabold text-sm text-center flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-transform cursor-pointer"
                  >
                    <span>Let's Work Together</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}

