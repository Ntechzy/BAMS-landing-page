import React from "react";

const campusItems = [
  {
    title: "Medical Research Centre",
    img: "/assets/Campus-life/medical-research.webp",
  },
  {
    title: "Labs",
    img: "/assets/campus-items/lab-img.jpg",
  },
  {
    title: "Herbal Garden",
    img: "/assets/Campus-life/Herbalgarden.jpg",
  },
  {
    title: "Class Rooms",
    img: "/assets/campus-items/classroom1-img.jpg",
  },
  {
    title: "Hospital OPD/IPD",
    img: "/assets/Campus-life/college-img.webp",
  },
  {
    title: "Hostel",
    img: "/assets/Campus-life/hostel.jpg",
  },
];

const CampusLife = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">
          Campus Life & <span className="text-yellow-400">Hostel Life</span>
        </h2>
        <p className="text-lg text-gray-800 max-w-5xl mx-auto leading-relaxed">
          Nestled in a serene environment, the campus of Naiminath Ayurvedic
          Medical College offers a perfect blend of tradition and modernity.
          From Ayurvedic hospital training to vibrant hostel life, our students
          enjoy holistic development rooted in wellness, community, and
          learning.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {campusItems.map((item, index) => (
          <div
            key={index}
            className="rounded-lg shadow-xloverflow-hidden shadow-md hover:shadow-xl/20 transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-66 object-cover"
            />
            <div className="bg-yellow-400 text-center py-3">
              <h5 className="text-lg font-semibold text-gray-900 tracking-wide">
                {item.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampusLife;

