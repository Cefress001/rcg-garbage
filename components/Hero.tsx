import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  minHeight?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, children, backgroundImage, minHeight = 'min-h-[60vh] md:min-h-[75vh]' }) => {
  // Helper to generate responsive Unsplash URLs
  const generateSrcSet = (url?: string) => {
    if (!url || !url.includes('images.unsplash.com')) return undefined;
    
    // Remove existing width parameter to allow generating multiple sizes
    const baseUrl = url.replace(/&w=[^&]*/, '');
    
    // Generate srcSet for different breakpoints
    // q=80 is standard quality, could be lowered to 75 for more savings
    return `
      ${baseUrl}&w=640&q=80 640w,
      ${baseUrl}&w=1024&q=80 1024w,
      ${baseUrl}&w=1500&q=80 1500w,
      ${baseUrl}&w=1920&q=80 1920w
    `.trim();
  };

  return (
    <header className={`relative flex items-center justify-center text-center px-4 ${minHeight} bg-primary text-white overflow-hidden`}>
      {/* Background Image & Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
             <img 
               src={backgroundImage} 
               srcSet={generateSrcSet(backgroundImage)}
               sizes="100vw"
               alt="" 
               fetchPriority="high"
               className="w-full h-full object-cover" 
             />
             {/* Lighter, warmer overlay */}
             <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" /> 
             <div className="absolute inset-0 bg-black/20" />
        </div>
      )}
      
      <div className="relative z-10 max-w-5xl mx-auto py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 md:mb-8 leading-tight drop-shadow-lg tracking-tight text-white">
          {title}
        </h1>
        {subtitle && (
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="h-1 w-24 bg-accent/90 rounded-full"></div>
          </div>
        )}
        {subtitle && (
          <p className="text-xl md:text-3xl lg:text-4xl font-serif font-bold text-white max-w-4xl mx-auto leading-snug drop-shadow-lg px-2">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 md:mt-12">{children}</div>}
      </div>
    </header>
  );
};

export default Hero;