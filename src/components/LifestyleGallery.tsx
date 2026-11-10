import React, { useState } from 'react';
import { Camera, ArrowUpRight, Heart, X, ZoomIn } from 'lucide-react';
import { playBubblePop } from '../utils/audio';

interface PhotoItem {
  img: string;
  caption: string;
  tag: string;
  span: string;
  location: string;
}

export const LifestyleGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const photos: PhotoItem[] = [
    {
      img: '/assets/story/tractor-farm.png',
      caption: 'Authentic Vermont Farm Tractor with a can of Strawberry Sage',
      tag: '#VermontFarmhouse',
      span: 'col-span-1 md:col-span-2 row-span-2',
      location: 'Salisbury Farmhouse, VT'
    },
    {
      img: '/assets/original/strawberry-sage/lifestyle.jpg',
      caption: 'Strawberry Sage in the Vermont sunlight',
      tag: '#NaturallyFermented',
      span: 'col-span-1',
      location: 'Middlebury Taproom'
    },
    {
      img: '/assets/original/blueberry-social/lifestyle.jpg',
      caption: 'Blueberry Social outdoor summer refreshment',
      tag: '#BlueberrySocial',
      span: 'col-span-1',
      location: 'Champlain Valley, VT'
    },
    {
      img: '/assets/original/peach-out/lifestyle.jpg',
      caption: 'Peach Out flat lay with freshly harvested garden mint',
      tag: '#PeachOut',
      span: 'col-span-1',
      location: 'Middlebury Farm Market'
    },
    {
      img: '/assets/original/blood-orange/lifestyle.jpg',
      caption: 'Blood Orange with organic Madagascar vanilla beans',
      tag: '#BloodOrangeKombucha',
      span: 'col-span-1',
      location: 'Aqua ViTea Cellars'
    },
    {
      img: '/assets/original/raspberry-lime/lifestyle.jpg',
      caption: 'Aqua Seltzer Raspberry Lime sparkling probiotic beverage',
      tag: '#AquaSeltzer',
      span: 'col-span-1 md:col-span-2',
      location: 'Lake Champlain Shoreline'
    }
  ];

  const handlePhotoClick = (photo: PhotoItem) => {
    playBubblePop();
    setSelectedPhoto(photo);
  };

  return (
    <section className="py-28 sm:py-36 bg-transparent border-t border-stone-200 text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-xs uppercase font-black tracking-widest text-amber-800 mb-3 shadow-sm">
              <Camera className="w-3.5 h-3.5 text-amber-700" />
              <span>@aquaviteakombucha</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-stone-950 tracking-tight font-display">
              Crafted For Everyday Vitality.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Authentic moments from our Vermont taprooms, orchards, farmhouses, and stockists across the country.
            </p>
          </div>

          <a
            href="https://www.instagram.com/aquaviteakombucha/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-xs font-black uppercase tracking-wider text-stone-900 transition-all duration-300 self-start sm:self-auto hover:scale-105 shadow-md"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4 text-amber-600" />
          </a>
        </div>

        {/* Editorial Photo Mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[240px]">
          {photos.map((item, index) => (
            <div
              key={index}
              onClick={() => handlePhotoClick(item)}
              className={`relative rounded-[2rem] overflow-hidden group border border-white/10 shadow-2xl cursor-pointer ${item.span}`}
            >
              <img
                src={item.img}
                alt={item.caption}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              <div className="absolute bottom-5 left-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 block mb-1">
                    {item.tag}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {item.caption}
                  </p>
                  <span className="text-[10px] text-stone-400 mt-1 block">
                    {item.location}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Vision Quote Callout Banner */}
        <div className="mt-16 p-8 sm:p-14 rounded-[2.5rem] bg-gradient-to-r from-[#0e2118] via-[#163527] to-[#0e2118] border border-emerald-500/30 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #dfad4f 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />
          <Heart className="w-10 h-10 text-amber-400 mx-auto mb-4 relative z-10" />
          <blockquote className="text-xl sm:text-3xl font-black text-white leading-snug mb-5 font-display relative z-10">
            "We are driven by a vision of a world where healthy beverage choices are the norm for everyone — in
            schools, hospitals, workplaces, and homes."
          </blockquote>
          <cite className="text-xs uppercase font-black tracking-widest text-amber-300 font-sans not-italic relative z-10">
            — Aqua ViTea Guiding Principle • Middlebury, Vermont
          </cite>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-stone-900 border border-white/20 shadow-2xl"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-amber-400 hover:text-stone-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto.img}
              alt={selectedPhoto.caption}
              className="w-full max-h-[70vh] object-contain bg-black"
            />
            <div className="p-6 bg-stone-950 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-amber-300 block mb-1">
                  {selectedPhoto.tag} • {selectedPhoto.location}
                </span>
                <p className="text-sm font-semibold text-white">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
