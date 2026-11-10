import React from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative z-30 bg-stone-950 border-t border-stone-800 text-stone-300 pt-16 pb-12 shadow-[0_-20px_50px_rgba(0,0,0,0.35)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand Info & Address */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#" className="mb-6 block">
              <img
                src="/assets/logo/logo-footer.png"
                alt="Aqua ViTea Kombucha"
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm mb-6 leading-relaxed">
              Authentically brewed in Vermont since 2007 on the naturopathic principle of "food as medicine". Live
              probiotics, organic teas, lower sugar, and verified non-alcoholic compliance.
            </p>

            <div className="flex flex-col gap-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>153 Pond Lane, Middlebury, Vermont 05753, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:contact@aquavitea.com" className="hover:text-amber-300 transition-colors">
                  contact@aquavitea.com
                </a>
              </div>
            </div>
          </div>

          {/* Range Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white mb-4">
              Kombucha (6)
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-stone-400">
              <li><a href="#flavors" className="hover:text-amber-300 transition-colors">Strawberry Sage (Featured)</a></li>
              <li><a href="#flavors" className="hover:text-amber-300 transition-colors">Blueberry Social</a></li>
              <li><a href="#flavors" className="hover:text-amber-300 transition-colors">Elderberry</a></li>
              <li><a href="#flavors" className="hover:text-amber-300 transition-colors">Peach Out</a></li>
              <li><a href="#flavors" className="hover:text-amber-300 transition-colors">Blood Orange</a></li>
              <li><a href="#flavors" className="hover:text-amber-300 transition-colors">Hibiscus Ginger Lime</a></li>
            </ul>
          </div>

          {/* Seltzers & Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white mb-4">
              Aqua Seltzer (4)
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-stone-400">
              <li><a href="#flavors" className="hover:text-teal-300 transition-colors">Raspberry + Lime</a></li>
              <li><a href="#flavors" className="hover:text-teal-300 transition-colors">Pomegranate + Cherry</a></li>
              <li><a href="#flavors" className="hover:text-teal-300 transition-colors">Cucumber + Mint</a></li>
              <li><a href="#flavors" className="hover:text-teal-300 transition-colors">Grapefruit + Thyme</a></li>
            </ul>

            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white mt-6 mb-2">
              Our Craft
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-stone-400">
              <li><a href="#story" className="hover:text-white transition-colors">Vermont Story</a></li>
              <li><a href="#sustainability" className="hover:text-white transition-colors">Kombucha On Tap</a></li>
              <li><a href="#retailers" className="hover:text-white transition-colors">Stockists</a></li>
            </ul>
          </div>

          {/* Official Social Links & Inquiries */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-white mb-4">
                Official Channels
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-stone-400">
                <li>
                  <a
                    href="https://aquavitea.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
                  >
                    <span>Official Aqua ViTea Website</span>
                    <ExternalLink className="w-3 h-3 text-stone-500" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/aquaviteakombucha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
                  >
                    <span>Instagram (@aquaviteakombucha)</span>
                    <ExternalLink className="w-3 h-3 text-stone-500" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/AquaVitea/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
                  >
                    <span>Facebook (@AquaVitea)</span>
                    <ExternalLink className="w-3 h-3 text-stone-500" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@aquaviteakombucha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
                  >
                    <span>TikTok (@aquaviteakombucha)</span>
                    <ExternalLink className="w-3 h-3 text-stone-500" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/aquavitea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
                  >
                    <span>Twitter (@aquavitea)</span>
                    <ExternalLink className="w-3 h-3 text-stone-500" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="text-[11px] text-stone-500 block mb-1">Wholesale & Sales Inquiries</span>
              <a
                href="https://aquavitea.com/pages/sales-inquiries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-300 hover:underline flex items-center gap-1"
              >
                <span>Official Sales Inquiries Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Strict Concept Disclaimer (Prompt Rule) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            <p>© {new Date().getFullYear()} Aqua ViTea. Authentic Vermont Farmhouse Kombucha.</p>
          </div>

          {/* REQUIRED DISCLAIMER NOTE */}
          <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-amber-300/80 font-medium tracking-wide">
            Concept redesign — not the official Aqua ViTea website.
          </div>
        </div>
      </div>
    </footer>
  );
};
