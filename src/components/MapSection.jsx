import React from "react";

const MapSection = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Naiminath Ayurvedic Medical College
      </h2>
      
      <p className="text-gray-600 text-center mb-6 max-w-xl">
        N.H. 19, Nawalpur, Kuberpur, Behind Maruti TrueValue Showroom, Etmadpur, Agra – 283202, Uttar Pradesh, India
      </p>

      <div className="w-full h-[400px] rounded-lg overflow-hidden">
        <iframe
          title="Naiminath College Location"
          src="https://www.google.com/maps?q=27.23178627976994,78.14383226500316&z=16&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="border-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
