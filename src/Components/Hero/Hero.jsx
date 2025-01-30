// src/components/Hero.jsx
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="py-24 px-4 mt-16 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-1000 relative overflow-hidden">
      {/* Animated Background Expansion */}
      <div className="absolute inset-0 -z-10 w-[110%] h-[110%] bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 transform scale-105 animate-pulse"></div>

      <div className="max-w-7xl mx-auto text-center mt-24 relative">
        {/* Headline */}
        <h1 style={{fontSize: '60px'}} className="text-3xl sm:text-5xl font-extrabold leading-tight text-gray-800 dark:text-gray-100">
        Build Your Dreams with <span className="text-orange-600">Confidence</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Your trusted partner for all construction projects. From foundations to finishing touches, we ensure quality and satisfaction at every step.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-16 flex justify-center space-x-4">
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-orange-500 text-white cursor-pointer font-medium rounded hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 hover:scale-105 transition"
          >
            Our Services
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={600}
            className="px-6 py-3 cursor-pointer bg-gray-200 text-gray-600 font-medium rounded hover:bg-gray-300 dark:bg-gray-200 dark:text-gray-700 dark:hover:bg-gray-300 hover:scale-105 transition"
          >
            View Projects
          </Link>
        </div>

        {/* Decorative Divider */}
        <div className="mt-20 flex justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <FiCheckCircle size={24} className="text-blue-500 dark:text-blue-400" />
            <span className="text-gray-800 dark:text-gray-200">Top-Quality Materials</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiCheckCircle size={24} className="text-blue-500 dark:text-blue-400" />
            <span className="text-gray-800 dark:text-gray-200">Expert Team</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiCheckCircle size={24} className="text-blue-500 dark:text-blue-400" />
            <span className="text-gray-800 dark:text-gray-200">On-Time Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
