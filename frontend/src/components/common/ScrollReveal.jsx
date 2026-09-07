import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  blurReveal,
  staggerContainer,
  staggerItem
} from '../../utils/motion';

const variantsMap = {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  blurReveal,
  staggerContainer,
  staggerItem,
};

/**
 * ScrollReveal Component
 * Wraps content to trigger smooth, accessible scroll-reveal animations on viewport enter.
 */
export function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  once = true,
  amount = 0.05,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const Component = motion[as] || motion.div;
  const selectedVariant = variantsMap[variant] || fadeUp;

  // If user has reduced motion enabled, render without translation or blur
  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={selectedVariant}
      custom={delay}
      {...props}
    >
      {children}
    </Component>
  );
}

export function ScrollStaggerContainer({
  children,
  staggerDelay = 0.15,
  delayChildren = 0,
  className = '',
  once = true,
  amount = 0.1,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={staggerContainer(staggerDelay, delayChildren)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function ScrollStaggerItem({
  children,
  className = '',
  as = 'div',
  customVariant,
  ...props
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      variants={customVariant || staggerItem}
      {...props}
    >
      {children}
    </Component>
  );
}

export default ScrollReveal;
