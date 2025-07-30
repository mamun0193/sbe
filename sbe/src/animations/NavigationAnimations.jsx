import React, { useState } from 'react';

// Erlenmeyer Flask Component for Navigation - Pure Tailwind
export const ErlenMeyerFlask = ({ 
  isActive = false, 
  isAnimating = false, 
  className = "" 
}) => {
  const getTransformClasses = () => {
    if (isActive) return 'rotate-0 scale-110';
    if (isAnimating) return '-rotate-75 scale-105 translate-y-1'; // More downward tilt with slight downward movement
    return '-rotate-12'; // Slight initial tilt
  };

  return (
    <div 
      className={`absolute -top-1 -right-2 w-6 h-7 transition-all duration-500 ${getTransformClasses()} ${className}`}
      style={{
        transformOrigin: 'bottom center',
        zIndex: 20
      }}
    >
      <svg
        viewBox="1 -3 30 30"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Flask Body - Conical Shape */}
        <path
          d="M10 12 L6 26 Q6 28 8 28 L16 28 Q18 28 18 26 L14 12 Z"
          fill="none"
          stroke="#22c55e"
          strokeWidth="1.5"
        />

        {/* Flask Neck */}
        <rect
          x="10"
          y="4"
          width="4"
          height="8"
          fill="none"
          stroke="#22c55e"
          strokeWidth="1.5"
        />

        {/* Flask Opening */}
        <rect
          x="8"
          y="2"
          width="8"
          height="3"
          rx="1.5"
          fill="#22c55e"
        />

        {/* Liquid Fill - Dynamic based on state with pour effect */}
        <path
          d={isActive
            ? "M10.2 12 L6.8 26 Q6.8 27.2 8 27.2 L16 27.2 Q17.2 27.2 17.2 26 L13.8 12 Z"
            : isAnimating 
              ? "M11 12 L7.8 26 Q7.8 27 8.8 27 L15.2 27 Q16.2 27 16.2 26 L13 12 Z" // Less liquid when pouring
              : "M11.5 20 L8.8 26 Q8.8 27 9.5 27 L14.5 27 Q15.2 27 15.2 26 L12.5 20 Z"
          }
          fill={isActive ? "#16a34a" : isAnimating ? "#10b981" : "#059669"}
          className="transition-all duration-400"
        />
        
        {/* Liquid spilling from neck when animating */}
        {isAnimating && (
          <path
            d="M12 11 Q13 12 14 13"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.5"
            opacity="0.8"
            strokeLinecap="round"
          />
        )}

        {/* Liquid Pour Effect - Only show when animating */}
        {isAnimating && (
          <>
            {/* Secondary droplets only - no external line */}
            <circle
              cx="13"
              cy="14"
              r="0.6"
              fill="#10b981"
              opacity="0.8"
              className="animate-bounce"
            />
            <circle
              cx="14"
              cy="16"
              r="0.4"
              fill="#059669"
              opacity="0.6"
              className="animate-pulse"
            />
          </>
        )}

        {/* Bubbles for chemical effect */}
        <circle
          cx="11.5"
          cy={isActive ? "16" : isAnimating ? "18" : "23"}
          r={isActive ? "1" : "0.8"}
          fill="#ffffff"
          opacity={isActive ? "0.9" : "0.6"}
          className="transition-all duration-300"
        />
        <circle
          cx="12.8"
          cy={isActive ? "19" : isAnimating ? "21" : "25"}
          r={isActive ? "0.8" : "0.6"}
          fill="#ffffff"
          opacity={isActive ? "0.7" : "0.4"}
          className="transition-all duration-300"
        />
      </svg>
    </div>
  );
};

// Animated Navigation Button Component - Pure Tailwind
export const AnimatedNavButton = ({ label, isActive, onClick }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (!isActive) {
      // Clear any existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Start animation immediately for fluid effect
      setIsAnimating(true);
    }
  };

  const handleMouseLeave = () => {
    // Clear the timeout if mouse leaves before animation starts
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    
    // Stop animation when mouse leaves
    setIsAnimating(false);
  };

  const getButtonClasses = () => {
    const baseClasses = "relative overflow-hidden px-4 py-1.5 border-2 border-green-400 rounded-xl transition-all duration-500 cursor-pointer";
    
    if (isActive) {
      return `${baseClasses} bg-green-600 text-white border-green-600 shadow-lg shadow-green-500/30`;
    }
    if (isAnimating) {
      return `${baseClasses} bg-green-500/20 text-white border-green-500`;
    }
    return `${baseClasses} bg-transparent text-gray-200 hover:text-green-400 hover:border-green-500`;
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={getButtonClasses()}
    >
      {/* Erlenmeyer Flask */}
      <ErlenMeyerFlask 
        isActive={isActive}
        isAnimating={isAnimating}
      />

      {/* Button Text */}
      <span className="relative z-10 font-medium transition-all duration-300">
        {label}
      </span>

      {/* Chemical Fill Animation - Wave effect from bottom left to top right */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-out ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `linear-gradient(45deg, 
            #10b981 0%, 
            #059669 30%, 
            #047857 60%, 
            #065f46 100%)`,
          transformOrigin: 'bottom left',
          transform: isAnimating
            ? 'translateX(0%) translateY(0%) scale(1.2)'
            : 'translateX(-100%) translateY(100%) scale(0.8)',
          clipPath: isAnimating 
            ? 'polygon(0% 100%, 100% 0%, 100% 100%)' 
            : 'polygon(0% 100%, 0% 100%, 0% 100%)',
          borderRadius: '0.75rem'
        }}
      />

      {/* Chemical Pour Stream Effect */}
      <div
        className={`absolute -top-2 -right-1 w-12 h-12 transition-all duration-500 ${
          isAnimating ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(45deg, transparent 30%, #10b981 60%, transparent 90%)',
          transform: isAnimating ? 'rotate(45deg) scale(1)' : 'rotate(45deg) scale(0)',
          transformOrigin: 'bottom left',
          borderRadius: '50%',
          filter: 'blur(1px)'
        }}
      />

      {/* Liquid Drip Effect */}
      <div
        className={`absolute bottom-0 left-0 w-full h-full transition-all duration-800 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `linear-gradient(135deg, 
            rgba(16, 185, 129, 0.3) 0%, 
            rgba(5, 150, 105, 0.6) 50%, 
            rgba(4, 120, 87, 0.8) 100%)`,
          transform: isAnimating
            ? 'translateY(0%) scaleY(1)'
            : 'translateY(100%) scaleY(0)',
          transformOrigin: 'bottom',
          borderRadius: '0.75rem',
          backdropFilter: 'blur(2px)'
        }}
      />

      {/* Bubbling Effect */}
      <div
        className={`absolute inset-0 transition-all duration-600 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle at 20% 80%, 
            rgba(255, 255, 255, 0.2) 0%, 
            transparent 30%),
            radial-gradient(circle at 60% 90%, 
            rgba(255, 255, 255, 0.15) 0%, 
            transparent 25%),
            radial-gradient(circle at 80% 70%, 
            rgba(255, 255, 255, 0.1) 0%, 
            transparent 20%)`,
          borderRadius: '0.75rem'
        }}
      />
    </button>
  );
};
