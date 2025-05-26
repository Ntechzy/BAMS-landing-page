import React from 'react';
import AboutImage from '/assets/About-img/college-img.webp'; // Ensure this path is correct

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-10 bg-[#ffd000]"
    >
      <h2 className="text-3xl font-semibold text-center mb-6">
        About Naiminath Ayurvedic Medical College
      </h2>

      {/* Responsive Card */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch max-w-6xl w-full bg-white border border-gray-200 rounded-lg shadow-sm shadow-xl/30 hover:bg-gray-100 transition duration-300 overflow-hidden">
        
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-96 md:h-auto">
          <img
            src={AboutImage}
            alt="Naiminath Ayurvedic College"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-start p-6 text-left overflow-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Naiminath Ayurvedic Medical College
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Naiminath Ayurvedic Medical College in Agra is a leading institution in Ayurvedic education and holistic healthcare. Established in 2016, the college is supported by a fully operational 100-bedded Ayurvedic hospital, serving over 200 outpatients and 40+ inpatients daily. Our mission is to provide affordable, high-quality Ayurvedic education and treatment rooted in ancient wisdom and modern medical integration.<br /><br />
            The college offers a well-structured BAMS program combining traditional Ayurvedic knowledge with modern clinical practices. Students gain hands-on experience through practical training, internships, and fully equipped labs under the guidance of expert faculty. Our hospital features specialized Panchkarma therapy rooms and departments like Kayachikitsa, Shalya Tantra, Prasuti & Stri Roga, Kaumarbhritya, Shalakya Tantra, Dental, and Physiotherapy.<br /><br />
            The institution has adopted five nearby villages to provide free healthcare and regularly organizes medical camps. Naiminath stands out for integrating education, experience, and empathy — preparing confident Ayurvedic professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
