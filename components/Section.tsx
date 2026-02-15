import React from 'react';
import Reveal from './Reveal';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'gray' | 'dark' | 'cream';
}

const Section: React.FC<SectionProps> = ({ children, className = '', bg = 'white' }) => {
  const bgClass = {
    white: 'bg-white',
    gray: 'bg-sand', 
    cream: 'bg-cream',
    dark: 'bg-primary text-white',
  }[bg];

  // Fallback
  const actualBgClass = bgClass || 'bg-white';

  return (
    <section className={`py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative ${actualBgClass} ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          {children}
        </Reveal>
      </div>
    </section>
  );
};

export default Section;