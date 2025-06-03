import React, { useState, useRef } from "react";
import EventCard from "./EventsCard";
import Image1 from "/assets/events-img/Industrial-visit.webp";
import Image2 from "/assets/events-img/National-seminar.webp";
import Image3 from "/assets/events-img/Yoga.webp";
import Image4 from "/assets/events-img/Annual-function.webp";
import Image5 from "/assets/events-img/Freshers-party.webp";
import Image6 from "/assets/events-img/Event1.webp";

// Two sets of event data
const eventData1 = [
  { image: Image1, title: "Industrial Visit", date: "May 20, 2025" },
  { image: Image2, title: "National Seminar", date: "April 12, 2025" },
  { image: Image3, title: "Yoga Day Celebration", date: "March 5, 2025" },
  { image: Image4, title: "Annual Function", date: "February 15, 2025" },
  { image: Image5, title: "Freshers Party", date: "January 28, 2025" },
  { image: Image6, title: "Herbal Medicine Exhibition", date: "January 10, 2025" },
];

const eventData2 = [
  { image: Image4, title: "Annual Function", date: "February 15, 2025" },
  { image: Image5, title: "Freshers Party", date: "January 28, 2025" },
  { image: Image1, title: "Herbal Medicine Exhibition", date: "January 10, 2025" },
  { image: Image1, title: "Industrial Visit", date: "May 20, 2025" },
  { image: Image2, title: "National Seminar", date: "April 12, 2025" },
  { image: Image3, title: "Yoga Day Celebration", date: "March 5, 2025" },
];

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 450;
  const cardsPerView = 3;

  const totalCards = data.length;

  const nextSlide = () => {
    const next = currentIndex + 1;
    setCurrentIndex(next + cardsPerView <= totalCards ? next : 0);
  };

  const prevSlide = () => {
    const prev = currentIndex - 1;
    setCurrentIndex(prev >= 0 ? prev : totalCards - cardsPerView);
  };

  return (
    <div className="relative max-w-[1350px] mx-auto overflow-hidden mt-10">
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white text-black shadow-lg hover:bg-gray-200 p-3 rounded-full transition"
      >
        &#8592;
      </button>

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * cardWidth}px)`,
        }}
      >
        {data.map((event, idx) => (
          <div className="p-4 w-[450px] shrink-0" key={idx}>
            <EventCard image={event.image} title={event.title} date={event.date} />
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white text-black shadow-lg hover:bg-gray-200 p-3 rounded-full transition"
      >
        &#8594;
      </button>
    </div>
  );
};

const Events = () => {
  return (
    <section id="events" className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Events & Academic Highlights
        </h2>
        <p className="text-white max-w-xl mx-auto font-medium text-lg">
          Stay Informed with the Latest Academic Developments and Institutional Events.
        </p>
      </div>

      {/* Both carousels move in the same direction */}
      <Carousel data={eventData1} />
      <Carousel data={eventData2} />

      {/* Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition">
          View All Events
        </button>
      </div>
    </section>
  );
};

export default Events;
