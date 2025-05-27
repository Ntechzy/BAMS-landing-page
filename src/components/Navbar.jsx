import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "/assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm ">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <img src={Logo} className="h-14 " alt="Logo" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Navigation Links */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:gap-8 gap-3 mt-4 md:mt-0 text-base font-bold text-gray-800">
            <li>
              <a href="#" className="hover:text-blue-700">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">Campus Life</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">Courses</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;