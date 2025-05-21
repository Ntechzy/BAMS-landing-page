import React from 'react';
import './index.css';
import HeroSection from './components/HeroSection';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Events from './components/Events';
import Recognition from './components/Recognition';
import CampusLife from './components/CampusLife';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection />
      <About />
      <WhyChoose />
      <Recognition />
      <Events />
      <CampusLife />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;