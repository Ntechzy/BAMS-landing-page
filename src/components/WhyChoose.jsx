import React from "react";
import Card1 from "/assets/whyChooseimg/card4.jpg";
import Card2 from "/assets/whyChooseimg/card2.jpg";
import Card3 from "/assets/whyChooseimg/card3.jpeg";

const WhyChoose = () => {
  const cards = [
    {
      img: Card1,
      title: "Academics",
      desc: "At Naiminath, the educational journey knows no bounds. Our courses are guided by esteemed faculty members.",
      link: "/academics"
    },
    {
      img: Card2,
      title: "Vibrant Student Life",
      desc: "Our housing system fosters additional learning opportunities by bringing together peers and professors from diverse backgrounds.",
      link: "/student-life"
    },
    {
      img: Card3,
      title: "Infrastructure",
      desc: "The foundation for success. Our infrastructure solutions create a thriving landscape for businesses and residents alike.",
      link: "/infrastructure"
    }
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-gradient-to-r from-[#fff7e6] via-[#ffe8cc] to-[#fff7e6] overflow-hidden"
    >
      {/* Optional background pattern or overlay image */}
      <div
        className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10 pointer-events-none"
      />

      <div className="text-center z-10">
        <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-3 text-center text-[#d2381d] drop-shadow-lg">
          Why Choose Naiminath
        </h2>
        <p className="text-lg text-gray-800">
          Premier Ayurvedic education merging tradition with modernity.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10 z-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white gap-4 rounded-xl shadow-lg max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#d2381d]">
                {card.title}
              </h3>
              <p className="text-gray-700 mt-2 mb-4">{card.desc}</p>
              <a
                href={card.link}
                className="inline-block bg-[#d2381d] text-white px-4 py-2 rounded hover:bg-[#f3dd08] hover:text-black transition"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
