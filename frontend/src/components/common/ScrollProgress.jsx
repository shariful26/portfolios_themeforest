import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/**
 * ScrollProgress Component
 * Renders a high-end minimalist progress bar at the top of the viewport
 * tracking document scroll position.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 via-indigo-500 to-accent-primary z-[9999] origin-left pointer-events-none shadow-[0_0_8px_rgba(139,92,246,0.6)]"
      style={{ scaleX }}
    />
  );
}

export default ScrollProgress;
