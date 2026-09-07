import React from 'react';

export default function Card({
  children,
  className = '',
  hoverGlow = true,
  padding = 'p-6',
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`glass-panel rounded-none ${hoverGlow ? 'card-glow' : ''} ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
