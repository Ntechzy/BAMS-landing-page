import React from 'react';
import Form from './Form';
import heroBackground from '/heroimg/hero.png'; // For Next.js
 

const HeroSection = () => {
  return (
    <div
      className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12
            bg-gradient-to-r from-pink-200 to-yellow-200 relative"
    >
      {/* Background image div visible on md screens and hidden on smaller */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-6 ">
        {/* LEFT PANEL: TEXT + CTA */}
        <div className="md:w-1/2 text-black text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-6 sm:text-xl">
            Your First Step Towards Experiencing World-Class <br />
            <span className="text-orange-600">Medical Education</span>
          </h1>
          <a
            href="#enquire"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded shadow transition"
          >
            Admissions Open
          </a>
        </div>

        {/* RIGHT PANEL: FORM */}
        <div
          className="md:w-1/2 w-full max-w-md bg-white rounded-xl shadow-2xl p-6"
          id="enquire"
        >
          <Form />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
