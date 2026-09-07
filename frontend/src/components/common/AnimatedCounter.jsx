import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'motion/react';

/**
 * AnimatedCounter Component
 * Smoothly counts up numeric values when scrolled into view (e.g. "50+", "99.9%", "$10M", "14.2k").
 */
export function AnimatedCounter({
  value,
  duration = 2,
  className = '',
  prefix = '',
  suffix = '',
}) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState('0');

  // Extract pure number and decimal places if any
  const rawString = String(value);
  const match = rawString.match(/([\d.]+)/);
  const numericVal = match ? parseFloat(match[0]) : 0;
  const isDecimal = rawString.includes('.');

  // Extract pre/post characters if user passed full string like "50+" or "14.2k"
  const inferredSuffix = suffix || rawString.replace(/[\d.]/g, '');

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, numericVal, {
      duration,
      ease: [0.215, 0.61, 0.355, 1],
      onUpdate(current) {
        if (isDecimal) {
          setDisplayValue(current.toFixed(1));
        } else {
          setDisplayValue(Math.floor(current).toString());
        }
      },
    });

    return () => controls.stop();
  }, [isInView, numericVal, duration, isDecimal]);

  return (
    <span ref={nodeRef} className={`inline-block font-mono ${className}`}>
      {prefix}
      {displayValue}
      {inferredSuffix}
    </span>
  );
}

export default AnimatedCounter;
