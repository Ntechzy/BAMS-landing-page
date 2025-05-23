import React from 'react';
import Form from './Form';
import heroBackground from '../../public/heroimg/hero.png'; // For Next.js

const HeroSection = () => {
  return (
    <div
      className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
     
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-6">
        {/* LEFT PANEL: TEXT + CTA */}
        <div className="md:w-1/2 text-black text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
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
        <div className="md:w-1/2 w-full max-w-md bg-white rounded-xl shadow-2xl p-6" id="enquire">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
