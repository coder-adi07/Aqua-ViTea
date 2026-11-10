import React, { useState } from 'react';
import { FAQS } from '../data/brandData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { playBubblePop } from '../utils/audio';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    playBubblePop();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 sm:py-36 bg-transparent border-t border-stone-200 text-stone-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-xs uppercase font-black tracking-widest text-amber-800 mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Good Questions</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-stone-950 tracking-tight mb-4 font-display">
            Frequently Asked Questions.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-normal">
            Every answer below is backed 100% by official Aqua ViTea facts, lab extraction methods, and certified
            standards.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-3xl border border-stone-200 bg-white/90 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-xl font-bold text-stone-950 leading-snug font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-100 border-amber-300 text-amber-800' : 'text-stone-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 text-sm sm:text-base text-stone-700 leading-relaxed border-t border-stone-100 pt-5 animate-in fade-in duration-300 font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
