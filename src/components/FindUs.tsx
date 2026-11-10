import React from 'react';
import { RETAILERS } from '../data/brandData';
import { Mail, ArrowRight, Store } from 'lucide-react';

export const FindUs: React.FC = () => {
  return (
    <section id="retailers" className="py-28 sm:py-36 bg-transparent border-t border-stone-200 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-xs uppercase font-black tracking-widest text-amber-800 mb-3 shadow-sm">
            <Store className="w-3.5 h-3.5 text-amber-700" />
            <span>Store Availability</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-stone-950 tracking-tight mb-4 font-display">
            Find Us At These Retailers.
          </h2>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
            Aqua ViTea cans and draft growler fill stations are proudly stocked by premier regional grocers and natural
            food co-ops across New England, the Northeast, and expanding nationwide.
          </p>
        </div>

        {/* 6 Official Retailers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6 items-center mb-16">
          {RETAILERS.map((retailer, index) => (
            <div
              key={index}
              className="group p-6 rounded-3xl bg-white/95 border border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[160px] shadow-sm hover:-translate-y-1.5"
            >
              <img
                src={retailer.logo}
                alt={`${retailer.name} logo`}
                className="max-h-16 max-w-full object-contain filter contrast-110 transition-all duration-300 group-hover:scale-105"
              />
              <span className="text-xs font-black text-stone-700 group-hover:text-stone-950 mt-4 block leading-tight font-display">
                {retailer.name}
              </span>
            </div>
          ))}
        </div>

        {/* Verified Location Inquiry Banner */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white/95 border border-stone-200/90 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-stone-950 mb-2 font-display">
                Looking for an Aqua ViTea retailer near you?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl font-normal">
                Email our customer team directly at{' '}
                <a href="mailto:contact@aquavitea.com" className="text-amber-800 hover:underline font-bold">
                  contact@aquavitea.com
                </a>{' '}
                with your city, state, or zip code and we will help locate your nearest stockist or draft growler tap.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:contact@aquavitea.com?subject=Locate Aqua ViTea Near Me"
              className="px-8 py-4 rounded-full bg-stone-950 hover:bg-stone-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl inline-flex items-center gap-2 hover:scale-105"
            >
              <span>Email contact@aquavitea.com</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
