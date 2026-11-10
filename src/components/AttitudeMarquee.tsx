import React from 'react';
import { Shield, Heart, Droplets, Leaf, Award, Compass, Sun, Sparkles } from 'lucide-react';

export const AttitudeMarquee: React.FC = () => {
  const line1 = [
    { text: 'VERIFIED NON-ALCOHOLIC (<0.5% ABV)', icon: Shield },
    { text: 'RAW & LIVE ACTIVE PROBIOTICS', icon: Heart },
    { text: 'VERMONT FARMHOUSE HERITAGE (EST. 2007)', icon: Compass },
    { text: 'SIGNIFICANTLY LOWER SUGAR', icon: Droplets },
    { text: 'ORGANIC GREEN & BLACK TEA', icon: Leaf },
    { text: 'FOOD AS MEDICINE PHILOSOPHY', icon: Sun },
    { text: 'PIONEERS OF KOMBUCHA ON TAP', icon: Award },
    { text: 'ZERO ARTIFICIAL EXTRACTS', icon: Sparkles }
  ];

  const line2 = [
    { text: 'SOFT STRAWBERRIES & SUBTLE SAGE', icon: Sparkles },
    { text: 'SWEET BLUEBERRY & SMOKY CARDAMOM', icon: Sparkles },
    { text: 'IMMUNE-STUDIED ELDERBERRY ALLY', icon: Shield },
    { text: 'CREAMSICLE MADAGASCAR VANILLA BEANS', icon: Sun },
    { text: 'COLD-PRESSED GINGER & PERSIAN LIME', icon: Leaf },
    { text: 'PROBIOTIC DE111® SPARKLING SELTZERS', icon: Heart },
    { text: '153 POND LANE • MIDDLEBURY VERMONT', icon: Compass }
  ];

  return (
    <div className="relative py-6 bg-stone-950 border-y border-stone-800 overflow-hidden select-none z-20 flex flex-col gap-2.5 shadow-sm">
      {/* Ribbon 1 - Moving Left */}
      <div className="flex w-max animate-marquee">
        {[...line1, ...line1].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-8 text-xs sm:text-sm font-black tracking-wider uppercase text-stone-300 hover:text-amber-300 transition-colors"
            >
              <Icon className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{item.text}</span>
              <span className="text-stone-700 ml-4 font-mono">•</span>
            </div>
          );
        })}
      </div>

      {/* Ribbon 2 - Moving Right */}
      <div className="flex w-max animate-marquee-reverse opacity-75">
        {[...line2, ...line2].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-8 text-[11px] sm:text-xs font-bold tracking-widest uppercase text-stone-400 hover:text-teal-300 transition-colors"
            >
              <Icon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>{item.text}</span>
              <span className="text-stone-700 ml-4 font-mono">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
