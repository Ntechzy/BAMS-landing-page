import React from 'react';

const Form = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">Enquire Now</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <input
          type="text"
          placeholder="Name *"
          required
          className="col-span-2 px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email Address *"
          required
          className="col-span-2 px-3 py-2 border border-gray-300 rounded"
        />
        <div className="col-span-2 flex gap-2">
          <select className="px-2 py-2 border border-gray-300 rounded w-20" required>
            <option value="+91">+91</option>
          </select>
          <input
            type="tel"
            placeholder="Mobile Number *"
            required
            className="flex-grow px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <select className="px-3 py-2 border border-gray-300 rounded" required>
          <option value="">Select State *</option>
        </select>
        <select className="px-3 py-2 border border-gray-300 rounded" required>
          <option value="">Select City *</option>
        </select>
        <input
          type="text"
          placeholder="Select Year of completing 12th Std *"
          required
          className="col-span-2 px-3 py-2 border border-gray-300 rounded"
        />

        {/* Neet Score */}
        <input
  type="number"
  id="number-input"
  aria-describedby="helper-text-explanation"
  className="col-span-2 px-3 py-2 border border-gray-300 rounded"
  placeholder="NEET Score"
  required
/>

        {/* AGREEMENT */}
        <div className="col-span-2 text-xs flex items-start gap-2">
          <input type="checkbox" required />
          <p>
            I agree to receive information regarding my submitted enquiry by signing up on Naiminath Ayurvedic Medical College. See our <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
          </p>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="col-span-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;