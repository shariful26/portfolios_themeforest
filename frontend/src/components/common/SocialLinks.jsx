import React from 'react';

export const renderSocialSvgIcon = (nameOrIcon) => {
  const name = (nameOrIcon || '').toLowerCase();

  if (name.includes('linkedin')) {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    );
  }
  if (name.includes('twitter') || name.includes('x')) {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    );
  }
  if (name.includes('facebook')) {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.21.19 2.21.19v2.43h-1.24c-1.23 0-1.62.76-1.62 1.54V12h2.73l-.44 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8z"/>
      </svg>
    );
  }
  if (name.includes('whatsapp')) {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2zm5.82 14.12c-.25.7-.99 1.28-1.74 1.45-.51.11-1.18.2-3.41-.72-2.85-1.18-4.69-4.08-4.83-4.27-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.26-.28.58-.35.77-.35.19 0 .39.01.55.01.18.01.42-.07.66.5.25.6.86 2.09.93 2.24.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.3.31-.13.6.17.29.76 1.26 1.63 2.04 1.12.99 2.06 1.3 2.35 1.45.29.15.46.13.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.66-.14.27.1 1.73.82 2.03.96.3.15.5.22.57.35.07.13.07.76-.18 1.46z"/>
      </svg>
    );
  }
  if (name.includes('instagram')) {
    return (
      <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    );
  }
  if (name.includes('github')) {
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
};

export const defaultSocials = [
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
  { name: 'Twitter / X', icon: 'twitter', url: 'https://twitter.com' },
  { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
  { name: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/15552345678' },
  { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
  { name: 'GitHub', icon: 'github', url: 'https://github.com' },
];

export default function SocialLinks({ socials = defaultSocials, className = "" }) {
  const items = socials && socials.length > 0 ? socials : defaultSocials;

  return (
    <div className={`flex items-center gap-2.5 flex-wrap ${className}`}>
      {items.map((social) => {
        const name = (social?.name || social?.icon || '').toLowerCase();
        
        // Custom Hover Colors matching brand palettes
        let hoverClass = "hover:bg-amber-400 hover:text-neutral-950 hover:border-amber-400";
        if (name.includes('linkedin')) hoverClass = "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]";
        else if (name.includes('twitter') || name.includes('x')) hoverClass = "hover:bg-slate-950 dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-slate-700";
        else if (name.includes('facebook')) hoverClass = "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]";
        else if (name.includes('whatsapp')) hoverClass = "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]";
        else if (name.includes('instagram')) hoverClass = "hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white hover:border-rose-500";
        else if (name.includes('github')) hoverClass = "hover:bg-slate-800 hover:text-white hover:border-slate-700";

        return (
          <a
            key={social.name || social.url}
            href={social.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            aria-label={social.name}
            className={`w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:scale-110 ${hoverClass}`}
          >
            {renderSocialSvgIcon(social.name || social.icon)}
          </a>
        );
      })}
    </div>
  );
}
