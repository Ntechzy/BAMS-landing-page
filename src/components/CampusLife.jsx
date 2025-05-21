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
      <h2 className="text-3xl font-bold mb-4">Campus Life & Hostel Life
</h2>
      <p className="text-gray-700 max-w-4xl mx-auto mb-10">
        MUCM boasts a sprawling, state-of-the-art campus of over 50 acres in Melaka and Muar. The
        facilities in the Melaka campus include various teaching and learning facilities, auditoriums,
        lecture halls, classrooms, science labs, skill labs, library, and computer labs. Other amenities
        include student hostels, cafeterias, gymnasium, swimming pool, sauna, squash courts, football
        field and basketball court.
      </p>

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