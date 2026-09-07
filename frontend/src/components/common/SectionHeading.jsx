import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const alignmentMap = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col mb-12 ${alignmentMap[align] || alignmentMap.center} ${className}`}>
      {tag && (
        <Badge variant="accent" className="mb-3">
          {tag}
        </Badge>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-slate-200 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
