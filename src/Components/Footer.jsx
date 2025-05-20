import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import footerlogo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a2f5d] text-white px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm border-b border-gray-700 pb-10">
        {/* Logo Section */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <img src={footerlogo} alt="logo" className="w-32 mb-6 md:w-44" />
        </div>

        {/* About Us */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">
            About Us
          </h3>
          <p className="text-white leading-relaxed">
            Book my service connects you with skilled professionals for all your
            home and office needs. We ensure quality service and customer
            satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="relative group">
              <a href="#home" className="text-white group-hover:underline">
                Home
              </a>
            </li>
            <li className="relative group">
              <a href="#services" className="text-white group-hover:underline">
                Services
              </a>
            </li>
            <li className="relative group">
              <a href="#contact" className="text-white group-hover:underline">
                Contact
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="text-white group-hover:underline">
                Terms & conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">
            Contact Info
          </h3>
          <ul className="space-y-3 text-white text-sm">
            <li className="flex items-start justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-sky-400" />
              123 Main Street, City Center, State 12345
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt className="text-sky-400" />
              +91 9975676241
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-sky-400" />
              info@bookmyservice.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaClock className="text-sky-400" />
              Mon-Sun: 8:00AM - 8:00PM
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-6 text-center text-xs text-white space-x-4 flex flex-wrap justify-center gap-2">
        <span>© 2025 Book my services</span>
        <span className="hidden md:flex space-x-4">Privacy</span>
        <span className="hidden md:flex space-x-4">Cookies</span>
        <span className="hidden md:flex space-x-4">Terms</span>
        <span className="hidden md:flex space-x-4">Risk</span>
      </div>
      <div className="max-w-7xl mx-auto mt-6 text-center text-xs text-white space-x-4 flex flex-wrap justify-center gap-2">
        <span className="inline-block md:hidden space-x-4">Privacy</span>
        <span className="inline-block md:hidden space-x-4">Cookies</span>
        <span className="inline-block md:hidden space-x-4">Terms</span>
        <span className="inline-block md:hidden space-x-4">Risk</span>
      </div>
    </footer>
  );
};

export default Footer;
