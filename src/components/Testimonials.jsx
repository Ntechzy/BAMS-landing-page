import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const videoLinks = [
    'https://www.youtube.com/embed/x0OQ-egKPxs?si=gEp_2LQ0g63meime',
    'https://www.youtube.com/embed/BsSdFVGUXoc?si=8Xc0fk-8KWSqfe96',
    'https://www.youtube.com/embed/y1bkzgMB5dc?si=OmSrPXcC6pVh5ldn',
    'https://www.youtube.com/embed/Z7dKkK2Dvv8?si=4LXIcasJq0Xuo4mg',
    'https://www.youtube.com/embed/1KE89Nvwfko?si=R-IX0e-g0yCHZv86',
    'https://www.youtube.com/embed/VzHCtwGn6-0?si=ieuHs9yocwqHqpzo',
  ];

  // Split videos into two rows
  const firstRow = videoLinks.slice(0, 3);
  const secondRow = videoLinks.slice(3);

  const VideoCard = ({ link, index }) => (
    <div
      key={index}
      className="relative w-full overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
      style={{ paddingTop: '56.25%' }} // 16:9 aspect ratio
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={link}
        title={`Student Testimonial ${index + 1}`}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );

  return (
    <section id="testimonials" className="py-10 px-4 bg-[#d2381d] text-white">
      <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-10 text-center">
        What Our Students Say About Us
      </h2>

      {/* Desktop View: Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoLinks.map((link, index) => (
          <VideoCard key={index} link={link} index={index} />
        ))}
      </div>

      {/* Mobile View: Two Carousels */}
      <div className="block sm:hidden space-y-8">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1.1}
        >
          {firstRow.map((link, index) => (
            <SwiperSlide key={index}>
              <VideoCard link={link} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1.1}
        >
          {secondRow.map((link, index) => (
            <SwiperSlide key={index + 3}>
              <VideoCard link={link} index={index + 3} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;


