// src/components/ExperienceSection.jsx
import React from 'react';
import { Link } from "react-scroll";
import exp from './exp.jpg';
import './style.css';

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="transform hover:scale-105 transition-transform duration-300 md:pr-10">
          <img
            src={exp} // Replace with your image URL
            alt="Experience"
            className="rounded-lg shadow-md ml-5 experience"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:pl-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-600 dark:text-orange-600 mb-6">
            25+ Years of Experience
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-6 text-justify">
            With over 25 years of expertise in the construction industry, we have been delivering top-notch services and building lasting relationships. Our experience enables us to handle projects of any scale with precision and excellence.
            Our team of dedicated professionals ensures that every project is completed to the highest standards, making us a trusted name in the field. Let us help bring your vision to life with our unparalleled expertise.
            Our experience in the construction industry is built on a strong foundation of expertise, innovation, and commitment to excellence. With years of hands-on involvement in diverse projects.
          </p>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-6 text-justify">
            From residential buildings to large-scale commercial projects, we have consistently delivered innovative solutions that meet our clients' needs and exceed expectations. Trust us to build the future together.
          </p>
          <Link 
            to='project' 
            smooth={true}
            duration={600}
            className="px-6 py-3 text-white flex justify-center cursor-pointer w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 font-semibold rounded-lg hover:scale-100 transition shadow-lg duration-300">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
