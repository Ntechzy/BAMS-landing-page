import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to Google Sheets or email)
    console.log(formData);
  };

  return (
    <section id="contact" className="py-10 px-4">
      <h2 className="text-3xl font-semibold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-6">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="border border-gray-300 rounded-lg p-2 w-full mb-4" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="border border-gray-300 rounded-lg p-2 w-full mb-4" />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required className="border border-gray-300 rounded-lg p-2 w-full mb-4" />
        <input type="text" name="state" placeholder="State" onChange={handleChange} required className="border border-gray-300 rounded-lg p-2 w-full mb-4" />
        <textarea name="query" placeholder="Your Query" onChange={handleChange} required className="border border-gray-300 rounded-lg p-2 w-full mb-4"></textarea>
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
