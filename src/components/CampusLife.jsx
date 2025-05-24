import React from 'react';
import Image1 from '../assets/Campus-items/college-img.jpg'
import Image2 from '../assets/campus-items/classroom1-img.jpg'
import Image3 from '../assets/campus-items/lab-img.jpg'

const campusItems = [
  {
    title: "Medical Research Centre",
    img: Image1,
  },
  {
    title: "Labs",
    img: Image3,
  },
  {
    title: "Organic Farming",
    img: Image1,
  },
  {
    title: "Class Rooms",
    img: Image2,
  },
  {
    title: "Hostel",
    img: Image1,
  },
  {
    title: "Hostel Rooms",
    img: Image1,
  },
];

const CampusLife = () => {
  return (
    <section className="py-12 px-6 md:px-16 text-center bg-white">
      {/* Heading */}
  
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4 text-shadow-lg/20">Campus Life & Hostel Life</h2>
        <p className="text-lg text-gray-800 max-w-5xl mx-auto leading-relaxed">
          Nestled in a serene environment, the campus of Naiminath Ayurvedic Medical College offers a perfect blend of tradition and modernity. From Ayurvedic hospital training to vibrant hostel life, our students enjoy holistic development rooted in wellness, community, and learning.
        </p>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {campusItems.map((item, index) => (
          <div key={index} className="border-t-4 border-[#f3dd08] rounded-xl p-4 shadow hover:scale-105 transition-transform duration-300">
            <img
              src={item.img}
              alt={item.title}
              className="rounded-xl border-4 border-[#f3dd08] w-full h-48 object-cover"
            />
            <h4 className="mt-4 font-semibold text-lg text-black">{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampusLife;