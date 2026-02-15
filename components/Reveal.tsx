import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  width?: "fit-content" | "100%";
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0, width = "100%" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing to prevent re-animating
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -75px 0px", // Trigger when element is 75px up from bottom
        threshold: 0.1, // Trigger when 10% of element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ width, transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;