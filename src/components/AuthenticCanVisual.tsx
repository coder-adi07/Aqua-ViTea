import React, { useState, useRef } from 'react';
import type { Flavor } from '../data/brandData';
import { Sparkles } from 'lucide-react';
import { playCanOpenFizz } from '../utils/audio';

interface AuthenticCanVisualProps {
  flavor: Flavor;
  className?: string;
  size?: 'hero' | 'showcase' | 'card';
  showIngredients?: boolean;
}

export const AuthenticCanVisual: React.FC<AuthenticCanVisualProps> = ({
  flavor,
  className = '',
  size = 'hero',
  showIngredients = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const isHero = size === 'hero';
  const isShowcase = size === 'showcase';

  // Interactive 3D perspective mouse tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({
      x: -y * 18, // tilt vertical
      y: x * 22   // tilt horizontal
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const handleClick = () => {
    playCanOpenFizz();
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative flex items-center justify-center select-none cursor-pointer group ${className}`}
      style={{
        perspective: '1200px'
      }}
    >
      {/* Dynamic Ambient Glow matching the flavor's authentic packaging color */}
      <div
        className={`absolute rounded-full blur-[90px] pointer-events-none transition-all duration-700 ${
          isHero
            ? 'w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] opacity-75'
            : isShowcase
            ? 'w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] opacity-65'
            : 'w-48 h-48 opacity-45'
        }`}
        style={{
          background: `radial-gradient(circle, ${flavor.color.accent}aa 0%, ${flavor.color.primary}66 50%, transparent 75%)`,
          transform: isHovered ? 'scale(1.2)' : 'scale(1.0)'
        }}
      />

      {/* Floating Botanical/Ingredient Elements around the can in Hero */}
      {showIngredients && isHero && flavor.artImage && (
        <>
          <div
            className="absolute -left-12 top-16 w-32 h-32 sm:w-44 sm:h-44 pointer-events-none transition-transform duration-700 opacity-80 drop-shadow-2xl animate-float-slow"
            style={{
              transform: `translate3d(${rotate.y * 1.4}px, ${-rotate.x * 1.4}px, 40px) rotate(-15deg)`
            }}
          >
            <img
              src={flavor.artImage}
              alt=""
              className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
            />
          </div>

          <div
            className="absolute -right-10 bottom-24 w-28 h-28 sm:w-36 sm:h-36 pointer-events-none transition-transform duration-700 opacity-70 drop-shadow-2xl animate-float-slow [animation-delay:2s]"
            style={{
              transform: `translate3d(${-rotate.y * 1.2}px, ${rotate.x * 1.2}px, 25px) rotate(20deg)`
            }}
          >
            <img
              src={flavor.artImage}
              alt=""
              className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
            />
          </div>
        </>
      )}

      {/* 3D Tilted Can Container */}
      <div
        className="relative z-10 transition-transform duration-300 ease-out flex flex-col items-center justify-center"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(${isHovered ? '35px' : '0px'})`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* The REAL, 100% Authentic Product Can Image from official website */}
        <img
          src={flavor.canImage}
          alt={`Authentic Aqua ViTea ${flavor.name} can`}
          className={`w-auto object-contain transition-all duration-500 drop-shadow-[0_30px_50px_rgba(0,0,0,0.85)] ${
            isHero
              ? 'max-h-[520px] sm:max-h-[620px] xl:max-h-[680px]'
              : isShowcase
              ? 'max-h-[460px] sm:max-h-[540px]'
              : 'max-h-[300px] sm:max-h-[340px]'
          }`}
          style={{
            transform: isHovered ? 'scale(1.04)' : 'scale(1.0)'
          }}
        />

        {/* Dynamic Specular Sheen / Light Glare Overlay */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.35 : 0.15,
            background: `linear-gradient(${120 + rotate.y * 2}deg, rgba(255,255,255,0.7) 0%, transparent 60%)`
          }}
        />

        {/* Realistic Floor Contact Shadow */}
        <div
          className={`rounded-[100%] blur-xl pointer-events-none transition-all duration-300 ${
            isHero ? 'w-64 sm:w-80 h-10 mt-[-20px]' : isShowcase ? 'w-56 h-8 mt-[-15px]' : 'w-40 h-6 mt-[-10px]'
          }`}
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 75%)',
            transform: `translateX(${rotate.y * 1.5}px) scale(${isHovered ? 1.08 : 1})`
          }}
        />
      </div>

      {/* Interactive Hint Pill on Desktop */}
      {isHero && (
        <div className="absolute bottom-1 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[11px] font-black uppercase tracking-wider text-amber-300 bg-black/75 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-2xl flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Click to Crack Open & Fizz</span>
        </div>
      )}
    </div>
  );
};
