import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { districtData } from '../data/data';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    district: '',
    course: '',
    neetScore: '',
    source: 'naiminath-ayurveda.vercel.app',
    sourceId: 'https://naiminath-ayurveda.vercel.app/'
  })
  const [selectedState, setSelectedState] = useState('');
  const [districts, setDistricts] = useState([]);

  const handleStateChange = (e) => {
    const stateName = e.target.value;
    setSelectedState(stateName);
    setDistricts(stateDistrictMap[stateName] || []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const stateDistrictMap = useMemo(() => {
    const map = {};
    districtData?.states.forEach(({ state, districts }) => {
      map[state] = districts;
    });
    return map;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.number,
        state: selectedState,
        district: formData.district,
        courseSelected: formData.course,
        neetScore: formData.neetScore,
        source: formData.source,
        sourceId: formData.sourceId,
      };
      const res = await axios.post('https://lms.ntechzy.in/api/v1/form', payload)
      console.log(res);
      toast.success("okok")
    } catch (error) {
      toast.error(error.message)
    }
  }


  console.log(formData);


  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">Enquire Now</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <input
          type="text"
          placeholder="Name *"
          name='name'
          required
          onChange={handleChange}
          className="col-span-2 px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name='email'
          placeholder="Email Address *"
          required
          onChange={handleChange}
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
            onChange={handleChange}
            name='number'
            className="flex-grow px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <select className="px-3 py-2 border border-gray-300 rounded" onChange={handleStateChange} required>
          <option value="">Select State *</option>
          {
            districtData.states.map((state, index) => (
              <option key={index} value={state.state}>{state.state}</option>
            ))
          }
        </select>
        <select className="px-3 py-2 border border-gray-300 rounded" name='district'
          onChange={handleChange} required>
          <option value="">Select district *</option>
          {
            districts.map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))
          }
        </select>

        <input className='px-2 py-2 border border-gray-300 rounded' placeholder='Enter Whatsapp Number' type="number" />
        {/* courseSelected */}
        <select className='px-2 py-2 border border-gray-300 rounded'
          onChange={handleChange} name="course" id="">
          <option value="">Select Course</option>
          <option value="MBBS">MBBS</option>
          <option value="BDS">BDS</option>
          <option value="BAMS">BAMS</option>
          <option value="BHMS">BHMS</option>
          <option value="B.Sc. Nursing">B.Sc. Nursing</option>
          <option value="BPT">BPT</option>
          <option value="B.Pharm">B.Pharm</option>
          <option value="D.Pharm">D.Pharm</option>
          <option value="B.Sc. (Home Science)">B.Sc. (Home Science)</option>
          <option value="B.Sc. (Home Science)">B.Sc. (Home Science)</option>
          <option value="B.Sc. (Home Science)">B.Sc. (Home Science)</option>
        </select>

        {/* Neet Score */}
        <input
          type="number"
          id="number-input"
          aria-describedby="helper-text-explanation"
          className="col-span-2 px-3 py-2 border border-gray-300 rounded"
          placeholder="NEET Score"
          min={0}
          name='neetScore'
          required
          onChange={handleChange}
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
    </div >
  );
};

export default Form;