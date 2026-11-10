import React from 'react';
import { FLAVORS, type Flavor } from '../data/brandData';
import { AuthenticCanVisual } from './AuthenticCanVisual';
import { DrinkSplashEffect } from './DrinkSplashEffect';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Leaf, Droplets, Waves, Compass, BookOpen } from 'lucide-react';
import { playBubblePop } from '../utils/audio';

interface HeroProps {
  currentFlavor: Flavor;
  onFlavorChange: (flavor: Flavor) => void;
  activeType: 'kombucha' | 'aqua-seltzer';
  onTypeChange: (type: 'kombucha' | 'aqua-seltzer') => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentFlavor,
  onFlavorChange,
  activeType,
  onTypeChange
}) => {
  const filteredFlavors = FLAVORS.filter(f => f.type === activeType);
  const flavorColor = currentFlavor.color.primary;
  const flavorAccent = currentFlavor.color.accent;

  const handleFlavorSelect = (flavor: Flavor) => {
    playBubblePop();
    onFlavorChange(flavor);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex flex-col justify-between overflow-hidden transition-colors duration-1000"
      style={{
        background: `radial-gradient(ellipse 90% 80% at 70% 40%, ${flavorAccent}28 0%, ${flavorColor}12 45%, #faf8f3 85%)`
      }}
    >
      {/* Background Floating Micro-Fizz */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="bubble w-2.5 h-2.5 left-[12%] bottom-[8%] opacity-40 [animation-duration:5s]"
          style={{ backgroundColor: flavorColor }}
        />
        <div
          className="bubble w-3.5 h-3.5 left-[26%] bottom-[5%] opacity-50 [animation-duration:6.5s] [animation-delay:1s]"
          style={{ backgroundColor: flavorAccent }}
        />
        <div
          className="bubble w-2 h-2 left-[44%] bottom-[12%] opacity-40 [animation-duration:5.2s] [animation-delay:2.5s]"
          style={{ backgroundColor: flavorColor }}
        />
        <div
          className="bubble w-4 h-4 left-[68%] bottom-[6%] opacity-60 [animation-duration:7.5s] [animation-delay:0.5s]"
          style={{ backgroundColor: flavorAccent }}
        />
        <div
          className="bubble w-3 h-3 left-[82%] bottom-[10%] opacity-45 [animation-duration:6s] [animation-delay:2s]"
          style={{ backgroundColor: flavorColor }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* TOP ROW: Category Switcher (Clean Glass Bar) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex p-1.5 rounded-full bg-white/90 border border-stone-200/90 backdrop-blur-xl shadow-lg">
            <button
              onClick={() => {
                onTypeChange('kombucha');
                const first = FLAVORS.find(f => f.type === 'kombucha');
                if (first) onFlavorChange(first);
              }}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeType === 'kombucha'
                  ? 'text-white shadow-md scale-102 font-black'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
              style={{
                backgroundColor: activeType === 'kombucha' ? flavorColor : 'transparent'
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Raw Kombucha</span>
              <span className="text-[11px] opacity-90 font-mono font-bold">(6)</span>
            </button>

            <button
              onClick={() => {
                onTypeChange('aqua-seltzer');
                const first = FLAVORS.find(f => f.type === 'aqua-seltzer');
                if (first) onFlavorChange(first);
              }}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeType === 'aqua-seltzer'
                  ? 'text-white shadow-md scale-102 font-black'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
              style={{
                backgroundColor: activeType === 'aqua-seltzer' ? flavorAccent : 'transparent'
              }}
            >
              <Waves className="w-4 h-4" />
              <span>Aqua Seltzer Probiotic</span>
              <span className="text-[11px] opacity-90 font-mono font-bold">(4)</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 border border-stone-200 text-xs text-stone-600 backdrop-blur-md shadow-sm">
            <Compass className="w-4 h-4 text-amber-600" />
            <span className="font-semibold text-stone-900">Vermont Farmhouse Roots</span>
            <span className="text-stone-400">•</span>
            <span className="font-mono text-amber-700 font-bold">Est. 2007 Middlebury, VT</span>
          </div>
        </div>

        {/* HERO GRID: Giant Headlines + REAL OVERSIZED CAN WITH DRINK SPLATTERS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center py-4">
          {/* LEFT: Massive Typographic Headline & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Kicker Pill */}
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="text-xs uppercase font-black tracking-widest px-3.5 py-1.5 rounded-full border shadow-sm"
                style={{
                  backgroundColor: `${flavorColor}15`,
                  borderColor: `${flavorColor}40`,
                  color: flavorColor
                }}
              >
                {currentFlavor.type === 'kombucha' ? 'Authentic Live Fermentation' : 'Sparkling Probiotic Seltzer'}
              </span>
              {currentFlavor.featured && (
                <span className="text-[11px] uppercase font-bold tracking-wider text-rose-700 bg-rose-100 px-3 py-1 rounded-full border border-rose-300">
                  Featured Official Blend
                </span>
              )}
            </div>

            {/* Giant Show-stopping Headline */}
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black leading-[0.88] text-stone-950 tracking-tighter mb-6 font-display">
              FUNKtionally <br />
              <span
                className="font-editorial italic font-normal text-transparent bg-clip-text transition-all duration-700"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${flavorColor} 0%, ${flavorAccent} 100%)`
                }}
              >
                good for you.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-xl mb-8 font-medium">
              Handcrafted in a Vermont farmhouse on the timeless principle of{' '}
              <strong className="font-bold italic" style={{ color: flavorColor }}>
                "food as medicine"
              </strong>
              . Live probiotics, certified organic teas, guaranteed non-alcoholic compliance (&lt;0.5% ABV), and noticeably lower sugar.
            </p>

            {/* Active Flavor Callout Card */}
            <div className="p-6 rounded-3xl bg-white/90 border border-stone-200/90 backdrop-blur-xl mb-8 max-w-xl shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase font-black tracking-widest text-stone-500">
                  Current Blend
                </span>
                <span className="text-xs font-bold" style={{ color: flavorColor }}>
                  "{currentFlavor.tagline}"
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight font-display">
                  {currentFlavor.name}
                </h3>
                <span className="text-xs font-mono font-bold text-stone-500">
                  {currentFlavor.nutrition.calories} • {currentFlavor.nutrition.sugar}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-snug mb-4 font-normal">
                {currentFlavor.shortDesc}
              </p>

              {/* Tasting Notes Chips */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100">
                {currentFlavor.tastingNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-stone-100 text-stone-800 border border-stone-200"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#flavors"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white transition-all duration-300 shadow-xl hover:scale-105"
                style={{ backgroundColor: flavorColor }}
              >
                <span>Explore The 10 Blends</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#story"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 transition-all duration-300 shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Our Vermont Story</span>
              </a>
            </div>

            {/* STAT CHIPS ROW (Verified Claims Only) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl pt-5 border-t border-stone-200/80">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-amber-700 text-xs font-black mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>&lt; 0.5% ABV</span>
                </div>
                <span className="text-[11px] text-stone-500 font-medium">Verified Non-Alcoholic</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-black mb-0.5">
                  <Heart className="w-3.5 h-3.5" />
                  <span>Live Probiotics</span>
                </div>
                <span className="text-[11px] text-stone-500 font-medium">Raw Active Cultures</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-sky-700 text-xs font-black mb-0.5">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Lower Sugar</span>
                </div>
                <span className="text-[11px] text-stone-500 font-medium">Naturally Balanced</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-green-700 text-xs font-black mb-0.5">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>Organic Tea</span>
                </div>
                <span className="text-[11px] text-stone-500 font-medium">Certified Wholesome</span>
              </div>
            </div>
          </div>

          {/* RIGHT: REAL OVERSIZED CAN + DRINK SPLATTERS / SPLASH EFFECT ("Drink er Chita") */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div className="w-full max-w-xl relative flex items-center justify-center min-h-[580px] sm:min-h-[660px]">
              {/* LIQUID SPLASH & DROPLETS ("Drink er Chita") */}
              <DrinkSplashEffect flavor={currentFlavor} />

              {/* REAL OFFICIAL HIGH-RES CAN */}
              <AuthenticCanVisual
                flavor={currentFlavor}
                size="hero"
                showIngredients={true}
                className="w-full relative z-10"
              />
            </div>

            {/* Quick Interactive Flavor Swatches Bar (Clean White Glass) */}
            <div className="w-full max-w-lg mt-3 p-2 rounded-full bg-white/95 border border-stone-200/90 backdrop-blur-xl shadow-xl flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
              {filteredFlavors.map(flavor => {
                const isSelected = currentFlavor.id === flavor.id;
                return (
                  <button
                    key={flavor.id}
                    onClick={() => handleFlavorSelect(flavor)}
                    className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 shrink-0 ${
                      isSelected
                        ? 'text-white shadow-md scale-105 font-black'
                        : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
                    }`}
                    style={{
                      backgroundColor: isSelected ? flavor.color.primary : 'transparent'
                    }}
                    title={`${flavor.name} — ${flavor.tagline}`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm ring-1 ring-black/10"
                      style={{ backgroundColor: flavor.color.primary }}
                    />
                    <span className="text-xs font-bold whitespace-nowrap">
                      {flavor.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
