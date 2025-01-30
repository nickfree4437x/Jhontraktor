import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed top-0 w-full z-10 transition-all duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex-shrink-0 text-3xl text-orange-600 font-extrabold dark:text-orange-600">
            JHONTRAKTOR
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Projects", "Experience"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-200 hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer "
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right-Side Buttons */}
        <div className="flex items-center space-x-4">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-900 focus:outline-none"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400" size={20} />
            ) : (
              <FiMoon className="text-gray-800" size={20} />
            )}
          </button>

          {/* Contact Us Button */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hidden md:block bg-orange-500 dark:bg-orange-600 cursor-pointer text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 dark:hover:bg-orange-700 transition-all shadow-md"
          >
            Contact Us
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 p-4 space-y-2">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="block text-gray-600 dark:text-gray-200 hover:underline transition hover:text-cyan-600 dark:hover:text-cyan-600 cursor-pointer "
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* Mobile Contact Us Button */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block text-center bg-orange-500 dark:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 dark:hover:bg-orange-700 transition-all shadow-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
