import React, { useState } from 'react';
import { OFFICIAL_BADGES } from '../data/brandData';
import { Shield } from 'lucide-react';
import { playBubblePop } from '../utils/audio';

export const WhyAquaViTea: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: '01',
      title: 'Verified Non-Alcoholic (<0.5% ABV)',
      shortSubtitle: 'Proprietary Spinning Cone Technology',
      heroStat: '< 0.5%',
      statLabel: 'Guaranteed ABV Compliance',
      description:
        'Unlike brands that boil or heat-pasteurize their kombucha—destroying sensitive probiotics and enzymes—Aqua ViTea invested in proprietary spun-cone spinning disc technology. This physical extraction process gently separates alcohol at low temperatures, ensuring 100% legal compliance while keeping live cultures fully viable and active.',
      badges: ['verified-alcohol-extracted', 'clean-ingredients']
    },
    {
      id: '02',
      title: 'Significantly Lower Sugar & Calories',
      shortSubtitle: 'Naturally Fermented Effervescence',
      heroStat: '10g',
      statLabel: 'Max Sugar / 50 Calories',
      description:
        'During our authentic Vermont fermentation, the symbiotic culture consumes organic cane sugar as food, transforming it into beneficial acids, enzymes, and delicate carbonation. We refuse to dump artificial sweeteners or syrupy fruit purees back in post-ferment, resulting in a crisp, dry, and truly refreshing tonic that is fundamentally healthier.',
      badges: ['lower-sugar', 'organic-ingredients']
    },
    {
      id: '03',
      title: 'Authentic Live Cultures & Probiotics',
      shortSubtitle: 'SCOBY Fermentation & DE111®',
      heroStat: '100%',
      statLabel: 'Raw Live Probiotics',
      description:
        'Real kombucha is alive. Our kombuchas are steeped with certified organic green and black teas and fermented with a robust ancestral SCOBY. For our Aqua Seltzer line, we incorporate Bacillus Subtilis DE111®, a clinically researched, spore-forming probiotic strain that easily survives stomach acidity to reach your lower digestive tract.',
      badges: ['natural-probiotics', 'antioxidants-enzymes']
    },
    {
      id: '04',
      title: 'Food As Medicine & Wholesome Craft',
      shortSubtitle: 'Naturopathic Principles Since 2007',
      heroStat: '2007',
      statLabel: 'Farmhouse Roots',
      description:
        'Founded alongside a Vermont naturopathic medical practice, Aqua ViTea is guided by the philosophy that functional beverages should nurture your body, not deplete it. We adhere strictly to non-GMO, vegan, gluten-free, and organic sourcing standards across every single batch we produce.',
      badges: ['gmo-free', 'gluten-free', 'vegan-friendly', 'paleo-friendly']
    }
  ];

  const currentPillar = pillars[activeTab];

  const handleTabChange = (idx: number) => {
    playBubblePop();
    setActiveTab(idx);
  };

  return (
    <section id="why-aquavitea" className="relative py-28 sm:py-36 bg-transparent text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-xs uppercase font-black tracking-widest text-amber-800 mb-3 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-amber-700" />
            <span>The Aqua ViTea Standard</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-stone-950 tracking-tight mb-4 font-display">
            Why Aqua ViTea Is Different.
          </h2>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
            Not all kombuchas are created equal. We pioneered gentle alcohol extraction, authentic organic
            fermentation, and certified live probiotic integrity to set the gold standard in functional hydration.
          </p>
        </div>

        {/* 4 TABBED STATS (Vieve Reference 01 / 04) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Tab Selector Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {pillars.map((pillar, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => handleTabChange(idx)}
                  className={`flex items-start gap-5 p-6 rounded-3xl border text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-amber-100/90 border-amber-400 shadow-md translate-x-2'
                      : 'bg-white/80 border-stone-200 hover:bg-white hover:border-stone-300 shadow-sm'
                  }`}
                >
                  <span
                    className={`text-3xl font-black font-mono shrink-0 ${
                      isActive ? 'text-amber-800' : 'text-stone-400'
                    }`}
                  >
                    {pillar.id}
                  </span>
                  <div>
                    <h3
                      className={`text-base sm:text-lg font-black leading-snug mb-1 font-display ${
                        isActive ? 'text-stone-950' : 'text-stone-700'
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-stone-500 font-medium">{pillar.shortSubtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tab Spotlight Card */}
          <div className="lg:col-span-8 p-8 sm:p-14 rounded-[2.5rem] bg-white/95 border border-stone-200/90 backdrop-blur-2xl relative overflow-hidden shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-stone-200 mb-8">
              <div>
                <span className="text-xs font-mono font-black text-amber-800 uppercase tracking-widest block mb-2">
                  Pillar {currentPillar.id} of 04
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-stone-950 leading-tight font-display">
                  {currentPillar.title}
                </h3>
              </div>

              {/* Big Stat Callout */}
              <div className="text-right shrink-0">
                <span className="text-5xl sm:text-7xl font-black text-amber-700 font-mono block">
                  {currentPillar.heroStat}
                </span>
                <span className="text-xs text-stone-500 uppercase font-black tracking-wider">
                  {currentPillar.statLabel}
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-8 font-normal">
              {currentPillar.description}
            </p>

            {/* Matched Official Badges for this Pillar */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-stone-200">
              <span className="text-xs uppercase font-black tracking-widest text-stone-500">
                Verified Certifications:
              </span>
              <div className="flex flex-wrap gap-3">
                {currentPillar.badges.map(bId => {
                  const badge = OFFICIAL_BADGES.find(b => b.id === bId);
                  if (!badge) return null;
                  return (
                    <div
                      key={badge.id}
                      className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-stone-100 border border-stone-200 shadow-sm"
                    >
                      <img src={badge.icon} alt={badge.name} className="w-5 h-5 object-contain" />
                      <span className="text-xs font-bold text-stone-800">{badge.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 10 OFFICIAL BADGE ICONS SHOWCASE */}
        <div className="pt-12 border-t border-stone-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-stone-950 mb-2 font-display">
              Official Quality & Health Badges
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-normal">
              Every badge shown below is official Aqua ViTea iconography verifying our clean, honest formulation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {OFFICIAL_BADGES.map(badge => (
              <div
                key={badge.id}
                className="group p-6 rounded-3xl bg-white/90 border border-stone-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center shadow-sm hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-stone-50 border border-stone-100 p-3 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={badge.icon} alt={badge.name} className="w-full h-full object-contain" />
                </div>
                <h4 className="text-sm font-black text-stone-950 mb-1.5 leading-tight font-display">
                  {badge.name}
                </h4>
                <p className="text-[11px] text-stone-500 leading-snug font-normal">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
