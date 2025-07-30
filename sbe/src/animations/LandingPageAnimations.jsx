import React from 'react';

// Inline keyframes using Tailwind's arbitrary values
const floatKeyframes = `
  @keyframes float-custom {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  @keyframes float-delayed-custom {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(5deg); }
  }
  @keyframes float-slow-custom {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

// Landing Page Animation Components
export const FloatingElements = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <style>{floatKeyframes}</style>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div 
          className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20"
          style={{ 
            animation: 'float-custom 6s ease-in-out infinite',
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="absolute top-20 right-20 w-16 h-16 bg-green-300 rounded-full opacity-30"
          style={{ 
            animation: 'float-delayed-custom 8s ease-in-out infinite',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute bottom-10 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-25"
          style={{ 
            animation: 'float-slow-custom 10s ease-in-out infinite',
            animationDelay: '4s'
          }}
        ></div>
      </div>
      {children}
    </div>
  );
};

export const FadeInUp = ({ children, delay = 0, className = "" }) => {
  return (
    <div 
      className={`opacity-0 translate-y-8 transition-all duration-800 ease-out ${className}`}
      style={{
        animation: `fadeInUp 0.8s ease-out forwards`,
        animationDelay: `${delay}ms`
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {children}
    </div>
  );
};

export const SlideInLeft = ({ children, delay = 0, className = "" }) => {
  return (
    <div 
      className={`opacity-0 -translate-x-12 transition-all duration-800 ease-out ${className}`}
      style={{
        animation: `slideInLeft 0.8s ease-out forwards`,
        animationDelay: `${delay}ms`
      }}
    >
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      {children}
    </div>
  );
};

export const SlideInRight = ({ children, delay = 0, className = "" }) => {
  return (
    <div 
      className={`opacity-0 translate-x-12 transition-all duration-800 ease-out ${className}`}
      style={{
        animation: `slideInRight 0.8s ease-out forwards`,
        animationDelay: `${delay}ms`
      }}
    >
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      {children}
    </div>
  );
};

export const SlideInUp = ({ children, delay = 0, className = "" }) => {
  return (
    <div 
      className={`opacity-0 translate-y-12 transition-all duration-800 ease-out ${className}`}
      style={{
        animation: `slideInUp 0.8s ease-out forwards`,
        animationDelay: `${delay}ms`
      }}
    >
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {children}
    </div>
  );
};

// Remove the separate AnimationStyles component as styles are now inline
