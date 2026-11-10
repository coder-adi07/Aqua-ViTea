import { useEffect, useState } from 'react';

export const PageIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return;
    }

    const timer1 = setTimeout(() => {
      setFade(true);
    }, 1100);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#070e0a] text-stone-100 transition-opacity duration-500 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center max-w-sm px-6 text-center animate-in fade-in zoom-in-95 duration-700">
        <img
          src="/assets/logo/logo-main.png"
          alt="Aqua ViTea"
          className="h-16 w-auto object-contain mb-6 drop-shadow-xl"
        />

        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden mb-4 relative">
          <div className="absolute inset-y-0 left-0 bg-amber-400 w-full animate-[marquee_1.2s_ease-in-out_infinite]" />
        </div>

        <p className="text-[11px] uppercase font-bold tracking-widest text-amber-300 font-mono">
          Middlebury, Vermont • Est. 2007
        </p>
        <span className="text-[10px] text-stone-500 mt-1">
          Authentic Farmhouse Kombucha
        </span>
      </div>
    </div>
  );
};

