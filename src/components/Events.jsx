import React, { useState } from "react";
import EventCard from "./EventsCard";
import lampLighting from "../assets/events-img/event1.png";

const eventData = [
  {
    image: lampLighting,
    title: "Lamp Lighting Ceremony & International Nurses Day",
    date: "May 20, 2025",
  },
  {
    image: lampLighting,
    title: "Another College Function Event",
    date: "April 12, 2025",
  },
  {
    image: lampLighting,
    title: "Workshop on Ayurveda and Wellness",
    date: "March 5, 2025",
  },
  {
    image: lampLighting,
    title: "Ayurvedic Awareness Rally",
    date: "February 15, 2025",
  },
  {
    image: lampLighting,
    title: "Guest Lecture on Holistic Health",
    date: "January 28, 2025",
  },
  {
    image: lampLighting,
    title: "Herbal Medicine Exhibition",
    date: "January 10, 2025",
  },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;
  const cardWidth = 450; // px
  const totalCards = eventData.length;

  const nextSlide = () => {
    if (currentIndex + cardsPerView < totalCards) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalCards - cardsPerView); // Go to end
    }
  };

  return (
    <section id="events" className="py-10 px-4 bg-yellow-500 relative">
      <div className="text-center mb-8">
        <h2 className=" text-white text-3xl md:text-5xl font-bold leading-snug mb-4">Events & Academic Highlights</h2>
        <p className="text-white mt-4 font-medium max-w-2xl mx-auto">
          Stay Informed with the Latest Academic Developments and Institutional
          Events.
        </p>
      </div>

      {/* Carousel wrapper */}
      <div className="relative max-w-[1350px] mx-auto overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="bold absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white text-black shadow-md hover:bg-gray-200 p-2 rounded-full"
        >
          &#8592;
        </button>

        {/* Cards slider */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
        >
          {eventData.map((event, idx) => (
            <div className="p-4 w-[450px] shrink-0" key={idx}>
              <EventCard
                image={event.image}
                title={event.title}
                date={event.date}
              />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white text-black  shadow-md hover:bg-gray-200 p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition">
          View All Events
        </button>
      </div>
    </section>
  );
};

export default Events;
