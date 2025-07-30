import React, { useState, useEffect } from 'react';

function GalleryCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 4 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= images.length - 4 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-900/20">
        {/* Carousel wrapper with sliding effect */}
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
              width: `${images.length * 24}%`
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-full px-1"
                style={{ 
                  width: '20%',
                  minWidth: '10%' 
                }}
              >
                <img
                  src={src}
                  className="w-full h-full object-cover rounded-md"
                  alt={`Gallery image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center pt-4 pb-2">
          <button
            type="button"
            className="flex justify-center items-center me-4 w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700/70 cursor-pointer group focus:outline-none transition-colors duration-300"
            onClick={goToPrevious}
          >
            <span className="text-gray-300 hover:text-white group-focus:text-white">
              <svg className="w-4 h-4" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          
          {/* Dot indicators */}
          <div className="flex space-x-2 mx-4">
            {Array.from({length: images.length - 3}).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-green-400' : 'bg-gray-500 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700/70 cursor-pointer group focus:outline-none transition-colors duration-300"
            onClick={goToNext}
          >
            <span className="text-gray-300 hover:text-white group-focus:text-white">
              <svg className="w-4 h-4" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard; 