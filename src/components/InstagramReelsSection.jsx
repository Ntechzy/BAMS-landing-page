import React, { useState } from 'react';

const reels = [
  {
    id: 1,
    videoUrl: 'https://www.instagram.com/reel/C8esgbPS3Ef/?hl=en',
  },
  {
    id: 2,
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 3,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 4,
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 5,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 6,
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 7,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

const InstagramReelsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6; // changed to 6

  const handleNext = () => {
    if (startIndex + visibleCount < reels.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleReels = reels.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="py-12 bg-gradient-to-r from-yellow-500 to-orange-500 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Instagram Reels
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 bg-white hover:bg-gray-200 p-2 rounded-full transition-transform transform hover:scale-110"
            disabled={startIndex === 0}
          >
            ←
          </button>

          {/* Reels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-[1200px] mx-auto">
            {visibleReels.map((reel) => (
              <div
                key={reel.id}
                className="rounded-lg shadow-lg bg-white overflow-hidden w-full max-w-[180px] mx-auto"
              >
                <div className="aspect-[9/16] bg-black overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    src={reel.videoUrl}
                    controls
                    muted
                    preload="metadata"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 bg-white hover:bg-gray-200 p-2 rounded-full transition-transform transform hover:scale-110"
            disabled={startIndex + visibleCount >= reels.length}
          >
            →
          </button>
        </div>

        {/* See More Button */}
        <div className="mt-6 text-center">
          <button className="px-6 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstagramReelsSection;
