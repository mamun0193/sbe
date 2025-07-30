import { useEffect, useRef, useState } from 'react';

export const UseScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // Removed the unobserve call to allow re-triggering on scroll up/down
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

// Enhanced scroll reveal component with pure Tailwind
export const ScrollReveal = ({ 
  children, 
  className = "", 
  animation = "fadeInUp",
  delay = 0 
}) => {
  const [ref, isVisible] = UseScrollAnimation();

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    if (!isVisible) {
      switch (animation) {
        case 'slideInLeft':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'slideInRight':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'slideInUp':
        case 'fadeInUp':
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-x-0 translate-y-0`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};
