import React from 'react';
import FadeIn from './ui/FadeIn';

const highlights = [
  { label: 'Focus', value: 'Visual Storytelling & Creative Direction' },
  { label: 'Expertise', value: 'Modest Fashion & Brand Identity' },
  { label: 'Approach', value: 'Authenticity-Driven Design' },
];

const About: React.FC = () => {
  return (
    <div className="w-full bg-luxury-black relative overflow-hidden py-32 md:py-40 px-6 md:px-12 lg:px-24">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-luxury-divider to-transparent opacity-40" />

      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <FadeIn>
          <div className="text-center mb-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-muted">
              Introduction
            </span>
          </div>
        </FadeIn>

        {/* Main Heading */}
        <FadeIn delay={150}>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-luxury-offwhite text-center leading-[1.05] mb-8">
            About <span className="italic opacity-80">Me</span>
          </h2>
          <div className="w-16 h-px bg-luxury-divider mx-auto mb-16" />
        </FadeIn>

        {/* Bio Text — editorial two-column on large screens */}
        <FadeIn delay={300}>
          <div className="max-w-3xl mx-auto mb-20">
            <p className="text-luxury-offwhite/90 text-base md:text-lg font-light leading-[1.85] text-center">
              Creative Lead & Content Creator with a strong background in modest fashion, 
              visual storytelling, and digital content production. I specialize in developing 
              creative direction while remaining hands-on in content creation — ensuring every 
              concept is executed with clarity, aesthetic consistency, and strong storytelling.
            </p>
            <p className="text-luxury-muted text-sm md:text-base font-light leading-[1.85] text-center mt-8">
              With experience leading content strategy, directing visual production, and 
              collaborating closely with marketing and brand teams, I translate brand values 
              into impactful visuals across social media, campaigns, and retail activations. 
              I value authenticity, thoughtful design, and purposeful communication.
            </p>
          </div>
        </FadeIn>

        {/* Highlight Strips */}
        <FadeIn delay={450}>
          <div className="border-t border-luxury-divider pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-luxury-divider">
              {highlights.map((item, idx) => (
                <div key={idx} className="text-center px-6 group">
                  <span className="block text-[10px] tracking-[0.25em] uppercase text-luxury-muted mb-3 group-hover:text-luxury-offwhite/60 transition-colors duration-500">
                    {item.label}
                  </span>
                  <span className="block text-sm md:text-base text-luxury-offwhite font-light leading-relaxed">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent via-luxury-divider to-transparent opacity-40" />
    </div>
  );
};

export default About;