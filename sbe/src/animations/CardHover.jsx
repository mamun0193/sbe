import React from 'react';

export const AnimatedCard = ({ children, className = "", hoverScale = true }) => {
  return (
    <div className={`
      bg-black/40 backdrop-blur shadow-md hover:shadow-lg transition-all duration-300 rounded-lg group border border-gray-700
      ${hoverScale ? 'hover:scale-105 transform' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};