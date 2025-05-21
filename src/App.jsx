import React from 'react';
import './index.css';
import HeroSection from './components/HeroSection';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Events from './components/Events';
import Recognition from './components/Recognition';
import CampusLife from './components/CampusLife';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MapSection from './components/MapSection';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>BAMS Admission 2025 – Naiminath Ayurvedic Medical College, Agra</title>
        <meta
          name="description"
          content="Apply for BAMS Admission 2025 at Naiminath Ayurvedic Medical College, Agra. 100% approved by NCISM, Ministry of AYUSH. Hostel, labs, and expert faculty available."
        />
      </Helmet>

      <Navbar />
      <HeroSection />
      <About />
      <WhyChoose />
      <Events />
      <CampusLife />
      <Testimonials />
      <Recognition />
      <Footer />
    </div>
  );
}

export default App;