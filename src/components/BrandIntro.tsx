import React from 'react';
import { MapPin, Users } from 'lucide-react';
import { BRAND_STORY_MILESTONES } from '../data/brandData';

export const BrandIntro: React.FC = () => {
  return (
    <section id="story" className="relative py-28 sm:py-36 bg-[#fbf9f4]/90 text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs uppercase font-black tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Middlebury, Vermont • Est. 2007</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-stone-950 tracking-tight leading-[0.98] mb-6 font-display">
            "We created Aqua ViTea as a healthier alternative to soda and sports drinks."
          </h2>
          <p className="text-stone-700 text-base sm:text-xl leading-relaxed font-normal">
            Born in a Salisbury farmhouse kitchen alongside a naturopathic medical practice, Aqua ViTea was founded
            by <strong className="text-stone-950 font-bold">Jeffrey Weaber</strong> and Dr. Katina Martin on the principle of{' '}
            <strong className="text-amber-700 font-semibold italic">"food as medicine"</strong>. One of the first commercial
            kombucha brewers in the United States, dedicated to raw live probiotics and rural Vermont job creation.
          </p>
        </div>

        {/* Editorial Visual Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Main Founder Visual */}
          <div className="lg:col-span-7 relative group rounded-[2.5rem] overflow-hidden border border-stone-200 bg-stone-900 shadow-2xl min-h-[460px] flex flex-col justify-end p-8 sm:p-12">
            <img
              src="/assets/story/founder-jeff.png"
              alt="Founder Jeff Weaber with his children outdoors in Vermont with Aqua ViTea"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-lg">
              <span className="text-xs uppercase font-black tracking-widest text-amber-400 mb-2 block">
                Founders' Health Mission
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white mb-3 font-display">
                "We founded this company with a health mission, not a money mission."
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                Jeff honed his craft at The Lucky Labrador Brewing Co in Portland while Katina pursued medical degrees
                in Naturopathy, Midwifery, and Acupuncture. In 2005, they moved back to a Vermont farmhouse, marrying
                traditional brewing with holistic functional health.
              </p>
            </div>
          </div>

          {/* Right Column Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Middlebury Facility Card */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-stone-200/90 bg-white/90 p-6 sm:p-8 flex flex-col justify-between group shadow-xl">
              <div className="relative h-52 rounded-2xl overflow-hidden mb-5 border border-stone-200">
                <img
                  src="/assets/story/brewery-facility.jpg"
                  alt="Aqua ViTea Middlebury Vermont Facility at 153 Pond Lane"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-black text-emerald-700 uppercase tracking-wider mb-1.5">
                  <Users className="w-4 h-4" />
                  <span>153 Pond Lane, Middlebury, VT</span>
                </div>
                <h4 className="text-xl font-black text-stone-950 mb-2 font-display">
                  30 Full-Time Vermont Careers
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  Scaled from a farmhouse kitchen to an advanced facility employing 30 long-term local workers, keeping
                  vitality and manufacturing inside Vermont's rural economy.
                </p>
              </div>
            </div>

            {/* Kombucha On Tap Tile */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-stone-200 bg-white/90 p-6 sm:p-8 flex items-center gap-6 shadow-xl">
              <img
                src="/assets/story/vermont-map.jpg"
                alt="Map of Vermont showing Middlebury"
                className="w-24 h-24 rounded-2xl object-cover border border-stone-200 shrink-0 shadow-md"
              />
              <div>
                <span className="text-[11px] uppercase font-black tracking-widest text-amber-700 block mb-1">
                  Draft Innovation
                </span>
                <h4 className="text-lg font-black text-stone-950 mb-1.5 font-display">
                  Pioneered Kombucha On Tap
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  Introduced the first kombucha-on-tap model in the US, empowering co-ops to fill reusable growlers and
                  diverting thousands of single-use bottles from landfills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline Grid */}
        <div className="pt-12 border-t border-stone-200">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-stone-950 font-display">
              The Vermont Journey (2005 – Present)
            </h3>
            <span className="text-xs text-stone-500 font-mono">100% Verified History</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {BRAND_STORY_MILESTONES.map((milestone, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  milestone.highlight
                    ? 'bg-amber-50 border-amber-300 shadow-md'
                    : 'bg-white/80 border-stone-200 hover:border-stone-300 hover:bg-white shadow-sm'
                }`}
              >
                <div>
                  <span
                    className={`text-2xl font-black font-mono block mb-3 ${
                      milestone.highlight ? 'text-amber-700' : 'text-stone-400'
                    }`}
                  >
                    {milestone.year}
                  </span>
                  <h4 className="text-base font-black text-stone-950 mb-2 leading-snug">
                    {milestone.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
