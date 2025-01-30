// src/components/AboutUs.jsx
import React from 'react';
import { Link } from "react-scroll";
import checking from './checking.jpg';
import './About.css';

const AboutUs = () => {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900 sm:px-6 lg:px-8 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 md:pl-8">
          <h2 className="text-3xl sm:text-4xl text-center font-extrabold text-orange-600 dark:text-orange-600">
            About Jhontraktor
          </h2>
          <p className="text-md text-gray-600 text-justify dark:text-gray-300">
            We are a leading construction company with a legacy of excellence. With decades of experience, we deliver innovative and high-quality solutions tailored to your needs. Our team of experts ensures every project is completed on time, within budget, and to the highest standards.
            Our focus on sustainable and eco-friendly practices ensures that we contribute positively to the environment while delivering exceptional results. We are passionate about creating structures that stand the test of time and provide value to our clients.
            At JhonTraktor, we are passionate about building innovative solutions that transform ideas into reality.
          </p>
          <p className="text-md text-gray-600 text-justify dark:text-gray-300">
            From residential buildings to commercial projects, our commitment to integrity and customer satisfaction sets us apart in the industry.
            Whether it’s cutting-edge construction projects, creative designs, or reliable support, our goal is to exceed expectations and build lasting relationships.
          </p>
          
          <div className="flex justify-center">
            <Link
              to="services"
              smooth={true}
              duration={600}
              className="inline-block px-6 cursor-pointer py-3 w-full text-center bg-orange-500 text-white font-medium rounded hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 hover:scale-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative group md:pr-8">
          <img
            src={checking}
            alt="About Us"
            className="rounded-lg about shadow-md mt-10 transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-lg transition duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
