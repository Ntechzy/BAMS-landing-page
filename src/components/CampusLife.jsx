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
        Nestled in a serene environment, the campus of Naiminath Ayurvedic Medical College offers a perfect blend of tradition and modernity, creating an enriching atmosphere for learning and personal growth. The state-of-the-art infrastructure, including a fully functional 100-bedded Ayurvedic hospital and specialized departments like Panchkarma, Shalya Tantra, and Kaumarbhritya, provides students with immersive, hands-on training. Beyond academics, hostel life at Naiminath is designed to feel like a second home — safe, clean, and student-friendly. The hostels are equipped with all necessary amenities to ensure a comfortable stay, encouraging a balanced lifestyle where students can focus on their studies, participate in wellness activities, and build lifelong friendships. With a focus on affordability and accessibility, the institute also supports holistic living through community healthcare outreach and a deeply rooted culture of Ayurvedic values.
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