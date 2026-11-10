import React, { useState } from 'react';
import { FLAVORS, type Flavor } from '../data/brandData';
import { AuthenticCanVisual } from './AuthenticCanVisual';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { playBubblePop } from '../utils/audio';

interface FlavorShowcaseProps {
  currentFlavor: Flavor;
  onFlavorChange: (flavor: Flavor) => void;
}

export const FlavorShowcase: React.FC<FlavorShowcaseProps> = ({
  currentFlavor,
  onFlavorChange
}) => {
  const [filterType, setFilterType] = useState<'all' | 'kombucha' | 'aqua-seltzer'>('all');

  const filteredFlavors = FLAVORS.filter(f => {
    if (filterType === 'all') return true;
    return f.type === filterType;
  });

  const handleSelect = (flavor: Flavor) => {
    playBubblePop();
    onFlavorChange(flavor);
  };

  return (
    <section id="flavors" className="relative py-28 sm:py-36 bg-transparent text-stone-900 overflow-hidden">
      {/* Dynamic Ambient Glow matching the flavor */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[160px] pointer-events-none opacity-20 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${currentFlavor.color.accent} 0%, ${currentFlavor.color.primary} 50%, transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION 1: HEADER & FILTER TABS (Vieve Reference) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-xs uppercase font-black tracking-widest text-amber-800 mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Vermont Farmhouse Range</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-stone-950 tracking-tight font-display">
              Pick Your Blend.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Authentically brewed with organic tea, live active cultures, and real whole fruit extracts.
              Official high-resolution can photography directly from the Middlebury, Vermont brewery.
            </p>
          </div>

          {/* Vieve-Style Filter Tabs with Counts */}
          <div className="inline-flex p-1.5 rounded-full bg-white/95 border border-stone-200/90 backdrop-blur-md self-start md:self-auto shadow-md">
            <button
              onClick={() => setFilterType('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                filterType === 'all'
                  ? 'bg-stone-900 text-white shadow-md scale-102'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              All (10)
            </button>
            <button
              onClick={() => setFilterType('kombucha')}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                filterType === 'kombucha'
                  ? 'bg-stone-900 text-white shadow-md scale-102'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Kombucha (6)
            </button>
            <button
              onClick={() => setFilterType('aqua-seltzer')}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                filterType === 'aqua-seltzer'
                  ? 'bg-teal-700 text-white shadow-md scale-102'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Aqua Seltzer (4)
            </button>
          </div>
        </div>

        {/* INTERACTIVE TASTING STUDIO (Vieve Section 4 Attitude translation with Authentic Can Visual) */}
        <div
          className="rounded-[2.5rem] p-6 sm:p-12 mb-24 border border-white/15 shadow-2xl transition-colors duration-1000 relative overflow-hidden"
          style={{
            backgroundColor: `${currentFlavor.color.secondary}ee`,
            backgroundImage: `radial-gradient(circle at 50% 30%, ${currentFlavor.color.primary}77 0%, transparent 75%)`
          }}
        >
          {/* Subtle ingredient watermark background */}
          {currentFlavor.artImage && (
            <div
              className="absolute -right-20 -bottom-20 w-[520px] h-[520px] opacity-15 pointer-events-none blur-sm transform rotate-12 transition-all duration-1000"
              style={{
                backgroundImage: `url(${currentFlavor.artImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left: Numbered Flavor Selector */}
            <div className="lg:col-span-4 flex flex-col gap-2.5 max-h-[620px] overflow-y-auto pr-2 custom-scrollbar">
              <span className="text-xs uppercase font-black tracking-widest text-stone-400 mb-1 block">
                01 — Select A Flavor
              </span>

              {filteredFlavors.map((flavor, index) => {
                const isSelected = currentFlavor.id === flavor.id;
                return (
                  <button
                    key={flavor.id}
                    onClick={() => handleSelect(flavor)}
                    className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 group ${
                      isSelected
                        ? 'bg-white/20 border-white/40 shadow-xl translate-x-2 ring-1 ring-white/30'
                        : 'bg-black/30 border-white/5 hover:bg-white/10 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span
                        className={`text-sm font-black font-mono w-7 shrink-0 ${
                          isSelected ? 'text-amber-400' : 'text-stone-400'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="w-4 h-4 rounded-full shrink-0 shadow-md ring-1 ring-white/20"
                        style={{ backgroundColor: flavor.color.primary }}
                      />
                      <div className="min-w-0">
                        <h4
                          className={`text-sm sm:text-base font-extrabold leading-tight truncate ${
                            isSelected ? 'text-white' : 'text-stone-300 group-hover:text-white'
                          }`}
                        >
                          {flavor.name}
                        </h4>
                        <p className="text-[11px] text-stone-400 font-medium truncate">
                          {flavor.tagline}
                        </p>
                      </div>
                    </div>

                    {flavor.featured && (
                      <span className="text-[10px] uppercase font-black tracking-wider text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded-full border border-rose-400/30 shrink-0 ml-2">
                        Featured
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Middle: AUTHENTIC CAN VISUAL (Real High-Res Official Packaging from aquavitea.com) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[540px]">
              <AuthenticCanVisual
                flavor={currentFlavor}
                size="showcase"
                showIngredients={true}
                className="w-full"
              />
            </div>

            {/* Right: Flavor Story, Ingredients, Tasting Profile */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase font-black tracking-wider text-amber-300 bg-amber-400/15 px-3 py-1 rounded-full border border-amber-400/30">
                    {currentFlavor.type === 'kombucha' ? 'Raw Vermont Kombucha' : 'Aqua Seltzer Probiotic'}
                  </span>
                  {currentFlavor.featured && (
                    <span className="text-xs uppercase font-bold tracking-wider text-rose-300 bg-rose-500/25 px-2.5 py-0.5 rounded-full border border-rose-400/30">
                      Featured Flavor
                    </span>
                  )}
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1 font-display">
                  {currentFlavor.name}
                </h3>
                <p className="text-sm font-bold text-amber-300 mb-4 italic font-editorial">
                  "{currentFlavor.tagline}"
                </p>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-normal">
                  {currentFlavor.fullDesc}
                </p>

                {/* Tasting Notes */}
                <div className="mb-6">
                  <span className="text-[11px] uppercase font-black tracking-widest text-stone-400 block mb-2">
                    Tasting Profile
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentFlavor.tastingNotes.map((note, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/10 text-stone-100 border border-white/15"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Nutrition Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-black/60 border border-white/10 mb-6 backdrop-blur-sm">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400">Calories</span>
                    <span className="text-sm font-black text-white font-mono block">
                      {currentFlavor.nutrition.calories}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400">Sugar Content</span>
                    <span className="text-sm font-black text-white font-mono block">
                      {currentFlavor.nutrition.sugar}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400">Alcohol Level</span>
                    <span className="text-sm font-black text-amber-300 font-mono block">
                      {currentFlavor.nutrition.abv}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400">Probiotics</span>
                    <span className="text-sm font-black text-emerald-400 font-mono block">
                      {currentFlavor.nutrition.probiotics}
                    </span>
                  </div>
                </div>

                {/* Verified Ingredients */}
                <div className="text-[11px] text-stone-300 leading-relaxed border-t border-white/10 pt-4">
                  <strong className="text-white uppercase block mb-1 font-bold">Official Ingredients:</strong>
                  <p className="italic">{currentFlavor.ingredients}</p>
                </div>
              </div>

              {/* Retailer Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="#retailers"
                  className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-amber-300 text-stone-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xl hover:scale-102"
                >
                  <span>Locate {currentFlavor.name} In Stores</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 10-FLAVOR COMPACT VISUAL CARD GRID (Pick Your Pack — Compact Cards, Hero-Sized Product Can) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3 border-b border-stone-200 pb-5">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-800 block mb-1">
                The Complete Official Lineup
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight font-display">
                All 10 Handcrafted Varieties
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500">
              Click any blend to taste in studio
            </span>
          </div>

          {/* COMPACT CARD GRID (Sleek white cards, Large prominent cans) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
            {filteredFlavors.map(flavor => {
              const isSelected = currentFlavor.id === flavor.id;
              return (
                <div
                  key={flavor.id}
                  onClick={() => {
                    handleSelect(flavor);
                    const el = document.getElementById('flavors');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`group relative p-4 sm:p-5 rounded-3xl border cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? 'bg-amber-50/70 border-amber-400 shadow-xl scale-[1.02] ring-2 ring-amber-400/60'
                      : 'bg-white/95 border-stone-200/90 hover:border-stone-300 hover:shadow-xl hover:-translate-y-1.5'
                  }`}
                  style={{
                    boxShadow: isSelected
                      ? `0 15px 35px ${flavor.color.primary}33`
                      : '0 4px 20px rgba(0,0,0,0.06)'
                  }}
                >
                  {/* Background Radial Glow */}
                  <div
                    className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: flavor.color.primary }}
                  />

                  {/* Top Header inside Card */}
                  <div className="flex items-center justify-between w-full relative z-10 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full shadow-sm ring-1 ring-black/10 shrink-0"
                        style={{ backgroundColor: flavor.color.primary }}
                      />
                      <span className="text-[10px] uppercase font-bold tracking-wider text-stone-600">
                        {flavor.type === 'kombucha' ? 'Kombucha' : 'Seltzer'}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700">
                      {flavor.nutrition.calories}
                    </span>
                  </div>

                  {/* PROMINENT CAN IMAGE (Takes up dominant height of compact card) */}
                  <div className="h-64 sm:h-72 w-full flex items-center justify-center my-2 relative z-10">
                    {/* Concentric Ambient Ring */}
                    <div
                      className="absolute w-40 h-40 rounded-full blur-2xl opacity-25 group-hover:opacity-50 transition-opacity duration-500"
                      style={{ backgroundColor: flavor.color.primary }}
                    />
                    <img
                      src={flavor.canImage}
                      alt={`${flavor.name} official can`}
                      className="h-full w-auto max-w-full object-contain relative z-10 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-[0_16px_22px_rgba(0,0,0,0.4)] filter contrast-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Compact Flavor Content & Information */}
                  <div className="mt-2 pt-3 border-t border-stone-100 relative z-10 flex flex-col gap-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-black text-stone-950 leading-tight font-display group-hover:text-amber-800 transition-colors truncate">
                        {flavor.name}
                      </h4>
                      <p className="text-[11px] font-bold text-amber-800 italic font-editorial truncate">
                        "{flavor.tagline}"
                      </p>
                    </div>

                    {/* Tasting note summary strip */}
                    <p className="text-[10px] text-stone-500 truncate font-medium">
                      {flavor.tastingNotes.slice(0, 2).join(' • ')}
                    </p>

                    {/* Compact Select Button */}
                    <button
                      className={`w-full py-2 mt-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-stone-900 text-white font-black shadow-md'
                          : 'bg-stone-100 group-hover:bg-stone-900 text-stone-800 group-hover:text-white border border-stone-200'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>Selected</span>
                        </>
                      ) : (
                        <>
                          <span>Taste In Studio</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Featured Badge */}
                  {flavor.featured && (
                    <span className="absolute top-3 right-3 text-[9px] uppercase font-black tracking-widest text-rose-100 bg-rose-600 px-2.5 py-0.5 rounded-full shadow-md border border-rose-400/40 z-20">
                      Featured
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
