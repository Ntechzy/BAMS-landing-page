import React from 'react';

const Testimonials = () => {
  const videoLinks = [
    'https://www.youtube.com/embed/1KE89Nvwfko?si=R-IX0e-g0yCHZv86',
    'https://www.youtube.com/embed/VzHCtwGn6-0?si=ieuHs9yocwqHqpzo',
    'https://www.youtube.com/embed/wlOJYMW13zc?si=AJVmdWB1n4k69QYh',
    'https://www.youtube.com/embed/MF9koBTjwu8?si=heryAiWN0G9aASM5',
    'https://www.youtube.com/embed/xbujA9IEXrA?si=KAbvywkNlwhD-gJR',
    'https://www.youtube.com/embed/AfBjoosCWW0?si=rUZtIlZN_czUetPg',
  ];

  return (
    <section id="testimonials" className="py-10 px-4 bg-[#d2381d] text-white">
      <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-10 text-center">
        What Our Students Say About Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {videoLinks.map((link, index) => (
          <div
            key={index}
            className="relative w-full max-w-[90%] mx-auto overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            style={{ paddingTop: '50%' }} // Slightly smaller 16:10 ratio
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={link}
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

