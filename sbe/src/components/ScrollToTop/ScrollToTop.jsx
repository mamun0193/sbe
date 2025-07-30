import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Check for scroll in the main container or window
      const scrollContainer = document.querySelector('.font-serif.snap-y');
      const scrollTop = scrollContainer ? scrollContainer.scrollTop : window.pageYOffset;

      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen to both window scroll and container scroll
    const scrollContainer = document.querySelector('.font-serif.snap-y');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', toggleVisibility);
    }
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', toggleVisibility);
      }
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll the main container or window to top
    const scrollContainer = document.querySelector('.font-serif.snap-y');
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6 cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
