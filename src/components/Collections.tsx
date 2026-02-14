import React, { useState } from 'react';
import FadeIn from './ui/FadeIn';
import { ASSETS } from '../utils/assets';

type CollectionKey = 'Graduation-2026' | 'ss2023';

interface CollectionData {
  id: string;
  year: string;
  title: string;
  description: string;
  items: typeof ASSETS.collections.ss26;
}

const collectionsData: Record<CollectionKey, CollectionData> = {
  'Graduation-2026': {
    id: 'Graduation-2026',
    year: 'Graduation-2026',
    title: 'Urban Decay',
    description: 'Erosion. Concrete. Renewal.',
    items: ASSETS.collections.ss26
  },
  ss2023: {
    id: 'ss2023',
    year: 'SS2023',
    title: 'Silent Echo',
    description: 'Void. Resonance. Stillness.',
    items: ASSETS.collections.ss2023
  }
};

const Collections: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CollectionKey>('Graduation-2026');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tab: CollectionKey) => {
    if (tab === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 500); // Wait for fade out
  };

  const activeCollection = collectionsData[activeTab];

  return (
    <div className="w-full bg-luxury-black py-32 md:py-48 px-6 md:px-12 lg:px-24 min-h-screen">
      <FadeIn>
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-luxury-divider pb-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-offwhite mb-2">Collections</h2>
            <div className="flex gap-8 mt-6">
                {/* Tab Navigation */}
                {(Object.keys(collectionsData) as CollectionKey[]).map((key) => (
                    <button
                        key={key}
                        onClick={() => handleTabChange(key)}
                        className={`text-xs tracking-[0.2em] uppercase transition-all duration-500 relative pb-2 ${
                            activeTab === key ? 'text-luxury-offwhite' : 'text-luxury-muted hover:text-luxury-offwhite'
                        }`}
                    >
                        {collectionsData[key].year}
                        <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-luxury-offwhite transform transition-transform duration-500 origin-left ${
                            activeTab === key ? 'scale-x-100' : 'scale-x-0'
                        }`}></span>
                    </button>
                ))}
            </div>
          </div>
          
          {/* Dynamic Header Info */}
          <div className={`text-right mt-8 md:mt-0 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <h3 className="font-serif text-2xl italic text-luxury-offwhite">
                {activeCollection.year} &mdash; {activeCollection.title}
            </h3>
            <p className="text-luxury-muted text-xs tracking-wider mt-2 uppercase">
                {activeCollection.description}
            </p>
          </div>
        </header>
      </FadeIn>

      {/* Grid Content */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px] transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {activeCollection.items.map((img, index) => (
          <FadeIn key={`${activeTab}-${img.id}`} delay={index * 100} className={`relative group overflow-hidden ${
             // Layout logic: make every 1st and 3rd item tall, others standard/square for variety
             index % 3 === 0 || index === 2 ? "col-span-1 md:col-span-1 row-span-2" : "col-span-1 md:col-span-1 h-64 md:h-full"
          }`}>
            <div className="w-full h-full bg-luxury-charcoal">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1500ms] ease-out"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs text-luxury-offwhite tracking-widest uppercase font-light">
                   0{img.id} &mdash; {img.title}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      
      {/* <div className="mt-24 text-center">
        <FadeIn>
          <a href="#contact" className="inline-block border-b border-luxury-muted pb-1 text-xs tracking-[0.2em] uppercase hover:text-luxury-offwhite hover:border-luxury-offwhite transition-all duration-300">
            Request Full Lookbook
          </a>
        </FadeIn>
      </div> */}
    </div>
  );
};

export default Collections;