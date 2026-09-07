import React from 'react';
import * as LucideIcons from 'lucide-react';

/**
 * Render a Lucide icon by name safely with fallback
 */
export function RenderIcon({ name, className = "w-5 h-5", defaultIcon = "Code" }) {
  if (!name) {
    const Fallback = LucideIcons[defaultIcon] || LucideIcons.Code;
    return <Fallback className={className} />;
  }

  // Sanitize icon name to match Lucide PascalCase
  const sanitizedName = name.charAt(0).toUpperCase() + name.slice(1);
  const IconComponent = LucideIcons[sanitizedName] || LucideIcons[defaultIcon] || LucideIcons.Code;

  return <IconComponent className={className} />;
}

/**
 * Format currency or price string
 */
export function formatPrice(price) {
  return price || '';
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text, maxLength = 120) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}
