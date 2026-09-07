import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';

/**
 * TestimonialSlider Component
 * Features:
 * - Live smooth sliding animation visually moving from Right to Left
 * - Center card is wide (650px max width) with single wide paragraph layout
 * - Left & Right peeking side cards match reference screenshot
 * - Golden ring pagination dots without arrow buttons
 * - Zero blur/japsha distortion
 */
export function TestimonialSlider({ testimonials = [], autoPlay = true, interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  // Auto play carousel slider
  useEffect(() => {
    if (!autoPlay || total <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, total, interval]);

  if (!testimonials || total === 0) return null;

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const currentItem = testimonials[currentIndex];
  const prevItem = testimonials[prevIndex];
  const nextItem = testimonials[nextIndex];

  return (
    <div className="w-full space-y-10 font-sans select-none overflow-hidden">
      
      {/* Header matching reference screenshot */}
      <div className="text-center max-w-2xl mx-auto space-y-3 px-4">
        <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest block">
          CLIENTS TESTIMONIAL
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white font-heading tracking-tight">
          Bringing Dreams to Life through
        </h2>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-slate-200 font-normal leading-relaxed">
          Business consulting consultants provide expert advice and guide businesses to help them improve their performance, efficiency, and organizational success.
        </p>
      </div>

      {/* Main Track with Center Focus & Side Peeking Cards */}
      <div className="w-full relative py-6 flex items-center justify-center gap-6 overflow-hidden">
        
        {/* Left Peeking Card */}
        <motion.div
          key={`prev-${prevIndex}`}
          onClick={() => setCurrentIndex(prevIndex)}
          initial={{ opacity: 0.5, x: -60 }}
          animate={{ opacity: 0.65, x: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="hidden md:flex flex-col justify-between shrink-0 w-[380px] lg:w-[460px] h-full rounded-2xl p-7 bg-[#0d0f15] border border-neutral-800/80 cursor-pointer shadow-lg hover:opacity-90 transition-opacity relative"
        >
          {/* Floating Double Quote Badge */}
          <div className="absolute -top-5 left-7 w-10 h-10 rounded-full bg-[#1b1f2c] border border-neutral-700/80 text-neutral-400 flex items-center justify-center shadow-md">
            <Quote className="w-4 h-4 fill-current opacity-80" />
          </div>

          <div className="pt-2 space-y-4 text-left">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <img src={prevItem.avatar} alt={prevItem.author} className="w-10 h-10 rounded-full object-cover border border-neutral-700" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-300 font-heading">{prevItem.author}</h4>
                  <p className="text-[11px] text-neutral-500">{prevItem.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 text-amber-400/80">
                {[...Array(prevItem.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed font-sans">
              "{prevItem.quote}"
            </p>
          </div>
        </motion.div>

        {/* Center Main Card (Wide Card with Live Right-to-Left Slide Motion) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`current-${currentIndex}`}
            initial={{ opacity: 0.8, x: 120, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0.8, x: -120, scale: 0.97 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-3xl shrink-0 rounded-2xl p-8 sm:p-10 bg-[#141720] border border-neutral-700/90 shadow-2xl ring-1 ring-amber-400/30 flex flex-col justify-between"
          >
            {/* Floating Double Quote Badge */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-[#1b1f2c] border border-neutral-700/90 text-amber-400 flex items-center justify-center shadow-xl z-20">
              <Quote className="w-5 h-5 fill-current opacity-95" />
            </div>

            <div className="pt-3 space-y-6 text-left">
              {/* Top Row: Avatar + Name + Role (Left) & 5 Gold Stars (Right) */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <img
                    src={currentItem.avatar}
                    alt={currentItem.author}
                    className="w-13 h-13 rounded-full object-cover border-2 border-neutral-700 shadow-md shrink-0"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading leading-snug">
                      {currentItem.author}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-0.5">
                      {currentItem.title}
                    </p>
                  </div>
                </div>

                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-amber-400 shrink-0">
                  {[...Array(currentItem.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Wide Quote Body Text */}
              <p className="text-sm sm:text-base text-neutral-200 font-normal leading-relaxed font-sans pt-2">
                "{currentItem.quote}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Peeking Card */}
        <motion.div
          key={`next-${nextIndex}`}
          onClick={() => setCurrentIndex(nextIndex)}
          initial={{ opacity: 0.5, x: 60 }}
          animate={{ opacity: 0.65, x: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="hidden md:flex flex-col justify-between shrink-0 w-[380px] lg:w-[460px] h-full rounded-2xl p-7 bg-[#0d0f15] border border-neutral-800/80 cursor-pointer shadow-lg hover:opacity-90 transition-opacity relative"
        >
          {/* Floating Double Quote Badge */}
          <div className="absolute -top-5 left-7 w-10 h-10 rounded-full bg-[#1b1f2c] border border-neutral-700/80 text-neutral-400 flex items-center justify-center shadow-md">
            <Quote className="w-4 h-4 fill-current opacity-80" />
          </div>

          <div className="pt-2 space-y-4 text-left">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <img src={nextItem.avatar} alt={nextItem.author} className="w-10 h-10 rounded-full object-cover border border-neutral-700" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-300 font-heading">{nextItem.author}</h4>
                  <p className="text-[11px] text-neutral-500">{nextItem.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 text-amber-400/80">
                {[...Array(nextItem.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed font-sans">
              "{nextItem.quote}"
            </p>
          </div>
        </motion.div>

      </div>

      {/* Golden Ring Pagination Dots */}
      <div className="flex items-center justify-center gap-3 pt-2">
        {testimonials.map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="relative focus:outline-none cursor-pointer p-1"
            >
              {isActive ? (
                /* Active Dot: Golden Ring around solid center dot */
                <motion.div
                  layoutId="active-dot-ring-wide"
                  className="w-4.5 h-4.5 rounded-full border-2 border-amber-400 flex items-center justify-center"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                </motion.div>
              ) : (
                /* Inactive Dot */
                <div className="w-2 h-2 rounded-full bg-neutral-700 hover:bg-neutral-500 transition-colors" />
              )}
            </button>
          );
        })}
      </div>

    </div>
  );
}

export default TestimonialSlider;
