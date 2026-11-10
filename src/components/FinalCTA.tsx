import React, { useState } from 'react';
import { ArrowRight, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { playCanOpenFizz } from '../utils/audio';

export const FinalCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    playCanOpenFizz();
    setSubmitted(true);
  };

  return (
    <section className="relative py-32 sm:py-44 bg-transparent text-stone-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-xs uppercase font-black tracking-widest text-amber-800 mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>Thirsty Yet?</span>
        </div>

        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-stone-950 tracking-tighter leading-[0.92] mb-6 max-w-5xl mx-auto font-display">
          Taste Authentic Vermont Fermentation.
        </h2>

        <p className="text-base sm:text-2xl text-stone-700 max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
          Crafted with certified organic teas, live probiotics, and verified non-alcoholic purity. Explore our full
          roster of 10 handcrafted flavors.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-16">
          <a
            href="#flavors"
            className="px-9 py-5 rounded-full bg-stone-950 hover:bg-stone-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl hover:scale-105 inline-flex items-center gap-2.5"
          >
            <span>Explore All 10 Blends</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#story"
            className="px-9 py-5 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2 shadow-sm"
          >
            <span>The Vermont Farmhouse Story</span>
          </a>
        </div>

        {/* Demo Newsletter Box */}
        <div className="max-w-md mx-auto p-6 sm:p-8 rounded-[2rem] bg-white/95 border border-stone-200/90 backdrop-blur-xl shadow-xl">
          <h4 className="text-sm font-black text-stone-950 uppercase tracking-wider mb-1 font-display">
            Stay Connected with Middlebury
          </h4>
          <p className="text-xs text-stone-600 mb-4 font-normal">
            Sign up for seasonal batch announcements & Vermont stories.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Thank you! Concept subscription received.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full py-3 pl-10 pr-4 rounded-full bg-stone-100 border border-stone-300 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 font-medium"
                />
                <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-stone-950 hover:bg-stone-800 text-white font-black text-xs uppercase tracking-wider transition-colors shrink-0"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
