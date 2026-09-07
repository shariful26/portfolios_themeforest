import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: IconComponent,
  iconPosition = 'left',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles = "group inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none";

  const variants = {
    primary: "bg-accent hover:bg-accent/90 text-white font-bold shadow-lg shadow-accent/25 hover:shadow-accent/40 focus:ring-accent border border-transparent",
    secondary: "bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-neutral-500 border border-neutral-300/50 dark:border-neutral-700/50",
    outline: "bg-transparent border border-neutral-300 dark:border-neutral-700 hover:border-accent text-neutral-800 dark:text-neutral-200 hover:text-accent focus:ring-accent",
    ghost: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 hover:text-accent focus:ring-accent"
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5"
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const iconSizeClass = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';

  const content = (
    <>
      {IconComponent && iconPosition === 'left' && (
        <IconComponent className={`${iconSizeClass} transition-transform duration-200 group-hover:-translate-x-0.5`} />
      )}
      <span>{children}</span>
      {IconComponent && iconPosition === 'right' && (
        <IconComponent className={`${iconSizeClass} transition-transform duration-200 group-hover:translate-x-1`} />
      )}
    </>
  );

  const motionProps = disabled ? {} : {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 20 }
  };

  if (to) {
    return (
      <motion.div className="inline-block" {...motionProps}>
        <Link to={to} className={combinedClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div className="inline-block" {...motionProps}>
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
}
