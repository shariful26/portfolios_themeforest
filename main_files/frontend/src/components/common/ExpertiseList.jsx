import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Palette, Sparkles, Play } from 'lucide-react';
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from './ScrollReveal';

/**
 * ExpertiseList Component
 * Matches the reference image screenshot 100%:
 * - Exactly 3 wide, spacious expertise card rows with increased height
 * - Icon pill that turns golden yellow on hover
 * - Perfect legible typography & font sizes
 * - Warm dark golden background fill on hover
 */
export function ExpertiseList() {
  const [hoveredId, setHoveredId] = useState('branding'); // Default hover preset matching reference image (2nd item)

  const expertiseItems = [
    {
      id: 'ui-design',
      title: 'Ui/Visual Design',
      percentage: 90,
      icon: Palette,
      desc: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills and visual product design.",
    },
    {
      id: 'branding',
      title: 'Branding Design',
      percentage: 75,
      icon: Sparkles,
      desc: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills and visual identity.",
    },
    {
      id: 'motion',
      title: 'Motion Design',
      percentage: 80,
      icon: Play,
      desc: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills and 60fps animations.",
    }
  ];

  return (
    <div className="w-full space-y-10 font-sans select-none">
      
      {/* Split 2-Column Header matching reference screenshot */}
      <ScrollReveal variant="fadeUp" className="grid grid-cols-1 lg:grid-cols-12 items-end justify-between gap-6 pb-2">
        <div className="lg:col-span-7 space-y-2 text-left">
          <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest block">
            MY EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white font-heading tracking-tight leading-tight">
            Elevated Designs Personalized the best Experiences
          </h2>
        </div>

        <div className="lg:col-span-5 text-left lg:text-right">
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-slate-300 font-normal leading-relaxed max-w-md lg:ml-auto">
            Business consulting consultants provide expert advice and guide businesses to help them improve their performance, efficiency, and organizational success.
          </p>
        </div>
      </ScrollReveal>

      {/* Exactly 3 Stacked Horizontal Expertise Cards with Increased Height & Perfect Typography */}
      <ScrollStaggerContainer className="space-y-5">
        {expertiseItems.map((item) => {
          const IconComponent = item.icon;
          const isHovered = hoveredId === item.id;

          return (
            <ScrollStaggerItem key={item.id}>
              <motion.div
                onMouseEnter={() => setHoveredId(item.id)}
                whileHover={{ scale: 1.008, y: -3 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`group relative w-full rounded-2xl p-8 sm:p-9 min-h-[120px] flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 transition-all duration-300 cursor-pointer shadow-xl ${
                  isHovered
                    ? 'bg-[#221e15] border border-amber-400/80 shadow-2xl ring-1 ring-amber-400/30'
                    : 'bg-[#12141c] border border-neutral-800/90 hover:bg-[#1a1813] hover:border-amber-400/50'
                }`}
              >
                {/* Left Section: Icon Pill + Title */}
                <div className="flex items-center gap-6 shrink-0">
                  
                  {/* Icon Pill (Turns Golden Yellow on Hover) */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 font-bold transition-all duration-300 shadow-lg ${
                      isHovered
                        ? 'bg-amber-400 text-neutral-950 border border-amber-300 shadow-amber-400/30 scale-105'
                        : 'bg-[#1b1e26] text-white border border-neutral-800 group-hover:bg-amber-400 group-hover:text-neutral-950 group-hover:border-amber-300'
                    }`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title with Perfect Bold Typography */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading tracking-tight shrink-0 min-w-[200px] sm:min-w-[260px] text-left">
                    {item.title}
                  </h3>
                </div>

                {/* Center Section: Circular Percentage Gauge Badge */}
                <div className="flex items-center justify-center shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full bg-[#161820] border flex items-center justify-center font-extrabold font-mono text-base shrink-0 shadow-inner transition-colors ${
                      isHovered
                        ? 'border-amber-400/80 text-amber-400'
                        : 'border-neutral-800 text-white group-hover:border-amber-400/60 group-hover:text-amber-400'
                    }`}
                  >
                    {item.percentage}%
                  </div>
                </div>

                {/* Right Section: Description Paragraph */}
                <div className="flex-1 text-left">
                  <p className="text-sm sm:text-base text-neutral-300 group-hover:text-neutral-200 font-normal leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            </ScrollStaggerItem>
          );
        })}
      </ScrollStaggerContainer>

    </div>
  );
}

export default ExpertiseList;
