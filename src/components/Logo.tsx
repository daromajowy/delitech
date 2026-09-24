import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' is for light backgrounds, 'dark' is for dark backgrounds
  markOnly?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  markOnly = false,
  className = '',
  size = 'md',
}) => {
  const isDarkBg = variant === 'dark';

  const markSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: { title: 'text-sm tracking-tight', subtitle: 'text-[9px] tracking-[0.18em]' },
    md: { title: 'text-base tracking-tight', subtitle: 'text-[10px] tracking-[0.2em]' },
    lg: { title: 'text-xl tracking-tight', subtitle: 'text-xs tracking-[0.22em]' },
  };

  return (
    <div className={`flex items-center gap-2.5 font-display select-none ${className}`}>
      {/* Connected Grid Symbol */}
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${markSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
        aria-hidden="true"
      >
        {/* Background container tile */}
        <rect
          width="36"
          height="36"
          rx="6"
          fill={isDarkBg ? '#17211C' : '#0E4637'}
          stroke={isDarkBg ? '#CFE3C4' : 'transparent'}
          strokeWidth="1"
          strokeOpacity="0.15"
        />

        {/* Orthogonal Grid Lines (KNX Bus Network Representation) */}
        <line x1="10" y1="10" x2="26" y2="10" stroke={isDarkBg ? '#CFE3C4' : '#CFE3C4'} strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="10" y1="18" x2="26" y2="18" stroke={isDarkBg ? '#CFE3C4' : '#CFE3C4'} strokeOpacity="0.45" strokeWidth="1.2" />
        <line x1="10" y1="26" x2="26" y2="26" stroke={isDarkBg ? '#CFE3C4' : '#CFE3C4'} strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="2 2" />

        <line x1="10" y1="10" x2="10" y2="26" stroke={isDarkBg ? '#CFE3C4' : '#CFE3C4'} strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="18" y1="10" x2="18" y2="26" stroke={isDarkBg ? '#CFE3C4' : '#CFE3C4'} strokeOpacity="0.45" strokeWidth="1.2" />
        <line x1="26" y1="10" x2="26" y2="26" stroke={isDarkBg ? '#CFE3C4' : '#CFE3C4'} strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="2 2" />

        {/* Connected Nodes */}
        <circle cx="10" cy="10" r="2" fill={isDarkBg ? '#CFE3C4' : '#CFE3C4'} fillOpacity="0.8" />
        <circle cx="26" cy="10" r="2" fill={isDarkBg ? '#CFE3C4' : '#CFE3C4'} fillOpacity="0.6" />
        <circle cx="10" cy="26" r="2" fill={isDarkBg ? '#CFE3C4' : '#CFE3C4'} fillOpacity="0.6" />
        <circle cx="26" cy="26" r="2.5" fill="#E6F15A" />

        {/* Primary Central Logic Hub */}
        <circle cx="18" cy="18" r="3.2" fill={isDarkBg ? '#0E4637' : '#17211C'} stroke="#E6F15A" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="1.4" fill="#E6F15A" />
      </svg>

      {!markOnly && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-extrabold uppercase ${textSizes[size].title} ${
              isDarkBg ? 'text-white' : 'text-[#0E4637]'
            }`}
          >
            DELITECH
          </span>
          <span
            className={`font-semibold uppercase tracking-[0.2em] mt-0.5 ${textSizes[size].subtitle} ${
              isDarkBg ? 'text-[#CFE3C4]' : 'text-[#17211C]/70'
            }`}
          >
            SMART SPACES
          </span>
        </div>
      )}
    </div>
  );
};
