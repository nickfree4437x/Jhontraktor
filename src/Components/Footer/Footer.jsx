import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Johntraktor</h3>
            <p className="text-gray-200">
              We deliver exceptional construction, renovation, and design services tailored to your needs.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>465 Main Street, Melbourne, Australia</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-orange-500" />
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-orange-500" />
                <span>info@johntraktor.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-orange-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-orange-500 hover:underline transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-500 transition hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-500 transition hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500 transition hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-500 transition hover:underline ml-1">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-orange-500 mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>Renovation Services</li>
              <li>Architectural Design</li>
              <li>Interior Design</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold text-orange-500 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} <span className="font-bold text-gray-200">Johntraktor</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
