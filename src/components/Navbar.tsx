import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { toggleSound, playCanOpenFizz, playBubblePop } from '../utils/audio';
import type { Flavor } from '../data/brandData';

interface NavbarProps {
  onSelectType?: (type: 'kombucha' | 'aqua-seltzer') => void;
  activeType?: 'kombucha' | 'aqua-seltzer';
  currentFlavor?: Flavor;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSelectType,
  activeType = 'kombucha',
  currentFlavor
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const flavorColor = currentFlavor?.color.primary || '#9c2438';
  const flavorAccent = currentFlavor?.color.accent || '#e75a70';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) {
      playCanOpenFizz();
    }
  };

  // Concise, single-line, unbreakable menu items
  const navLinks = [
    { id: 'home', label: 'Home', href: '#hero' },
    { id: 'flavors', label: 'Flavors', href: '#flavors' },
    { id: 'story', label: 'Story', href: '#story' },
    { id: 'why', label: 'Why Us', href: '#why-aquavitea' },
    { id: 'ontap', label: 'On Tap', href: '#sustainability' },
    { id: 'retailers', label: 'Find Us', href: '#retailers' },
    { id: 'faq', label: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      {/* PURE WHITE NAVBAR WITH UNBREAKABLE SINGLE-LINE DESKTOP MENU & DYNAMIC DRINK HOVER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-stone-200/90 shadow-lg py-2.5'
            : 'bg-white/95 backdrop-blur-md border-b border-stone-100 py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-nowrap gap-4 w-full">
          {/* Brand Logo - Original from official site */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none rounded-lg shrink-0 flex-nowrap whitespace-nowrap"
          >
            <img
              src="/assets/logo/logo-main.png"
              alt="Aqua ViTea Kombucha"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
            />
            <span className="hidden 2xl:inline-block text-[10px] tracking-widest uppercase font-bold text-stone-500 border-l border-stone-200 pl-2.5 py-0.5 whitespace-nowrap">
              Middlebury, VT
            </span>
          </a>

          {/* Desktop Navigation Links — Strictly Single-Line, Unbreakable Flex */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 text-xs xl:text-sm font-extrabold tracking-wide text-stone-800 shrink-0 flex-nowrap whitespace-nowrap">
            {navLinks.map(link => {
              const isHovered = hoveredNav === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onMouseEnter={() => {
                    playBubblePop();
                    setHoveredNav(link.id);
                  }}
                  onMouseLeave={() => setHoveredNav(null)}
                  className="relative py-1 transition-colors duration-200 font-display whitespace-nowrap inline-block shrink-0"
                  style={{
                    color: isHovered ? flavorColor : '#292524'
                  }}
                >
                  <span className="whitespace-nowrap">{link.label}</span>
                  {/* Dynamic Underline in active flavor color */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-all duration-300 ${
                      isHovered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    }`}
                    style={{ backgroundColor: flavorColor }}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Tools: Switcher, Sound FX & Retailer CTA */}
          <div className="hidden xl:flex items-center gap-2.5 shrink-0 flex-nowrap whitespace-nowrap">
            {/* Audio Fizz Toggle */}
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-full border border-stone-200 bg-stone-50 text-stone-600 hover:text-stone-900 transition-all duration-300 shadow-sm shrink-0"
              title={soundOn ? 'Mute fizz audio effects' : 'Enable ambient effervescent fizz sound'}
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5 text-emerald-600" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Type Switcher Pill */}
            <div className="flex items-center p-1 bg-stone-100 border border-stone-200 rounded-full text-xs font-bold shrink-0 flex-nowrap">
              <button
                onClick={() => onSelectType?.('kombucha')}
                className={`px-3 py-1 rounded-full transition-all duration-300 text-xs whitespace-nowrap shrink-0 ${
                  activeType === 'kombucha'
                    ? 'text-white shadow-sm font-black'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
                style={{
                  backgroundColor: activeType === 'kombucha' ? flavorColor : 'transparent'
                }}
              >
                Kombucha
              </button>
              <button
                onClick={() => onSelectType?.('aqua-seltzer')}
                className={`px-3 py-1 rounded-full transition-all duration-300 text-xs whitespace-nowrap shrink-0 ${
                  activeType === 'aqua-seltzer'
                    ? 'text-white shadow-sm font-black'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
                style={{
                  backgroundColor: activeType === 'aqua-seltzer' ? flavorAccent : 'transparent'
                }}
              >
                Seltzer
              </button>
            </div>

            {/* Retailer Store Locator Button with dynamic flavor accent */}
            <a
              href="#retailers"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white transition-all duration-300 shadow-md hover:scale-105 shrink-0 whitespace-nowrap"
              style={{ backgroundColor: flavorColor }}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Find Stores</span>
            </a>
          </div>

          {/* Mobile / Tablet View: Controls & Hamburger Button (< XL) */}
          <div className="flex items-center gap-2 xl:hidden shrink-0 flex-nowrap">
            {/* Mobile Sound FX Toggle */}
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-full border border-stone-200 bg-stone-50 text-stone-600"
              title="Sound FX"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Quick Find Store Button for Mobile */}
            <a
              href="#retailers"
              className="px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider text-white shadow-sm shrink-0 whitespace-nowrap"
              style={{ backgroundColor: flavorColor }}
            >
              Stores
            </a>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-stone-200 bg-stone-100 text-stone-800 hover:bg-stone-200 focus:outline-none shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE WHITE DRAWER MENU (Clean, responsive, never breaks) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl xl:hidden flex flex-col pt-24 px-6 pb-8 animate-in fade-in duration-300 overflow-y-auto">
          {/* Current Active Drink Pill */}
          {currentFlavor && (
            <div className="p-3.5 rounded-2xl bg-stone-100 border border-stone-200 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-3.5 h-3.5 rounded-full shadow-sm shrink-0"
                  style={{ backgroundColor: flavorColor }}
                />
                <span className="text-xs font-black text-stone-800 uppercase tracking-wider">
                  Active Drink: {currentFlavor.name}
                </span>
              </div>
              <Sparkles className="w-4 h-4" style={{ color: flavorColor }} />
            </div>
          )}

          {/* Navigation Links */}
          <div className="flex flex-col gap-3 text-lg font-display font-black text-stone-800">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-stone-100 transition-colors flex items-center justify-between"
                style={{
                  color: hoveredNav === link.id ? flavorColor : '#292524'
                }}
                onTouchStart={() => setHoveredNav(link.id)}
              >
                <span>{link.label}</span>
                <span className="text-stone-400 text-sm">→</span>
              </a>
            ))}
          </div>

          {/* Category Switcher in Mobile Drawer */}
          <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col gap-4">
            <span className="text-xs uppercase font-extrabold text-stone-500 tracking-widest">
              Choose Beverage Range
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  onSelectType?.('kombucha');
                  setMobileMenuOpen(false);
                }}
                className={`py-3 px-4 rounded-2xl text-xs font-black uppercase tracking-wider border text-center transition-all ${
                  activeType === 'kombucha'
                    ? 'text-white shadow-md'
                    : 'bg-stone-100 border-stone-200 text-stone-800'
                }`}
                style={{
                  backgroundColor: activeType === 'kombucha' ? flavorColor : undefined
                }}
              >
                Kombucha (6)
              </button>
              <button
                onClick={() => {
                  onSelectType?.('aqua-seltzer');
                  setMobileMenuOpen(false);
                }}
                className={`py-3 px-4 rounded-2xl text-xs font-black uppercase tracking-wider border text-center transition-all ${
                  activeType === 'aqua-seltzer'
                    ? 'text-white shadow-md'
                    : 'bg-stone-100 border-stone-200 text-stone-800'
                }`}
                style={{
                  backgroundColor: activeType === 'aqua-seltzer' ? flavorAccent : undefined
                }}
              >
                Aqua Seltzer (4)
              </button>
            </div>

            <a
              href="#retailers"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-2xl text-xs font-black uppercase tracking-wider text-white text-center shadow-lg mt-2 flex items-center justify-center gap-2"
              style={{ backgroundColor: flavorColor }}
            >
              <MapPin className="w-4 h-4" />
              <span>Locate In Nearby Retailers</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
