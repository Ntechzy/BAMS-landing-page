import React from 'react';
import Image3 from '/assets/recognition/ugc-img.jpg';
import Image4 from '/assets/recognition/affilated.png';

const Image1 = "https://cdn.brandfetch.io/id_jtYn8cb/w/1280/h/719/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B";
const Image2 = "https://cdn.brandfetch.io/idjqzBzUgL/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1747226553113";

const Recognition = () => {
  return (
    <section
      id="recognition"
      className="min-h-[90vh] py-20 px-6 bg-[#111827] text-white"
      aria-labelledby="recognition-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="recognition-heading"
          className="text-4xl font-bold text-center text-[#facc15] mb-16"
        >
          Regulatory Approvals & Recognitions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Card Template */}
          {[{
            img: Image1,
            alt: "National Commission for Indian System of Medicine (NCISM) Official Logo",
            title: "NCISM – Indian System of Medicine",
            desc: "The National Commission for Indian System of Medicine (NCISM) has granted the 3rd Renewal of Permission for 100 BAMS seats to Naiminath Ayurvedic Medical College for the academic year 2024–25. This approval was issued under Section 29 of the NCISM Act, 2020, following an official inspection conducted on 26th and 27th February 2024.",
            schema: "https://schema.org/GovernmentOrganization"
          }, {
            img: Image2,
            alt: "Ministry of AYUSH Official Logo",
            title: "Ministry of AYUSH",
            desc: "Naiminath Ayurvedic Medical College operates under the guidance and regulations of the Ministry of AYUSH, Government of India. The institution strictly adheres to national standards and policies for Ayurveda education, ensuring high-quality academic practices, traditional Ayurvedic principles, and modern scientific integration as outlined by the Central Council of Indian Medicine (CCIM) and other regulatory bodies.",
            schema: "https://schema.org/GovernmentOrganization"
          }, {
            img: Image3,
            alt: "University Grants Commission (UGC) Logo",
            title: "University Grants Commission (UGC)",
            desc: "Naiminath Ayurvedic Medical College is recognized by the University Grants Commission (UGC) under Section 2(f) of the UGC Act, 1956. This recognition affirms the institution's commitment to maintaining national standards in academics, infrastructure, and overall educational excellence.",
            schema: "https://schema.org/EducationalOrganization"
          }, {
            img: Image4,
            alt: "Affiliated University Logo",
            title: "Affiliated University",
            desc: "Naiminath Ayurvedic Medical College is affiliated with Mahayogi Guru Gorakhnath AYUSH University, Gorakhpur (U.P.), a recognized Indian state university. This affiliation ensures that all academic programs follow a regulated curriculum and the degrees awarded are valid, government-recognized certifications under the guidelines of the Ministry of AYUSH.",
            schema: "https://schema.org/CollegeOrUniversity"
          }].map((card, idx) => (
            <article
              key={idx}
              className="bg-white text-gray-900 shadow-lg p-6 rounded-2xl border-t-4 border-yellow-500 min-h-[380px] flex flex-col justify-start"
              itemScope
              itemType={card.schema}
            >
              <img
                src={card.img}
                alt={card.alt}
                className="h-16 mb-4 object-contain"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-yellow-700 mb-2" itemProp="name">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" itemProp="description">
                {card.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;

