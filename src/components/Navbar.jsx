import React from "react";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={Logo} className="h-13" alt=" Logo" />

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-black flex justify-content-evenly gap-4">
            <li>
              <a href="#" className="text-black" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" text-black"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black"
              >
            Campus life
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black"
              >
                
              </a>
            </li>
            <li>
              <a
                href="#"
                className="Black"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
