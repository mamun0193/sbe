import React from 'react';
import { Link } from 'react-router-dom';

// Button Animation Component using pure Tailwind CSS
export const AnimatedButton = ({
  to,
  children,
  variant = 'primary',
  animation = 'slide',
  className = "",
  onClick
}) => {
  const baseClasses = "relative overflow-hidden px-6 py-3 border-2 rounded-xl font-medium transition-all duration-300 cursor-pointer group inline-block transform hover:scale-105";

  const variants = {
    primary: "border-green-600 text-green-700 bg-black/50 backdrop-blur shadow-md hover:text-white  hover:border-green-700 hover:shadow-lg ",
    secondary: "border-emerald-800 bg-transparent text-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-md",
    outline: "border-slate-600 bg-gray-900 text-white text-slate-700 hover:text-white hover:border-green-600 hover:shadow-md",
    accent: "border-teal-500 bg-transparent text-teal-600 hover:text-white hover:border-teal-600 hover:shadow-lg"
  };

  const backgroundColors = {
    primary: "bg-gradient-to-r from-green-600 to-green-500 ",
    secondary: "bg-gradient-to-r from-emerald-500 to-emerald-600",
    outline: "bg-gradient-to-r from-green-600 to-green-700 ",
    accent: "bg-gradient-to-r from-teal-500 to-teal-600"
  };

  const getAnimationClasses = () => {
    switch (animation) {
      case 'slide':
        return "transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out";
      case 'reverse-slide':
        return "transform translate-x-full group-hover:-translate-x-0 transition-transform duration-500 ease-in-out";
      case 'fade':
        return "opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out rounded-xl";
      case 'expand':
        return "transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out";
      default:
        return "transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out";
    }
  };

  const ButtonContent = () => (
    <>
      {/* Background fill animation */}
      <div
        className={`absolute inset-0 ${backgroundColors[variant]} ${getAnimationClasses()}`}
        style={{ zIndex: 0 }}
      />

      {/* Text */}
      <span className="relative z-10 transition-all duration-300 group-hover:font-semibold">
        {children}
      </span>
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        onClick={onClick}
      >
        <ButtonContent />
      </Link>
    );
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <ButtonContent />
    </button>
  );
};



// Reveal on Hover Component using pure Tailwind
export const RevealOnHover = ({ children, className = "" }) => {
  return (
    <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${className}`}>
      {children}
    </div>
  );
};
