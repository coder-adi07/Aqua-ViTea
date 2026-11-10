import React from 'react';
import type { Flavor } from '../data/brandData';

interface DrinkSplashEffectProps {
  flavor: Flavor;
  className?: string;
}

export const DrinkSplashEffect: React.FC<DrinkSplashEffectProps> = ({ flavor, className = '' }) => {
  const primary = flavor.color.primary;
  const accent = flavor.color.accent;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-visible ${className}`}>
      {/* Dynamic Liquid Splashes & Splatters SVG (Chita / Splatters) */}
      <svg
        className="w-full h-full absolute inset-0 overflow-visible"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="splashGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.8" />
            <stop offset="60%" stopColor={primary} stopOpacity="0.5" />
            <stop offset="100%" stopColor={primary} stopOpacity="0" />
          </radialGradient>

          <linearGradient id="liquidStream" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
            <stop offset="50%" stopColor={primary} stopOpacity="0.85" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.7" />
          </linearGradient>

          <filter id="splashBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Liquid Burst Aura */}
        <circle cx="300" cy="300" r="220" fill="url(#splashGlow)" className="animate-pulse duration-1000 opacity-60" />

        {/* Dynamic Curved Liquid Splashes (arcs bursting around the can) */}
        {/* Splash Arc Left-Up */}
        <path
          d="M 280,320 C 230,280 180,240 140,210 C 130,202 115,220 128,230 C 170,265 215,310 260,345 Z"
          fill="url(#liquidStream)"
          filter="url(#splashBlur)"
          className="opacity-85 animate-[float-slow_4s_ease-in-out_infinite]"
        />

        {/* Splash Arc Right-Up */}
        <path
          d="M 320,310 C 370,260 425,215 470,185 C 482,177 495,195 480,206 C 435,240 380,290 340,335 Z"
          fill="url(#liquidStream)"
          filter="url(#splashBlur)"
          className="opacity-85 animate-[float-slow_5s_ease-in-out_infinite_reverse]"
        />

        {/* Splash Arc Bottom-Left Wave */}
        <path
          d="M 270,360 C 210,390 160,430 110,480 C 100,490 118,505 130,492 C 175,445 230,410 290,380 Z"
          fill="url(#liquidStream)"
          className="opacity-80"
        />

        {/* Splash Arc Bottom-Right Wave */}
        <path
          d="M 330,360 C 390,395 440,435 490,485 C 502,497 518,480 504,470 C 455,420 400,380 345,350 Z"
          fill="url(#liquidStream)"
          className="opacity-80"
        />

        {/* Liquid Droplets / Splatters ("Chita") Flying outward */}
        {/* Top droplets */}
        <circle cx="210" cy="160" r="9" fill={accent} className="animate-ping duration-1000 opacity-75" />
        <circle cx="210" cy="160" r="7" fill={primary} />
        <circle cx="390" cy="140" r="11" fill={accent} className="opacity-90" />
        <circle cx="320" cy="110" r="6" fill={primary} className="opacity-80" />
        <circle cx="270" cy="130" r="8" fill={accent} className="opacity-85" />
        <circle cx="440" cy="160" r="6" fill={primary} className="opacity-70" />

        {/* Left droplets */}
        <circle cx="110" cy="260" r="12" fill={accent} className="opacity-85" />
        <circle cx="85" cy="300" r="7" fill={primary} className="opacity-90" />
        <circle cx="130" cy="340" r="9" fill={accent} className="opacity-80" />
        <circle cx="70" cy="230" r="5" fill={primary} className="opacity-70" />
        <circle cx="100" cy="380" r="8" fill={accent} className="opacity-80" />

        {/* Right droplets */}
        <circle cx="490" cy="270" r="13" fill={accent} className="opacity-85" />
        <circle cx="525" cy="315" r="8" fill={primary} className="opacity-90" />
        <circle cx="475" cy="350" r="10" fill={accent} className="opacity-80" />
        <circle cx="535" cy="245" r="6" fill={primary} className="opacity-75" />
        <circle cx="505" cy="400" r="7" fill={accent} className="opacity-70" />

        {/* Bottom droplets */}
        <circle cx="190" cy="510" r="10" fill={accent} className="opacity-80" />
        <circle cx="410" cy="520" r="12" fill={primary} className="opacity-85" />
        <circle cx="250" cy="530" r="7" fill={primary} className="opacity-75" />
        <circle cx="350" cy="540" r="8" fill={accent} className="opacity-80" />

        {/* Teardrop Liquid Splats */}
        <path
          d="M 160,200 C 155,190 145,190 145,198 C 145,206 155,212 160,200 Z"
          fill={accent}
          className="opacity-80"
        />
        <path
          d="M 450,190 C 455,180 465,180 465,188 C 465,196 455,202 450,190 Z"
          fill={primary}
          className="opacity-85"
        />
        <path
          d="M 95,330 C 85,325 80,335 88,340 C 95,345 102,336 95,330 Z"
          fill={accent}
          className="opacity-75"
        />
        <path
          d="M 515,340 C 525,335 530,345 522,350 C 515,355 508,346 515,340 Z"
          fill={primary}
          className="opacity-80"
        />
      </svg>
    </div>
  );
};

