import React from 'react';
import FadeIn from './ui/FadeIn';

const socialLinks = [
  {
    label: 'Email',
    value: 'hasnarachmalia60@gmail.com',
    href: 'mailto:hasnarachmalia60@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Hasna Rachmalia',
    href: 'https://www.linkedin.com/in/hasnarachmalia',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@r_7.lou',
    href: 'https://www.instagram.com/r_7.lou/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const Contact: React.FC = () => {
  return (
    <div className="w-full bg-luxury-black relative overflow-hidden">
      {/* Top divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-luxury-divider to-transparent my-32" />

      <div className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24">
        {/* Section Header — centered */}
        <FadeIn>
          <div className="text-center mb-20 md:mb-28">
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-muted block mb-6">
              Get In Touch
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-luxury-offwhite leading-[1.05]">
              Contact &{' '}
              <span className="italic opacity-80">Availability</span>
            </h2>
            <div className="w-16 h-px bg-luxury-divider mx-auto mt-8" />
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {/* Social / Contact Links */}
          <FadeIn delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="group relative border border-luxury-divider/60 rounded-sm p-8 md:p-10 hover:border-luxury-muted/50 transition-all duration-700 bg-luxury-charcoal/20 hover:bg-luxury-charcoal/40 text-center block"
                >
                  {/* Icon */}
                  <span className="inline-block text-luxury-muted/50 mb-5 group-hover:text-luxury-offwhite/70 transition-colors duration-700">
                    {link.icon}
                  </span>

                  {/* Label */}
                  <span className="block text-[10px] tracking-[0.25em] uppercase text-luxury-muted mb-3">
                    {link.label}
                  </span>

                  {/* Value */}
                  <span className="block text-sm text-luxury-offwhite font-light group-hover:translate-y-[-2px] transition-transform duration-300">
                    {link.value}
                  </span>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-luxury-divider/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Availability */}
          <FadeIn delay={300}>
            <div className="border-t border-luxury-divider pt-14 text-center">
              <span className="text-[10px] tracking-[0.25em] uppercase text-luxury-muted block mb-8">
                Availability
              </span>
              <div className="max-w-xl mx-auto space-y-4">
                <p className="text-luxury-offwhite/90 text-sm md:text-base font-light leading-relaxed">
                  Open to full-time opportunities in content creation, social media, and visual styling.
                </p>
                <p className="text-luxury-muted text-sm font-light leading-relaxed">
                  Available for remote & on-site roles — local and international.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Location badge */}
          <FadeIn delay={400}>
            <div className="mt-16 flex justify-center">
              <div className="flex items-center gap-3 px-6 py-3 border border-luxury-divider/40 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                <span className="text-[11px] tracking-[0.15em] uppercase text-luxury-muted">
                  Indonesia · Open to Relocate
                </span>
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={500}>
            <div className="mt-16 text-center">
              <a
                href="mailto:hasnarachmalia60@gmail.com"
                className="inline-block px-10 py-4 border border-luxury-divider text-luxury-offwhite text-[11px] uppercase tracking-[0.25em] hover:bg-luxury-offwhite hover:text-luxury-black hover:border-luxury-offwhite transition-all duration-500 group"
              >
                <span className="flex items-center gap-3">
                  Send a Message
                  <svg
                    className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Contact;