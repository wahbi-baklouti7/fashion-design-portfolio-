import React from 'react';
import FadeIn from './ui/FadeIn';

interface ToolCategory {
  title: string;
  icon: string;
  tools: { name: string; description: string }[];
}

const toolCategories: ToolCategory[] = [
  {
    title: 'Creative & Design Tools',
    icon: '◆',
    tools: [
      { name: 'Canva', description: 'Content design, visual layout, and social media assets' },
      { name: 'Adobe Lightroom', description: 'Photo editing, color correction, and visual consistency' },
    ],
  },
  {
    title: 'Video Editing & Content Creation',
    icon: '▲',
    tools: [
      { name: 'CapCut Pro', description: 'Short-form video editing, transitions, and pacing for Reels & TikTok' },
      { name: 'InShot', description: 'Mobile-first video editing and social content optimization' },
    ],
  },
  {
    title: 'Social Media & Strategy',
    icon: '●',
    tools: [
      { name: 'Instagram & TikTok', description: 'Platform-native content creation, scheduling, and analytics' },
      { name: 'Pinterest', description: 'Visual curation, mood boards, and trend research' },
    ],
  },
];

const ToolsPlatforms: React.FC = () => {
  return (
    <div className="w-full bg-luxury-black relative overflow-hidden">
      {/* Top divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-luxury-divider to-transparent my-32" />

      <div className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24">
        {/* Section Header — centered */}
        <FadeIn>
          <div className="text-center mb-20 md:mb-28">
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-muted block mb-6">
              Toolkit
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-luxury-offwhite leading-[1.05]">
              Tools &{' '}
              <span className="italic opacity-80">Platforms</span>
            </h2>
            <div className="w-16 h-px bg-luxury-divider mx-auto mt-8" />
          </div>
        </FadeIn>

        {/* Tool Categories — card grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {toolCategories.map((category, catIdx) => (
            <FadeIn key={category.title} delay={catIdx * 150 + 100}>
              <div className="group relative border border-luxury-divider/60 rounded-sm p-8 md:p-10 hover:border-luxury-muted/50 transition-all duration-700 bg-luxury-charcoal/20 hover:bg-luxury-charcoal/40">
                {/* Geometric icon */}
                <span className="text-luxury-muted/40 text-2xl block mb-6 group-hover:text-luxury-offwhite/30 transition-colors duration-700">
                  {category.icon}
                </span>

                {/* Category Title */}
                <h3 className="text-luxury-offwhite text-sm md:text-base font-medium tracking-wide mb-8 leading-snug min-h-[2.5rem]">
                  {category.title}
                </h3>

                {/* Tools List */}
                <ul className="space-y-5">
                  {category.tools.map((tool) => (
                    <li key={tool.name} className="group/item">
                      <span className="block text-luxury-offwhite text-sm font-light mb-1 group-hover/item:translate-x-1 transition-transform duration-300">
                        {tool.name}
                      </span>
                      <span className="block text-luxury-muted text-xs font-light leading-relaxed">
                        {tool.description}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-luxury-divider/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsPlatforms;
