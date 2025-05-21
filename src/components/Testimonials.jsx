import React from 'react';

const Testimonials = () => {
  const videoLinks = [
    'https://www.youtube.com/embed/1KE89Nvwfko?si=R-IX0e-g0yCHZv86',
    'https://www.youtube.com/embed/tgbNymZ7vqY',
    'https://www.youtube.com/embed/ysz5S6PUM-U',
    'https://www.youtube.com/embed/kJQP7kiw5Fk',
    'https://www.youtube.com/embed/XpqqjU7u5Yc',
    'https://www.youtube.com/embed/lTTajzrSkCw',
  ];

  return (
    <section id="testimonials" className="py-10 px-4 bg-[#d2381d] text-white">
      <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-10 text-center">
        What Our Students Say About Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoLinks.map((link, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden rounded-xl shadow-lg"
            style={{ paddingTop: '56.25%' }} // 16:9 Aspect Ratio
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`${link}?enablejsapi=1`}
              title={`Student Testimonial ${index + 1}`}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

