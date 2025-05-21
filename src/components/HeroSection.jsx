import React from 'react';
import Form from './Form';
import Image from '../../public/heroimg/doctor1.png'; // Assuming you're using Next.js or handling imports via bundler

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-r from-[#e8f6f8] to-[#d7cac9]">
      
      {/* LEFT PANEL: TEXT + CTA */}
      <div className="md:w-1/2 text-black text-center md:text-left mb-10 md:mb-0 order-1 md:order-none">
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

      {/* IMAGE PANEL */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 order-2 md:order-none ">
        <img 
          src={Image} 
          alt="Doctor" 
          className="w-40 sm:w-56 md:w-72 lg:w-96 object-contain" 
        />
      </div>

      {/* RIGHT PANEL: FORM */}
      <div className="md:w-1/2 w-full max-w-md bg-white rounded-xl shadow-2xl p-6 order-3 md:order-none" id="enquire">
        <Form />
      </div>
    </div>
  );
};

export default HeroSection;
