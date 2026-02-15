import React, { useEffect } from 'react';
import FadeIn from './ui/FadeIn';
import LazyImage from './ui/LazyImage';

import { ASSETS } from '../utils/assets';

interface TimelineEntry {
  id: string;
  year: string;
  period: string;
  company: string;
  role: string;
  location: string;
  description: string | string[];
  images: string[];
  side: 'left' | 'right';
}

const timelineData: TimelineEntry[] = [
  
  {
    id: 'pinterest',
    year: '2023',
    period: '2023',
    company: 'Pinterest Indonesia',
    role: 'Lead Content Creator & Fashion Stylist',
    location: 'Based in Singapore',
    description:
      'Content Creator and Visual Stylist with a focus on fashion and lifestyle. Experienced in creating short-form digital content, visual concepts, and styling references to support brand communication and audience engagement.',
    images: ASSETS.collections.ss2023.map((item) => item.src),
    side: 'right',
  },
   {
    id: 'BROTHERS',
    year: '2023',
    period: 'Mar 2024 - Apr 2025',
    company: 'BROTHERS (Male Fashion Brand)',
    role: 'Content Creator & Visual Stylist',
    location: 'Jakarta, Indonesia',
     description: [
       "Led content concept development and visualirection remotely for a Singapore, based menswear brand",
       "Provided on-site fashion styling support during selected photoshoots in Bandung, Indonesia",
       "Coordinated styling execution, content planning,and visual consistency across campaigns",
       "Collaborated with the brand team to align creative output with brand identity"
    ],
     
    images: [ ],
    side: 'right',
  },
   {
    id: 'overz',
    year: '2024',
    period: 'Aug 2025 — Nov 2025',
    company: 'OVERZ (Male Fashion Brand)',
    role: 'Lead Content Creator & Fashion Stylist',
    location: 'Based in Bali, Indonesia',
    description:
      [
        "Led content creation and visual development for a menswear fashion brand",
        "Developed content concepts aligned with brand positioning and target audience",
        "Provided fashion styling for photoshoots and digital content, including outfit coordination and look development",
        "Directed visual flow and on-set execution during photoshoots and content production",
        "Collaborated with internal teams to ensure cohesive visual storytelling across platforms",
        "Supported social media content production with consistent and brand-aligned visuals"
],    images: ASSETS.work.overz.map((item) => item.src),
    side: 'right',
  },
    {
    id: 'Konveksi',
    year: '2024',
    period: 'Mar 2024 — May 2025',
    company: 'Studio Konveksi Bandung',
    role: 'Lead Content Creator',
    location: 'Based in Bandung, Indonesia',
    description:
      [
        "Created photo and video content to showcase garment production processes, products, and behind-the-scenes activities",
        "Developed content concepts aligned with the studio’s brand identity and target audience",
        "Captured visual content during production, fittings, and finished product stages",
        "Edited short-form videos and visual assets for social media platforms",
        "Collaborated with internal teams to ensure cohesive visual storytelling across platforms",
        "Supported social media presence through consistent and visually aligned content"
],    images: ASSETS.work.koveksi.map((item) => item.src),
    side: 'right',
  },
    {
    id: 'Sufiya_id',
    year: '2024',
    period: 'Mar 2024 — May 2025',
    company: 'Sufiya.id',
    role: 'Art Director & Lead Content Creator',
    location: 'Based in Bandung, Indonesia',
    description:
      [
        "Led content creation and visual direction for digital platforms, including photoshoots and videoshoots",
        "Developed content concepts aligned with the brand’s identity, values, and target audience",
        "Provided art direction support, including mood development, styling guidance, and visual consistency",
        "Directed on-set execution during photoshoots and videoshoots, including model posing and visual flow",
        "Collaborated with internal teams to ensure cohesive storytelling across social media content",
        "Oversaw visual quality and aesthetic standards for published content"
],    images: ASSETS.work.sufiya.map((item) => item.src),
    side: 'right',
  },
];


const WorkExperience: React.FC = () => {
  return (
    <div className="w-full bg-luxury-black mt-48 pty-32 md:tpy-48 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Section Header */}
      <FadeIn>
        <header className="mb-28 md:mb-36 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-luxury-muted block mb-4">
            Career
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-offwhite">
            Work Experience
          </h2>
        </header>
      </FadeIn>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-luxury-divider to-transparent md:-translate-x-px" />

        {timelineData.map((entry, idx) => (
          <div key={entry.id} className="relative mb-32 md:mb-44 last:mb-0">
            {/* Timeline dot */}
            <FadeIn delay={idx * 150}>
              <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-10">
                <div className="w-3 h-3 rounded-full bg-luxury-offwhite ring-4 ring-luxury-black" />
              </div>
            </FadeIn>

            {/* Year label on the line */}
            <FadeIn delay={idx * 150 + 50}>
              <div className="absolute left-10 md:left-1/2 top-0 md:-translate-y-8 md:-translate-x-1/2 text-center">
                <span className="hidden md:block text-[10px] tracking-[0.3em] uppercase text-luxury-muted font-light">
                  {entry.period}
                </span>
              </div>
            </FadeIn>

            {/* Content: alternating sides on desktop, stacked on mobile */}
            <div
              className={`md:grid md:grid-cols-2 md:gap-16 items-start pl-12 md:pl-0`}
            >
              {/* Text content */}
              <FadeIn delay={idx * 150 + 100}>
                <div
                  className={`${
                    entry.side === 'left'
                      ? 'md:pfr-16 md:text-right'
                      : 'md:col-start-2 md:pfl-16'
                  }`}
                >
                  {/* Mobile period label */}
                  <span className="md:hidden text-[10px] tracking-[0.3em] uppercase text-luxury-muted font-light block mb-4">
                    {entry.period}
                  </span>

                  <h3 className="font-serif text-3xl md:text-4xl text-luxury-offwhite leading-tight mb-2">
                    {entry.company}
                  </h3>
                  <p className="text-xs tracking-[0.15em] uppercase text-luxury-muted mb-1">
                    {entry.role}
                  </p>
                  <p className="text-xs tracking-wider text-luxury-muted/60 mb-6">
                    {entry.location}
                  </p>
                  {Array.isArray(entry.description) ? (
                    <ul className="text-sm text-luxury-muted font-light leading-relaxed max-w-md inline-block space-y-2">
                      {entry.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-luxury-muted/50 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-luxury-muted font-light leading-relaxed max-w-md inline-block">
                      {entry.description}
                    </p>
                  )}
                </div>
              </FadeIn>

              {/* Image grid */}
              <FadeIn delay={idx * 150 + 250}>
                <div
                  className={`mt-8 md:mt-0 ${
                    entry.side === 'left'
                      ? 'md:col-start-2 md:pfl-16'
                      : 'md:col-start-1 md:row-start-1 md:pfr-16'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {entry.images.map((img, i) => (
                      <div
                        key={i}
                        className={`relative group overflow-hidden ${
                          i === 0
                            ? 'rounded-tl-2xl'
                            : i === 1
                            ? 'rounded-tr-2xl'
                            : i === 2
                            ? 'rounded-bl-2xl'
                            : 'rounded-br-2xl'
                        }`}
                      >
                        <div className="aspect-[4/5] overflow-hidden">
                          <LazyImage
                            src={img}
                            alt={`${entry.company} — ${i + 1}`}
                            className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        ))}

        {/* Terminal dot at end of timeline */}
        <FadeIn delay={timelineData.length * 150 + 100}>
          <div className="absolute left-4 md:left-1/2 bottom-0 -translate-x-1/2">
            <div className="w-2 h-2 rounded-full bg-luxury-muted/40 ring-4 ring-luxury-black" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default WorkExperience;
