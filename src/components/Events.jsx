import React, { useState } from "react";
import EventCard from "./EventsCard";
import Image1 from "/assets/events-img/Industrial-visit.webp";
import Image2 from "/assets/events-img/National-seminar.webp";
import Image3 from "/assets/events-img/Yoga.webp";
import Image4 from "/assets/events-img/Annual-function.webp";
import Image5 from "/assets/events-img/Freshers-party.webp";
import Image6 from "/assets/events-img/sports3.jpg";
import Image7 from "/assets/events-img/debate2.jpg";
import Image8 from "/assets/events-img/paint3.jpg";

// Two sets of event data with links
const eventData1 = [
  { image: Image1, title: "Industrial Visit", date: "May 20, 2025", link: "https://www.facebook.com/namcagra" },
  { image: Image2, title: "National Seminar", date: "April 12, 2025", link: "https://www.facebook.com/namcagra" },
  { image: Image3, title: "Yoga Day Celebration", date: "March 5, 2025", link: "https://www.facebook.com/namcagra" },
  { image: Image4, title: "Annual Function", date: "January 18, 2025", link: "https://www.facebook.com/namcagra" },
];

const eventData2 = [
  { image: Image5, title: "Freshers Party", date: "January 18, 2025", link: "https://www.facebook.com/namcagra" },
   { image: Image6, title: "Sports Day", date: "January 18, 2025", link: "https://www.facebook.com/namcagra" },
  { image: Image7, title: "Debate Competition", date: "January 18, 2025", link: "https://www.facebook.com/namcagra" },
  { image: Image8, title: "Art Competition", date: "January 10, 2025", link: "https://www.facebook.com/namcagra" },
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
    <div className="relative max-w-[1350px] mx-auto overflow-hidden mt-10 h-">
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
            <EventCard
              image={event.image}
              title={event.title}
              date={event.date}
              link={event.link}
            />
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
    <section id="events" className="py-14 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Events & Academic Highlights
        </h2>
        <p className="text-white max-w-xl mx-auto font-medium text-lg">
          Stay Informed with the Latest Academic Developments and Institutional Events.
        </p>
      </div>

      <Carousel data={eventData1} />
      <Carousel data={eventData2} />

      <div className="text-center mt-12">
       <a href="https://www.facebook.com/namcagra" target="_blank">
         <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition">
          View All Events
        </button>
       </a>
      </div>
    </section>
  );
};

export default Events;

