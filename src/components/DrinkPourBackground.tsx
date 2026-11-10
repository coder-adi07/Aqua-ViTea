import React from 'react';
import type { Flavor } from '../data/brandData';

interface DrinkPourBackgroundProps {
  currentFlavor: Flavor;
}

export const DrinkPourBackground: React.FC<DrinkPourBackgroundProps> = ({ currentFlavor }) => {
  const primary = currentFlavor.color.primary;
  const accent = currentFlavor.color.accent;
  const secondary = currentFlavor.color.secondary;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Base Gradient - Warm organic tea cream infused with flavor tint */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(ellipse 90% 80% at 75% 20%, ${accent}33 0%, ${primary}18 35%, #faf7f0 85%)`
        }}
      />

      {/* Subtle organic kombucha paper texture & glow */}
      <div
        className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full blur-[160px] opacity-35 transition-all duration-1000 pointer-events-none"
        style={{ backgroundColor: accent }}
      />
      <div
        className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-all duration-1000 pointer-events-none"
        style={{ backgroundColor: primary }}
      />
      <div
        className="absolute -bottom-40 right-1/4 w-[700px] h-[700px] rounded-full blur-[150px] opacity-30 transition-all duration-1000 pointer-events-none"
        style={{ backgroundColor: secondary }}
      />

      {/* CASCADING LIQUID POURING STREAM SVG ("Drink Dhele Porche") */}
      <svg
        className="absolute right-0 top-0 h-full w-[380px] sm:w-[540px] lg:w-[680px] opacity-60 transition-all duration-1000 overflow-visible"
        viewBox="0 0 500 1200"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Liquid Pouring Gradient */}
          <linearGradient id="pourStream" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.75" />
            <stop offset="35%" stopColor={primary} stopOpacity="0.65" />
            <stop offset="70%" stopColor={accent} stopOpacity="0.55" />
            <stop offset="100%" stopColor={primary} stopOpacity="0.45" />
          </linearGradient>

          {/* Highlights & Gloss on liquid surface */}
          <linearGradient id="liquidGloss" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="70%" stopColor={accent} stopOpacity="0.6" />
            <stop offset="100%" stopColor={primary} stopOpacity="0.8" />
          </linearGradient>

          <filter id="liquidGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        {/* Viscous Outer Wave Flow */}
        <path
          d="M 320,-20 
             C 280,180 380,320 330,500 
             C 280,680 400,820 340,1000 
             C 300,1120 380,1180 360,1250 
             L 520,1250 
             L 520,-20 Z"
          fill="url(#pourStream)"
          filter="url(#liquidGlow)"
          className="transition-all duration-1000 opacity-60"
        />

        {/* Core Vibrant Pouring Stream */}
        <path
          d="M 360,-20 
             C 330,160 410,300 370,480 
             C 330,660 430,800 380,980 
             C 340,1100 410,1160 390,1250 
             L 520,1250 
             L 520,-20 Z"
          fill="url(#liquidGloss)"
          className="transition-all duration-1000 opacity-75"
        />

        {/* Thin Liquid Splash Ribbons */}
        <path
          d="M 290,60 C 270,140 330,220 300,300 C 270,380 340,460 310,540"
          stroke={accent}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="12 18"
          className="opacity-70 animate-[dash_12s_linear_infinite]"
        />
        <path
          d="M 260,340 C 240,420 300,500 270,580 C 240,660 310,740 280,820"
          stroke={primary}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="8 14"
          className="opacity-60 animate-[dash_10s_linear_infinite_reverse]"
        />

        {/* Flowing Liquid Drops cascading down */}
        <circle cx="310" cy="180" r="14" fill={accent} className="opacity-75" />
        <circle cx="280" cy="240" r="9" fill={primary} className="opacity-80" />
        <circle cx="340" cy="380" r="16" fill={accent} className="opacity-70" />
        <circle cx="290" cy="460" r="11" fill={primary} className="opacity-85" />
        <circle cx="320" cy="620" r="18" fill={accent} className="opacity-75" />
        <circle cx="270" cy="710" r="10" fill={primary} className="opacity-80" />
        <circle cx="330" cy="850" r="15" fill={accent} className="opacity-70" />
        <circle cx="290" cy="940" r="8" fill={primary} className="opacity-80" />
        <circle cx="350" cy="1080" r="14" fill={accent} className="opacity-75" />
      </svg>

      {/* Floating Micro-Effervescent Fizz Bubbles (Upward bubbling motion) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="bubble w-2 h-2 left-[15%] bottom-[10%] opacity-40 [animation-duration:5s]"
          style={{ backgroundColor: primary }}
        />
        <div
          className="bubble w-3.5 h-3.5 left-[30%] bottom-[5%] opacity-50 [animation-duration:7s] [animation-delay:1s]"
          style={{ backgroundColor: accent }}
        />
        <div
          className="bubble w-2.5 h-2.5 left-[48%] bottom-[12%] opacity-45 [animation-duration:5.5s] [animation-delay:2.5s]"
          style={{ backgroundColor: primary }}
        />
        <div
          className="bubble w-4 h-4 left-[72%] bottom-[8%] opacity-55 [animation-duration:8s] [animation-delay:0.5s]"
          style={{ backgroundColor: accent }}
        />
        <div
          className="bubble w-3 h-3 left-[85%] bottom-[15%] opacity-45 [animation-duration:6.2s] [animation-delay:2s]"
          style={{ backgroundColor: primary }}
        />
        <div
          className="bubble w-5 h-5 left-[92%] bottom-[6%] opacity-60 [animation-duration:9s] [animation-delay:3.5s]"
          style={{ backgroundColor: accent }}
        />
      </div>
    </div>
  );
};

