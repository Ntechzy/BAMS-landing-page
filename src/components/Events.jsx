import React, { useState, useRef } from "react";
import EventCard from "./EventsCard";
import Image1 from "/assets/events-img/Industrial-visit.webp";
import Image2 from "/assets/events-img/National-seminar.webp";
import Image3 from "/assets/events-img/Yoga.webp";
import Image4 from "/assets/events-img/Annual-function.webp";
import Image5 from "/assets/events-img/Freshers-party.webp";
import Image6 from "/assets/events-img/Event1.webp";

const eventData = [
  { image: Image1, title: "Industrial Visit", date: "May 20, 2025" },
  { image: Image2, title: "National Seminar", date: "April 12, 2025" },
  { image: Image3, title: "Celebrates Yoga day", date: "March 5, 2025" },
  { image: Image4, title: "Annual Function", date: "February 15, 2025" },
  { image: Image5, title: "Freshers Party", date: "January 28, 2025" },
  { image: Image6, title: "Herbal Medicine Exhibition", date: "January 10, 2025" },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;
  const cardWidth = 450;
  const totalCards = eventData.length;
  const sliderRef = useRef();

  const nextSlide = () => {
    const newIndex = currentIndex + 1;
    if (newIndex + cardsPerView <= totalCards) {
      setCurrentIndex(newIndex);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    } else {
      setCurrentIndex(totalCards - cardsPerView);
    }
  };

  return (
    <section id="events" className="py-10 px-4 bg-yellow-500 relative">
      <div className="text-center mb-8">
        <h2 className="text-white text-3xl md:text-5xl font-bold leading-snug mb-4">
          Events & Academic Highlights
        </h2>
        <p className="text-white mt-4 font-medium max-w-2xl mx-auto">
          Stay Informed with the Latest Academic Developments and Institutional Events.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-[1350px] mx-auto overflow-hidden">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white text-black shadow-md hover:bg-gray-200 p-2 rounded-full"
        >
          &#8592;
        </button>

        {/* Card Slider */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out will-change-transform"
          style={{
            transform: `translate3d(-${currentIndex * cardWidth}px, 0, 0)`,
          }}
        >
          {eventData.map((event, idx) => (
            <div className="p-4 w-[450px] shrink-0" key={idx}>
              <EventCard image={event.image} title={event.title} date={event.date} />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white text-black shadow-md hover:bg-gray-200 p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>

      {/* View All Events Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition">
          View All Events
        </button>
      </div>
    </section>
  );
};

export default Events;
