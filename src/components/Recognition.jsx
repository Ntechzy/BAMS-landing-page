import React from 'react';
import Image3 from '/assets/recognition/ugc-img.jpg';
import Image4 from '/assets/recognition/affilated_uni.png';

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
            desc: "Granted 3rd Renewal of Permission for 100 BAMS seats for academic year 2024–25. Approved under Section 29 of the NCISM Act, 2020 after inspection held on 26–27 Feb 2024.",
            schema: "https://schema.org/GovernmentOrganization"
          }, {
            img: Image2,
            alt: "Ministry of AYUSH Official Logo",
            title: "Ministry of AYUSH",
            desc: "Naiminath Ayurvedic Medical College functions under the Ministry of AYUSH, ensuring full compliance with national Ayurveda education policies.",
            schema: "https://schema.org/GovernmentOrganization"
          }, {
            img: Image3,
            alt: "University Grants Commission (UGC) Logo",
            title: "University Grants Commission (UGC)",
            desc: "Recognized under Section 2(f) of the UGC Act, 1956. Ensures maintenance of academic and infrastructural standards.",
            schema: "https://schema.org/EducationalOrganization"
          }, {
            img: Image4,
            alt: "Affiliated University Logo",
            title: "Affiliated University",
            desc: "The college is affiliated to a recognized Indian state university, enabling valid academic certifications and regulated curriculum.",
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

