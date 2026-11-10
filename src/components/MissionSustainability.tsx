import React from 'react';
import { Droplet, Recycle, Users, Sprout } from 'lucide-react';

export const MissionSustainability: React.FC = () => {
  const initiatives = [
    {
      icon: Recycle,
      title: 'Pioneered Kombucha On Tap',
      desc: 'Aqua ViTea was among the very first in the nation to supply commercial kombucha kegs to grocery co-ops and restaurants. Customers fill reusable glass growlers, keeping tens of thousands of single-use bottles out of landfills every year.'
    },
    {
      icon: Users,
      title: 'Vermont Rural Economy & 30 Careers',
      desc: 'Based at 153 Pond Lane in Middlebury, we train and sustain a team of 30 full-time Vermont manufacturing craftspeople, reinvesting directly into the local rural economy.'
    },
    {
      icon: Sprout,
      title: '100% Sustainably Sourced Organic Teas',
      desc: 'All our green and black teas, real fruit juices, and botanicals are sourced from certified organic farms that practice regenerative, pesticide-free agriculture.'
    },
    {
      icon: Droplet,
      title: 'Low-Temperature Cold Separation',
      desc: 'Rather than boiling or burning energy with excessive thermal evaporators, our low-temperature spinning cone disc system gently extracts alcohol while keeping the living matrix intact.'
    }
  ];

  return (
    <section id="sustainability" className="py-28 sm:py-36 bg-transparent text-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs uppercase font-black tracking-widest mb-4 shadow-sm">
              <Recycle className="w-3.5 h-3.5 text-emerald-700" />
              <span>Sustainable Brew Culture</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-stone-950 tracking-tight leading-[0.98] mb-6 font-display">
              Sustainability From Keg To Can.
            </h2>
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              Long before kombucha became a mainstream beverage, Aqua ViTea built its business model around bulk draft
              dispensing in Vermont natural grocery co-ops. We believe the healthiest choice for our bodies should also
              be the most responsible choice for our planet.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 rounded-3xl bg-white/90 border border-stone-200 shadow-sm text-center">
                <span className="text-3xl sm:text-4xl font-black text-amber-700 font-mono block mb-1">30+</span>
                <span className="text-xs text-stone-600 font-bold uppercase tracking-wider">Local Careers</span>
              </div>
              <div className="p-5 rounded-3xl bg-white/90 border border-stone-200 shadow-sm text-center">
                <span className="text-3xl sm:text-4xl font-black text-emerald-700 font-mono block mb-1">100%</span>
                <span className="text-xs text-stone-600 font-bold uppercase tracking-wider">Organic Teas</span>
              </div>
              <div className="p-5 rounded-3xl bg-white/90 border border-stone-200 shadow-sm text-center">
                <span className="text-3xl sm:text-4xl font-black text-teal-700 font-mono block mb-1">2007</span>
                <span className="text-xs text-stone-600 font-bold uppercase tracking-wider">Pioneers</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {initiatives.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-7 rounded-[2rem] bg-white/90 border border-stone-200 backdrop-blur-md flex flex-col justify-between hover:border-emerald-500 transition-all duration-300 shadow-md hover:shadow-xl group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-stone-950 mb-2 leading-snug font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
