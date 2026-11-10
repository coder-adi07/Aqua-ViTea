import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { FLAVORS, type Flavor } from './data/brandData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DrinkPourBackground } from './components/DrinkPourBackground';
import { AttitudeMarquee } from './components/AttitudeMarquee';
import { BrandIntro } from './components/BrandIntro';
import { FlavorShowcase } from './components/FlavorShowcase';
import { WhyAquaViTea } from './components/WhyAquaViTea';
import { LifestyleGallery } from './components/LifestyleGallery';
import { MissionSustainability } from './components/MissionSustainability';
import { FindUs } from './components/FindUs';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { PageIntro } from './components/PageIntro';

export function App() {
  const defaultFlavor = FLAVORS.find(f => f.id === 'strawberry-sage') || FLAVORS[0];
  const [currentFlavor, setCurrentFlavor] = useState<Flavor>(defaultFlavor);
  const [activeType, setActiveType] = useState<'kombucha' | 'aqua-seltzer'>('kombucha');
  const [introDone, setIntroDone] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleTypeChange = (type: 'kombucha' | 'aqua-seltzer') => {
    setActiveType(type);
    const matched = FLAVORS.find(f => f.type === type);
    if (matched) {
      setCurrentFlavor(matched);
    }
  };

  const handleFlavorChange = (flavor: Flavor) => {
    setCurrentFlavor(flavor);
    setActiveType(flavor.type);
  };

  return (
    <div className="min-h-screen bg-[#faf8f3] text-stone-900 selection:bg-amber-400 selection:text-stone-950 relative overflow-x-hidden">
      {!introDone && <PageIntro onComplete={() => setIntroDone(true)} />}
      <DrinkPourBackground currentFlavor={currentFlavor} />
      <CustomCursor />
      <Navbar
        onSelectType={handleTypeChange}
        activeType={activeType}
        currentFlavor={currentFlavor}
      />
      <main className="relative z-10">
        <Hero
          currentFlavor={currentFlavor}
          onFlavorChange={handleFlavorChange}
          activeType={activeType}
          onTypeChange={handleTypeChange}
        />
        <AttitudeMarquee />
        <BrandIntro />
        <FlavorShowcase
          currentFlavor={currentFlavor}
          onFlavorChange={handleFlavorChange}
        />
        <WhyAquaViTea />
        <LifestyleGallery />
        <MissionSustainability />
        <FindUs />
        <FAQSection />
        <FinalCTA />
      </main>
      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  );
}

export default App;
