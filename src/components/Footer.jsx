import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import CountUp from "react-countup";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      {/* Stats Section */}
      <div className="bg-red-600 text-white grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-6 text-center py-10 rounded">
        <div>
          <h2 className="text-3xl font-bold">
            <CountUp end={576000} duration={3} separator="," />+
          </h2>
          <p className="text-sm md:text-lg font-semibold">Patients Treated</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">
            <CountUp end={100} duration={3} />+
          </h2>
          <p className="text-sm md:text-lg font-semibold">Treatment</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">
            <CountUp end={3} duration={2} />+
          </h2>
          <p className="text-sm md:text-lg font-semibold">
            Best College Awards
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">
            <CountUp end={20006} duration={3} separator="," />+
          </h2>
          <p className="text-sm md:text-lg font-semibold">
            Total Website Visit's
          </p>
        </div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
        {/* Treatments */}
        <div>
          <h3 className="font-bold text-lg mb-4">Treatments</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-300 text-sm">
            {[
              "Abhyangam",
              "Shirodhara",
              "Kashayadhara",
              "Greeva Basti",
              "Janu Basti",
              "Kati Basti",
              "Spine Basti",
              "Kizhi",
              "Mukha Lepam",
              "Netra Tarpanam",
              "Panchakarma",
            ].map((treatment) => (
              <li key={treatment}>{treatment}</li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Naiminath Ayurveda</h3>
          <p className="text-gray-400 text-sm">
            To provide world class education and treatment, this 100 bedded
            state of art Ayurvedic Hospital is functional since 2016 where more
            than 200 patients visit the Outdoor Department every day and around
            40 patients are present in the Indoor Department.
          </p>
          <div className="flex space-x-4 mt-4 text-xl text-white">
            <a href="https://www.facebook.com/naiminathagra/">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/naiminath/?hl=en">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCDzQIdrr0QpFg5XK0UbKUIQ">
              <FaYoutube />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fnhmcagra">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-bold text-lg mb-4">Naiminath Ayurveda</h3>
          <p className="text-gray-400 text-sm mb-4">
            <strong>ADDRESS</strong>
            <br />
            N.H. 19, Nawalpur, Kuberpur, Behind Maruti TrueValue Showroom,
            <br />
            Etmadpur, Agra – 283202, Uttar Pradesh, India.
          </p>
          <ul className="text-sky-400 space-y-2 text-sm">
            <li>→ UP BAMS Counselling</li>
            <li>→ Anti Ragging Committee</li>
            <li>→ FEES PAYMENT: CLICK HERE TO PAY FEES</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
          <div className="text-sm space-y-4 text-gray-300">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-white" />
              <span>info@naiminathayurveda.org</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-white" />
              <span>namcagra@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <FaPhone className="text-sky-400" />
              <span>+91-9528024473</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-sky-400" />
              <span>+91-8193896320</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
